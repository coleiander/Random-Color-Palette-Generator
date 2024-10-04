const btn= document.querySelector('button');
const color= document.querySelectorAll('.color');
const hex=document.querySelectorAll('.hex');

btn.addEventListener('click',generateColor);

function generateColor(){
    for (let i = 0; i < color.length; i++) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        color[i].style.background="#" + randomColor;
        color[i].classList.add('fade-in');
        setTimeout(()=> color[i].classList.remove('fade-in'),400);
        hex[i].innerHTML = randomColor;
    }
    return color;
}

generateColor();

function changeColumns() {
    let value1 = document.getElementById("columns").value;
    let div1 = document.getElementById("one");
    let div2 = document.getElementById("two");
    let div3 = document.getElementById("three");
    let div4 = document.getElementById("four");
    let div5 = document.getElementById("five");
    let div6 = document.getElementById("six");
    if (value1 === "3") {
        div1.style.display = "inline";
        div2.style.display = "inline";
        div3.style.display = "inline";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
    }
    else if(value1==="4") {
        div1.style.display = "inline";
        div2.style.display = "inline";
        div3.style.display = "inline";
        div4.style.display = "inline";
        div5.style.display = "none";
        div6.style.display = "none";
    }
    else if(value1==="5") {
        div1.style.display = "inline";
        div2.style.display = "inline";
        div3.style.display = "inline";
        div4.style.display = "inline";
        div5.style.display = "inline";
        div6.style.display = "none";
    }
    else {
        div1.style.display = "inline";
        div2.style.display = "inline";
        div3.style.display = "inline";
        div4.style.display = "inline";
        div5.style.display = "inline";
        div6.style.display = "inline";
    }
 
}


