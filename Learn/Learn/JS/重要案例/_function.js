function addLoadEvent(func){
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

//插值器原型函数
function Interpolator() {
}
Interpolator.prototype=function(){
    //开始与结束的地方速率改变比较慢，在中间的时候加速
    function getAccelerateDecelerateInterpolation(input){
        return (Math.cos((input + 1) * Math.PI) / 2.0) + 0.5;
    }

    //开始的地方速率改变比较慢，然后开始加速
    function getAccelerateInterpolation(factor, input){
        var mFactor=1.0;
        var mDoubleFactor=2.0;

        if(arguments.length!=0){
            mFactor=factor;
            mDoubleFactor=factor*2;
        }
        if(mFactor==1.0){
            return input*input;
        }else{
            return Math.pow(input, mDoubleFactor);
        }
    }

    //开始的时候向后然后向前甩
    //TODO： 会导致元素离开可视区域，需要修改
    function getAnticipateInterpolation(tension, input){
        var mTension=2.0;
        if(arguments.length==2){
            mTension=tension;
        }
        return input * input * ((mTension + 1) * input - mTension);
    }

    //开始的时候向后然后向前甩一定值后返回最后的值
    function getAnticipateOvershootInterpolation(tension, extraTension, input){
        var mTension=2.0*1.5;
        if(arguments.length == 2){
            mTension = tension * 1.5;
        }else if(arguments.length == 3){
            mTension = tension * extraTension;
        }

        if(input < 0.5){

        }
    }

    //循环播放特定的次数，速率改变沿着正弦曲线
    function getCycleInterpolation(cycles, input){
        var mCycles=1.0;
        if(arguments.length == 2){
            mCycles=cycles;
        }

        return Math.sin(2 * mCycles * Math.PI * input);
    }
};