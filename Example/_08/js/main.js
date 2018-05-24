//入口函数
window.onload=pre;
//header_menu li 数组
var headerMenuArray;
//header_menu 悬停显示的元素
var headerMenuMore;
// nav 左右按钮
var navButton;
// nav 背景图
var navBgPic=["url(../_08/img/nav_bg_img1.jpg) no-repeat",
    "url(../_08/img/nav_bg_img2.jpg) no-repeat",
    "url(../_08/img/nav_bg_img3.jpg) no-repeat",
    "url(../_08/img/nav_bg_img4.jpg) no-repeat",
    "url(../_08/img/nav_bg_img5.jpg) no-repeat"];
// nav 底部多个span按钮
var navSpanButton;
// 显示背景图片元素
var navBgElement;
// nav背景图片索引
var navBgIndex=0;
// nav背景定时器
var navBgTime;
// 倒计时设置元素
var navFastHourElement;
var navFastMinElement;
var navFastSecElement;
// 小米闪购倒计时 时间变量
var navFastHour;
var navFastMin;
var navFastSec;

//准备函数
//获取需要的元素
function pre(){
    headerMenuArray = [].slice.apply(document.getElementsByClassName("header_menu_item"));
    headerMenuMore = document.getElementsByClassName("header_menu_more")[0];
    navButton = [ document.getElementsByClassName("nav_right_leftButton")[0],
                    document.getElementsByClassName("nav_right_rightButton")[0]];
    navSpanButton = [].slice.apply(document.getElementsByClassName("nav_right_bgChange"));
    navBgElement = document.getElementsByClassName("nav")[0];

    navFastHourElement = document.getElementsByClassName("nav_col2_content_fast_hour")[0];
    navFastMinElement = document.getElementsByClassName("nav_col2_content_fast_min")[0];
    navFastSecElement = document.getElementsByClassName("nav_col2_content_fast_sec")[0];

    //设置元素事件
    setEvent();

    //设置定时器事件
    setTimeEvent();
}

//为各个元素设置事件
function setEvent(){
    headerMenuArray.forEach(function(item, index, array){
        item.onmouseover = function(){
            headerMenuMore.style.display = "block";
            console.log(index);
        };
        item.onmouseleave = function(){
            headerMenuMore.style.display = "none";
        };
    });

    //设置nav 左右两边按钮事件
    navButton.forEach(function(item, index, array){
        item.onclick = function(){
            //判断定时器是否存在，存在则停止定时器
            if(navBgTime != null) clearInterval(navBgTime);
            if(index === 1){
                navBgIndex++;
                //判断当前背景索引是否溢出，是，则设置索引位置为0
                if(navBgIndex >= navBgPic.length) navBgIndex = 0;
            }else if(index === 0){
                navBgIndex--;
                if(navBgIndex < 0 ) navBgIndex = navBgPic.length-1;
            }
            //设置nav背景
            navBgElement.style.background = navBgPic[navBgIndex];
            navBgElement.style.backgroundSize = "1226px 460px";
            //设置底部按钮style
            navSpanButton.forEach(function(item, index, array){
                if(index === navBgIndex){
                    item.style.background = "#FFFFFF";
                    item.style.borderColor = "#869497";
                }else{
                    item.style.background = "#8F8D88";
                    item.style.borderColor = "#B7B6B3";
                }
            });
            //切换背景成功，设置背景切换定时器
            changNavBgTime();
        }
    });

    //设置 navSpan 按钮事件
    navSpanButton.forEach(function(item, index, array){
       item.onclick = function(){
           //判断定时器是否存在，存在则停止定时器
           if(navBgTime != null) clearInterval(navBgTime);
           //设置nav背景索引值
           navBgIndex = index;
           //设置nav背景
           navBgElement.style.background = navBgPic[navBgIndex];
           navBgElement.style.backgroundSize = "1226px 460px";
           //navSpan背景及边框颜色
           array.forEach(function(_item, _index, _array){
               if(_index === navBgIndex){
                   item.style.background = "#FFFFFF";
                   item.style.borderColor = "#869497";
               }else{
                   _item.style.background = "#8F8D88";
                   _item.style.borderColor = "#B7B6B3";
               }
           });
           //切换背景成功，设置背景切换定时器
           changNavBgTime();
       };
    });
}

function setTimeEvent(){
    //设置背景切换
    changNavBgTime();

    //小米闪购定时器
    var _time= setInterval(function(){
        var nowTime = new Date();
        var endTime = new Date();
        endTime.setTime(Date.parse(nowTime.toDateString()+" 18:00:00"));
        var _t = endTime - nowTime;
        //当倒计时为0时，取消定时器
        if(_t <= 0){
            navFastSecElement.innerText="00";
            navFastMinElement.innerText="00";
            navFastHourElement.innerText="00";
            clearInterval(_time);
            return;
        }
        navFastHour = Math.floor(_t / (60 * 60 * 1000)).toString();
        navFastMin = Math.floor((_t / (60 * 1000) - (navFastHour * 60))).toString();
        navFastSec = Math.floor((_t/1000) - (navFastHour * 60 * 60) - (navFastMin * 60)).toString();
        //显示时间
        if(navFastSec.length == 1){
            navFastSecElement.innerText="0"+navFastSec;
        }else{
            navFastSecElement.innerText=""+navFastSec;
        }
        if(navFastMin.length == 1){
            navFastMinElement.innerText="0"+navFastMin;
        }else{
            navFastMinElement.innerText=""+navFastMin;
        }
        if(navFastHour.length == 1){
            navFastHourElement.innerText="0"+navFastHour;
        }else{
            navFastHourElement.innerText=""+navFastHour;
        }
    }, 1000);
}

//改变背景定时器
function changNavBgTime(){
    navBgTime = setInterval(function (){
        navBgIndex ++;
        //判断是否索引溢出
        if(navBgIndex >= navBgPic.length) navBgIndex=0;
        //设置nav背景
        navBgElement.style.background = navBgPic[navBgIndex];
        navBgElement.style.backgroundSize = "1226px 460px";
        //设置底部按钮style
        navSpanButton.forEach(function(item, index, array){
            if(index === navBgIndex){
                item.style.background = "#FFFFFF";
                item.style.borderColor = "#869497";
            }else{
                item.style.background = "#8F8D88";
                item.style.borderColor = "#B7B6B3";
            }
        });
    }, 15000);
}

// 小米闪购定时器
function navFastTime(){
    //小米闪购定时器
    var _time= setInterval(function(){
        var nowTime = new Date();
        var endTime = new Date();
        endTime.setTime(Date.parse(nowTime.toDateString()+" 18:00:00"));
        var _t = endTime - nowTime;
        navFastHour = Math.floor(_t / (60 * 60 * 1000)).toString();
        navFastMin = Math.floor((_t / (60 * 1000) - (navFastHour * 60))).toString();
        navFastSec = Math.floor((_t/1000) - (navFastHour * 60 * 60) - (navFastMin * 60)).toString();
        //显示时间
        if(navFastSec.length == 1){
            navFastSecElement.innerText="0"+navFastSec;
        }else{
            navFastSecElement.innerText=""+navFastSec;
        }
        if(navFastMin.length == 1){
            navFastMinElement.innerText="0"+navFastMin;
        }else{
            navFastMinElement.innerText=""+navFastMin;
        }
        if(navFastHour.length == 1){
            navFastHourElement.innerText="0"+navFastHour;
        }else{
            navFastHourElement.innerText=""+navFastHour;
        }
        //清除定时器
        if(navFastHour === "0" && navFastMin === "0" && navFastSec === "0"){
            clearInterval(_time);
        }
    }, 1000);
}