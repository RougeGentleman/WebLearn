/*
*   第七章 动态创建标签
*
*   传统方法：
*   1. document.write() 参数：直接写入需要创建的内容
*
*   建议方法：
*   1. innerHTML 替换获得到的变量里全部的内容, innerHTML只是改变DOM树的结构，并不改变文档实际内容
*   2. createElement 创建元素节点，创建好的元素还处于游荡状态（文档碎片）
*   3. appendChild 将创建好的节点附着到父标签上
*   4. crateTextNode 创建文本节点
*   5. insertBefore
*       parentElement.insertBefore(newElement, targetElement);
*
*   图片库改进
*   1. 使用动态创建元素
* */

function addLoadEvent (func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

//用于设置点击事件
function setOnClickEvent(){
    var _a=document.getElementsByTagName("a");
    for(var i=0; i<_a.length; i++){
        _a[i].onclick=function(){
            showPic(this);
            return false;
        }
    }
}

//准备图片的标签
function preparePic(){
    var parent=document.getElementsByTagName("div")[0];
    var pic=document.createElement("img");
    pic.setAttribute("id", "pic");
    pic.setAttribute("src", "img/_1.jpg");
    pic.setAttribute("alt", "我的图片库");
    var dec=document.createElement("p");
    dec.setAttribute("id", "dec");
    var text=document.createTextNode("DES");
    dec.appendChild(text);
    insertAfter(pic, parent);
    insertAfter(dec, pic);
}
function showPic(switchPic){
    var href=switchPic.getAttribute("href");
    var title=switchPic.getAttribute("title");
    var _pic=document.getElementById("pic");
    _pic.setAttribute("src", href);
    var dec=document.getElementById("dec");
    dec.childNodes[0].nodeValue=title;
}

addLoadEvent(preparePic());
addLoadEvent(setOnClickEvent());