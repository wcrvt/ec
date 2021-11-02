
function scrollPage(box_id) {
  const position_offset = document.getElementById('sec-viewpoint').getBoundingClientRect().top+window.pageYOffset;
  const element_top = document.getElementById(box_id).getBoundingClientRect().top;
  const scroll_offset=10;
  const position = element_top + window.pageYOffset - position_offset + scroll_offset;
  scrollTo({top: position, behavior: 'smooth'});
}
