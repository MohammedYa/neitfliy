//when you click the open icon

var outofwidth=$(".contan").outerWidth()
   $(".open").click(function(){
        $(".contan").animate({"width":outofwidth},2000);
        $(".list").fadeIn(1500);
        $(".open").animate({"left":"289px"},2000);
    })
//when you click the close icon
    $(".close").click(function(){
        $(".contan").animate({"width":-outofwidth},2050);
        $(".list").fadeOut(1500);
        $(".open").animate({"left":10},1300)
    })
// when you click in the title show text 
$(".title1").click(function(){
    $(".text1").slideToggle(500);
    $(".text2").slideUp(500);
    $(".text3").slideUp(500);
    $(".text4").slideUp(500);

})

$(".title2").click(function(){
    $(".text2").slideToggle(500);
    $(".text1").slideUp(500);
    $(".text3").slideUp(500);
    $(".text4").slideUp(500);

})
    
$(".title3").click(function(){
    $(".text3").slideToggle(500);
    $(".text1").slideUp(500);
    $(".text2").slideUp(500);
    $(".text4").slideUp(500);

})
    
$(".title4").click(function(){
    $(".text4").slideToggle(500);
    $(".text1").slideUp(500);
    $(".text2").slideUp(500);
    $(".text3").slideUp(500);

})
//time discount section three
let countTime= new Date("Dec 31,2025 23:59:59").getTime();
let counter=setInterval(()=>{
let getdate= new Date().getTime();
let divdedDate = countTime-getdate;
//get dayes
let days=Math.floor( divdedDate/(1000*60*60*24));
document.querySelector(".day").innerHTML=days;
//get hour
let hours=Math.floor( divdedDate%(1000*60*60*24)/(1000*60*60));
document.querySelector(".hour").innerHTML=hours;

//get muinte
let minutes=Math.floor(divdedDate%(1000*60*60)/(1000*60));
document.querySelector(".minute").innerHTML=minutes;

//get secend
let secondes=Math.floor(divdedDate%(1000*60)/(1000));
document.querySelector(".second").innerHTML=secondes;

},500)
// contact opration 
var inputs= document.querySelectorAll(".form-control") ;
var btn=document.querySelector(".btn");
var numOfMsg=document.querySelector(".nummsg");
var msg="";
var count=0;
btn.onclick=function(){
    clear();
}
function clear(){
for(var x=0;x<inputs.length;x++){
inputs[x].value="";
}

}
function numDisc(text){
msg=text;
count=msg.length;
if(count==0){
numOfMsg.innerHTML="100 Characyer Reamining";
}
else{
    numOfMsg.innerHTML=`${100-count} Characyer Reamining`;
}
}
