var sr = document.querySelectorAll('[lang = sr]');
var en = document.querySelectorAll('[lang = en]');
var srGrid = document.querySelectorAll('[lang = srGrid]');
var enGrid = document.querySelectorAll('[lang = enGrid]');
var srFlex = document.querySelectorAll('[lang = srFlex]');
var enFlex = document.querySelectorAll('[lang = enFlex]');
var srFlag = document.getElementById('srFlag');
var enFlag = document.getElementById('enFlag');
var count1 = document.getElementById('counter1');
var count2 = document.getElementById('counter2');
var count3 = document.getElementById('counter3');
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
var li4 = document.getElementById('li4');
var li5 = document.getElementById('li5');
var menuIcon = document.querySelector('.menu-icon');
var logo = document.querySelector('.logo');
var newsNews = document.querySelectorAll('.newsArticle');
var contactBtn = document.querySelectorAll('.contactMe');
var newsLink = document.querySelectorAll('.novostBtn');

var linkFb = document.querySelectorAll('.linkFb');
var linkInst = document.querySelectorAll('.linkInst');
var linkYt = document.querySelectorAll('.linkYt');
var linkImdb = document.querySelectorAll('.linkImdb');
var linkNews = document.querySelectorAll('.linkNews');
var linkDarko = document.querySelectorAll('.linkDarko');
var linkPhoto = document.querySelectorAll('.linkPhoto');
var linkVideo = document.querySelectorAll('.linkVideo');
var linkStoryes = document.querySelectorAll('.linkStoryes');


var slider = document.querySelector('.slider');
var arrowLeft = document.getElementById('arrowLeft');
var arrowRight = document.getElementById('arrowRight');
var currentSlide = 1;
var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');
var textSlider = document.getElementById("sliderMiddleText");
var gallery1 = document.querySelector(".gallery1");
var gallery2 = document.querySelector(".gallery2");
var gallery3 = document.querySelector(".gallery3");
var galleryImg = document.querySelectorAll(".galleryImg");
var showGallery = document.querySelector(".sliderMiddleText");

var showMoreLess1 = document.getElementById('showMoreLessId1');
var showMoreLess2 = document.getElementById('showMoreLessId2');
var showMoreLess3 = document.getElementById('showMoreLessId3');
var showMoreLess4 = document.getElementById('showMoreLessId4');
var pClanak = document.querySelectorAll('.pClanak');

var current = document.querySelector("#currentVid");
var imgs = document.querySelectorAll(".smallVideos");
var opacity = 0.6;
var videoName = document.querySelectorAll('.videoName');

var landingTopMenuLi = document.querySelectorAll('.landingTopMenuLi');


/*
======================================
            PRELOAD SWITCH
======================================
*/

if (sessionStorage.getItem("jezik") === "ENG") {
    clearSR();
    addFlagOpacityEN();
    clearGridSR();
    clearFlexSR();
    addMenuLiEN();
} else {
    clearEN();
    addFlagOpacitySR();
    clearGridEN();
    clearFlexEN();
    addMenuLiSR();
};


/*
======================================
        PAGE FUNCTION SELECTOR
======================================
*/

if(window.location.pathname === "/index.html") {
    setTimeout(function() { counter1(); }, 1200); 
    setTimeout(function() { counter2(); }, 1200); 
    setTimeout(function() { counter3(); }, 1200);


    for(e=0; e<2; e++) {
        newsLink[e].addEventListener('click', function() {
            window.open('news.html', target="_self");
        })
    };
    
    document.getElementById("imgLink").addEventListener('click', function() {
        window.open('photo.html', target="_self");
    });
    
    document.getElementById("vidLink").addEventListener('click', function() {
        window.open('video.html', target="_self");
    });

    srFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "SRB");
        addFlagOpacitySR();
        addLangSR();
        addFlexSR();
        addMenuLiSR();
    });
    
    enFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "ENG");
        addFlagOpacityEN();
        addLangEN();
        addFlexEN();
        addMenuLiEN();
    });
}

