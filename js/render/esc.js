
(function(){
  const switchDelay = 5000;
  const imgbox = document.getElementById('fig-brd');
  const img_src = ['./img/brd1.png', './img/brd2.png', './img/brd3.png'];
  let idx = 0;
  imgbox.classList.add('-fade');
  setInterval(function(){
    idx = (idx == img_src.length - 1)?  0 : idx + 1;
    imgbox.classList.remove('-fade');
    setTimeout(function(){
      imgbox.src = img_src[idx];
      imgbox.classList.add('-fade');
    }, 500);
  }, switchDelay);
})();
