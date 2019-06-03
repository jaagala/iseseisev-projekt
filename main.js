//main functions

function instr(num) {
    $('.calc-display').val($('.calc-display').val() + num);
}
function equals(){
    $('.calc-display').val(eval($('.calc-display').val()));
}
function c(){
    $('.calc-display').val('');
}
function del(){
    value = $('.calc-display').val();
    $('.calc-display').val(value.substring(0, value.length -1));
}

//keypresses

$(document).keydown(function (keyPressed) {
    if (keyPressed.keyCode == 97 || keyPressed.keyCode == 49) {
        $('.calc-display').val($('.calc-display').val() + "1");
        oneShadow();
        oneSound();
    };
    if (keyPressed.keyCode == 98 || keyPressed.keyCode == 50) {
        $('.calc-display').val($('.calc-display').val() + "2");
        twoShadow();
        twoSound();
    };
    if (keyPressed.keyCode == 99 || keyPressed.keyCode == 51) {
        $('.calc-display').val($('.calc-display').val() + "3");
        threeShadow();
        threeSound();
    };
    if (keyPressed.keyCode == 100 || keyPressed.keyCode == 52) {
        $('.calc-display').val($('.calc-display').val() + "4");
        fourShadow();
        fourSound();
    };
    if (keyPressed.keyCode == 101 || keyPressed.keyCode == 53) {
        $('.calc-display').val($('.calc-display').val() + "5");
        fiveShadow();
        fiveSound();
    };
    if (keyPressed.keyCode == 102 || keyPressed.keyCode == 54) {
        $('.calc-display').val($('.calc-display').val() + "6");
        sixShadow();
        sixSound();
    };
    if (keyPressed.keyCode == 103 || keyPressed.keyCode == 55) {
        $('.calc-display').val($('.calc-display').val() + "7");
        sevenShadow();
        sevenSound();
    };
    if (keyPressed.keyCode == 104 || keyPressed.keyCode == 56) {
        $('.calc-display').val($('.calc-display').val() + "8");
        eightShadow();
        eightSound();
    };
    if (keyPressed.keyCode == 105 || keyPressed.keyCode == 57) {
        $('.calc-display').val($('.calc-display').val() + "9");
        nineShadow();
        nineSound();
    };
    if (keyPressed.keyCode == 96 || keyPressed.keyCode == 48) {
        $('.calc-display').val($('.calc-display').val() + "0");
        zeroShadow();
        zeroSound();
    };
    if (keyPressed.keyCode == 8) {
        value = $('.calc-display').val();
        $('.calc-display').val(value.substring(0, value.length - 1));
        delShadow();
        hashSound();
    };
    if (keyPressed.keyCode == 111) {
        $('.calc-display').val($('.calc-display').val() + "/");
        divShadow();
        hashSound();
    };
    if (keyPressed.keyCode == 106) {
        $('.calc-display').val($('.calc-display').val() + "*");
        timesShadow();
        hashSound();
    };
    if (keyPressed.keyCode == 109) {
        $('.calc-display').val($('.calc-display').val() + "-");
        minusShadow();
        hashSound();
    };
    if (keyPressed.keyCode == 107) {
        $('.calc-display').val($('.calc-display').val() + "+");
        plusShadow();
        hashSound();
    };
    if (keyPressed.keyCode == 110) {
        $('.calc-display').val($('.calc-display').val() + ".");
        dotShadow();
        starSound();
    };
    if (keyPressed.keyCode == 13) {
        $('.calc-display').val(eval($('.calc-display').val()));
        equalsShadow();
        starSound();
    };
});

// Shadows

var delay = 100;

function oneShadow(){
    document.getElementById("one").style.boxShadow="0px 0px 0px black";
    setTimeout(function(){
        document.getElementById("one").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function twoShadow() {
    document.getElementById("two").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("two").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function threeShadow() {
    document.getElementById("three").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("three").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function fourShadow() {
    document.getElementById("four").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("four").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function fiveShadow() {
    document.getElementById("five").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("five").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function sixShadow() {
    document.getElementById("six").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("six").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function sevenShadow() {
    document.getElementById("seven").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("seven").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function eightShadow() {
    document.getElementById("eight").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("eight").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function nineShadow() {
    document.getElementById("nine").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("nine").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function cShadow() {
    document.getElementById("clear").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("clear").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function delShadow() {
    document.getElementById("del").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("del").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function oneShadow() {
    document.getElementById("one").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("one").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function divShadow() {
    document.getElementById("divided").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("divided").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function timesShadow() {
    document.getElementById("times").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("times").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function minusShadow() {
    document.getElementById("minus").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("minus").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function plusShadow() {
    document.getElementById("plus").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("plus").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function equalsShadow() {
    document.getElementById("equals").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("equals").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function dotShadow() {
    document.getElementById("dot").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("dot").style.boxShadow = "1px 1px 5px black";
    }, delay);
}
function zeroShadow() {
    document.getElementById("zero").style.boxShadow = "0px 0px 0px black";
    setTimeout(function () {
        document.getElementById("zero").style.boxShadow = "1px 1px 5px black";
    }, delay);
}

//Sounds

function oneSound(){
    var oneTone = new Audio('sounds/one.mp3');
    oneTone.play();
}
function twoSound(){
    var twoTone = new Audio('sounds/two.mp3');
    twoTone.play();
}
function threeSound(){
    var threeTone = new Audio('sounds/three.mp3');
    threeTone.play();
}
function fourSound(){
    var fourTone = new Audio('sounds/four.mp3');
    fourTone.play();
}
function fiveSound(){
    var fiveTone = new Audio('sounds/five.mp3');
    fiveTone.play();
}
function sixSound(){
    var sixTone = new Audio('sounds/six.mp3');
    sixTone.play();
}
function sevenSound(){
    var sevenTone = new Audio('sounds/seven.mp3');
    sevenTone.play();
}
function eightSound(){
    var eightTone = new Audio('sounds/eight.mp3');
    eightTone.play();
}
function nineSound(){
    var nineTone = new Audio('sounds/nine.mp3');
    nineTone.play();
}
function starSound(){
    var starTone = new Audio('sounds/star.mp3');
    starTone.play();
}
function hashSound(){
    var hashTone = new Audio('sounds/hash.mp3');
    hashTone.play();
}
function zeroSound(){
    var zeroTone = new Audio('sounds/zero.mp3');
    zeroTone.play();
}