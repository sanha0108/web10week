// const
const siheungLogo = document.querySelector(".siheung_logo img")
const cloud1 = document.querySelector(".cloud1 img")
const cloud2 = document.querySelector(".cloud2 img")
const cloud3 = document.querySelector(".cloud3 img")

const BG = document.querySelector(".BG")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const logo = document.querySelector(".logo img")

const title = document.querySelector(".title")
const sub1 = document.querySelector(".sub1")
const sub2 = document.querySelector(".sub2")
const sub3 = document.querySelector(".sub3")

const subtexts = document.querySelectorAll('.subtext li');
const infos = document.querySelectorAll('.info li');

// transformOrigin
siheungLogo.style.transformOrigin = "0 0";
cloud1.style.transformOrigin = "0 50%"; 
cloud2.style.transformOrigin = "100% 50%"; 
cloud3.style.transformOrigin = "0 50%"; 
title.style.transformOrigin = "50% 0";
logo.style.transformOrigin = "center top";

//-

document.addEventListener("scroll", function(){
    if(window.scrollY > 200){
        siheungLogo.style.transform = "scale(0.6)";
        siheungLogo.style.transition = "transform 1.5s ease";

        cloud1.style.transform = "scale(0.8)";
        cloud1.style.transition = "transform 1.5s ease";
        cloud2.style.transform = "scale(0.8)";
        cloud2.style.transition = "transform 1.5s ease";
        cloud3.style.transform = "scale(0.8)";
        cloud3.style.transition = "transform 1.5s ease";
    } else {
        siheungLogo.style.transform = "scale(1)";
        siheungLogo.style.transition = "transform 1.5s ease";

        cloud1.style.transform = "scale(1)";
        cloud1.style.transition = "transform 1.5s ease";
        cloud2.style.transform = "scale(1)";
        cloud2.style.transition = "transform 1.5s ease";
        cloud3.style.transform = "scale(1)";
        cloud3.style.transition = "transform 1.5s ease";
    }

    if(window.scrollY > 300){
        BG.style.transform = "translateY(" + (window.scrollY - 300) + "px)";
        BG.style.opacity = 1 - (window.scrollY - 300) / 300;
        BG.style.transition = "transform 1.5s ease, opacity 1.5s ease";

        left.style.transform = "translateY(" + (window.scrollY - 300) + "px)";
        left.style.opacity = 1 - (window.scrollY - 300) / 300;
        left.style.transition = "transform 1.5s ease, opacity 1.5s ease";

        right.style.transform = "translateY(" + (window.scrollY - 300) + "px)";
        right.style.opacity = 1 - (window.scrollY - 300) / 300;
        right.style.transition = "transform 1.5s ease, opacity 1.5s ease";

        
        title.style.bottom = "44vw";
        title.style.left = "41.5vw";
        title.style.letterSpacing = 0.1;
        title.style.fontSize = "0.94vw";
        title.style.transition = "all 1s ease";

        logo.style.transform = "scale(0.5)";
        logo.style.bottom = "22.5vw";
        logo.style.transition = "all 1s ease";

        
    } else {
        BG.style.transform = "translateY(0px)";
        BG.style.opacity = 1;
        BG.style.transition = "transform 1.5s ease, opacity 1.5s ease";

        left.style.transform = "translateY(0px)";
        left.style.opacity = 1;
        left.style.transition = "transform 1.1s ease, opacity 1.1s ease";
        left.style.animation = "bounce 0.5s ease";

        right.style.transform = "translateY(0px)";
        right.style.opacity = 1;
        right.style.transition = "transform 1.2s ease, opacity 1.2s ease";
        right.style.animation = "bounce 0.5s ease";

        title.style.bottom = "35vw";
        title.style.left = "37.5vw";
        title.style.fontSize = "1.67vw";
        title.style.transition = "all 1s ease";

        logo.style.transform = "scale(1)";
        logo.style.bottom = "12vw";
        logo.style.transition = "all 1s ease";
    }

    subtexts.forEach((el, index) => {
        if(window.scrollY > 200 * (index + 1)) {
            el.style.transform = "translateY(0px)";
            el.style.opacity = 1;
            el.style.visibility = "visible";
            el.style.transition = "transform 1s ease, opacity 1s ease, visibility 1s";
            el.style.fontSize = "0.94vw";
        } else {
            el.style.opacity = 0;
            el.style.visibility = "hidden";
            el.style.transition = "transform 1s ease, opacity 1s ease, visibility 1s";
            el.style.transform = "translateY(50px)";
            el.style.fontSize = "1.25vw";
    }});

    infos.forEach((el, index) => {
        if(window.scrollY > 300 * (index + 1)) {
            el.style.transform = "translateY(0px)";
            el.style.opacity = 1;
            el.style.visibility = "visible";
            el.style.transition = "transform 1s ease, opacity 1s ease, visibility 1s";
        } else {
            el.style.opacity = 0;
            el.style.visibility = "hidden";
            el.style.transition = "transform 1s ease, opacity 1s ease, visibility 1s";
            el.style.transform = "translateY(50px)";
    }});


});