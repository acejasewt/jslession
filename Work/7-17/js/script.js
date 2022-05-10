var x=y=v=s=z1=z2=z3=z4=z5=z6=1;



function block() {
    document.getElementById("blo_non").style.removeProperty("display");
    document.getElementById("blo_non").style.display = "block";
}

function none() {
    document.getElementById("blo_non").style.removeProperty("display");
    document.getElementById("blo_non").style.display = "none";
}

function likebtn(){
    if (x===1){
    y=0;
    dislikebtn();
    document.getElementById("funcbtn1").style.fill = "#3ea6ff";
    document.getElementById("funcbtnword1").style.color = "#3ea6ff";
    document.getElementById("like_dis").style.borderBottomColor = "#3ea6ff";
    x=0;
    }else{
    document.getElementById("funcbtn1").style.fill = "#aaa";
    document.getElementById("funcbtnword1").style.color = "#aaa";
    document.getElementById("like_dis").style.borderBottomColor = "#aaa";
    x=1;
    }
}

function dislikebtn(){
    if (y===1){
    x=0;
    likebtn();
    document.getElementById("funcbtn2").style.fill = "#3ea6ff";
    document.getElementById("funcbtnword2").style.color = "#3ea6ff";
    document.getElementById("like_dis").style.borderBottomColor = "#3ea6ff";
    y=0;
    }else{
    document.getElementById("funcbtn2").style.fill = "#aaa";
    document.getElementById("funcbtnword2").style.color = "#aaa";
    document.getElementById("like_dis").style.borderBottomColor = "#aaa";
    y=1;
    }
}

function reveal(){
    if (v===1){
    document.getElementById("srt").style.removeProperty("visibility")
    document.getElementById("srt").style.visibility = "visible"
    v=0;
    }else{
        document.getElementById("srt").style.removeProperty("visibility")
        document.getElementById("srt").style.visibility = "hidden"
        v=1;
    }
}

function srhblock() {
    document.getElementById("srhblo_non").style.removeProperty("display");
    document.getElementById("srhblo_non").style.display = "block";
}

function srhnone() {
    document.getElementById("srhblo_non").style.removeProperty("display");
    document.getElementById("srhblo_non").style.display = "none";
}

function subbtn(){
    if (s===1){
    document.getElementById("subbtn").innerHTML = "SUBSCRIBED";
    document.getElementById("subbtn").style.backgroundColor = "#303030";
    document.getElementById("subbtn").style.color = "#aaa";
    document.getElementById("subbtn_svg").style.removeProperty("display");
    document.getElementById("subbtn_svg").style.display = "block";
    s=0;
    }else{
    document.getElementById("subbox").style.display = "block";
    }
}
function unsubbtn() {
    document.getElementById("subbtn").innerHTML = "SUBSCRIBE"
    document.getElementById("subbtn").style.backgroundColor = "#cc0000";
    document.getElementById("subbtn").style.removeProperty("color");
    document.getElementById("subbox").style.display = "none";
    document.getElementById("subbtn_svg").style.removeProperty("display");
    document.getElementById("subbtn_svg").style.display = "none";
    s=1;
}
function cancel(){
    document.getElementById("subbox").style.display = "none";
}
function videosbox_func(){
    if(z1===1){
    document.getElementById("sublist_func").style.removeProperty("display");
    document.getElementById("sublist_func").style.display = "block";
    z1=0;
    }else{
    document.getElementById("sublist_func").style.removeProperty("display");
    document.getElementById("sublist_func").style.display = "none";
    z1=1;
    }
}
function videosbox_blur(){
    document.getElementById("sublist_func").style.removeProperty("display");
    document.getElementById("sublist_func").style.display = "none";
    z1=1;
}
function videosbox_func2(){
    if(z2===1){
    document.getElementById("sublist_func2").style.removeProperty("display");
    document.getElementById("sublist_func2").style.display = "block";
    z2=0;
    }else{
    document.getElementById("sublist_func2").style.removeProperty("display");
    document.getElementById("sublist_func2").style.display = "none";
    z2=1;
    }
}
function videosbox_blur2(){
    document.getElementById("sublist_func2").style.removeProperty("display");
    document.getElementById("sublist_func2").style.display = "none";
    z2=1;
}
function videosbox_func3(){
    if(z3===1){
    document.getElementById("sublist_func3").style.removeProperty("display");
    document.getElementById("sublist_func3").style.display = "block";
    z3=0;
    }else{
    document.getElementById("sublist_func3").style.removeProperty("display");
    document.getElementById("sublist_func3").style.display = "none";
    z3=1;
    }
}
function videosbox_blur3(){
    document.getElementById("sublist_func3").style.removeProperty("display");
    document.getElementById("sublist_func3").style.display = "none";
    z3=1;
}
function videosbox_func4(){
    if(z4===1){
    document.getElementById("sublist_func4").style.removeProperty("display");
    document.getElementById("sublist_func4").style.display = "block";
    z4=0;
    }else{
    document.getElementById("sublist_func4").style.removeProperty("display");
    document.getElementById("sublist_func4").style.display = "none";
    z4=1;
    }
}
function videosbox_blur4(){
    document.getElementById("sublist_func4").style.removeProperty("display");
    document.getElementById("sublist_func4").style.display = "none";
    z4=1;
}
function videosbox_func5(){
    if(z5===1){
    document.getElementById("sublist_func5").style.removeProperty("display");
    document.getElementById("sublist_func5").style.display = "block";
    z5=0;
    }else{
    document.getElementById("sublist_func5").style.removeProperty("display");
    document.getElementById("sublist_func5").style.display = "none";
    z5=1;
    }
}
function videosbox_blur5(){
    document.getElementById("sublist_func5").style.removeProperty("display");
    document.getElementById("sublist_func5").style.display = "none";
    z5=1;
}
function videosbox_func6(){
    if(z6===1){
    document.getElementById("sublist_func6").style.removeProperty("display");
    document.getElementById("sublist_func6").style.display = "block";
    z6=0;
    }else{
    document.getElementById("sublist_func6").style.removeProperty("display");
    document.getElementById("sublist_func6").style.display = "none";
    z6=1;
    }
}
function videosbox_blur6(){
    document.getElementById("sublist_func6").style.removeProperty("display");
    document.getElementById("sublist_func6").style.display = "none";
    z6=1;
}