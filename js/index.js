window.onload=function(){
	//头部购物车
	let shopping=document.getElementsByClassName("shopping")[0];
	let shoppingBox=document.getElementsByClassName("shoppingBox")[0];
	// console.log(shopping,shoppingBox);
	shopping.onmouseenter=function(){
		shoppingBox.style.height="98px";
		shoppingBox.style.boxShadow="0 2px 2px 2px rgba(0,0,0,.1)";
	}
	shopping.onmouseleave=function(){
		shoppingBox.style.height="0";
		shoppingBox.style.boxShadow="none";
	}
	//导航
	let navigation=document.getElementsByClassName("navigation")[0];
	let nav=navigation.getElementsByClassName("nav")[0];
	let lis2=navigation.getElementsByClassName("nav-item");
	let navBox=document.getElementsByClassName("navBox");
	// console.log(navigation,lis2,navBox);
	for(let i=0;i<lis2.length;i++){
		lis2[i].onmouseenter=function(){
			navBox[i].style.height="229px";
			navBox[i].style.boxShadow="0 4px 2px 2px rgba(0,0,0,.1)";
		}
		lis2[i].onmouseleave=function(){
			navBox[i].style.height="0";
			navBox[i].style.boxShadow="none";
		}
	}
	//轮播图
	let banner=document.querySelector(".banner");
	let lis3=document.querySelectorAll(".imgbox li");
	let btn=document.querySelectorAll(".btn li");
	let bannerl=document.querySelector(".bannerl");
	let bannerr=document.querySelector(".bannerr");
	// console.log(lis3,btn);
	let currenIndex=0;
	let t=setInterval(move,2000);
	lis3[0].style.zIndex=10;
	btn[0].className="btn-hot";
	//移入移出
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	//左右按钮
	bannerl.onclick=function(){
		lastMove();
	}
	bannerr.onclick=function(){
		move();
	}
	//轮播点点击
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			lis3.forEach(function(e){
				e.style.zIndex=5;
			})
			btn.forEach(function(e){
				e.className="";
			})
			lis3[i].style.zIndex=10;
			btn[i].className="btn-hot";
			currenIndex=i;
		}
	}
	//1——>5
	function move(){
		currenIndex++;
		if(currenIndex==lis3.length){
			currenIndex=0;
		}
		lis3.forEach(function(e){
			e.style.zIndex=5;
		})
		btn.forEach(function(e){
			e.className="";
		})
		lis3[currenIndex].style.zIndex=10;
		btn[currenIndex].className="btn-hot";
	}
	//5——>1
	function lastMove(){
		currenIndex--;
		if(currenIndex<0){
			currenIndex=lis3.length-1;
		}
		lis3.forEach(function(e){
			e.style.zIndex=5;
		})
		btn.forEach(function(e){
			e.className="";
		})
		lis3[currenIndex].style.zIndex=10;
		btn[currenIndex].className="btn-hot";
	}


	//侧导航
	let aside=document.getElementsByClassName("aside")[0];
	let lis=aside.getElementsByTagName("li");
	let asideBox=document.getElementsByClassName("asideBox");
	// console.log(aside,lis);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<lis.length;j++){
				asideBox[j].style.display="none";
			}
			asideBox[i].style.display="block";
			asideBox[i].style.boxShadow="0 8px 16px rgba(0,0,0,0.18)";
		}
		lis[i].onmouseleave=function(){
			asideBox[i].style.display="none";
		}
	}

	//明星单品
	let cBottomBox=document.querySelector(".cBottomBox");
	let button=document.querySelectorAll(".cTopRight a");
	// console.log(cBottomBox,button)
	let cBottomBoxW=parseInt(getComputedStyle(cBottomBox,null).width)/2;
	let times=0;
	button[1].onclick=function(){
		times++;
		if(times==2){
			times=1;
		}
		cBottomBox.style.transform=`translateX(${-cBottomBoxW*times}px)`;
	}
	button[0].onclick=function(){
		times--;
		if(times<0){
			times=0;
		}
		cBottomBox.style.transform=`translateX(${-cBottomBoxW*times}px)`;
	}

	//选项卡
	function xxk(jiadian){ 
		let jdTOPRight=jiadian.getElementsByClassName("jdTOPRight")[0];
		let lis1=jdTOPRight.getElementsByTagName("li");
		let jdBottomRight=jiadian.getElementsByClassName("jdBottomRight");
		// console.log(jiadian,jdBottomRight,jdTOPRight,lis1);
		jdBottomRight[0].style.display="block";
		lis1[0].className="tab-active";
		for(let i=0;i<lis1.length;i++){
			lis1[i].onmouseenter=function(){
				for(let j=0;j<lis1.length;j++){
					jdBottomRight[j].style.display="none";
					lis1[j].className="";
				}
				jdBottomRight[i].style.display="block";
				lis1[i].className="tab-active";
			}
		}
	}
	let jiadian=document.getElementsByClassName("jiadian")[0];
	let zhineng=document.getElementsByClassName("zhineng")[0];
	let dapei=document.getElementsByClassName("dapei")[0];
	let peijian=document.getElementsByClassName("peijian")[0];
	let zhoubian=document.getElementsByClassName("zhoubian")[0];
	xxk(jiadian);
	xxk(zhineng);
	xxk(dapei);
	xxk(peijian);
	xxk(zhoubian);

	//内容
	function nr(wrapper){
		let itemList=wrapper.querySelectorAll("li");
		let nrBtnl=wrapper.querySelector(".nrBtnl");
		let nrBtnr=wrapper.querySelector(".nrBtnr");
		let nrBtn=wrapper.querySelectorAll(".nrBtns h1");
		console.log(itemList,nrBtnl,nrBtnr,nrBtn)
		let current=0,next=0;
		let itemListW=parseInt(window.getComputedStyle(wrapper,null).width);
		let flag=true;
		nrBtn[0].className="circle-active";
		nrBtnr.onclick=function(){
			if(next==itemList.length-1){
				next=itemList.length-1;
				return;
			}
			flag=false;
			move1();
		}
		nrBtnl.onclick=function(){
			if(next==0){
				next=0;
				return;
			}
			flag=false;
			lastMove1();
		}

		nrBtn.forEach(function(v,i){
			v.onclick=function(){
				nrBtn[current].classList.remove("circle-active");
				nrBtn[i].classList.add("circle-active");
				if(current<i){
					itemList[i].style.left=`${itemListW}px`;
					animate(itemList[current],{left:-itemListW});
					animate(itemList[i],{left:0},function(){
						flag=true;
					});
				}
				else if(current>i){
					itemList[i].style.left=`${-itemListW}px`;
					animate(itemList[current],{left:itemListW});
					animate(itemList[i],{left:0},function(){
						flag=true;
					});
				}
				current=next=i;
			}
		})

		function move1(){
			next++;
			if(next==itemList.length){
				next=0;
			}
			nrBtn[current].classList.remove("circle-active");
			nrBtn[next].classList.add("circle-active");
			itemList[next].style.left=`${itemListW}px`;
			animate(itemList[current],{left:-itemListW});
			animate(itemList[next],{left:0},function(){
				flag=true;
			});
			current=next;
		}
		function lastMove1(){
			next--;
			if(next<0){
				next=itemList.length-1;
			}
			nrBtn[current].classList.remove("circle-active");
			nrBtn[next].classList.add("circle-active");
			itemList[next].style.left=-itemListW; 
			animate(itemList[current],{left:itemListW});
			animate(itemList[next],{left:0},function(){
				flag=true;
			});
			current=next;
		}
	}
	let wrapper1=document.getElementsByClassName("wrapper")[0];
	let wrapper2=document.getElementsByClassName("wrapper")[1];
	let wrapper3=document.getElementsByClassName("wrapper")[2];
	let wrapper4=document.getElementsByClassName("wrapper")[3];
	nr(wrapper1);
	nr(wrapper2);
	nr(wrapper3);
	nr(wrapper4);	
	// console.log(wrapper1)
}