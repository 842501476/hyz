'use strict';

$(function () {
	// var iW = $('#mainBanner li').eq(0).outerWidth();
	// console.log(iW);
	$('#mainBanner li').css('opacity', 0);
	$('#mainBanner li').eq(0).css('opacity', 1);

	var now = 0; //当前可视区的li下标
	var timer = null;
	timer = setInterval(next, 4000); //每隔两秒切下一张

	function next() {
		//旧图挪走：左侧
		$('#mainBanner li').eq(now).animate({ 'opacity': 0 }, 800, 'linear');

		//新图

		now = ++now > $('#mainBanner li').size() - 1 ? 0 : now;
		$('#mainBanner li').eq(now).css('opacity', 0);
		$('#mainBanner li').eq(now).animate({ 'opacity': 1 }, 800, 'linear');
		$('#em1').html(now + 1);
	}

	function prev() {
		//旧图挪走：左侧
		$('#mainBanner li').eq(now).animate({ 'opacity': 0 }, 800, 'linear');

		//新图
		now = --now < 0 ? $('#mainBanner li').size() - 1 : now;
		$('#mainBanner li').eq(now).css('opacity', 0);
		$('#mainBanner li').eq(now).animate({ 'opacity': 1 }, 800, 'linear');
		$('#em1').html(now + 1);
	}
	//鼠标经过停止
	$('#lbt1').hover(function () {
		clearInterval(timer);
	}, function () {
		timer = setInterval(next, 4000);
	});

	$('#lbt1').on('click', '#prev', function () {
		//切换到上一张

		prev();
	});

	$('#lbt1').on('click', '#next', function () {
		//切换到下一张
		next();
	});
});

//首页轮播图1
$(function () {
	$('#lbt2 li').css('opacity', 0);
	$('#lbt2 li').eq(0).css('opacity', 1);

	var now = 0; //当前可视区的li下标
	function next() {
		//旧图挪走：左侧
		$('#lbt2 li').eq(now).animate({ 'opacity': 0 }, 800, 'linear');

		//新图
		now = ++now > $('#lbt2 li').size() - 1 ? 0 : now;
		$('#lbt2 li').eq(now).css('opacity', 0);
		$('#lbt2 li').eq(now).animate({ 'opacity': 1 }, 800, 'linear');
		light();
	}

	function prev() {
		//旧图挪走：左侧
		$('#lbt2 li').eq(now).animate({ 'opacity': 0 }, 800, 'linear');

		//新图
		now = --now < 0 ? $('#lbt2 li').size() - 1 : now;
		$('#lbt2 li').eq(now).css('opacity', 0);
		$('#lbt2 li').eq(now).animate({ 'opacity': 1 }, 800, 'linear');
		light();
	}

	//3.焦点跟随
	function light() {
		$('#span2 li').eq(now).addClass('slick-active').siblings().removeClass('slick-active');
	}

	//4.点击上下按钮可以切图

	$('#leftCont').on('click', '#prev1', function () {
		//切换到上一张
		prev();
	});

	$('#leftCont').on('click', '#next1', function () {
		//切换到下一张
		next();
	});

	//5.点击焦点可以跳转
	$('#leftCont').on('mousemove', '#span2 li', function () {
		var index = $(this).index();
		if (index > now) {
			//从右侧进入可视区
			//旧图：放到左边
			$('#lbt2 li').eq(now).animate({ 'opacity': 0 }, 800, 'linear');
			//新图：快速放在右侧，再挪进来
			$('#lbt2 li').eq(index).css('opacity', 0);
			$('#lbt2 li').eq(index).animate({ 'opacity': 1 }, 800, 'linear');
			now = index;
		}

		if (index < now) {
			//从左侧进入可视区
			//旧图：放到右边
			$('#lbt2 li').eq(now).animate({ 'opacity': 0 }, 800, 'linear');
			//新图：快速放在左侧，再挪进来
			$('#lbt2 li').eq(index).css('opacity', 0);
			$('#lbt2 li').eq(index).animate({ 'opacity': 1 }, 800, 'linear');
			now = index;
		}

		light();
	});
});

