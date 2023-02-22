var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var Anti_Hero=new Audio("music/Anti-Hero - Taylor Swift.mp3");        
var As_It_Was=new Audio("music/As It Was - Harry Styles.mp3");
var Dandelions=new Audio("music/Dandelions - Ruth B..mp3");    
var letMeDown = new Audio("music/Let-Me-Down-Slowly(PaglaSongs).mp3");
var Animal= new Audio("music/Maroon 5 Animals.mp3 Song Download.mp3");
var fedUp=new Audio("music/Bazanji Fed Up .mp3");
var left_right=new Audio("music/Left And Right - Charlie Puth & BTS Jungkook.mp3");
btn1.onclick = function(){
    var change = document.getElementById("btn1");
    if(Anti_Hero.paused == true){
    Anti_Hero.play();
    change.innerHTML ="&#9724;";
      }else{
        Anti_Hero.pause();
     change.innerHTML ="&#9658;";
}}
btn2.onclick = function(){
    var change = document.getElementById("btn2");
    if(As_It_Was.paused == true){
    As_It_Was.play();
    change.innerHTML ="&#9724;";
      }
      else{
     As_It_Was.pause();
     change.innerHTML ="&#9658;";
}}
btn3.onclick = function(){
    var change = document.getElementById("btn3");
    if(letMeDown.paused){
        letMeDown.play();
        change.innerHTML = "&#9724;";
      }else{
        letMeDown.pause();
        change.innerHTML = "&#9658;";
}}
btn4.onclick = function(){
    var change = document.getElementById("btn4");
    if(fedUp.paused){
        fedUp.play();
        change.innerHTML = "&#9724;";
      }else{
        fedUp.pause();
        change.innerHTML = "&#9658;";
}}
btn5.onclick = function(){
    var change = document.getElementById("btn5");
    if(Dandelions.paused){
        Dandelions.play();
        change.innerHTML = "&#9724;";
      }else{
        Dandelions.pause();
        change.innerHTML = "&#9658;";
}}
btn6.onclick = function(){
    var change = document.getElementById("btn6");
    if(Animal.paused){
        Animal.play();
        change.innerHTML = "&#9724;";
      }else{
        Animal.pause();
        change.innerHTML = "&#9658;";
}}
btn7.onclick = function(){
    var change = document.getElementById("btn7");
    if(left_right.paused){
      left_right.play();
        change.innerHTML = "&#9724;";
      }else{
        left_right.pause();
        change.innerHTML = "&#9658;";
}} 