if(window.location.pathname === "/") {
    setTimeout(function() { counter1(); }, 1200); 
    setTimeout(function() { counter2(); }, 1200); 
    setTimeout(function() { counter3(); }, 1200);

    document.querySelector(".novostBtn").addEventListener('click', function() {
        window.open('news.html', target="_self");
    });
    
    document.getElementById("imgLink").addEventListener('click', function() {
        window.open('photo.html', target="_self");
    });
    
    document.getElementById("vidLink").addEventListener('click', function() {
        window.open('video.html', target="_self");
    });

    srFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "SRB");
        addFlagOpacitySR();
        addLangSR();
        addFlexSR();
        addMenuLiSR();
    });
    
    enFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "ENG");
        addFlagOpacityEN();
        addLangEN();
        addFlexEN();
        addMenuLiEN();
    });
}

if(window.location.pathname === "/photo.html") { 

    srFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "SRB");
        addFlagOpacitySR();
        addLangSR();
        addFlexSR();
        addMenuLiSR();
        dot1Active(); dot2Active(); /* dot3Active(); */
    });
    
    enFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "ENG");
        addFlagOpacityEN();
        addLangEN();
        addFlexEN();
        addMenuLiEN();
        dot1Active(); dot2Active(); /* dot3Active(); */
    });

    startSlider();

    showGallery.addEventListener('click', function() {
        if(currentSlide === 1) {
            gallery1.classList.toggle("showGallery");
            document.querySelector('.imgHelpText').classList.toggle('showHelp');
        }

        if(currentSlide === 2) {
            gallery2.classList.toggle("showGallery");
            document.querySelector('.imgHelpText').classList.toggle('showHelp');
        }

        /* if(currentSlide === 3) {
            gallery3.classList.toggle("showGallery");
            document.querySelector('.imgHelpText').classList.toggle('showHelp');
        } */
    });
    
    arrowLeft.addEventListener('click', function() {
        if(currentSlide === 1) {
            currentSlide = 3;
        }
        slideLeft();
        dot1Active(); dot2Active(); /* dot3Active(); */
        clearGallery();
        document.querySelector('.imgHelpText').classList.remove('showHelp');
    });
    
    arrowRight.addEventListener('click', function() {
        if(currentSlide === 2) {
            currentSlide = 0;
        }
        slideRight();
        dot1Active(); dot2Active(); /* dot3Active(); */
        clearGallery();
        document.querySelector('.imgHelpText').classList.remove('showHelp');
    });
}

