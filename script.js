$(function(){
    	//main05 arrow 클릭시 슬라이드
	//우클릭
	$('.m05_arrow_next').click(function(){
		$('.container_1100').css({width:'auto'});
		$('.main05 .m05_textbox').stop().animate({
			width:'0px',
			opacity:0,
			display:'none'
		},300,function(){
				$('.m05_content').stop().animate({
					marginLeft:'-1100px',
				},500,function(){
					$('.m05_cont').eq(0).appendTo('.m05_content');
					$('.m05_content').css({marginLeft:0})
					$('.m05_cont.on').removeClass('on').addClass('off').next().removeClass('off').addClass('on');
					$('.main05 .m05_textbox').stop().animate({
						width:'515px',
						opacity:1,
						display:'block'
					},300);
					$('.container_1100').stop().animate({width:'1100px'},300);
				});
			
		});
		

	});
	//좌클릭
	$('.m05_arrow_prev').click(function(){
		$('.container_1100').css({width:'auto'});
		$('.main05 .m05_textbox').stop().animate({
			width:'0px',
			opacity:0,
			display:'none'
		},300,function(){
				$('.m05_cont.on').removeClass('on').addClass('off');
				$('.m05_cont.off').eq(0).removeClass('off').addClass('on');
				$('.m05_content').stop().animate({
					marginLeft:'1100px',
				},500,function(){
					$('.m05_cont').eq(3).prependTo('.m05_content');
					$('.m05_content').css({marginLeft:0});
					$('.main05 .m05_textbox').show().css({
							width:'calc(100% - 585px)',
							opacity:1,
							display:'block'
						},300);
					$('.container_1100').stop().animate({width:'1100px'},300);
				});
		});

	});
});