const button = document.querySelector('.button');
const reset = document.querySelector('.reset');
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');
const arrow3 = document.querySelector('.arrow3');
const archery = document.querySelector('.archery');

const short = document.querySelector('.short');
const medium = document.querySelector('.medium');
const long = document.querySelector('.long');

var arrowcount = document.querySelector('#arrowcount');


// var beat = new Audio();

// beat.src("");

var shortclicked = 0;
var mediumclicked = 0;
var longclicked = 0;

var count = 0;

var remains = 3;

// ---------------- SHORT RANGE ----------------
short.addEventListener('click', () => {
    console.log("short range clicked");

    shortclicked = 1;
    mediumclicked = 0;
    longclicked = 0;

    count = 0;
    remains = 3;
    arrowcount.innerHTML = remains;

    remove_red_alert();

    archery.classList.add('shortrange');
    archery.classList.remove('mediumrange');
    archery.classList.remove('longrange');

    button.classList.remove('blink');
    reset.classList.remove('blink2');

    removeAllArrows();
});


// ---------------- MEDIUM RANGE ----------------
medium.addEventListener('click', () => {

    mediumclicked = 1;
    shortclicked = 0;
    longclicked = 0;

    count = 0;
    remains = 3;
    arrowcount.innerHTML = remains

    remove_red_alert();

    archery.classList.remove('shortrange');
    archery.classList.add('mediumrange');
    archery.classList.remove('longrange');

    button.classList.remove('blink');
    reset.classList.remove('blink2');

    removeAllArrows();
});


// ---------------- LONG RANGE ----------------
long.addEventListener('click', () => {

    longclicked = 1;
    shortclicked = 0;
    mediumclicked = 0;

    count = 0;
    remains = 3;
    arrowcount.innerHTML = remains

    remove_red_alert();

    archery.classList.remove('shortrange');
    archery.classList.remove('mediumrange');
    archery.classList.add('longrange');

    button.classList.remove('blink');
    reset.classList.remove('blink2');

    removeAllArrows();
});


// ---------------- SHOOT BUTTON ----------------
button.addEventListener('click', () => {

    count += 1;
    console.log("count = " + count);

    // ---------- SHORT RANGE ----------
    if (shortclicked == 1) {

        if (count == 1) {
            arrow1.classList.add('shortshoot1');
            remains -= 1;
            arrowcount.innerHTML = remains;
            soundeffect();

        }
        else if (count == 2) {
            arrow2.classList.add('shortshoot2');
            remains -= 1;
            arrowcount.innerHTML = remains;
             soundeffect();
        }
        else if (count == 3) {
            arrow3.classList.add('shortshoot3');
            remains -= 1;
            arrowcount.innerHTML = remains;
            console.log("value of remains" + remains)
             soundeffect();

            redalert_for_nomore_arrows();
        }
        else blinkWarning();

    }

    // ---------- MEDIUM RANGE ----------
    else if (mediumclicked == 1) {

        if (count == 1) {
            arrow1.classList.add('mediumshoot1');
            remains -= 1;
            arrowcount.innerHTML = remains;
             soundeffect();
        }
        else if (count == 2) {
            arrow2.classList.add('mediumshoot2');
            remains -= 1;
            arrowcount.innerHTML = remains;
             soundeffect();
        }
        else if (count == 3) {
            arrow3.classList.add('mediumshoot3');
            remains -= 1;
            arrowcount.innerHTML = remains;
             soundeffect();

            redalert_for_nomore_arrows();
        }
        else blinkWarning();
    }

    // ---------- LONG RANGE ----------
    else if (longclicked == 1 || longclicked == 0) {

        if (count == 1) {
            arrow1.classList.add('longshoot1');
            remains -= 1;
            arrowcount.innerHTML = remains;
             soundeffect();
        }
        else if (count == 2) {
            arrow2.classList.add('longshoot2');
            remains -= 1;
            arrowcount.innerHTML = remains;
             soundeffect();
        }
        else if (count == 3) {
            arrow3.classList.add('longshoot3');
            remains -= 1;
            arrowcount.innerHTML = remains;
             soundeffect();

            redalert_for_nomore_arrows();
        }
        else blinkWarning();
    }

    // ---------- DEFAULT RANGE ----------
    else {
        // if (count == 1) arrow1.classList.add('shoot1');
        // else if (count == 2) arrow2.classList.add('shoot2');
        // else if (count == 3) arrow3.classList.add('shoot3');
        // else 
        blinkWarning();
        audio.pause();
    }

});


// ---------------- RESET BUTTON ----------------
reset.addEventListener('click', () => {

    count = 0;
    remains = 3;
    arrowcount.innerHTML = remains;

    button.classList.remove('blink');
    reset.classList.remove('blink2');
    remove_red_alert();

    removeAllArrows();
});


// ---------------- SET AUDIO TO THE ARROW -------------

const audio = document.querySelector('#audio');


function soundeffect() {
    audio.play();
    audio.currentTime = 0;
}






// ----------------- SET AUDIO TO THE BACKGROUND BGM ------------

const unmute = document.querySelector('.fa-volume-high');
const mute = document.querySelector('.fa-volume-xmark');

const bgm = document.querySelector('#nature_audio');

function background_bgm(){
    bgm.play()
    bgm.currentTime=0;
}

function background_bgm_mute(){
    bgm.pause();
    bgm.currentTime=0;
}

unmute.addEventListener('click', ()=>{
    console.log("bgm activated")
    background_bgm();
})

mute.addEventListener('click', ()=>{
   console.log("bgm stoped")
    background_bgm_mute();
})

// ---------------- REMOVE ALL ARROWS ----------------
function removeAllArrows() {
    arrow1.classList.remove('shoot1', 'shortshoot1', 'mediumshoot1', 'longshoot1');
    arrow2.classList.remove('shoot2', 'shortshoot2', 'mediumshoot2', 'longshoot2');
    arrow3.classList.remove('shoot3', 'shortshoot3', 'mediumshoot3', 'longshoot3');
}


// ---------------- BLINK WARNING ----------------
function blinkWarning() {
    button.classList.add('blink');
    reset.classList.add('blink2');
}


// ----------------- SHOW 0 ARROW AS RED COLOR WHEN NO MORE ARROWS -----------------

function redalert_for_nomore_arrows() {
    if (remains == 0) {
        arrowcount.style.color = 'red';

    }
}


// ----------------- REMOVE RED COLOR WHEN NO CLICK RESET BUTTON AND CLICK ANOTHER RANGES SUCH AS(short,medium,long) -----------------

function remove_red_alert() {
    arrowcount.style.color = '';
}
