$(function(){
	//当前页数
	var num=0;
	//总页数
	var total=$("#banner ul li:last").index();
	//滑动列表
	var slide=$("#banner ul");
	//圆点列表
	var roundList=$("#point img");
	//点击圆点	
	roundList.mouseover(function(){
		$(this).attr("src","images/point1.png")
		.css({top: '307px'})
		.siblings().attr("src","images/point2.png")
		.css({top: '310px'});
		var index=$(this).index();
		var c=num-index;
		if(c>0){
			for(var i=0;i<c;i++){
				num--;
				if(num<0){
					num=4;
				};	
				showimgR(num);

			}
		}else if(c<0){
			for(var i=0;i>c;i--){
				num++;
				if(num>total){
					num=0;
				};
				showimgL(num);
				
			}	
			return false;
		}
		
		/*var marginleft=-(1024*index)+"px";
		$("#banner ul").animate({marginLeft:marginleft}, 700,function(){
				if(index==0){
					$("#banner ul").css("marginLeft","-1024px")
					.find("li:last")
					.insertBefore($("#banner li:first"));

				}
				if(index==$("#banner ul li:last").index()){
					$("#banner ul").css("marginLeft","-1024px")
					.find("li:first")
					.appendTo($("#banner ul"));

				}		
		});*/

	
	});
	//点击向左滑动按钮
	$("#left").click(function(){
		num++;
		if(num>4){
			num=0;
		}
		showimgL(num);
		return false;
	});
	//点击向滑右动按钮
	$("#right").click(function(){
		num--;
		if(num<0){
			num=4;
		}
		showimgR(num);
		return false;
	});
	
	
	//设置ul的宽度
	slide.width(($("#banner ul li:last").index()+1)*1024);
	//图片向右滑动
	function showimgR(num){

		roundList.eq(num).attr("src","images/point1.png")
		.css({top: '307px'})
		.siblings().attr("src","images/point2.png")
		.css({top: '310px'});
		
		slide.animate({left:'-1024px'},700,function(){
		$(this).css("left","-2048px")
		.find("li:last")
		.insertBefore($("#banner li:first"));
		})
	};
	//图片向左滑动
	function showimgL(num){
		
		roundList.eq(num).attr("src","images/point1.png")
		.css({top: '307px'})
		.siblings().attr("src","images/point2.png")
		.css({top: '310px'});
		
		slide.animate({left:'-1024px'},700,function(){
		$(this).css("left","0px")
		.find("li:first")
		.appendTo($("#banner ul"));
		})

	};

	//设置定时器
	$("#banner").hover(function() {
		clearInterval(adTimer);
	}, showimg1=function() {
		adTimer = setInterval(function(){
		showimgL(num);
		num++;
		if(num>4){
			num=0;
		}
		},3500);
	});
	showimg1();
});