//首页轮播图2
$(function () {
	$('#lbt3 li').css('opacity', 0);
	$('#lbt3 li').eq(0).css('opacity', 1);

	var now = 0; //当前可视区的li下标
	var timer = null;
	timer = setInterval(next, 4000); //每隔两秒切下一张
	function next() {
		//旧图挪走：左侧
		$('#lbt3 li').eq(now).animate({ 'opacity': 0 }, 800, 'linear');

		//新图
		now = ++now > $('#lbt3 li').size() - 1 ? 0 : now;
		$('#lbt3 li').eq(now).css('opacity', 0);
		$('#lbt3 li').eq(now).animate({ 'opacity': 1 }, 800, 'linear');
		light();
	}

	function prev() {
		//旧图挪走：左侧
		$('#lbt3 li').eq(now).animate({ 'opacity': 0 }, 800, 'linear');

		//新图
		now = --now < 0 ? $('#lbt3 li').size() - 1 : now;
		$('#lbt3 li').eq(now).css('opacity', 0);
		$('#lbt3 li').eq(now).animate({ 'opacity': 1 }, 800, 'linear');
		light();
	}

	//3.焦点跟随
	function light() {
		$('#span3 li').eq(now).addClass('slick-active').siblings().removeClass('slick-active');
	}

	$('#rightCont').hover(function () {
		clearInterval(timer);
	}, function () {
		timer = setInterval(next, 4000);
	});
	//4.点击上下按钮可以切图

	$('#rightCont').on('click', '#prev3', function () {
		//切换到上一张
		prev();
	});

	$('#rightCont').on('click', '#next3', function () {
		//切换到下一张
		next();
	});

	//5.点击焦点可以跳转
	$('#rightCont').on('mousemove', '#span3 li', function () {
		var index = $(this).index();
		if (index > now) {
			//从右侧进入可视区
			//旧图：放到左边
			$('#lbt3 li').eq(now).animate({ 'opacity': 0 }, 800, 'linear');
			//新图：快速放在右侧，再挪进来
			$('#lbt3 li').eq(index).css('opacity', 0);
			$('#lbt3 li').eq(index).animate({ 'opacity': 1 }, 800, 'linear');
			now = index;
		}

		if (index < now) {
			//从左侧进入可视区
			//旧图：放到右边
			$('#lbt3 li').eq(now).animate({ 'opacity': 0 }, 800, 'linear');
			//新图：快速放在左侧，再挪进来
			$('#lbt3 li').eq(index).css('opacity', 0);
			$('#lbt3 li').eq(index).animate({ 'opacity': 1 }, 800, 'linear');
			now = index;
		}

		light();
	});
});

//首页轮播图3
$(function () {
	$('#lbt4 ul').css({ 'opacity': 0, 'zIndex': 0 });
	$('#lbt4 ul').eq(0).css({ 'opacity': 1, 'zIndex': 9998 });

	var now = 0; //当前可视区的li下标
	var timer = null;
	timer = setInterval(next, 4000); //每隔两秒切下一张
	function next() {
		//旧图挪走：左侧
		$('#lbt4 ul').eq(now).animate({ 'opacity': 0, 'zIndex': 0 });

		//新图
		now = ++now > $('#lbt4 ul').size() - 1 ? 0 : now;
		$('#lbt4 ul').eq(now).css({ 'opacity': 0, 'zIndex': 0 });
		$('#lbt4 ul').eq(now).animate({ 'opacity': 1, 'zIndex': 9998 });
		light();
	}

	function prev() {
		//旧图挪走：左侧
		$('#lbt4 ul').eq(now).animate({ 'opacity': 0, 'zIndex': 0 });

		//新图
		now = --now < 0 ? $('#lbt4 ul').size() - 1 : now;
		$('#lbt4 ul').eq(now).css({ 'opacity': 0, 'zIndex': 0 });
		$('#lbt4 ul').eq(now).animate({ 'opacity': 1, 'zIndex': 9998 });
		light();
	}

	//3.焦点跟随
	function light() {
		$('#span4 li').eq(now).addClass('slick-active').siblings().removeClass('slick-active');
	}

	$('#bt4').hover(function () {
		clearInterval(timer);
	}, function () {
		timer = setInterval(next, 4000);
	});
	//4.点击上下按钮可以切图

	$('#bt4').on('click', '#prev4', function () {
		//切换到上一张
		prev();
	});

	$('#bt4').on('click', '#next4', function () {
		//切换到下一张
		next();
	});

	//5.点击焦点可以跳转
	$('#bt4').on('mousemove', '#span4 li', function () {
		var index = $(this).index();
		if (index > now) {
			//从右侧进入可视区
			//旧图：放到左边
			$('#lbt4 ul').eq(now).animate({ 'opacity': 0, 'zIndex': 0 }, 800, 'linear');
			//新图：快速放在右侧，再挪进来
			$('#lbt4 ul').eq(index).css({ 'opacity': 0, 'zIndex': 0 });
			$('#lbt4 ul').eq(index).animate({ 'opacity': 1, 'zIndex': 9998 }, 800, 'linear');
			now = index;
		}

		if (index < now) {
			//从左侧进入可视区
			//旧图：放到右边
			$('#lbt4 ul').eq(now).animate({ 'opacity': 0, 'zIndex': 0 }, 800, 'linear');
			//新图：快速放在左侧，再挪进来
			$('#lbt4 ul').eq(index).css({ 'opacity': 0, 'zIndex': 0 });
			$('#lbt4 ul').eq(index).animate({ 'opacity': 1, 'zIndex': 9998 }, 800, 'linear');
			now = index;
		}

		light();
	});
});

