$.ajax({
	url: "../json/slide3.json",
	type:"get",
	dataType: "json",
	data : {},
	success: function(data){
		/* for(var i=0; i<data.result.length; i++){
			console.log(data.result[i]);
		} */
		var html='';
		for(var i  in data.result){
			/* html += '<li class="banner"'>;
			html += 'img src='+data.result[i].src+"" class="img">;
			html += '</li'> */
			html=`<li class="banner">
			<img src="${data.result[i].src}" class="img">
			</li>`;
			$(".banners > ul").append(html)
		}
		$('body').imagesLoaded( function() {
			$("#loader").hide();
			var n = 1	;

			$(".banners > ul").append($(".banner").eq(0).clone());
			var end = $(".banner").length - 1;
			var interval = setInterval(ani, 2000);
	
			$(window).on("resize", function(){
				$(".banners").height($(".banner").eq(0).height());//banner의 0번째 높이를 banners의 높이로 가져오고 
			}).trigger("resize"); //아무짓도 실행안했어도 리사이즈이벤을 실행해라
	
			$(".banner").each(function(i){
				$(this).css({"left":(i*100)+"%"});
			});
	
			function ani(){
				$(".banners > ul").stop().fadeIn((-n*100)+"%", 500, function(){
					if(n == end) {
						$(this).css({"left":0});
						n = 1;
					}
					else n++;
				});
			}// images have loaded
		  });
		  

	},
	error: function(xhr){
		console.log(xhr);
	}
});









