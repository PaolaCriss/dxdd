function allowDrop(ev) {
    ev.preventDefault();
}

function drag1 (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag2 (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag3 (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag4 (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag5 (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drag6 (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop1 (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aleatorio() {
  
    var num = rand(1, 8);
    


    const imagem = document.querySelector("img");
    
    if(num == 1){
        imagem.setAttribute("src", "imgs/dengoso.png");
    }
    else if(num == 2){
        imagem.setAttribute("src", "imgs/atchim2.png");
    }
    else if(num == 3){
        imagem.setAttribute("src", "imgs/dundades.png");
    }
    if(num == 4 ){
        imagem.setAttribute("src", "imgs/feliz.png");
    }
    else if(num == 5 ){
        imagem.setAttribute("src", "imgs/Mestre.png");
    }
    else if(num == 6 ){
        imagem.setAttribute("src", "imgs/soneca.png");
    }
    else{
        imagem.setAttribute("src","imgs/zangado.png");
    }

    /* imagem.innerHTML = num; */
}
