$(document).ready(function(){



	//wow.js init
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 100
		}
	);
	wow.init();
	
//滚动	
	
	$('#arrow-down').on('click',function(e){
		e.preventDefault();
		return $("html,body").animate({scrollTop:$('#contain').offset().top},900);
	})
	    
	
	//banner 轮播图
	var oBanner=$('#banner');
	var oBannerUl=$('#banner ul');
	var aBannerLi=$('#banner ul li')
	var oForWard=$('#banner .forward');
	var oBackWard=$('#banner .backward');
	var aBtn=$('#banner ol li');
	var zIndex=2;
    var timer=null;
	var now=0;
	aBtn.click(function(){
		now=$(this).index();
		tab();
			
	});
		
	var timer=setInterval(next,1000);
	
	oBanner.hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(next,1000);
	});
	
	oBackWard.click(function(){
		next();
	})
	oForWard.click(function(){
		now--;
		now%=aBtn.length;
		tab();
	})
	
	function next(){
		now++;
		now%=aBtn.length;
		tab();
	}
	
	function tab(){
		 aBtn.removeClass('active');
		//aDiv.css('opacity',0);
		aBannerLi.stop().animate({opacity:0});
		
		aBtn.eq(now).addClass('active');
		//aDiv.eq($(this).index()).css('opacity',1);
		aBannerLi.eq(now).css('z-index',zIndex++);
		aBannerLi.eq(now).stop().animate({opacity:1});
	}
	
	//mode1选项卡
	
  var aNavBtn=$('#nav_tab li');
 
  var aImgContent=$('.tab_contain>div');
  var oPoint=$('.point');
   aNavBtn.click(function(){
	   aNavBtn.removeClass('active_img');
	  
	   aImgContent.removeClass('show_img');
	   $(this).addClass('active_img');
	   aImgContent.eq($(this).index()).addClass('show_img');
	   
	})

//唱片翻牌滚动

   var aFolkBlum=$('.ch-grid li>div');
		aFolkBlum.hover(function(){
			$(this).css('transform','rotateY(180deg)');
		},function() {
			$(this).css('transform','rotateY(0deg)');
		});
	

//move  选项卡
     var aMoveButton=$('.nav--maxamed button');
 
	  var aMoveContent=$('.move_content ul');
	  
	   aMoveButton.click(function(){
		   aMoveButton.removeClass('nav__item--current');	  
		   aMoveContent.removeClass('show_move');
		   $(this).addClass('nav__item--current');
		   aMoveContent.eq($(this).index()).addClass('show_move');
		   
		})



//movie tab 动画
     var aMovieCollect=$('.move_list1 li>div');
		aMovieCollect.hover(function(){
			$(this).css('transform','rotateY(180deg)')
		},function(){
			$(this).css('transform','rotateY(0deg)')
		});
	
	var aMovieListF=$('.move_list5 li');
	    aMovieListF.hover(function(){ 
			$(this).stop().addClass('swing animated');
			
		},function(){
			$(this).removeClass('swing animated');
			
		});
		
	var aMovieListS=$('.move_list6 li');
	    aMovieListS.hover(function(){ 
			$(this).stop().addClass('tada animated');
			
		},function(){
			$(this).removeClass('tada animated');
			
		});
	 
//mode4

//翻页 

    var oReadContainer = $('.read_container')
	var oLeft = $('.container_left')
	var oRight = $('.container_right')
	var oFront = $('.flip_front')
	var oBack = $('.flip_back')
	var oFlip = $('.container_flip')

	var currentIndex = 0;

	setImage();
    oRight.css('backgroundPosition','-300px 0')
	oFront.css('backgroundPosition','-300px 0')

	oReadContainer.click(function(){
		oFlip.css('transition','1s')
<!--翻拍选择180角度，将反面到左面覆盖原左面背景图-->
		oFlip.css('transform','rotateY(-180deg)')
	})

	oFlip[0].addEventListener('transitionend',function(){
		currentIndex++;
		setImage();
<!--清空变换或的粘稠-->
		oFlip.css('transition','')
		oFlip.css('transform','')
		

	},false)

<!--左右和翻页的正反面背景图布局-->
	function setImage(){
		oLeft.css('backgroundImage','url(img/'+currentIndex%3+'.jpg)')
		oRight.css('backgroundImage','url(img/'+(currentIndex+1)%3+'.jpg)')

        oFront.css('backgroundImage','url(img/'+currentIndex%3+'.jpg)')
		oBack.css('backgroundImage','url(img/'+(currentIndex+1)%3+'.jpg)')
	} 

//手风琴


	$('.trave_list1 h4').click(function(){
		$(this)
			.addClass('current')
			.next()
			.slideDown()
			.parent()
			.siblings()
			.children('h4')
			.removeClass('current')
			.next()
			.slideUp()
	});
//九宫格

//悬浮框

   $(window).scroll( function() { 
         if($("html,body").scrollTop>=0){
				$('#leftsead').css('opacity',0);	
			}else{
				$('#leftsead').css('opacity',1);	
	      }

   });
  
   $("#leftsead a").hover(function(){
		if($(this).prop("className")=="youhui"){
			$(this).children("img.hides").show();
		}else{
			$(this).children("img.hides").show();
			$(this).children("img.shows").hide();
			$(this).children("img.hides").animate({marginRight:'0px'},'slow'); 
		}
	},function(){ 
		if($(this).prop("className")=="youhui"){
			$(this).children("img.hides").hide('slow');
		}else{
			$(this).children("img.hides").animate({marginRight:'-143px'},'slow',function(){$(this).hide();$(this).next("img.shows").show();});
		}
	});
     	
	$("#top_btn").click(function(){if(scroll=="off") return;$("html,body").animate({scrollTop: 0}, 600);});
   
    
//
   
});
// JavaScript Document