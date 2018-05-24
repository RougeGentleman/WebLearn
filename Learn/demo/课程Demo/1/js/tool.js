	
	//让任意元素缓动到多个属性值得位置（效果）
	function animate(obj,json1,fn){//0 1 2
			//设置一个开关
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				var tag = true;
				for(var k in json1){//k-->left top width
					if(k=='opacity'){
						var leader = Number(getCSSstyle(obj,null,k));//d当前位置0
						var target = Number(json1[k]);
						var step = (target*1000 - leader*1000)/10;
						step = step>0?Math.ceil(step):Math.floor(step);
						leader = leader+step/1000 ;
						obj.style[k] = leader;
						
						}else if (k == "zIndex") {
							obj.style[k] = json1[k];
						}else{
							var leader = parseInt(getCSSstyle(obj,null,k));//d当前位置0
							var step = 0;
							var target = json1[k];//200
							//判断步数的正负
							if(target>leader){//正的步数  1
								 step = Math.ceil((target - leader)/10);
							}
							if(target<leader){//负的步数  //-0.0000222222   /-1
								 step = Math.floor((target - leader)/10);
							}
							/*step>0?Math.ceil(step):Math.floor(step);*/
							/*var target = 200;*/
							leader = leader+step;//10 20----200
							obj.style[k] = leader+'px';
					}
					
				
					if(leader!=target){//200 200 5 
						tag = false;
					}
				}
				if(tag){
						clearInterval(obj.timer);
						//0||1 或和且的关系
						/*false || true  -->true
						false || false  -->false
						true || true -->true*/
						//true || false 
						//逻辑或 与逻辑与
						//fn();
						
						/*if(fn){
							fn|fn(); 
						}*/
						fn&&fn();  
						
						
					}
				console.log('我是定时器')
			},18)
			/*console.log(leader)*/
		}
	//封装获取某个元素的某个css样式值
		function getCSSstyle(obj,wobj,sty){
			if(window.getComputedStyle){
				return window.getComputedStyle(obj,wobj)[sty];
			}else{
				return obj.currentStyle[sty];
			}
		}

