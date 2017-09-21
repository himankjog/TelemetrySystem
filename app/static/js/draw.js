$( document ).ready(function() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// set starting values
var fps = 20;
var percent = 0
var direction = 1;
var b=0;
var check = 0;
var tim = 0;
// start the animation
animate();
var time,ti,hr,sec,min,distance=0;
document.getElementById('q9').innerHTML = distance;
window.time = undefined;
window.avant = function(){
    if(window.time == undefined){
        window.time = setInterval(function(){
            tim+=1;
            ti = tim;
            hr = Math.floor(ti/3600);
            ti -= hr*3600;
            min = Math.floor(ti/60);
            ti -= min*60;
            if(hr < 10){

            document.getElementById('hrs').innerHTML = '0'+hr;
            }
            else{

            document.getElementById('hrs').innerHTML = hr;
            }
            if(min < 10){

            document.getElementById('min').innerHTML = '0'+min;
            }
            else{

            document.getElementById('min').innerHTML =min;
            }
            if(sec < 10){

            document.getElementById('sec').innerHTML = '0'+ti;
            }
            else{

            document.getElementById('sec').innerHTML = ti;
            }
        },1000);
    }
    else{
        clearInterval(window.time);
        window.time = undefined;
        tim = 0;
    }
}
window.s = function(){


var a=setInterval(function()
{
    b+=.01;
},10);

}
var coun=0;
function animate() {
    
   
    distance +=1;
    document.getElementById('q9').innerHTML = distance;
    percent += direction;
    if(percent == 4)
    document.getElementById('q8').innerHTML = 1;
if(percent == 11)
    document.getElementById('q8').innerHTML = 2;
if(percent == 17)
    document.getElementById('q8').innerHTML = 3;
if(percent == 25)
    document.getElementById('q8').innerHTML = 4;
if(percent == 32)
    document.getElementById('q8').innerHTML = 5;
if(percent == 39)
    document.getElementById('q8').innerHTML = 6;
if(percent == 46)
    document.getElementById('q8').innerHTML = 7;
if(percent == 61)
    document.getElementById('q8').innerHTML = 8;
if(percent == 71)
    document.getElementById('q8').innerHTML = 9;
if(percent == 80)
    document.getElementById('q8').innerHTML = 10;

    if(percent>=17 && percent<=24){
        document.getElementById('ps3').innerHTML=b.toFixed(2);
    }
    if(percent>=11 && percent<=16){
        document.getElementById('ps2').innerHTML=b.toFixed(2);
    }
    if(percent>=4 && percent<=10){
        document.getElementById('ps1').innerHTML=b.toFixed(2);
    }
    if(percent>31 && percent<=38){
        document.getElementById('ps5').innerHTML=b.toFixed(2);
        }
            if(percent>=25 && percent<=31){
        document.getElementById('ps4').innerHTML=b.toFixed(2);
    }
    if(percent>=39 && percent<=45){
        document.getElementById('ps6').innerHTML=b.toFixed(2);
    }
    if(percent>=46 && percent<=60){
        document.getElementById('ps7').innerHTML=b.toFixed(2);
    }
    if(percent>=61 && percent<=70){
        document.getElementById('ps8').innerHTML=b.toFixed(2);
        }
           if(percent>=71 && percent<=79){
        document.getElementById('ps9').innerHTML=b.toFixed(2);
    }
    if(percent>=80 && percent<=100){
        document.getElementById('ps10').innerHTML=b.toFixed(2);
    }
    if(percent==100 ){
        
        
        coun+=1;
        var x=coun;
        document.getElementById('ts12').innerHTML=x;
    }

    if (percent < 0) {
        percent = 0;
        direction = 1;
    };
    if (percent > 100) {
        percent = 0;
        direction = 1;
    };

    draw(percent);
}

window.sm=function()
{  
   var c; 
if(window.c==undefined)
{
window.c=setInterval(function () {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}
else
{
    clearInterval(window.c);
    window.c=undefined;
    console.log("I worked");
percent=0;
b=0
}
return;
//console.log("ASd");
}

// draw the current frame based on sliderValue
function draw(sliderValue) {

    // redraw path
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(10, 260);              //1st
    ctx.lineTo(370, 260);
    ctx.strokeStyle = 'gray';
    ctx.stroke();


 ctx.beginPath();
ctx.arc(370,260, 10, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

   ctx.beginPath();
    ctx.moveTo(370, 260);
    ctx.lineTo(240, 260);               //2nd
    ctx.strokeStyle = 'gray';
    ctx.stroke();

 ctx.beginPath();
ctx.arc(240,260, 10, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

   ctx.beginPath();
    ctx.moveTo(240, 260);
    ctx.lineTo(100, 260);               //3rd
    ctx.strokeStyle = 'gray';
    ctx.stroke();

     ctx.beginPath();
ctx.arc(100,260, 10, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

    ctx.beginPath();
    ctx.moveTo(10, 260);
    ctx.quadraticCurveTo(230, 200, 250, 120);    //4th
    ctx.strokeStyle = 'gray';
    ctx.stroke();


ctx.beginPath();
ctx.arc(10,260, 10, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

    ctx.beginPath();
    ctx.moveTo(250, 120);
    ctx.bezierCurveTo(290, -40, 300, 200, 400, 150);  //7th
    ctx.strokeStyle = 'gray';
    ctx.stroke();


ctx.beginPath();
ctx.arc(250,120, 10, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

ctx.beginPath();
ctx.arc(200,180, 10, 0, 2 * Math.PI, false);   //6th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

ctx.beginPath();
ctx.arc(100,230, 10, 0, 2 * Math.PI, false);   //5th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();



ctx.beginPath();
ctx.arc(290,80, 10, 0, 2 * Math.PI, false);   //8th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();
 
ctx.beginPath();
ctx.arc(330,140, 10, 0, 2 * Math.PI, false);   //9th
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();


//done
    ctx.beginPath();
    ctx.moveTo(400, 150);
    ctx.lineTo(370, 260);
    ctx.strokeStyle = 'gray';        //10th
    ctx.stroke();


ctx.beginPath();
ctx.arc(400,150, 10, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.fillStyle = 'black';
   ctx.fill();

    // draw the tracking rectangle
    var xy;

        if (sliderValue < 25) {
        var percent = sliderValue / 24;
        xy = getLineXYatPercent({
            x: 370,
            y: 260
        }, {
            x: 10,
            y: 260
        }, percent);
    } else if (sliderValue < 50) {
        var percent = (sliderValue - 25) / 24
        xy = getQuadraticBezierXYatPercent({
            x: 35,
            y: 260
        }, {
            x: 230,
            y: 200
        }, {
            x: 250,
            y: 120
        }, percent);
    } else if (sliderValue < 75) {
        var percent = (sliderValue - 50) / 24
        xy = getCubicBezierXYatPercent({
            x: 250,
            y: 120
        }, {
            x: 290,
            y: -40
        }, {
            x: 300,
            y: 200
        }, {
            x: 400,
            y: 150
        }, percent);
    } else {
        var percent = (sliderValue - 75) / 25
        xy = getLineXYatPercent({
            x: 400,
            y: 150
        }, {
            x: 370,
            y: 260
        }, percent);
    }
    drawRect(xy, "red");

}



// draw tracking rect at xy
function drawRect(point, color) {
    ctx.fillStyle = "cyan";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.rect(point.x - 13, point.y - 8, 25, 15);
    ctx.fill();
    ctx.stroke();
}

// draw tracking dot at xy
function drawDot(point, color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

// line: percent is 0-1
function getLineXYatPercent(startPt, endPt, percent) {
    var dx = endPt.x - startPt.x;
    var dy = endPt.y - startPt.y;
    var X = startPt.x + dx * percent;
    var Y = startPt.y + dy * percent;
    return ({
        x: X,
        y: Y
    });
}

// quadratic bezier: percent is 0-1
function getQuadraticBezierXYatPercent(startPt, controlPt, endPt, percent) {
    var x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
    var y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
    return ({
        x: x,
        y: y
    });
}

// cubic bezier percent is 0-1
function getCubicBezierXYatPercent(startPt, controlPt1, controlPt2, endPt, percent) {
    var x = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
    var y = CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
    return ({
        x: x,
        y: y
    });
}

// cubic helper formula at percent distance
function CubicN(pct, a, b, c, d) {
    var t2 = pct * pct;
    var t3 = t2 * pct;
    return a + (-a * 3 + pct * (3 * a - a * pct)) * pct + (3 * b + pct * (-6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 + d * t3;
}

});