var dispDiv = document.getElementById("display"),
    st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    imgSrc = null,
    stInp = document.getElementById("stickerUrl"),
    stHeight = document.getElementById("stickerHeight"),
    stC = document.getElementById("cursor");

document.getElementById("bgcolor").addEventListener("change", function(){
    dispDiv.style.backgroundColor = this.value;
});

st1.addEventListener("click", function(){
    changeImage(this);
});

st2.addEventListener("click", function(){
    changeImage(this);
});

dispDiv.addEventListener("click",function(ev){
    if (imgSrc != null){
        var newImg = document.createElement("img");
        newImg.src = imgSrc;
        newImg.className = "displayStickers";
        dispDiv.appendChild(newImg);

    //console.log(ev.pageX, ev.pageY);
        if (stHeight.value == ""){
            newImg.style.height="100px";
        }else {
            newImg.style.height = stHeight.value +"px";
        }
        newImg.style.left = ev.pageX - (newImg.clientWidth/2) + "px";
        newImg.style.top = ev.pageY - (parseInt(newImg.style.height, 10)/2) + "px";
    }
});

stInp.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        var newSticker = document.createElement("img");
        newSticker.src = stInp.value;
        newSticker.className = "stickers";
        document.getElementById("stickers").appendChild(newSticker)
        stInp.value = "";
        newSticker.addEventListener("click",function(){
            changeImage(this);
        });
    }
});

dispDiv.addEventListener("mousemove", function(ev){
    stC.style.top = ev.pageY - 25 + "px"
    stC.style.left = ev.pageX - (stC.clientWidth/2)+ "px"
});

function changeImage(el){
    dispDiv.style.cursor = "none";
    imgSrc = el.src;
    stC.src = imgSrc;
};