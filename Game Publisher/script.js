
var set;//variabel för en setinterval function som byter mellan bilderna i mina image loopers

//detta hämtar image looper diven och label/länk om det finns
let car =document.getElementsByClassName("imgcarousel");
let ps =document.getElementsByClassName("namecarousel");
let lnk= document.getElementById("gamescarousellink");
if (car.length>0) {//om det finns en image looper, starta setinterval
    car[0].firstElementChild.classList.add("displayimg");//displayimg används för att markera vilken bild som visas
    car[0].firstElementChild.style.display = "block";//börja displaya första bilden och starta intervallen
    var set = setInterval(() => changeImg(true), 3000);
    if (ps.length >0) {//om det finns en label, ändra den till spelet som visas genom att ta namnet på filen där bilden sparas
        ps[0].innerHTML = car[0].firstElementChild.getAttribute("src").split("/").reverse()[1];
    }
    if (lnk !== null) {// om det finns en länk, ändra den till spelet baserat på labelen
        lnk.setAttribute("href", ps[0].innerHTML + "html.html");
    }
}




function changeImg(next){//ändrar bilden i en image looper, "next" är en bool som är true om man ska byta till nästa image och false om man ska byta till den förra
    window.clearInterval(set);
    set = setInterval(() => changeImg(true), 3000); //starta om intervallen

    let imgs = document.getElementsByClassName("imgcarousel")[0];//göm bilden som visas just nu
    let curimg = imgs.getElementsByClassName("displayimg")[0];
    curimg.classList.remove("displayimg");
    curimg.style.display = "none";
    if (next) {//kollar om den ska byta till nästa eller förra bilden, och om den inte kan byta åt det hållet längre, byt den till bilden på andra sidan av listn
        if (curimg == imgs.lastElementChild)
         {imgs.firstElementChild.classList.add("displayimg");}
         else
         {curimg.nextElementSibling.classList.add("displayimg");}
    } else {
        if (curimg == imgs.firstElementChild) 
        {imgs.lastElementChild.classList.add("displayimg");}
        else
        {curimg.previousElementSibling.classList.add("displayimg");}
    }
    let newimg =imgs.getElementsByClassName("displayimg")[0];//börja displaya nya bilden
    newimg.style.display = "block";
    let ps =document.getElementsByClassName("namecarousel");
    if (ps.length >0) {//byt label på samma sätt som innan
        ps[0].innerHTML = newimg.getAttribute("src").split("/").reverse()[1];
    }
    if (lnk !== null) {//byt länk på samma sätt som innan
        lnk.setAttribute("href", ps[0].innerHTML + "html.html");
    }
}

