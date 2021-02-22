	var questionArr = ['채팅방에 입장하면 나는?', '채팅방의 규모는', '채팅방의 분위기는', '내가 더 중요하게 생각하는 것은?', '나의 일하는 방법은?', '사람들한테 주로 듣는 말은?', '상대방이 잘못한 것이 있을 때 나는?', '외출할 때 나는?', '거절해야 하는 상황이 오면 나는?', '준비물을 준비할 때 나는?', '클럽하우스가 재밌어서 못 잘때 나는?', '나의 여행 스타일은?'];
	var answerOneArr = ['내가 먼저 말을 한다.', '인원이 많은 곳이 좋다.', '왁자지껄한 신나는 분위기가 좋다.','현재가 없으면 미래도 없다.', '남들이 하는대로 하는 것이 편하다.', '독특하다는 말을 자주 듣는다.', '직설적이지만 논리적으로 말한다.','에어팟이나 지갑을 자주 놓고 나온다.','강력하게 할 수 없다고 말한다.', '하루 전 날 미리 준비한다.', '계획에 없던 일이라서 자러간다..', '내가 계획한대로! 계획적으로 일의 순서대로 진행하는 것을 좋아해!'];
	var answerTwoArr = ['대부분 다른 사람이 먼저 말을 건다.', '인원이 적은 곳이 좋다.', '소소하게 대화하는 것이 좋다.', '미래를 생각하지 않으면 발전이 없다.', '나만의 방법을 찾는 편이다.', '꾸준하고 성실하다는 말을 듣는다.', '상처 받지않게 돌려서 말한다.','잊고 나오는 것은 없다.','고민하다가 대부분 들어주는 편이다.', '내일 챙겨야지’ 하다가 까먹고 놓고 오는 일이 많다.', '역시 계획대로 안 되는 것이 인생! 즐기자!!!!', '그때그때 생각나는 대로 일 처리! 융통성 있게 하는 것을 좋아해!'];
	var arr = new Array(11); 
	var i = 0;
	
	
	
	
	$(function() {
		$('.pageNumber').text(i+1 + " / " +questionArr.length);
			$('.question').text(questionArr[i]);
			$('.answerOne').text(answerOneArr[i]);
			$('.answerTwo').text(answerTwoArr[i]);
		  });

	$(function() { 
	
		  $('.answerOne').click( function() {
			  arr[i] = 1;
			  click();
		  });
		  
		  $('.answerTwo').click( function() {
			  arr[i] = 0;
			  click();
		  });
		  
		});

		
	function click(){
		i++;
		$('.pageNumber').text(i+1 + " / " +questionArr.length);
		$('.question').text(questionArr[i]);
		$('.answerOne').text(answerOneArr[i]);
		$('.answerTwo').text(answerTwoArr[i]);
		if (i > 11) {
			getValue();
		}

	}
		
		
		function getValue() {
			if(arr[0]+arr[1]+arr[2] > 1) {
				$('input[name=EI]').val('E');
			} else {
				$('input[name=EI]').val('I');
			}
			
			if(arr[3]+arr[4]+arr[5] > 1) {
				$('input[name=SN]').val('S');
			} else {
				$('input[name=SN]').val('N');
			}
			
			if(arr[6]+arr[7]+arr[8] > 1) {
				$('input[name=TF]').val('T');
			} else {
				$('input[name=TF]').val('F');
			}
			
			if(arr[9]+arr[10]+arr[11] > 1) {
				$('input[name=JP]').val('J');
			} else {
				$('input[name=JP]').val('P');
			}
			
			test.method="post";
			test.action="result.jsp";
			test.submit();
		}
		