function bottle(){
    document.querySelector('.container').style.display='none';
    document.querySelector('.main1').style.display='block';
}

function getback1(){
    document.querySelector('.main1').style.display='none';
    document.querySelector('.container').style.display='block';
}

function countdown(){
    document.querySelector('.container').style.display='none';
    document.querySelector('.main2').style.display='block';
}

function getback2(){
    document.querySelector('.main2').style.display='none';
    document.querySelector('.container').style.display='block';
}

function video(){
    document.querySelector('.container').style.display='none';
    document.querySelector('.main3').style.display='block';
}

function getback3(){
    document.querySelector('.main3').style.display='none';
    document.querySelector('.container').style.display='block';
}

setInterval(() => {
    var newday=new Date('2022-1-1');
    var today=new Date();
    var difference=newday.getTime()-today.getTime();
    var seconds=Math.floor((difference/1000)%60);
    var minutes=Math.floor((difference/1000/60)%60);
    var hours=Math.floor((difference/1000/60/60)%24);
    var days=Math.floor((difference/1000/60/60/24));
    document.getElementById('day').innerText=days;
    document.getElementById('hour').innerText=hours;
    document.getElementById('minute').innerText=minutes;
    document.getElementById('second').innerText=seconds;
 },1000)
