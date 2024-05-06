

let slides=document.getElementsByClassName('slide');
let flag=0;
auto_slide();
/*
function manual_slide(num){  
    if(num==slides.length){
        flag=0;
        num=0;
    } else if(num==-1){
        flag=slides.length-1;
        num=slides.length-1;
    }

    for(let i=0;i<slides.length;i++){
      slides[i].style.display="none";
    }
    slides[num].style.display="block";
}

function slide(x){
    flag=flag+x;
    manual_slide(flag);
}
*/
//auto slide show
function auto_slide() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  flag++;
  if (flag > slides.length) {flag = 1}
  
  slides[flag-1].style.display = "flex";
  slides[flag-1].style.transition = " all ease 0.5s";
  setTimeout(auto_slide, 3000); // Change image every 2 seconds
}
