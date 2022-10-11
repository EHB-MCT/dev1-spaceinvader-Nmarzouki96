"use strict";

let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    drawSpaceInvader();

    function drawSpaceInvader () {

    context.beginPath();
    context.fillStyle = "black";
    context.rect(200,200,300,300);
    context.fill();

    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(225,225,50,50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(225,275,50,50);
    context.fill();
    
    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(325,225,50,50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(425,225,50,50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(425,275,50,50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(275,325,50,50);
    context.fill();
    
    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(325,325,50,50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(375,325,50,50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(325,375,50,50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(375,425,50,50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#66FF00";
    context.rect(275,425,50,50);
    context.fill();
}