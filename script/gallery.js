var x=document.getElementsByTagName("a");
x[10].className += " active";

var modal=document.getElementById("modal");
var modal_image=document.getElementById("modal-image")
var image_name=document.getElementById("modal_image_name");


function show_modal(image_url,title){
    modal_image.src=image_url;
    image_name.innerHTML=title;
    modal.style.display="flex";
    

}
function hide(){
    modal.style.display="none";
}