//首页轮播图4
$(function () {
	// var iW = $('#mainBanner li').eq(0).outerWidth();
	// console.log(iW);
	$('#lbt5 ul').css({ 'opacity': 0, 'zIndex': 0 });
	$('#lbt5 ul').eq(0).css({ 'opacity': 1, 'zIndex': 9998 });

	var now = 0; //当前可视区的li下标
	var timer = null;
	timer = setInterval(next, 4000); //每隔两秒切下一张

	function next() {
		//旧图挪走：左侧
		$('#lbt5 ul').eq(now).animate({ 'opacity': 0, 'zIndex': 0 });

		//新图

		now = ++now > $('#lbt5 ul').size() - 1 ? 0 : now;
		$('#lbt5 ul').eq(now).css({ 'opacity': 0, 'zIndex': 0 });
		$('#lbt5 ul').eq(now).animate({ 'opacity': 1, 'zIndex': 9998 });
		$('#emz1').html(now + 1);
	}

	function prev() {
		//旧图挪走：左侧
		$('#lbt5 ul').eq(now).animate({ 'opacity': 0, 'zIndex': 0 });
		//新图
		now = --now < 0 ? $('#lbt5 ul').size() - 1 : now;
		$('#lbt5 ul').eq(now).css({ 'opacity': 0, 'zIndex': 0 });
		$('#lbt5 ul').eq(now).animate({ 'opacity': 1, 'zIndex': 9998 });
		$('#emz1').html(now + 1);
	}
	//鼠标经过停止
	$('#zhong1').hover(function () {
		clearInterval(timer);
	}, function () {
		timer = setInterval(next, 4000);
	});

	$('#zhong1').on('click', '#prev5', function () {
		//切换到上一张

		prev();
	});

	$('#zhong1').on('click', '#next5', function () {
		//切换到下一张
		next();
	});
});

//首页轮播图5
$(function () {
	// var iW = $('#mainBanner li').eq(0).outerWidth();
	// console.log(iW);
	$('#lbt6 ul').css({ 'opacity': 0, 'zIndex': 0 });
	$('#lbt6 ul').eq(0).css({ 'opacity': 1, 'zIndex': 9998 });

	var now = 0; //当前可视区的li下标
	var timer = null;
	timer = setInterval(next, 4000); //每隔两秒切下一张

	function next() {
		//旧图挪走：左侧
		$('#lbt6 ul').eq(now).animate({ 'opacity': 0, 'zIndex': 0 });

		//新图

		now = ++now > $('#lbt6 ul').size() - 1 ? 0 : now;
		$('#lbt6 ul').eq(now).css({ 'opacity': 0, 'zIndex': 0 });
		$('#lbt6 ul').eq(now).animate({ 'opacity': 1, 'zIndex': 9998 });
		$('#emz2').html(now + 1);
	}

	function prev() {
		//旧图挪走：左侧
		$('#lbt6 ul').eq(now).animate({ 'opacity': 0, 'zIndex': 0 });
		//新图
		now = --now < 0 ? $('#lbt6 ul').size() - 1 : now;
		$('#lbt6 ul').eq(now).css({ 'opacity': 0, 'zIndex': 0 });
		$('#lbt6 ul').eq(now).animate({ 'opacity': 1, 'zIndex': 9998 });
		$('#emz2').html(now + 1);
	}
	//鼠标经过停止
	$('#zhong2').hover(function () {
		clearInterval(timer);
	}, function () {
		timer = setInterval(next, 4000);
	});

	$('#zhong2').on('click', '#prev6', function () {
		//切换到上一张

		prev();
	});

	$('#zhong2').on('click', '#next6', function () {
		//切换到下一张
		next();
	});
});
//首页轮播图6
$(function () {
	// var iW = $('#mainBanner li').eq(0).outerWidth();
	// console.log(iW);
	$('#lbt7 ul').css({ 'opacity': 0, 'zIndex': 0 });
	$('#lbt7 ul').eq(0).css({ 'opacity': 1, 'zIndex': 9998 });

	var now = 0; //当前可视区的li下标
	var timer = null;
	timer = setInterval(next, 4000); //每隔两秒切下一张

	function next() {
		//旧图挪走：左侧
		$('#lbt7 ul').eq(now).animate({ 'opacity': 0, 'zIndex': 0 });

		//新图

		now = ++now > $('#lbt7 ul').size() - 1 ? 0 : now;
		$('#lbt7 ul').eq(now).css({ 'opacity': 0, 'zIndex': 0 });
		$('#lbt7 ul').eq(now).animate({ 'opacity': 1, 'zIndex': 9998 });
		$('#emz3').html(now + 1);
	}

	function prev() {
		//旧图挪走：左侧
		$('#lbt7 ul').eq(now).animate({ 'opacity': 0, 'zIndex': 0 });
		//新图
		now = --now < 0 ? $('#lbt7 ul').size() - 1 : now;
		$('#lbt7 ul').eq(now).css({ 'opacity': 0, 'zIndex': 0 });
		$('#lbt7 ul').eq(now).animate({ 'opacity': 1, 'zIndex': 9998 });
		$('#emz3').html(now + 1);
	}
	//鼠标经过停止
	$('#zhong3').hover(function () {
		clearInterval(timer);
	}, function () {
		timer = setInterval(next, 4000);
	});

	$('#zhong3').on('click', '#prev7', function () {
		//切换到上一张

		prev();
	});

	$('#zhong3').on('click', '#next7', function () {
		//切换到下一张
		next();
	});
});

