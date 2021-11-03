const obj_esc = {
  desc: {},
  img: {},
  init: function(){
    this.desc.elem= document.getElementById('esc-desc');
    this.desc.children = this.desc.elem.childNodes;
    this.desc.children = [].map.call(this.desc.children, e => e).filter(e => e.tagName != undefined);

    this.img.elem= document.getElementById('esc-img');
    this.img.children = this.img.elem.childNodes;
    this.img.children = [].map.call(this.img.children, e => e).filter(e => e.tagName != undefined);
　
    this.getPosition();
  },
  getPosition: function(){
    const offset_y = -43;
    this.desc.pos={top: [], bottom: [], switch: [0.0]};
    for(let i = 0; i < obj_esc.desc.children.length; i++){
      this.desc.pos.top.push(obj_esc.desc.children[i].getBoundingClientRect().top + window.pageYOffset + offset_y);
      this.desc.pos.bottom.push(obj_esc.desc.children[i].getBoundingClientRect().bottom + window.pageYOffset + offset_y);
    }
    for(let i = 1; i < obj_esc.desc.children.length; i++){
      this.desc.pos.switch[i] = (this.desc.pos.top[i] + this.desc.pos.bottom[i-1])/2.0;
    }
    this.desc.pos.switch.push(document.body.getBoundingClientRect().bottom + window.pageYOffset);
  }
}

window.addEventListener('DOMContentLoaded', function(){
  obj_esc.init();
});
