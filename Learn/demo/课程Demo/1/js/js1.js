window.onload = function(){
	var wrap = document.getElementById('wrap'),
		slide = document.getElementById('slide'),
		ulDom = slide.firstElementChild,//图片的ul集合
		liChid = ulDom.children,
		arrLeft = document.getElementById('arrLeft'),//左but
		arrRight = document.getElementById('arrRight'),//右侧按钮
		arrow = document.getElementById('arrow');
	var timer ;
	//设置节流阀
	var flag = true;
	//配置单 var arr = [{},{},{},{},{}];
	var arr = [
	//1
	{
		'width':400,
		'opacity':0.3,
		'top':10,
		'left':50,
		'zIndex':2
	},
	//2
	{
		'width':600,
		'opacity':0.7,
		'top':70,
		'left':0,
		'zIndex':4
	},
	//3
	{
		'width':800,
		'opacity':1,
		'top':100,
		'left':200,
		'zIndex':5
	},
	//4
	{
		
		'width':600,
		'opacity':0.7,
		'top':70,
		'left':600,
		'zIndex':4
	},
	//5
	{
		'width':400,
		'opacity':0.3,
		'top':10,
		'left':750,
		'zIndex':2
	}];
	//初始化每个图片的位置
	autoAnimate();
	function autoAnimate(){
		for(var i=0;i<liChid.length;i++){//0
			animate(liChid[i],arr[i],function(){
				flag = true;
			});
			
		}
	}
	
	//鼠标悬停，点击按钮的箭头缓慢显示  /隐藏
	wrap.onmouseover = function(){
		animate(arrow,{'opacity':1},function(){
			flag=true;
		});
	};
	wrap.onmouseout = function(){
		animate(arrow,{'opacity':0},function(){
			flag=true;
		});
	};
	//点击右侧按钮，图片逆时针旋转
	arrRight.onclick = function(){
		//[1,2,3,4,5]-->[2,3,4,5,1]
		if(flag){
			flag = false;
			arr.push(arr.shift());
			autoAnimate();
		}
		
	};
	//点击右侧按钮，图片逆时针旋转
	arrLeft.onclick = function(){
		//[1,2,3,4,5]-->[5,1,2,3,4]
		if(flag){
			flag = false;
			arr.unshift(arr.pop());
			autoAnimate();
		}
	};
	//遍历每张图片，给每张图片添加onclick事件，让它显示在'zIndex':5的这个配置单上
	for(var j=0;j<liChid.length;j++){//
		//设置属性
		liChid[j].aa = j;
		liChid[j].onclick = function(){
			//遍历j在配置单中的zindex ，如果不是层级最高的，就改变配置的的顺序，只到为最高层级配置
			for(var n = 0;n<arr.length;n++){
				if(arr[this.aa].zIndex!=5){
					arr.push(arr.shift());
				}else{
					break;
				}
			}
			autoAnimate();
		}
	}
};
