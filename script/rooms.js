var x=document.getElementsByTagName("a");
x[8].className += " active";

var first,second,third,forth,fifth,sixth;
first=document.getElementsByClassName("first");
second=document.getElementsByClassName("second");
third=document.getElementsByClassName("third");
forth=document.getElementsByClassName("forth");
fifth=document.getElementsByClassName("fifth");
sixth=document.getElementsByClassName("sixth");





var first_a=document.getElementById("first_a");
var first_span=document.getElementById("first_span");
var dimensions=document.getElementsByClassName("dimensions");
var facilities=document.getElementsByClassName("facilities");
var others=document.getElementsByClassName("others");


var second_h3,third_h3,forth_h3,fifth_h3,sixth_h3;
second_h3=document.getElementById("second_h3");
third_h3=document.getElementById("third_h3");
forth_h3=document.getElementById("forth_h3");
fifth_h3=document.getElementById("fifth_h3");
sixth_h3=document.getElementById("sixth_h3");

function change(num){
  
    if(num==1){
        if(first[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=second[0].style.backgroundImage;
            second[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=second[0].style.backgroundImage;
            second[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=second[0].style.backgroundImage;
            second[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=second[0].style.backgroundImage;
            second[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=second[0].style.backgroundImage;
            second[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=second[0].style.backgroundImage;
            second[0].style.backgroundImage=temp;
            overview();

        }
    }
    if(num==2){
        if(first[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=third[0].style.backgroundImage;
            third[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=third[0].style.backgroundImage;
            third[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=third[0].style.backgroundImage;
            third[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=third[0].style.backgroundImage;
            third[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=third[0].style.backgroundImage;
            third[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=third[0].style.backgroundImage;
            third[0].style.backgroundImage=temp;
            overview();

        }
    }
    if(num==3){
        if(first[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=forth[0].style.backgroundImage;
            forth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=forth[0].style.backgroundImage;
            forth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=forth[0].style.backgroundImage;
            forth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=forth[0].style.backgroundImage;
            forth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=forth[0].style.backgroundImage;
            forth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=forth[0].style.backgroundImage;
            forth[0].style.backgroundImage=temp;
            overview();

        }
    }
    if(num==4){
        if(first[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=fifth[0].style.backgroundImage;
            fifth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=fifth[0].style.backgroundImage;
            fifth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=fifth[0].style.backgroundImage;
            fifth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=fifth[0].style.backgroundImage;
            fifth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=fifth[0].style.backgroundImage;
            fifth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=fifth[0].style.backgroundImage;
            fifth[0].style.backgroundImage=temp;
            overview();

        }
    }
    if(num==5){
        if(first[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=sixth[0].style.backgroundImage;
            sixth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=sixth[0].style.backgroundImage;
            sixth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=sixth[0].style.backgroundImage;
            sixth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=sixth[0].style.backgroundImage;
            sixth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=sixth[0].style.backgroundImage;
            sixth[0].style.backgroundImage=temp;
            overview();

        }else if(first[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
            var temp=first[0].style.backgroundImage;
            first[0].style.backgroundImage=sixth[0].style.backgroundImage;
            sixth[0].style.backgroundImage=temp;
            overview();

        }
    }

}

function overview(){
    if(first[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
        first_a.innerHTML="Delux Single";
        first_span.innerHTML='2 Adult 1 Children<br>Started from$5500';
        dimensions[1].innerHTML='Dimension For Delux Single';
        facilities[1].innerHTML='   <div class="exps"><div class="exp"> <i class="fa-solid fa-laptop"></i> <p>feature</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div></div>';
        others[1].innerHTML='Other For Delux Single';
    }else if(first[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
        first_a.innerHTML="Delux Double";
        first_span.innerHTML='2 Adult 1 Children<br>Started from$5500';
        dimensions[1].innerHTML="Dimensions for Delux Double";
        facilities[1].innerHTML='  <div class="exps"><div class="exp"> <i class="fa-solid fa-laptop"></i> <p>feature</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div></div>';  
        others[1].innerHTML="Others for Delux Double";
    
    }else if(first[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
        first_a.innerHTML="Delux Triple";
        first_span.innerHTML='2 Adult 1 Children<br>Started from$5500';
        dimensions[1].innerHTML="Dimensions for Delux Triple";
        facilities[1].innerHTML='  <div class="exps"><div class="exp"> <i class="fa-solid fa-laptop"></i> <p>feature</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div></div>';  
        others[1].innerHTML="Others for Delux Triple";

    }else if(first[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
        first_a.innerHTML="Superior Queen Suite";
        first_span.innerHTML='2 Adult 1 Children<br>Started from$5500';
        dimensions[1].innerHTML="Dimensions for Superior Queen Suite";
        facilities[1].innerHTML='   <div class="exps"><div class="exp"> <i class="fa-solid fa-laptop"></i> <p>feature</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div></div>';  
        others[1].innerHTML="Others for Superior Queen Suite";
    
    }else if(first[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
        first_a.innerHTML="Superior King Suite";
        first_span.innerHTML='2 Adult 1 Children<br>Started from$5500';
        dimensions[1].innerHTML="Dimensions for Super King Suite";
        facilities[1].innerHTML='  <div class="exps"><div class="exp"> <i class="fa-solid fa-laptop"></i> <p>feature</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div></div>';  
        others[1].innerHTML="Others for Superior King Suite";

    }else if(first[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
        first_a.innerHTML="Superior Family Suite";
        first_span.innerHTML='2 Adult 1 Children<br>Started from$5500';
        dimensions[1].innerHTML="Superior Family Suite";
        facilities[1].innerHTML='  <div class="exps"><div class="exp"> <i class="fa-solid fa-laptop"></i> <p>feature</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div> <div class="exp"> <i class="fa-solid fa-laptop"></i> <p>LapTOp</p> </div></div>';  
        others[1].innerHTML="Others for Superior Family Suite";
    
    }
    
    
    
    if(second[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
        second_h3.innerHTML="Delux Single" 
    }else if(second[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
        second_h3.innerHTML="Delux Double"
    }else if(second[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
        second_h3.innerHTML="Delux Triple"
    }else if(second[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
        second_h3.innerHTML="Superior Queen Suite"
    }else if(second[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
        second_h3.innerHTML="Superior King Suite"

    }else if(second[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
        second_h3.innerHTML="Superior Family Suite"
    }
    
    
    if(third[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
        third_h3.innerHTML="Delux Single"
    }else if(third[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
        third_h3.innerHTML="Delux Double"
    }else if(third[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
        third_h3.innerHTML="Delux Triple"
    }else if(third[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
        third_h3.innerHTML="Superior Queen Suite"
    }else if(third[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
        third_h3.innerHTML="Superior King Suite"
     
    }else if(third[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
        third_h3.innerHTML="Superior Family Suite"
    }
    
    if(forth[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
        forth_h3.innerHTML="Delux Single"
    }else if(forth[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
        forth_h3.innerHTML="Delux Double"
    }else if(forth[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
        forth_h3.innerHTML="Delux Triple"
    }else if(forth[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
        forth_h3.innerHTML="Superior Queen Suite"
    }else if(forth[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
        forth_h3.innerHTML="Superior King Suite"
    }else if(forth[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
        forth_h3.innerHTML="Superior Family Suite"
    }
    
    if(fifth[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
        fifth_h3.innerHTML="Delux Single"
    }else if(fifth[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
        fifth_h3.innerHTML="Delux Double"
    }else if(fifth[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
        fifth_h3.innerHTML="Delux Triple"
    }else if(fifth[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
        fifth_h3.innerHTML="Superior Queen Suite"
    }else if(fifth[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
        fifth_h3.innerHTML="Superior King Suite"
    }else if(fifth[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
        fifth_h3.innerHTML="Superior Family Suite"
    }
    
    if(sixth[0].style.backgroundImage=='url("images/rooms/delux_single.jpg")'){
        sixth_h3.innerHTML="Delux Single"
    }else if(sixth[0].style.backgroundImage=='url("images/rooms/delux_double.jpg")'){
        sixth_h3.innerHTML="Delux Double"
    }else if(sixth[0].style.backgroundImage=='url("images/rooms/delux_triple.jpg")'){
        sixth_h3.innerHTML="Delux Triple"
    }else if(sixth[0].style.backgroundImage=='url("images/rooms/superior_queen_suite.jpg")'){
        sixth_h3.innerHTML="Superior Queen Suite"
    }else if(sixth[0].style.backgroundImage=='url("images/rooms/superior_king_suite.jpg")'){
        sixth_h3.innerHTML="Superior King Suite"
    }else if(sixth[0].style.backgroundImage=='url("images/rooms/superior_family_suite.jpg")'){
        sixth_h3.innerHTML="Superior Family Suite"
    }


}


function hide_all(){
    facilities[0].classList.remove("active");
    others[0].classList.remove("active");
    dimensions[0].classList.remove("active");
    facilities[1].classList.remove("active");
    others[1].classList.remove("active");
    dimensions[1].classList.remove("active");
}
function dimensionsxx(){
    hide_all();
    dimensions[0].className +=" active";
    dimensions[1].className +=" active";
}
function facilitiesxx(){
    hide_all();
    facilities[0].className += " active";
    facilities[1].className += " active";
}
function othersxx(){
    hide_all();
    others[0].className += " active"
    others[1].className += " active"
}



$.ajax({
  type: 'GET',
  url: 'updates/fetch_room_category.php',
  dataType: 'text',
  success:function(response){
    $('#room_category_id').append(response);
  }
});

function check(){
    var phone_no=document.booking_form.phone_no.value;
    var check_in=document.booking_form.check_in.value;
    var check_out=document.booking_form.check_out.value;
    var adults=document.booking_form.adults.value;
    var childs=document.booking_form.childs.value;
    var room_category=document.booking_form.room_category_id.value;
  
  
    var today = new Date();
    if(today.getMonth()<10 && today.getDate()<10){
      var current_date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-0'+today.getDate();
    }else if(today.getMonth()<10 && today.getDate()>9){
      var current_date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();
    }else if(today.getMonth()>9 && today.getDate()<10){
      var current_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-0'+today.getDate();
    }else{
      var current_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    }
  
    if(check_in<current_date){
      alert("Invalid Check In");
      return false;
    }else if(check_out<check_in){
      alert("Invalid Check Out");
      return false;
    }else if(phone_no.length<10){
      alert("Invalid Phone No.");
      return false;
    } else if(adults==0 && childs==0){
      alert("Invalid No. of Adults Or Childs");
      return false;
    }else if(room_category==0){
      alert("Select Room Before Booking");
      return false;
    }else{
      return true;
    }
       
  }
  
