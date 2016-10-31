//首页导航条
		$('#menu li').mouseover(function() {
				var _index = $(this).index();
				$(this).css({
					background: 'deepskyblue'
				}).siblings().css({
					background: ''
				});

			})
			//右侧图片
		$('.top_kefu').mouseover(function() {
			$('.top_kefu2').css({
				display: 'block'
			});
			$('#logoend span').css({
				display: 'block',
				position: 'absolute',
				top: '52px',
			})
		})
		$('.top_kefu').mouseout(function() {
				$('.top_kefu2').css({
					display: 'none'
				});
				$('#logoend span').css({
					display: 'none'
				});
			})
			//产品的导航
		$('#menu1').mouseover(function() {
			$('.vivo-menu-series').css({
				display: 'block',
			})
		}).mouseout(function() {
			$('.vivo-menu-series').css({
				display: 'none',
			})
		})
		$('.vivo-menu-series').mouseover(function() {
				$('.vivo-menu-series').css({
					display: 'block'
				})
			}).mouseout(function() {
				$('.vivo-menu-series').css({
					display: 'none'
				})
			})
			//轮播开始部分

		$('.wrap-1 li').click(function() {
			clearInterval(timer);
			var _index = $(this).index();
			$(this).css({
				background: 'deepskyblue'
			}).siblings().css({
				background: ''
			});
			num = _index;
			$('.box').eq(_index).fadeIn().siblings().fadeOut();
			active();
			timer = setInterval(moveone, 2500);
		})
		var num = 0;
		$(function() {
			//自动轮播
			timer = null;
			timer = setInterval(moveone, 2500);
			var _index = $(this).index();
			num = _index;
			//			$(_index).css({
			//				background: 'deepskyblue'
			//			}).siblings().css({
			//				background: ''
			//			});
		});

		function moveone() {
			num++;
			if(num > 4) {
				num = 0;
			}
			active();
		}

		function active() {

			//第一部分动画
			$('.box1-b').css({
				top: -30,
				opacity: 0
			}).animate({
				top: 0,
				opacity: 1
			}, 1800, 'linear');
			$('.left-pic').css({
				top: 250,
				opacity: 0
			}).animate({
				top: 300,
				opacity: 1
			}, 1200, 'linear');
			$('.box1-c').css({
				left: 60,
				top: 80
			}).animate({
				left: 65,
				top: 70
			}, 1200, 'linear');
			$('.box1-d').css({
				left: 65,
				top: 100,
				opacity: 0.5
			}).animate({
				left: 60,
				top: 120,
				opacity: 1
			}, 1200, 'linear');
			$('.right-pic').css({
					left: '40%',
					top: 0
				})
				//第二部分动画
			$('.box2-b').css({
				top: 140,
				opacity: 0
			}).animate({
				top: 160,
				opacity: 1
			}, 1800, 'linear');
			$('.left-pic2 ').css({
				top: 160,
				opacity: 0
			}).animate({
				top: 180,
				opacity: 1
			}, 1000, 'linear');
			$('.box2-c').css({
				top: 350
			}).animate({
				top: 380
			}, 1000, 'linear');
			$('.box2-d').css({
				top: 360,
				'z-index': 3,
			}).animate({
				top: 380
			}, 1500, 'linear');
			$('.box2-e').css({
				top: 450
			}).animate({
				top: 480
			}, 1200, 'linear');
			//第三张
			$('.box3-a').css({
				top: 0,
				opacity: 0
			}).animate({
				top: 10,
				opacity: 1
			}, 1800, 'linear');
			$('.left-pic3 ').css({
				top: 220,
				opacity: 0
			}).animate({
				top: 240,
				opacity: 1
			}, 1000, 'linear');
			//第四张
			$('.box4-b').css({
				top: -30,
				opacity: 0
			}).animate({
				top: 0,
				opacity: 1
			}, 1800, 'linear');
			$('.left-pic4').css({
				top: 250,
				opacity: 0
			}).animate({
				top: 300,
				opacity: 1
			}, 1200, 'linear');
			$('.box4-c').css({
				left: 150
			}).animate({
				left: 100
			}, 1000, 'linear');
			$('.box4-d').css({
				left: 150,
				'z-index': 3,
			}).animate({
				left: 100
			}, 1500, 'linear');
			//第五张
			$('.box5-a').css({
				top: -50,
				opacity: 0
			}).animate({
				top: 0,
				opacity: 1
			}, 1800, 'linear');
			$('.left-pic5').css({
				top: 200,
				opacity: 0
			}).animate({
				top: 250,
				opacity: 1
			}, 1500, 'linear')
			$('.box5-b').css({
				left: 80,
				opacity: 0
			}).animate({
				left: 40,
				opacity: 1
			}, 2300, 'linear');
			$('.box5-c').css({
				left: 100,
				opacity: 0
			}).animate({
				left: 40,
				opacity: 1
			}, 1800, 'linear');
			$('.box5-d').css({
				left: 150,
				opacity: 0
			}).animate({
				left: 40,
				opacity: 1
			}, 1500, 'linear');
			$('.box').eq(num).fadeIn().siblings().fadeOut();
			$('.box1-containe li').eq(num).css({
				background: 'deepskyblue'
			}).siblings().css({
				background: ''
			});
		}
		//滚轮事件
		$(window).scroll(function() {
				$("#wrap-box").css("filter", "blur(" + $("body").scrollTop() / 10 + "px)")
					.css("-webkit-filter", "blur(" + $("body").scrollTop() / 10 + "px)")

				$("#contain").css("top", 100 - $("body").scrollTop() + "%")
				if(100 - $("body").scrollTop() <= 0) {
					$("#contain").css("top", 0)
				}
				if($("body").scrollTop() >= $("body").height() ) {
					$("#wrap-box").hide()
				} else {
					$("#wrap-box").show()
				}

			})