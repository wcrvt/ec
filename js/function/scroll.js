
function scrollPage(box_id) {
  const position_offset = document.getElementById('sec-viewpoint').getBoundingClientRect().top+window.pageYOffset;
  const element_top = document.getElementById(box_id).getBoundingClientRect().top;
  const scroll_offset=10;
  const position = element_top + window.pageYOffset - position_offset + scroll_offset;
  scrollTo({top: position, behavior: 'smooth'});
}


const setOpacity = (elem, range, pos) => {
  if(pos < range.bottom && pos > range.top) elem.style.opacity = 1.0;
  else{
    const rate = 0.08;
    const distance = Math.min(Math.abs(pos - range.top), Math.abs(pos - range.bottom));
    elem.style.opacity = Math.exp(- rate * distance);
  }
}

const wpos = {x: 0.0, y: 0.0};
window.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('scroll', function(){
    [wpos.x, wpos.y] = [window.scrollX, window.scrollY];
    setOpacity(obj_esc.img.children[0], {top: obj_esc.desc.pos.switch[0], bottom: obj_esc.desc.pos.switch[1]}, wpos.y);
    setOpacity(obj_esc.img.children[1], {top: obj_esc.desc.pos.switch[1], bottom: obj_esc.desc.pos.switch[2]}, wpos.y);
    setOpacity(obj_esc.img.children[2], {top: obj_esc.desc.pos.switch[2], bottom: obj_esc.desc.pos.switch[3]}, wpos.y);
  });
});