//首页轮播图7(末尾)
$(function () {
	// var iW = $('#mainBanner li').eq(0).outerWidth();
	// console.log(iW);
	$('#lbt9 ul').css('opacity', 0);
	$('#lbt9 ul').eq(0).css('opacity', 1);

	var now = 0; //当前可视区的li下标
	var timer = null;
	timer = setInterval(next, 4000); //每隔两秒切下一张

	function next() {
		//旧图挪走：左侧
		$('#lbt9 ul').eq(now).animate({ 'opacity': 0 }, 800, 'linear');

		//新图

		now = ++now > $('#lbt9 ul').size() - 1 ? 0 : now;
		$('#lbt9 ul').eq(now).css('opacity', 0);
		$('#lbt9 ul').eq(now).animate({ 'opacity': 1 }, 800, 'linear');
		$('#emx1').html(now + 1);
	}

	function prev() {
		//旧图挪走：左侧
		$('#lbt9 ul').eq(now).animate({ 'opacity': 0 }, 800, 'linear');
		//新图
		now = --now < 0 ? $('#lbt9 ul').size() - 1 : now;
		$('#lbt9 ul').eq(now).css('opacity', 0);
		$('#lbt9 ul').eq(now).animate({ 'opacity': 1 }, 800, 'linear');
		$('#emx1').html(now + 1);
	}
	//鼠标经过停止
	$('#newBrandArea').hover(function () {
		clearInterval(timer);
	}, function () {
		timer = setInterval(next, 4000);
	});

	$('#newBrandArea').on('click', '#prev9', function () {
		//切换到上一张

		prev();
	});

	$('#newBrandArea').on('click', '#next9', function () {
		//切换到下一张
		next();
	});
});

