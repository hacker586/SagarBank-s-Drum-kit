// document.querySelector("button").addEventListener("click",function (){alert("button is clicked...!");})
// document.querySelector("button.a").addEventListener("click",function (){alert("button is clicked...!");})
// document.querySelector("button.s").addEventListener("click",function (){alert("button is clicked...!");})
// document.querySelector("button.d").addEventListener("click",function (){alert("button is clicked...!");})
// document.querySelector("button.j").addEventListener("click",function (){alert("button is clicked...!");})
// document.querySelector("button.k").addEventListener("click",function (){alert("button is clicked...!");})
// document.querySelector("button.l").addEventListener("click",function (){alert("button is clicked...!");})

//another method
// var numberOfButtons = document.querySelectorAll(".drum").length;
// for(var i = 0; i<=numberOfButtons; i++)
// {
//   //document.querySelectorAll("button")[i].addEventListener("click",function (){alert("button is clicked...!");})
//   var audio = new Audio("sounds/tom-4.mp3");
//   document.querySelectorAll("button")[i].addEventListener("click",function (){audio.play()});
//   //document.querySelectorAll("button")[i].addEventListener("click",function (){this.style.color = "white"});
//
// }
document.addEventListener("keypress", function  (event) {makeSound(event.key);})
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<= numberOfButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  {
  var button = this.innerHTML;
  makeSound(button);
}
)
}
function makeSound(key){
  switch (key) {
    case "w":
     var tom1 = new Audio("sounds/tom-1.mp3");
     tom1.play();
    break;
    case "a":
     var tom2 = new Audio("sounds/tom-2.mp3");
     tom2.play();
    break;
    case "s":
     var tom3 = new Audio("sounds/tom-3.mp3");
     tom3.play();
    break;
    case "d":
     var tom4 = new Audio("sounds/tom-4.mp3");
     tom4.play();
    break;
    case "j":
     var snare = new Audio("sounds/snare.mp3");
     snare.play();
    break;
    case "k":
     var crash = new Audio("sounds/crash.mp3");
     crash.play();
    break;
    case "l":
     var kick = new Audio("sounds/kick-bass.mp3");
     kick.play();
    break;
    default:
    console.log("dead");
}

}
