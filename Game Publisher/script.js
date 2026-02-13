
var set;//variable for a setinterval function that switches images in the image loopers

//this gets the image looper, and the label and linker if it can
let car =document.getElementsByClassName("imgcarousel");
let ps =document.getElementsByClassName("namecarousel");
let lnk= document.getElementById("gamescarousellink");
if (car.length>0) {//if there is an image looper on the page, start the setinterval
    car[0].firstElementChild.classList.add("displayimg");//the displayimg class is used as a marker to know what the current image is
    car[0].firstElementChild.style.display = "block";//start displaying the first image and start the interval
    var set = setInterval(() => changeImg(true), 3000);
    if (ps.length >0) {//if there is a label, change it by getting the name of the file that contains the current image
        ps[0].innerHTML = car[0].firstElementChild.getAttribute("src").split("/").reverse()[1];
    }
    if (lnk !== null) {// if there is a link, change it based on the label name
        lnk.setAttribute("href", ps[0].innerHTML + "html.html");
    }
}




function changeImg(next){//change image in an image looper, "next" is a bool for knowing whether to go to the next or the previous image
    window.clearInterval(set);
    set = setInterval(() => changeImg(true), 3000); //restart the interval

    let imgs = document.getElementsByClassName("imgcarousel")[0];//get the current image and hide it
    let curimg = imgs.getElementsByClassName("displayimg")[0];
    curimg.classList.remove("displayimg");
    curimg.style.display = "none";
    if (next) {//checks if it should change to the previous or next image, and if it cant switch to that direction anymore, loop to the other end of the list
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
    let newimg =imgs.getElementsByClassName("displayimg")[0];//get the new image and display it
    newimg.style.display = "block";
    let ps =document.getElementsByClassName("namecarousel");
    if (ps.length >0) {//get the label and replace it by the same method as before
        ps[0].innerHTML = newimg.getAttribute("src").split("/").reverse()[1];
    }
    if (lnk !== null) {//get the link and replace it by the same method as before
        lnk.setAttribute("href", ps[0].innerHTML + "html.html");
    }
}
