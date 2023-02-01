var listItems=document.getElementsByTagName("li")

function gemachteAufgaben(){
    for(var x=0;x<listItems.length;x++){
        listItems[x].addEventListener("click",function(){
            this.classList.toggle("gemacht");
        });
    }
}

gemachteAufgaben();

var errorButtons=document.getElementsByTagName("span");


function gelöschteAufgaben(){
    for(var i=0; i<errorButtons.length;i++)
{
    errorButtons[i].addEventListener("click",function(){ 
        var gelöscht=this.parentElement;
        gelöscht.remove();
    });
}
}

gelöschteAufgaben();

var aufgabe=document.getElementsByTagName("input")[0];
aufgabe.addEventListener("keypress",function(e){
   if(e.keyCode===13)  {
    // alert ("enter gedruckt"); 
    var neuNot=document.createElement("li");
    neuNot.innerHTML=aufgabe.value;
    var neuSpan=document.createElement("span");
    var neuIcon=document.createElement("i");
    var absatz=document.getElementsByTagName("ul")[0];
    neuIcon.setAttribute("class","fa fa-window-close"); 
    neuSpan.insertBefore(neuIcon, neuSpan.firstChild);
    neuNot.insertBefore(neuSpan,neuNot.firstChild);
    absatz.insertBefore(neuNot,absatz.lastChild);
    gemachteAufgaben();
    gelöschteAufgaben();
    aufgabe.value="";
} 
});