if(window.location.pathname === "/darko.html") { 

    srFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "SRB");
        addFlagOpacitySR();
        addLangSR();
        addFlexSR();
        addMenuLiSR();
    });
    
    enFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "ENG");
        addFlagOpacityEN();
        addLangEN();
        addFlexEN();
        addMenuLiEN();
    });

    showMoreLess1.addEventListener('click', function() {    
        var showMoreLessText = showMoreLess1.textContent;    
        if(showMoreLessText === "⮟ ⮟ ⮟") {
            for(e=0; e<2; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess1.innerHTML = "⮝ ⮝ ⮝"; 
        } else {
            for(e=0; e<2; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess1.innerHTML = "⮟ ⮟ ⮟";
        }
    });
    
    showMoreLess2.addEventListener('click', function() {    
        var showMoreLessText = showMoreLess2.textContent;    
        if(showMoreLessText === "⮟ ⮟ ⮟") {
            for(e=2; e<4; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess2.innerHTML = "⮝ ⮝ ⮝"; 
        } else {
            for(e=2; e<4; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess2.innerHTML = "⮟ ⮟ ⮟";
        }
    });
    
    showMoreLess3.addEventListener('click', function() {    
        var showMoreLessText = showMoreLess3.textContent;    
        if(showMoreLessText === "⮟ ⮟ ⮟") {
            for(e=4; e<6; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess3.innerHTML = "⮝ ⮝ ⮝"; 
        } else {
            for(e=4; e<6; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess3.innerHTML = "⮟ ⮟ ⮟";
        }
    });
    
    showMoreLess4.addEventListener('click', function() {    
        var showMoreLessText = showMoreLess4.textContent;    
        if(showMoreLessText === "⮟ ⮟ ⮟") {
            for(e=6; e<8; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess4.innerHTML = "⮝ ⮝ ⮝"; 
        } else {
            for(e=6; e<8; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess4.innerHTML = "⮟ ⮟ ⮟";
        }
    });
}

if(window.location.pathname === "/video.html") { 

    srFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "SRB");
        addFlagOpacitySR();
        addLangSR();
        addFlexSR();
        addMenuLiSR();
    });
    
    enFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "ENG");
        addFlagOpacityEN();
        addLangEN();
        addFlexEN();
        addMenuLiEN();
    });

    imgs[0].style.opacity = opacity;

    for(e=0; e<imgs.length; e++) {
        imgs[e].addEventListener("click", imgClick);
    }

    function imgClick(e) {    
        imgs.forEach(img => (img.style.opacity = 1));
        /* current.src = e.target.src; */
        current.classList.add("fade-in");
        setTimeout(() => current.classList.remove("fade-in"), 500);

        e.target.style.opacity = opacity;

        if(e.target.id === "1") { 
            current.src = "../video/nesalomivi_priva_prva.mp4";
            videoName[0].innerHTML = "Nesalomivi - priča prva";
            videoName[1].innerHTML = "The Unbroken - Story one ";
            videoName[0].classList.add("fadeInVideoTitle");
            videoName[1].classList.add("fadeInVideoTitle");
            setTimeout(() => videoName[0].classList.remove("fadeInVideoTitle"), 500);
            setTimeout(() => videoName[1].classList.remove("fadeInVideoTitle"), 500);
        }
        /* if(e.target.id === "2") { 
            videoName[0].innerHTML = "Video 2 SR";
            videoName[1].innerHTML = "Video 2 EN";
            videoName[0].classList.add("fadeInVideoTitle");
            videoName[1].classList.add("fadeInVideoTitle");
            setTimeout(() => videoName[0].classList.remove("fadeInVideoTitle"), 500);
            setTimeout(() => videoName[1].classList.remove("fadeInVideoTitle"), 500);
        }
        if(e.target.id === "3") { 
            videoName[0].innerHTML = "Video 3 SR";
            videoName[1].innerHTML = "Video 3 EN";
            videoName[0].classList.add("fadeInVideoTitle");
            videoName[1].classList.add("fadeInVideoTitle");
            setTimeout(() => videoName[0].classList.remove("fadeInVideoTitle"), 500);
            setTimeout(() => videoName[1].classList.remove("fadeInVideoTitle"), 500);
        }    
        if(e.target.id === "4") { 
            videoName[0].innerHTML = "Video 4 SR";
            videoName[1].innerHTML = "Video 4 EN";
            videoName[0].classList.add("fadeInVideoTitle");
            videoName[1].classList.add("fadeInVideoTitle");
            setTimeout(() => videoName[0].classList.remove("fadeInVideoTitle"), 500);
            setTimeout(() => videoName[1].classList.remove("fadeInVideoTitle"), 500);
        } */
    }
}

if(window.location.pathname === "/news.html") {
    srFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "SRB");
        addFlagOpacitySR();
        addLangSR();
        addFlexSR();
        addMenuLiSR();
    });
    
    enFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "ENG");
        addFlagOpacityEN();
        addLangEN();
        addFlexEN();
        addMenuLiEN();
    });
}

