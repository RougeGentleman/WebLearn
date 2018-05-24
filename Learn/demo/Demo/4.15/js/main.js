/*
*   第四章 案例：图片库
*
* */
/*
*   步骤：
*   1. a标签产生点击事件
*   2. 获取需要替换的元素
*   3. 进行替换
* */
// 案例：点击在下方显示图片


/*
*   方法：
*   1. childNodes 获取子节点，返回数组
*
*   2. nodeType 返回节点类型
*       a. 元素节点: 1
*       b. 属性节点: 2
*       c. 文本节点: *
*   3. nodeValues 用于返回（设置）节点的值
*       使用时需要确认节点位置是否正确：一个元素可能有多个节点
*       查看： alert( p.firstChild.nodeValue);
*       设置： p.firstChild.nodeValue="aaaaa"
*
*   4. firstChild, lastChild: 第一个/最后节点
*
*  事件：
*  1. onmouseover: 鼠标悬停
*  2. onmouseout： 鼠标离开
*  3. onclick 鼠标点击
*
*  事件处理机制：
*   当事件被触发后会产生一个返回值，类型为布尔类型
*   如：a标签：onclick事件 当return false时就表示没有点击
*
* */

/*
*   第五章 JS编程原则和良好习惯
*   1. 预留退路： 确保网页在没有JavaScript的情况下也能正常工作
*   2. 分离JavaScript：把网页的结构和内容与JavaScript脚本动作行为分开
*   3. 向后兼容：确保老版本浏览器不会因为你的JavaScript脚本而死机
*
*   方法：
*   1. window.open(url, name, features): 创建一个新的浏览器窗口
*       url: url地址
*       name: 新窗口名字
*       features: 设置属性
*   2.
*
*   注意事项：
*       1. 将JavaScript代码与标记分离，将事件处理函数放到外部文件中
*       2. JavaScript标记在文档尾部，body结束之前
* */

/*
*   第六章 图库优化
*
*
*
* */
window.onload=pre;

function showPic(switchPic){
    var _href=switchPic.getAttribute("href");
    var _tip=switchPic.getAttribute("title");
    var showImg=document.getElementById("showImg");
    showImg.setAttribute("src", _href);
    document.getElementById("tip").firstChild.nodeValue=_tip;
}

function pre(){
    //判断当前浏览器是否支持一些方法
    if(!document.getElementsByTagName){
        return false;
    }else if(!document.getElementById){
        return false;
    }

    var _a=document.getElementsByTagName("a");
    for(var i=0; i<_a.length; i++){
        _a[i].onclick=function(){
            showPic(this);
            return false;
        }
    }

}