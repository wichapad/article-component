function share(){
    const social=document.getElementById("triangle-down");
    
    if(social.style.visibility === "visible"){
        social.style.visibility = "hidden";
    }
    else{
        social.style.visibility = "visible";
    }
}