if(window.location.pathname === "/storyes.html") { 

    srFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "SRB");
        addFlagOpacitySR();
        addLangSR();
        addFlexSR();
        addMenuLiSR();
    });
    
    enFlag.addEventListener('click', function () {
        sessionStorage.setItem("jezik", "ENG");
        addFlagOpacityEN();
        addLangEN();
        addFlexEN();
        addMenuLiEN();
    });

    showMoreLess1.addEventListener('click', function() {    
        var showMoreLessText = showMoreLess1.textContent;    
        if(showMoreLessText === "⮟ ⮟ ⮟") {
            for(e=0; e<2; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess1.innerHTML = "⮝ ⮝ ⮝"; 
        } else {
            for(e=0; e<2; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess1.innerHTML = "⮟ ⮟ ⮟";
        }
    });
    
    showMoreLess2.addEventListener('click', function() {    
        var showMoreLessText = showMoreLess2.textContent;    
        if(showMoreLessText === "⮟ ⮟ ⮟") {
            for(e=2; e<4; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess2.innerHTML = "⮝ ⮝ ⮝"; 
        } else {
            for(e=2; e<4; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess2.innerHTML = "⮟ ⮟ ⮟";
        }
    });
    
    /* showMoreLess3.addEventListener('click', function() {    
        var showMoreLessText = showMoreLess3.textContent;    
        if(showMoreLessText === "⮟ ⮟ ⮟") {
            for(e=4; e<6; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess3.innerHTML = "⮝ ⮝ ⮝"; 
        } else {
            for(e=4; e<6; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess3.innerHTML = "⮟ ⮟ ⮟";
        }
    });
    
    showMoreLess4.addEventListener('click', function() {    
        var showMoreLessText = showMoreLess4.textContent;    
        if(showMoreLessText === "⮟ ⮟ ⮟") {
            for(e=6; e<8; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess4.innerHTML = "⮝ ⮝ ⮝"; 
        } else {
            for(e=6; e<8; e++) {
                pClanak[e].classList.toggle("pClanakMax");
            }
            showMoreLess4.innerHTML = "⮟ ⮟ ⮟";
        }
    }); */
}


/*
=================================
            FUNCTIONS
=================================
*/

function clearSR() {
    for (e=0; e<sr.length; e++) {
        sr[e].classList.add('hide'); 
    }
};

function clearEN() {
    for (e=0; e<en.length; e++) {
        en[e].classList.add('hide'); 
    }
};

function clearGridSR() {
    for (e=0; e<srGrid.length; e++) {
        srGrid[e].classList.add('hide'); 
    }
}

function clearGridEN() {
    for (e=0; e<enGrid.length; e++) {
        enGrid[e].classList.add('hide'); 
    }
}

function clearFlexSR() {
    for (e=0; e<srFlex.length; e++) {
        srFlex[e].classList.add('hide'); 
    }
}

function clearFlexEN() {
    for (e=0; e<enFlex.length; e++) {
        enFlex[e].classList.add('hide'); 
    }
}

function addGridSR() {
    for(e=0; e<srGrid.length; e++) {
        srGrid[e].classList.add('showGrid');
        srGrid[e].classList.remove('hide');
    }
    for(e=0; e<enGrid.length; e++) {
        enGrid[e].classList.add('hide');
        enGrid[e].classList.remove('showGrid');
    }
};

function addGridEN() {
    for(e=0; e<enFlex.length; e++) {
        enGrid[e].classList.add('showGrid');
        enGrid[e].classList.remove('hide');
    }
    for(e=0; e<srFlex.length; e++) {    
        srGrid[e].classList.add('hide');
        srGrid[e].classList.remove('showGrid');
    }
};

function addFlexSR() {
    for(e=0; e<srFlex.length; e++) {
        srFlex[e].classList.add('showFlex');
        srFlex[e].classList.remove('hide');
    }
    for(e=0; e<enFlex.length; e++) {
        enFlex[e].classList.add('hide');
        enFlex[e].classList.remove('showFlex');
    }
};

function addFlexEN() {
    for(e=0; e<enFlex.length; e++) {
        enFlex[e].classList.add('showFlex');
        enFlex[e].classList.remove('hide');
    }
    for(e=0; e<srFlex.length; e++) {    
        srFlex[e].classList.add('hide');
        srFlex[e].classList.remove('showFlex');
    }
};

function addFlagOpacitySR() {
    srFlag.classList.add('flagActive');
    enFlag.classList.remove('flagActive');
};

function addFlagOpacityEN() {
    enFlag.classList.add('flagActive');
    srFlag.classList.remove('flagActive');
};

function addLangSR() {
    for (e=0; e<sr.length; e++) {
        sr[e].classList.add('show');
        sr[e].classList.remove('hide');
    }
    for (e=0; e<en.length; e++) {
        en[e].classList.add('hide');
        en[e].classList.remove('show');
    }
};

function addLangEN() {
    for (e=0; e<en.length; e++) {
        en[e].classList.add('show');
        en[e].classList.remove('hide');
    }
    for (e=0; e<sr.length; e++) {
        sr[e].classList.add('hide');
        sr[e].classList.remove('show');
    }
};

function addMenuLiSR() {
    li1.innerHTML = "Vesti";
    li2.innerHTML = "Darko";
    li3.innerHTML = "Foto";
    li4.innerHTML = "Video";
    li5.innerHTML = "Price";
}

function addMenuLiEN() {
    li1.innerHTML = "News";
    li2.innerHTML = "Darko";
    li3.innerHTML = "Photo";
    li4.innerHTML = "Video";
    li5.innerHTML = "Storyes";
}

function showMoreNews(e) {
    return function() {
        newsNews[e].classList.toggle('showNewsArticle');
    }
}


/*
===================================
        FUNCTIONS >> SLIDER
===================================
*/

function reset() {
    slider.style.backgroundImage = "none";
    dot1Active();
}

function startSlider() {
    reset();
    slider.style.backgroundImage = "url('images/img" + currentSlide + ".png')";
}

function slideLeft() {
    reset();
    slider.style.backgroundImage = "url('images/img" + (currentSlide - 1) + ".png')";
    currentSlide--;
}

function slideRight() {
    reset();
    slider.style.backgroundImage = "url('images/img"+ (currentSlide + 1) + ".png')";
    currentSlide++;
}

function dot1Active() {
    if(currentSlide === 1) {
        dot1.classList.add("dotActive");
        dot2.classList.remove("dotActive");
        /* dot3.classList.remove("dotActive"); */
        textSliderActive();
    }
}

function dot2Active() {
    if(currentSlide === 2) {
        dot1.classList.remove("dotActive");
        dot2.classList.add("dotActive");
        /* dot3.classList.remove("dotActive"); */
        textSliderActive();
    }
}

/* function dot3Active() {
    if(currentSlide === 3) {
        dot1.classList.remove("dotActive");
        dot2.classList.remove("dotActive");
        dot3.classList.add("dotActive");
        textSliderActive();
    }
} */

function textSliderActive() {
    if(sessionStorage.getItem("jezik") === "ENG") {
        sliderMiddleText.innerHTML = "Show Photos";
    } else {
        sliderMiddleText.innerHTML = "Prikazi slike";
    }    
}

function clearGallery() {
    gallery1.classList.remove("showGallery");
    gallery2.classList.remove("showGallery");
    /* gallery3.classList.remove("showGallery"); */
}

for(var i=0; i<galleryImg.length; i++) {
    galleryImg[i].addEventListener("click", bindClick(i));
}

/* function bindClick(i) {
    return function() {
        if(i!==3 && i!==4 && i!==17 && i!==18 && i!==31 && i!==32) {
            galleryImg[i].classList.toggle("galleryImgBig");
        } else {
            galleryImg[i].classList.toggle("galleryImgLandscape");
        }
    };
} */

function bindClick(i) {
    return function() {
        if(galleryImg[i].className === "galleryImg") {
            galleryImg[i].classList.add("galleryImgBig");
        } else {
            galleryImg[i].classList.remove("galleryImgBig");
        }
        if(galleryImg[i].className === "galleryImg landscape") {
            galleryImg[i].classList.add("galleryImgLandscape")
        } else {
            galleryImg[i].classList.remove("galleryImgLandscape");
        }
    };
}

/*
===================================
            ADD MENU BG
===================================
*/


function add1() {
    landingTopMenuLi[0].classList.add("landingTopMenuLiActive");
    landingTopMenuLi[5].classList.add("landingTopMenuLiActive");
}

function add2() {
    landingTopMenuLi[1].classList.add("landingTopMenuLiActive");
    landingTopMenuLi[6].classList.add("landingTopMenuLiActive");
}

function add3() {
    landingTopMenuLi[2].classList.add("landingTopMenuLiActive");
    landingTopMenuLi[7].classList.add("landingTopMenuLiActive");
}

function add4() {
    landingTopMenuLi[3].classList.add("landingTopMenuLiActive");
    landingTopMenuLi[8].classList.add("landingTopMenuLiActive");
}

function add5() {
    landingTopMenuLi[4].classList.add("landingTopMenuLiActive");
    landingTopMenuLi[9].classList.add("landingTopMenuLiActive");
}

function clearMenuActiv() {
    for(e=0; e<landingTopMenuLi.length; e++) {
        landingTopMenuLi[e].classList.remove('landingTopMenuLiActive');
    }
}


/*
===============================
            COUNTER
===============================
*/

function counter1() {
    for (let e=1; e<=100; e++) {
         setTimeout( function trimer() { count1.innerHTML = [e]; }, e*50);
    }    
}
 
 function counter2() {
    for (let e=1; e<=150; e++) {
         setTimeout( function trimer() { count2.innerHTML = [e]; }, e*40);
    }    
}
 
 function counter3() {
    for (let e=1; e<=200; e++) {
         setTimeout( function trimer() { count3.innerHTML = [e]; }, e*35);
    }    
}


/*
===============================
        EVENT LISTENERS
===============================
*/

menuIcon.addEventListener('click', function() {
    if (sessionStorage.getItem("jezik") === "ENG") {
        li1.classList.toggle("liShow");
        li2.classList.toggle("liShow");
        li3.classList.toggle("liShow");
        li4.classList.toggle("liShow");
        li5.classList.toggle("liShow");
    } else {
        li1.classList.toggle("liShow");
        li2.classList.toggle("liShow");
        li3.classList.toggle("liShow");
        li4.classList.toggle("liShow");
        li5.classList.toggle("liShow");
    }
    menuIcon.classList.toggle("is-open");
    arrowLeft.classList.toggle("zIndex");
});



li1.addEventListener('click', function() { window.open('news.html', target="_self"); });
li2.addEventListener('click', function() { window.open('darko.html', target="_self"); });
li3.addEventListener('click', function() { window.open('photo.html', target="_self"); });
li4.addEventListener('click', function() { window.open('video.html', target="_self"); });
li5.addEventListener('click', function() { window.open('storyes.html', target="_self"); });
logo.addEventListener('click', function() { window.open('index.html', target="_self"); });

for (e=0; e<newsNews.length; e++) { newsNews[e].addEventListener('click', showMoreNews(e)); }

for(e=0; e<contactBtn.length; e++) { contactBtn[e].addEventListener('click', function() { window.open('contactMe.html', target="_self"); }) }

for(e=0; e<linkFb.length; e++) { linkFb[e].addEventListener('click', function() { window.open('https://www.facebook.com/djecakbl/', target="_bank"); }) }
for(e=0; e<linkInst.length; e++) { linkInst[e].addEventListener('click', function() { window.open('https://www.instagram.com/djecak1/', target="_bank"); }) }
for(e=0; e<linkYt.length; e++) { linkYt[e].addEventListener('click', function() { window.open('https://www.youtube.com/channel/UCkzoTUF1-qZyUfhqIO_cGMw', target="_bank"); }) }
for(e=0; e<linkImdb.length; e++) { linkImdb[e].addEventListener('click', function() { window.open('https://www.imdb.com/name/nm6470733/', target="_bank"); }) }

for(e=0; e<linkNews.length; e++) { 
    if(window.location.pathname !== "/news.html") { 
        linkNews[e].addEventListener('click', function() {
            window.open('news.html', target="_self");
        });         
    } else {
        clearMenuActiv();
        add1();
    }
}
for(e=0; e<linkDarko.length; e++) { 
    if(window.location.pathname !== "/darko.html") { 
        linkDarko[e].addEventListener('click', function() { 
            window.open('darko.html', target="_self"); 
        }); 
    } else {
        clearMenuActiv();
        add2();
    }
}
for(e=0; e<linkPhoto.length; e++) { 
    if(window.location.pathname !== "/photo.html") { 
        linkPhoto[e].addEventListener('click', function() { 
            window.open('photo.html', target="_self"); 
        }); 
    } else {
        clearMenuActiv();
        add3();
    } 
}
for(e=0; e<linkVideo.length; e++) { 
    if(window.location.pathname !== "/video.html") { 
        linkVideo[e].addEventListener('click', function() { 
            window.open('video.html', target="_self"); 
        }); 
    } else {
        clearMenuActiv();
        add4();
    } 
}

for(e=0; e<linkStoryes.length; e++) { 
    if(window.location.pathname !== "/storyes.html") { 
        linkStoryes[e].addEventListener('click', function() { 
            window.open('storyes.html', target="_self"); 
        }); 
    } else {
        clearMenuActiv();
        add5();
    } 
}


