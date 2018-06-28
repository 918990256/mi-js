$(function(){
	// 购物车
	$(".shopping").mouseenter(function(){
		$(".shoppingBox").slideDown().css({"box-shadow":"0 2px 2px 2px rgba(0,0,0,.1)"});
	})
	$(".shopping").mouseleave(function(){
		$(".shoppingBox").slideUp().css({"box-shadow":"none"});
	})
	// 侧导航
	let lis=$(".aside li");
	console.log(lis)
	lis.mouseenter(function(){
		$(this).children(".asideBox").css({"display":"block"});
	})
	lis.mouseleave(function(){
		$(this).children(".asideBox").css({"display":"none"});
	})
	//导航
	let navItem=$(".nav-item");
	navItem.mouseenter(function(e){
		e.stopPropagation();
		$(this).children(".navBox").css({"display":"block"});
	})
	navItem.mouseleave(function(e){
		e.stopPropagation();
		$(this).children(".navBox").css({"display":"none"});
	})
	// 选项卡	
	function xxk(parent,son){
		parent.mouseenter(function(){
			let index=$(this).index();
			parent.removeClass('tab-active');
			parent.eq(index).addClass('tab-active');
			son.css({"display":"none"}).eq(index).css({"display":"block"});
		})
	}
	let parent=$(".jiadian .jdTOPRight li");
	let son=$(".jiadian .jdBottomRight");
	let parent1=$(".zhineng .jdTOPRight li");
	let son1=$(".zhineng .jdBottomRight");
	let parent2=$(".dapei .jdTOPRight li");
	let son2=$(".dapei .jdBottomRight");
	let parent3=$(".peijian .jdTOPRight li");
	let son3=$(".peijian .jdBottomRight");
	let parent4=$(".zhoubian .jdTOPRight li");
	let son4=$(".zhoubian .jdBottomRight");
	xxk(parent,son);
	xxk(parent1,son1);
	xxk(parent2,son2);
	xxk(parent3,son3);
	xxk(parent4,son4);
	// 轮播图
	let lis1=$(".imgbox li");
	let btn=$(".btn li");
	currentIndex=0;
	let t=setInterval(move,2000);
	lis1.first().css({"z-index":10});
	btn.first().addClass("btn-hot");
	// 移入移出
	$(".banner").mouseenter(function(){
		clearInterval(t);
	});
	$(".banner").mouseleave(function(){
		t=setInterval(move,2000);
	});
	// 左右按钮
	$(".bannerl").click(function(){
		moveL();
	});
	$(".bannerr").click(function(){
		move();
	});
	// 轮播点
	btn.click(function(){
		let index=$(this).index();
		btn.removeClass("btn-hot").eq(index).addClass("btn-hot");
		lis1.css({"z-index":5}).eq(index).css({"z-index":10});
		currentIndex=index;
	})
	// 正序
	function move(){
		currentIndex++;
		if(currentIndex>lis1.length-1){
			currentIndex=0;
		}
		lis1.css({"z-index":5}).eq(currentIndex).css({"z-index":10});
		btn.removeClass("btn-hot").eq(currentIndex).addClass("btn-hot");
	}
	// 倒序
	function moveL(){
		currentIndex--;
		if(currentIndex<0){
			currentIndex=lis1.length-1;
		}
		lis1.css({"z-index":5}).eq(currentIndex).css({"z-index":10});
		btn.removeClass("btn-hot").eq(currentIndex).addClass("btn-hot");
	}

	// 内容
	function nr(lis2,nrBtnl,nrBtnr,btn1){
		let width=$(lis2).width();
		console.log(btn1);
		let current=0,next=0;
		let flag=true;
		btn1.eq(0).addClass("circle-active");
		nrBtnr.click(function(){
			if(next==lis2.length-1){
				next=lis2.length-1;
				return;
			}
			if(flag==false){
				return;
			}
			flag=false;
			move1();
		});
		nrBtnl.click(function(){
			if(next==0){
				next=0;
				return;
			}
			if(flag==false){
				return;
			}
			flag=false;
			moveL1();
		});

		btn1.click(function(){
			let index=$(this).index();
			btn1.eq(current).removeClass("circle-active");
			btn1.eq(index).addClass("circle-active");
			if(current<index){
				lis2.eq(index).css({"left":width});
				lis2.eq(current).animate({"left":-width});
				lis2.eq(index).animate({"left":0},function(){
					flag=true;
				});
			}
			else if(current>index){
				lis2.eq(index).css({"left":-width});
				lis2.eq(current).animate({"left":width});
				lis2.eq(index).animate({"left":0},function(){
					flag=true;
				});
			}
			current=next=index;
		})
		function move1(){
			next++;
			if(next>lis2.length-1){
				next=lis2.length-1;
			}
			btn1.eq(current).removeClass("circle-active");
			btn1.eq(next).addClass("circle-active");
			lis2.eq(next).css({"left":width});
			lis2.eq(current).animate({left:-width});
			lis2.eq(next).animate({left:0},function(){
				flag=true;
			});
			current=next;
		}
		function moveL1(){
			next--;
			if(next<0){
				next=0;
			}
			btn1.eq(current).removeClass("circle-active");
			btn1.eq(next).addClass("circle-active");
			lis2.eq(next).css({"left":-width});
			lis2.eq(current).animate({left:width});
			lis2.eq(next).animate({left:0},function(){
				flag=true;
			});
			current=next;
		}
	}
	let lis2=$(".wrapper:eq(0) ul li");
	let nrBtnl=$(".wrapper:eq(0) .nrBtnl");
	let nrBtnr=$(".wrapper:eq(0) .nrBtnr");
	let btn1=$(".wrapper:eq(0) .nrBtns h1");
	nr(lis2,nrBtnl,nrBtnr,btn1);
	let lis2a=$(".wrapper:eq(1) ul li");
	let nrBtnla=$(".wrapper:eq(1) .nrBtnl");
	let nrBtnra=$(".wrapper:eq(1) .nrBtnr");
	let btn1a=$(".wrapper:eq(1) .nrBtns h1");
	nr(lis2a,nrBtnla,nrBtnra,btn1a);
	let lis2b=$(".wrapper:eq(2) ul li");
	let nrBtnlb=$(".wrapper:eq(2) .nrBtnl");
	let nrBtnrb=$(".wrapper:eq(2) .nrBtnr");
	let btn1b=$(".wrapper:eq(2) .nrBtns h1");
	nr(lis2b,nrBtnlb,nrBtnrb,btn1b);
	let lis2c=$(".wrapper:eq(3) ul li");
	let nrBtnlc=$(".wrapper:eq(3) .nrBtnl");
	let nrBtnrc=$(".wrapper:eq(3) .nrBtnr");
	let btn1c=$(".wrapper:eq(3) .nrBtns h1");
	nr(lis2c,nrBtnlc,nrBtnrc,btn1c);

	// 明星单品
	let cBottomBox=$(".cBottomBox");
	let button=$(".cTopRight a");
	button.eq(1).click(function(){
		cBottomBox.css({"left":-1240});
	});
	button.eq(0).click(function(){
		cBottomBox.css({"left":0});
		
	});
	

})