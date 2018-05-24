/*
*  轮播切换
* */
// 总图片数量
var total=6;

// 左、中、右默认下标
var left=1;
var mid=2;
var right=3;

//左、中、右img
var left_img;
var mid_img;
var right_img;

function toLeft(){
    //获取图片位置
    left_img=document.getElementById("img_left");
    right_img=document.getElementById("img_right");
    mid_img=document.getElementById("img_mid");

    //图片索引移动
    left++;
    if(left==total+1){
        left=1;
    }
    mid++;
    if(mid==total+1){
        mid=1;
    }
    right++;
    if(right==total+1){
        right=1;
    }
    //设置图片
    left_img.setAttribute("src", "img/_"+left+".jpg");
    mid_img.setAttribute("src", "img/_"+mid+".jpg");
    right_img.setAttribute("src", "img/_"+right+".jpg");
    // alert("left:"+left+"\n mid:"+mid+"\n right:"+right);
}

function toRight(){
    //获取图片位置
    left_img=document.getElementById("img_left");
    right_img=document.getElementById("img_right");
    mid_img=document.getElementById("img_mid");
    //图片索引移动
    left--;
    if(left<1){
        left=total;
    }
    mid--;
    if(mid<1){
        mid=total;
    }
    right--;
    if(right<1){
        right=total;
    }
    //设置图片
    left_img.setAttribute("src", "img/_"+left+".jpg");
    mid_img.setAttribute("src", "img/_"+mid+".jpg");
    right_img.setAttribute("src", "img/_"+right+".jpg");
    // alert("left:"+left+"\n mid:"+mid+"\n right:"+right);
}