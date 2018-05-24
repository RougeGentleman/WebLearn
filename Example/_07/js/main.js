window.onload=pre;
//轮播准备
//用于存放切换按钮的数组
var navBGArray;
//需要设置背景的标签
var bg1;
var bg2;
//将改变的图片，背景色放入到数组中
var picArray=Array(["url(../_07/img/nav_bg1.jpg) no-repeat", "\#e8e8e8"],
    ["url(../_07/img/nav_bg2.jpg) no-repeat", "\#e8e8e8"], 
    ["url(../_07/img/nav_bg3.jpg) no-repeat", "\#654a7d"],
    ["url(../_07/img/nav_bg4.jpg) no-repeat", "\#a50f10"],
    ["url(../_07/img/nav_bg5.jpg) no-repeat", "\#e8e8e8"],
    ["url(../_07/img/nav_bg6.jpg) no-repeat", "\#081424"]);
function pre(){
    //按钮对象
    var nav_bg1;
    var nav_bg2;
    var nav_bg3;
    var nav_bg4;
    var nav_bg5;
    var nav_bg6;
    nav_bg1=document.getElementById("nav_bg1");
    nav_bg2=document.getElementById("nav_bg2");
    nav_bg3=document.getElementById("nav_bg3");
    nav_bg4=document.getElementById("nav_bg4");
    nav_bg5=document.getElementById("nav_bg5");
    nav_bg6=document.getElementById("nav_bg6");
    navBGArray=Array(nav_bg1, nav_bg2, nav_bg3, nav_bg4, nav_bg5, nav_bg6);

    bg1=document.getElementsByClassName("nav_bottom")[0];
    bg2=document.getElementsByClassName("nav_bottom_container")[0];

    setMouseOverEvent();
}

function setMouseOverEvent(){
    //利用迭代器进行设置鼠标悬浮事件
    navBGArray.forEach(function(item, index, array){
        // with(this){
        // }
        item.onmouseover=function(){
            bg1.style.backgroundColor=picArray[index][1];
            bg2.style.background=picArray[index][0];
            //再次遍历数组，取消其他item的背景颜色
            array.forEach(function(_item, index, _array){
                if(_item==item){
                    _item.style.background="#ffffff";
                }else{
                    _item.style.background="#a3a3a3";
                }
            });
        }
    });
}

function bgClick(){
    bg1.style.backgroundColor=picArray[1][1];
    alert(navBGArray[2]);
     bg2.style.background="url(../_07/img/nav_bg6.jpg) no-repeat";
   /* bg2.style.background=picArray[5][0];*/
}