//首页轮播的数据渲染
$(function () {
	$('#gouwuche').on('click', function () {
		var name = $.cookie('name');
		if (name) {
			// console.log('1');
			location.href = 'html/gouwuche.html';
		} else {
			location.href = 'html/login.html';
		}
	});

	// function xuanli(item) {
	// 	var lili = item.map(function () {
	// 		return `<li class="productMd" aid='${item.goodid}'>
	// 		<a href="javascript:ga_prdDtlMove(20000521256,'','A007');" class="link js-contextmenu gaEvtTg"
	// 			tabindex="-1">

	// 			<div class="img">
	// 				<img class="" src="images/${item.img}" alt=""
	// 					style="display: inline;">
	// 			</div>
	// 			<div class="info">
	// 				<div class="brand">
	// 					<strong>${item.goodname}</strong>${item.goodname2}
	// 				</div>
	// 				<div class="product">${item.title}</div>
	// 			</div>
	// 			<div class="price">
	// 				<span class="cancel">$${item.oldprice}</span>
	// 				<strong class="off">
	// 				${item.dazhe}
	// 				</strong>
	// 			</div>
	// 			<div class="discount">
	// 				<strong>$${item.newprice}</strong>
	// 				<span>约${item.newrmb}元</span>
	// 			</div>
	// 		</a>
	// 		<div class="btnArea circle">
	// 			<a href="javascript:;" class="ico toastBtn relProduct" data-prd-no="20000521256"
	// 				onclick="javascript:fn_setIntrstPrd(this,'N');" tabindex="-1"><span
	// 					class="blind">收藏商品</span></a>
	// 			<a href="javascript:;" onclick="javascript:cartLayerPop(this, '1','20000521256','01','N','N');"
	// 				class="ico shoping toastBtn cart" tabindex="-1"><span class="blind">加入购物车</span></a>
	// 			<a href="javascript:;" onclick="javascript:cartLayerPop(this, '2','20000521256','01','N','N');"
	// 				class="btnU toastBtn cart" tabindex="-1">立即购买</a>
	// 		</div>
	// 	</li>`;
	// 	}).join("");
	// 	console.log(html);
	// }

	$.ajax({
		type: 'post',
		url: 'api/index.php',
		async: true,
		data: {
			a: 'syxr1'
		},
		success: function success(str) {
			var arr = JSON.parse(str);
			var html = arr.map(function (item) {
				return '\n\t\t\t\t<li class="productMd" aid=\'' + item.goodid + '\'>\n\t \t\t<a href="javascript:ga_prdDtlMove(20000521256,\'\',\'A007\');" class="link js-contextmenu gaEvtTg"\n\t \t\t\ttabindex="-1"\n\t \t\t\t<div class="img">\n\t \t\t\t\t<img class="" src="images/' + item.img + '" alt=""\n\t \t\t\t\t\tstyle="display: inline;">\n\t \t\t\t</div>\n\t \t\t\t<div class="info">\n\t \t\t\t\t<div class="brand">\n\t \t\t\t\t\t<strong>' + item.goodname + '</strong>' + item.goodname2 + '\n\t \t\t\t\t</div>\n\t \t\t\t\t<div class="product">' + item.title + '</div>\n\t \t\t\t</div>\n\t\t\t\t<div class="price">\n\t\t\t\t\t<span class="cancel">$' + item.oldprice + '</span>\n\t\t\t\t\t<strong class="off">\n\t\t\t\t\t' + item.dazhe + '\n\t\t\t\t\t</strong>\n\t\t\t\t</div>\n\t\t\t\t<div class="discount">\n\t \t\t\t\t<strong>$' + item.newprice + '</strong>\n\t \t\t\t\t<span>\u7EA6' + item.newrmb + '\u5143</span>\n\t \t\t\t</div>\n\t \t\t</a>\n\t \t\t<div class="btnArea circle">\n\t \t\t\t<a href="javascript:;" class="ico toastBtn relProduct"><span\n\t \t\t\t\t\tclass="blind">\u6536\u85CF\u5546\u54C1</span></a>\n\t \t\t\t<a href="javascript:;" \n\t \t\t\t\tclass="ico shoping toastBtn cart" ><span class="blind">\u52A0\u5165\u8D2D\u7269\u8F66</span></a>\n\t \t\t\t<a href="javascript:;"\n\t \t\t\t\tclass="btnU toastBtn cart" >\u7ACB\u5373\u8D2D\u4E70</a>\n\t \t\t</div>\n\t \t</li>\n\t\t\t\t';
			}).join('');
			$('#syxr1').html(html);
		}
	});

	$.ajax({
		type: 'post',
		url: 'api/index.php',
		async: true,
		data: {
			a: 'syxr2'
		},
		success: function success(str) {
			// console.log(str);
			var arr = JSON.parse(str);
			var html = arr.map(function (item) {
				return '\n\t\t\t\t<li class="productMd" aid=\'' + item.goodid + '\'>\n\t \t\t<a href="###\');" class="link js-contextmenu gaEvtTg"\n\t \t\t\ttabindex="-1"\n\t \t\t\t<div class="img">\n\t \t\t\t\t<img class="" src="images/' + item.img + '" alt=""\n\t \t\t\t\t\tstyle="display: inline;">\n\t \t\t\t</div>\n\t \t\t\t<div class="info">\n\t \t\t\t\t<div class="brand">\n\t \t\t\t\t\t<strong>' + item.goodname + '</strong>' + item.goodname2 + '\n\t \t\t\t\t</div>\n\t \t\t\t\t<div class="product">' + item.title + '</div>\n\t \t\t\t</div>\n\t\t\t\t<div class="price">\n\t\t\t\t\t<span class="cancel">$' + item.oldprice + '</span>\n\t\t\t\t\t<strong class="off">\n\t\t\t\t\t' + item.dazhe + '\n\t\t\t\t\t</strong>\n\t\t\t\t</div>\n\t\t\t\t<div class="discount">\n\t \t\t\t\t<strong>$' + item.newprice + '</strong>\n\t \t\t\t\t<span>\u7EA6' + item.newrmb + '\u5143</span>\n\t \t\t\t</div>\n\t \t\t</a>\n\t \t\t<div class="btnArea circle">\n\t \t\t\t<a href="javascript:;" class="ico toastBtn relProduct" data-prd-no="20000521256"\n\t \t\t\t\tonclick="javascript:fn_setIntrstPrd(this,\'N\');" tabindex="-1"><span\n\t \t\t\t\t\tclass="blind">\u6536\u85CF\u5546\u54C1</span></a>\n\t \t\t\t<a href="javascript:;" onclick="javascript:cartLayerPop(this, \'1\',\'20000521256\',\'01\',\'N\',\'N\');"\n\t \t\t\t\tclass="ico shoping toastBtn cart" tabindex="-1"><span class="blind">\u52A0\u5165\u8D2D\u7269\u8F66</span></a>\n\t \t\t\t<a href="javascript:;" onclick="javascript:cartLayerPop(this, \'2\',\'20000521256\',\'01\',\'N\',\'N\');"\n\t \t\t\t\tclass="btnU toastBtn cart" tabindex="-1">\u7ACB\u5373\u8D2D\u4E70</a>\n\t \t\t</div>\n\t \t</li>\n\t\t\t\t';
			}).join('');
			$('#syxr2').html(html);
		}
	});

	$.ajax({
		type: 'post',
		url: 'api/index.php',
		async: true,
		data: {
			a: 'syxr3'
		},
		success: function success(str) {
			var arr = JSON.parse(str);
			var html = arr.map(function (item) {
				return '\n\t\t\t\t<li class="productMd rightSt" aid=\'' + item.goodid + '\'>\n\t\t\t\t<a href="###"\n                            class="link js-contextmenu gaEvtTg" tabindex="-1">\n                            <span class="flagNum"><em>' + item.xh + '</em></span>\n                            <div class="img">\n                                <img class="" src="images/' + item.img + '" alt=""\n                                    style="display: inline;">\n                            </div>\n                            <div class="info">\n                                <div class="brand">\n                                    <strong>' + item.goodname + '</strong>' + item.goodname2 + '\n                                </div>\n                                <div class="product">' + item.title + '</div>\n                            </div>\n                            <div class="price">\n                                <span class="cancel">$' + item.oldprice + '</span>\n                                <strong class="off">\n\t\t\t\t\t\t\t\t' + item.dazhe + '\n                                </strong>\n                            </div>\n                            <div class="discount">\n                                <strong>$' + item.newprice + '</strong>\n                                <span>\u7EA6' + item.newrmb + '\u5143</span>\n                            </div>\n                            </a>\n                            <div class="btnArea circle">\n                                <a href="javascript:;" class="ico toastBtn relProduct"\n                                    data-prd-no="20000480662" onclick="javascript:fn_setIntrstPrd(this,\'N\');"\n                                    tabindex="-1"><span class="blind">\u6536\u85CF\u5546\u54C1</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'1\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="ico shoping toastBtn cart" tabindex="-1"><span\n                                        class="blind">\u52A0\u5165\u8D2D\u7269\u8F66</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'2\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="btnU toastBtn cart" tabindex="-1">\u7ACB\u5373\u8D2D\u4E70</a>\n                            </div>\n                        </li> ';
			}).join('');
			$('#syxr3').html(html);
		}
	});

	$.ajax({
		type: 'post',
		url: 'api/index.php',
		async: true,
		data: {
			a: 'syxr4'
		},
		success: function success(str) {
			var arr = JSON.parse(str);
			var html = arr.map(function (item) {
				return '\n\t\t\t\t<li class="productMd rightSt" aid=\'' + item.goodid + '\'>\n\t\t\t\t<a href="###"\n                            class="link js-contextmenu gaEvtTg" tabindex="-1">\n                            <span class="flagNum"><em>' + item.xh + '</em></span>\n                            <div class="img">\n                                <img class="" src="images/' + item.img + '" alt=""\n                                    style="display: inline;">\n                            </div>\n                            <div class="info">\n                                <div class="brand">\n                                    <strong>' + item.goodname + '</strong>' + item.goodname2 + '\n                                </div>\n                                <div class="product">' + item.title + '</div>\n                            </div>\n                            <div class="price">\n                                <span class="cancel">$' + item.oldprice + '</span>\n                                <strong class="off">\n\t\t\t\t\t\t\t\t' + item.dazhe + '\n                                </strong>\n                            </div>\n                            <div class="discount">\n                                <strong>$' + item.newprice + '</strong>\n                                <span>\u7EA6' + item.newrmb + '\u5143</span>\n                            </div>\n                            </a>\n                            <div class="btnArea circle">\n                                <a href="javascript:;" class="ico toastBtn relProduct"\n                                    data-prd-no="20000480662" onclick="javascript:fn_setIntrstPrd(this,\'N\');"\n                                    tabindex="-1"><span class="blind">\u6536\u85CF\u5546\u54C1</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'1\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="ico shoping toastBtn cart" tabindex="-1"><span\n                                        class="blind">\u52A0\u5165\u8D2D\u7269\u8F66</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'2\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="btnU toastBtn cart" tabindex="-1">\u7ACB\u5373\u8D2D\u4E70</a>\n                            </div>\n                        </li> ';
			}).join('');
			$('#syxr4').html(html);
		}
	});

	$.ajax({
		type: 'post',
		url: 'api/index.php',
		async: true,
		data: {
			a: 'syxr5'
		},
		success: function success(str) {
			var arr = JSON.parse(str);
			var html = arr.map(function (item) {
				return '\n\t\t\t\t<li class="productMd rightSt" aid=\'' + item.goodid + '\'>\n\t\t\t\t<a href="###"\n                            class="link js-contextmenu gaEvtTg" tabindex="-1">\n                            <span class="flagNum"><em>' + item.xh + '</em></span>\n                            <div class="img">\n                                <img class="" src="images/' + item.img + '" alt=""\n                                    style="display: inline;">\n                            </div>\n                            <div class="info">\n                                <div class="brand">\n                                    <strong>' + item.goodname + '</strong>' + item.goodname2 + '\n                                </div>\n                                <div class="product">' + item.title + '</div>\n                            </div>\n                            <div class="price">\n                                <span class="cancel">$' + item.oldprice + '</span>\n                                <strong class="off">\n\t\t\t\t\t\t\t\t' + item.dazhe + '\n                                </strong>\n                            </div>\n                            <div class="discount">\n                                <strong>$' + item.newprice + '</strong>\n                                <span>\u7EA6' + item.newrmb + '\u5143</span>\n                            </div>\n                            </a>\n                            <div class="btnArea circle">\n                                <a href="javascript:;" class="ico toastBtn relProduct"\n                                    data-prd-no="20000480662" onclick="javascript:fn_setIntrstPrd(this,\'N\');"\n                                    tabindex="-1"><span class="blind">\u6536\u85CF\u5546\u54C1</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'1\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="ico shoping toastBtn cart" tabindex="-1"><span\n                                        class="blind">\u52A0\u5165\u8D2D\u7269\u8F66</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'2\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="btnU toastBtn cart" tabindex="-1">\u7ACB\u5373\u8D2D\u4E70</a>\n                            </div>\n                        </li> ';
			}).join('');
			$('#syxr5').html(html);
		}
	});

	$.ajax({
		type: 'post',
		url: 'api/index.php',
		async: true,
		data: {
			a: 'syxr6'
		},
		success: function success(str) {
			var arr = JSON.parse(str);
			var html = arr.map(function (item) {
				return '\n\t\t\t\t<li class="productMd rightSt" aid=\'' + item.goodid + '\'>\n\t\t\t\t<a href="###"\n                            class="link js-contextmenu gaEvtTg" tabindex="-1">\n                            <span class="flagNum"><em>' + item.xh + '</em></span>\n                            <div class="img">\n                                <img class="" src="images/' + item.img + '" alt=""\n                                    style="display: inline;">\n                            </div>\n                            <div class="info">\n                                <div class="brand">\n                                    <strong>' + item.goodname + '</strong>' + item.goodname2 + '\n                                </div>\n                                <div class="product">' + item.title + '</div>\n                            </div>\n                            <div class="price">\n                                <span class="cancel">$' + item.oldprice + '</span>\n                                <strong class="off">\n\t\t\t\t\t\t\t\t' + item.dazhe + '\n                                </strong>\n                            </div>\n                            <div class="discount">\n                                <strong>$' + item.newprice + '</strong>\n                                <span>\u7EA6' + item.newrmb + '\u5143</span>\n                            </div>\n                            </a>\n                            <div class="btnArea circle">\n                                <a href="javascript:;" class="ico toastBtn relProduct"\n                                    data-prd-no="20000480662" onclick="javascript:fn_setIntrstPrd(this,\'N\');"\n                                    tabindex="-1"><span class="blind">\u6536\u85CF\u5546\u54C1</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'1\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="ico shoping toastBtn cart" tabindex="-1"><span\n                                        class="blind">\u52A0\u5165\u8D2D\u7269\u8F66</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'2\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="btnU toastBtn cart" tabindex="-1">\u7ACB\u5373\u8D2D\u4E70</a>\n                            </div>\n                        </li> ';
			}).join('');
			$('#syxr6').html(html);
		}
	});

	$.ajax({
		type: 'post',
		url: 'api/index.php',
		async: true,
		data: {
			a: 'syxr7'
		},
		success: function success(str) {
			var arr = JSON.parse(str);
			var html = arr.map(function (item) {
				return '\n\t\t\t\t<li class="productMd rightSt" aid=\'' + item.goodid + '\'>\n\t\t\t\t<a href="###"\n                            class="link js-contextmenu gaEvtTg" tabindex="-1">\n                            <span class="flagNum"><em>' + item.xh + '</em></span>\n                            <div class="img">\n                                <img class="" src="images/' + item.img + '" alt=""\n                                    style="display: inline;">\n                            </div>\n                            <div class="info">\n                                <div class="brand">\n                                    <strong>' + item.goodname + '</strong>' + item.goodname2 + '\n                                </div>\n                                <div class="product">' + item.title + '</div>\n                            </div>\n                            <div class="price">\n                                <span class="cancel">$' + item.oldprice + '</span>\n                                <strong class="off">\n\t\t\t\t\t\t\t\t' + item.dazhe + '\n                                </strong>\n                            </div>\n                            <div class="discount">\n                                <strong>$' + item.newprice + '</strong>\n                                <span>\u7EA6' + item.newrmb + '\u5143</span>\n                            </div>\n                            </a>\n                            <div class="btnArea circle">\n                                <a href="javascript:;" class="ico toastBtn relProduct"\n                                    data-prd-no="20000480662" onclick="javascript:fn_setIntrstPrd(this,\'N\');"\n                                    tabindex="-1"><span class="blind">\u6536\u85CF\u5546\u54C1</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'1\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="ico shoping toastBtn cart" tabindex="-1"><span\n                                        class="blind">\u52A0\u5165\u8D2D\u7269\u8F66</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'2\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="btnU toastBtn cart" tabindex="-1">\u7ACB\u5373\u8D2D\u4E70</a>\n                            </div>\n                        </li> ';
			}).join('');
			$('#syxr7').html(html);
		}
	});

	$.ajax({
		type: 'post',
		url: 'api/index.php',
		async: true,
		data: {
			a: 'syxr8'
		},
		success: function success(str) {
			var arr = JSON.parse(str);
			var html = arr.map(function (item) {
				return '\n\t\t\t\t<li class="productMd rightSt" aid=\'' + item.goodid + '\'>\n\t\t\t\t<a href="###"\n                            class="link js-contextmenu gaEvtTg" tabindex="-1">\n                            <span class="flagNum"><em>' + item.xh + '</em></span>\n                            <div class="img">\n                                <img class="" src="images/' + item.img + '" alt=""\n                                    style="display: inline;">\n                            </div>\n                            <div class="info">\n                                <div class="brand">\n                                    <strong>' + item.goodname + '</strong>' + item.goodname2 + '\n                                </div>\n                                <div class="product">' + item.title + '</div>\n                            </div>\n                            <div class="price">\n                                <span class="cancel">$' + item.oldprice + '</span>\n                                <strong class="off">\n\t\t\t\t\t\t\t\t' + item.dazhe + '\n                                </strong>\n                            </div>\n                            <div class="discount">\n                                <strong>$' + item.newprice + '</strong>\n                                <span>\u7EA6' + item.newrmb + '\u5143</span>\n                            </div>\n                            </a>\n                            <div class="btnArea circle">\n                                <a href="javascript:;" class="ico toastBtn relProduct"\n                                    data-prd-no="20000480662" onclick="javascript:fn_setIntrstPrd(this,\'N\');"\n                                    tabindex="-1"><span class="blind">\u6536\u85CF\u5546\u54C1</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'1\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="ico shoping toastBtn cart" tabindex="-1"><span\n                                        class="blind">\u52A0\u5165\u8D2D\u7269\u8F66</span></a>\n                                <a href="javascript:;" onclick="javascript:cartLayerPop(this, \'2\',\'20000480662\',\'01\',\'N\',\'N\');"\n                                    class="btnU toastBtn cart" tabindex="-1">\u7ACB\u5373\u8D2D\u4E70</a>\n                            </div>\n                        </li> ';
			}).join('');
			$('#syxr8').html(html);
		}
	});

	$('#indexx').on('click', 'li', function () {
		var res = $(this).attr('aid');
		location.href = 'html/xiangqingye.html?' + res;
	});

	$('#indexx').on('click', 'a', function () {
		var res = $(this).attr('aid');
		location.href = 'html/xiangqingye.html?' + res;
	});
});