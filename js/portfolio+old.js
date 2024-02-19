$(document).ready(function(){
	
	//메뉴클릭시 각 항목 활성화 (파란글씨)
	$("body>nav a").click(function(){
		$("body>nav a").removeClass("act");
		$(this).addClass("act");
	});
	
	
	//타이핑효과
	const typing = "안녕하세요.\n홍길동의 포트폴리오입니다.";
	//alert(type);
	//console.log(type.length); //output_  22
	let i = 0;
	let txt = "";
	function type(){
		if(i<typing.length){
			txt += typing[i];			
			document.getElementById("typing").innerText= txt;
			i++;
			setTimeout(type , 150);
		}
	}
	type();
	
	
	//스크롤 이벤트
	let t1 = $(window).scrollTop();//스크롤 초기값
	let t2; //내린후의 값
	let t3;  //비교
	
	//각 콘텐츠의 top위치값 
	const pos_0 = $("#top").offset().top;
	const pos_1 = $("#about").offset().top;
	const pos_2 = $("#portfolio").offset().top;
	const pos_3 = $("#event").offset().top;
	const pos_4 = $("#contact").offset().top;
	
	//휴대폰화면이 아닐때__ 데스트탑화면: 시작
	if($(window).width()>600){
		
		$(window).scroll(function(){
			t2 = $(window).scrollTop();
			//console.log(t1);
			t3 = t2 - t1; //비교값
			
			//스크롤탑위치가 "about"오프셋탑위치와 크거나같다면--상단바 유지
			if(  $(window).scrollTop() >=  pos_1 - 5  ) {
				$("body>nav").addClass("act");
				//상단메뉴 항목 활성화 (파란글씨)
				$("body>nav a").removeClass("act");
				$("body>nav a").eq(1).addClass("act");
			}
			
			//스크롤탑위치가 "about"오프셋탑위치보다 작다면 -- 상단바 배경투명
			if(  $(window).scrollTop() <  pos_1 - 5   ) {
				$("body>nav").removeClass("act");
				//상단메뉴 항목 활성화 (파란글씨)
				$("body>nav a").removeClass("act");
				$("body>nav a").eq(0).addClass("act");
			}			
			
			//포트폴리오 : 첫번째
			if( $(window).scrollTop() >1400){
				$("#leeum").addClass("act");
				$("body>nav a").removeClass("act");
				$("body>nav a").eq(2).addClass("act");
			}
			if( $(window).scrollTop() >2200){
				$("#burts").addClass("act");
			}
			if( $(window).scrollTop() >3200){
				$("#tae").addClass("act");
			}
			
			//상단메뉴 'Event' 항목 활성화 (파란글씨)
			if( $(window).scrollTop() >= pos_3 - 100){
				$("body>nav a").removeClass("act");
				$("body>nav a").eq(3).addClass("act");
			}
			//상단메뉴 'Contact' 항목 활성화 (파란글씨)
			if( $(window).scrollTop() >= pos_4 - 100){
				$("body>nav a").removeClass("act");
				$("body>nav a").eq(4).addClass("act");
			}
			
		});
	}//////////데스트탑화면: 끝
	
	//휴대폰화면: 시작
	else {
		$("body>nav").addClass("act");
		$("#portfolio>section").addClass("act");
		
		//햄버거(닫기)아이콘 (휴대폰) 클릭관련
		let n = 0;
		$("body>nav button").click(function(){
			n++;
			if(n==1){
				$(this).removeClass("fa-bars").addClass("fa-times");
				$("body>nav.act").css("height","100vh");
				$("body>nav>div div").show();				
			}else{				
				$(this).addClass("fa-bars").removeClass("fa-times");
				$("body>nav.act").css("height","initial");
				$("body>nav>div div").hide();
				n=0;
			}			
		});	
		//메뉴 각항목 클릭 (휴대폰): start
		$("body>nav a").click(function(){
			$("body>nav button").addClass("fa-bars").removeClass("fa-times");
			$("body>nav.act").css("height","initial");
			$("body>nav>div div").hide();
			n=0;
		});/////메뉴 각항목 클릭: end
		
		
		
		
	}////////////휴대폰화면: 끝
	
	
	/////////////////////////////
	//이벤트디자인 썸네일클릭시 팝업(큰이미지)
	$("#event>div>div").click(function(){
			//썸네일이미지에서 주소와 alt를 get
			const src1 = $(this).children("img").attr("src");
			const src2 = src1.replace(".jpg" , "_big.jpg");
			const alt = $(this).children("img").attr("alt");
			$("#popup h3").text(alt);		
			$("#popup img").attr({"src": src2  , "alt": alt });			
			$("#popup").fadeIn();
	});
	//팝업(큰이미지)--닫기	
	$("#popup img").click(function(){
		$("#popup").fadeOut();
	});
	
	
});//////////end
