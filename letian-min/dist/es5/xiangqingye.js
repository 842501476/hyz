'use strict';

$(function () {

    var data = decodeURI(location.search); //获取从列表页传过来的商品id
    var now = data.slice(1); //切割
    //列表页点击的商品渲染
    $.ajax({

        type: 'post',
        url: '../api/xiangqingye.php',
        async: true,
        data: {
            b: 'goo',
            'num': now
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            var html = arr.map(function (item) {
                return '   <div class="navigator product">\n                <ul>\n                    <li><a href="/kr/" class="home">\u9996\u9875</a></li>\n                    <li><a href="###">\u5546\u54C1\u8BE6\u60C5</a></li>\n                </ul>\n            </div>\n            <section class="detailSpec">\n                <div id="prdDetailTopArea">\n\n                    <div class="productName">\n                        <span class="brand" id=\'pa1\' style=\'font-weight:bold;\'>' + item.goodname + '</span>\n                        <span class="brand" id=\'pa2\' style=\'color:#ccc;\'>' + item.goodname2 + '</span>\n                        <em class="name" id=\'pa3\'>' + item.title + '</em>\n\n                        <p class="para">&nbsp;</p>\n                        <ul class="link">\n                            <li>\n                                <a href="###" class="btn2 gline gaEvtTg">\u7ACB\u5373\u524D\u5F80\u54C1\u724C\u4E13\u5356\u5E97</a>\n                            </li>\n                            <li>\n\n                                <a href="javascript:loginClick(\'wish\');" class="wish gaEvtTg"></a>\n\n                            </li>\n                            <li class="gaEvtTg">\n                                <a href="#none" class="sns btnLayer">SNS\u5206\u4EAB</a>\n                            </li>\n                        </ul>\n                        <div class="layerContainer detail">\n                            <div id="sns_prd20000481884" class="layerpop snsShare">\n                                <div name="sns_desc" style="display:none;"></div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="productArea">\n                    <div class="photo magnifier" id="magnifier1">\n                    <p class="logo">\n                        <img src="../images/jjaa.png">\n                    </p>\n                    <div class="photoView">\n                                <div style="height:460px;width:460px;" class="zoomWrapper orig pic">\n                                <img id="detailZoom" src="../images/' + item.img + '" style="position: absolute;width:100%;height:100%">\n                                <div class="magnify"></div>\n                                </div>\n                                <div class="bigpic">\n                                    <img src="../images/' + item.img + '" alt="">\n                                </div>\n                    </div>\n\n                    \n\n                    <div class="magnifier-view">\n                    </div>\n                            \n                            <p class="zoomDesc">\u628A\u9F20\u6807\u79FB\u81F3\u56FE\u7247\u4E0A\u53EF\u653E\u5927\u67E5\u770B\u3002</p>\n                            <div class="starScore">\n                                <span class="starIcon five">\n                                    <span></span>\n                                </span>\n                                <span class="text"><em>100\u5206</em><a href="#tabReview" class="scrollLink"><span>(' + item.pfs + ')</span></a></span>\n                            </div>\n                        </div>\n                        <div class="info">\n                            <div id="prdPriceBenefit">\n                                <div class="iconFlag" id=\'pa4\'>\n                                    ' + item.biaoqian + '\n                                </div>\n                                <div class="infoData price">\n                                    <dl class="normal">\n                                        <dt>\u539F\u4EF7</dt>\n                                        <dd><em id=\'pa5\'>$' + item.oldprice + '</em> <span>(\u7EA6' + item.oldrmb + '\u5143)</span></dd>\n                                    </dl>\n                                    <dl class="member">\n                                        <dt><i>\u4F1A\u5458\u4EF7</i><span>(\u666E\u901A)</span></dt>\n                                        <dd>\n                                            <div class="priceArea">\n                                                <strong id=\'pa6\'>$' + item.newprice + '</strong>\n                                                <span class="fc6">(\u7EA6' + item.newrmb + '\u5143)</span>\n                                                <span class="fcf1" id=\'pa7\'>' + item.dazhe + '</span>\n                                            </div>\n                                        </dd>\n                                    </dl>\n                                </div>\n                                <form id="preCalForm" name="preCalForm" method="post"></form>\n                                <div class="infoData">\n                                    <dl class="buyBenefit">\n                                        <dt>\u8D2D\u7269\u4F18\u60E0</dt>\n                                        <dd>\n                                            <div class="coupon">\n                                                <p class="desc">\u4E0D\u53EF\u7528\u8D2D\u7269\u8F66\u4F18\u60E0\u5238</p>\n                                                <p class="desc"><i>\u8D60\u54C1</i><a href="javascript:;" class="view"\n                                                        onclick="goBrandGift()">\u67E5\u770B\u8BE6\u60C5</a></p>\n                                            </div>\n                                            <ul class="guide">\n                                                <li class="multiLine">\n                                                    <div class="tit">\n                                                        <em>\u73FE\u91D1\u4F7F\u7528\u7387</em>\n                                                        <div class="tooltipWrap">\n                                                            <a href="javascript:void(0);" class="btnTip">\u73B0\u91D1\u79EF\u5206\u6307\u5357</a>\n                                                        </div>\n                                                    </div>\n                                                    <span>\u6700\u592730%</span>\n                                                </li>\n                                            </ul>\n                                        </dd>\n                                    </dl>\n                                </div>\n                            </div>\n                            <div class="infoData">\n                                <dl class="code">\n                                    <dt>\u5546\u54C1\u4EE3\u7801</dt>\n                                    <dd>\n                                        <span class="productCode1"><i>\u53C2\u8003\u4EE3\u7801:</i>318</span>\n                                        <span class="productCode">\u5546\u54C1\u4EE3\u7801:<i id=\'pa8\'>' + item.daima + '</i></span>\n                                    </dd>\n                                </dl>\n                            </div>\n                            <div class="infoData">\n                                <dl class="ea">\n                                    <dt>\u6570\u91CF</dt>\n                                    <dd>\n                                        <span class="spinner" id=\'xqysl\'>\n                                            <input id="qty" title="\u6570\u91CF" type="number" value="1"\n                                               min=\'1\' max=\'10\';>\n                                            \uFF08\u9650\u8D2D10\u4EF6\uFF09\n                                        </span>\n                                    </dd>\n                                </dl>\n                            </div>\n                            <p class="prodInfoTxt">\u6839\u636E\u516C\u53F8\u548C\u54C1\u724C\u653F\u7B56\uFF0C\u90E8\u5206\u7684\u73B0\u91D1\u79EF\u5206\u548C\u79EF\u5206\u53EF\u80FD\u65E0\u6CD5\u4F7F\u7528\u3002</p>\n                            <div class="buyBtn">\n                                <a href="###" class="btn1 rline toastBtn cart gaEvtTg"\n                                    id="prdCartBtn" >\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                <a href="###" class="btn1 gaEvtTg"\n                                    >\u7ACB\u5373\u8D2D\u4E70</a>\n                            </div>\n                            <div class="orderTime" id="prdOrderTime">\n                                <span>\u672C\u5546\u54C1\u4EC1\u5DDD\u56FD\u9645\u673A\u573A\u51FA\u5883\u65F6\uFF0C\u4EC5\u9700\u63D0\u524D3\u5C0F\u65F6<br>\u8D2D\u4E70\u5373\u53EF\u3002</span>\n                                <a href="javascript:;" class="btn4 bgray availableTime">\u67E5\u770B\u53EF\u8BA2\u8D2D\u65F6\u95F4</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n            <section class="promotionBan">\n                <ul>\n                    <li>\n                        <a href="###" class="gaEvtTg">\n                            <img src="../images/xq1.jpg">\n                        </a>\n                    </li>\n                    <li>\n                        <a href="###" class="gaEvtTg">\n                            <img src="../images/xq2.jpg">\n                        </a>\n                    </li>\n                    <li>\n                        <a href="###" class="gaEvtTg">\n                            <img src="../images/xq3.jpg">\n                        </a>\n                    </li>\n                </ul>\n            </section>\n            <div id="prdBtm">\n                <div id="prdBtmDetailImg" class="proudctDetail">\n                    <h3 class="conTitle">\u8BE6\u7EC6\u56FE\u7247</h3>\n                    <div class="optionPhoto">\n                        <div class="optionDetail" style="display:block;">\n                            <div class="imgArea">\n                                <img src="../images/' + item.img + '"\n                                    alt="">\n                            </div>\n                            <div class="imgArea">\n                                <img src="../images/' + item.img + '"\n                                    alt="">\n                            </div>\n                            <div class="imgArea">\n                                <img src="../images/' + item.img + '"\n                                    alt="">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>';
            }).join('');
            $('#ct1').html(html);
            var pic = $(".pic");
            var magnify = $(".pic .magnify");
            var bigpic = $(".bigpic");
            var objimg = $(".bigpic img");
            pic.mousemove(function (e) {
                magnify.show();
                bigpic.show();
                var pagex = e.pageX;
                var pagey = e.pageY;
                var pictop = pic.offset().top;
                var picleft = pic.offset().left;
                var magnifyw = magnify.width();
                var magnifyh = magnify.height();
                var magnifytop = pagey - pictop - magnifyh / 2;
                var magnifyleft = pagex - picleft - magnifyw / 2;
                var picw = pic.width() - magnifyw;
                var pich = pic.height() - magnifyh;magnifytop = magnifytop < 0 ? 0 : magnifytop;
                magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
                magnifytop = magnifytop > pich ? pich : magnifytop;
                magnifyleft = magnifyleft > picw ? picw : magnifyleft;
                magnify.css({ top: magnifytop, left: magnifyleft });
                var minl = bigpic.width() - objimg.width();
                var mint = bigpic.height() - objimg.height();
                var objimgl = -magnifyleft * 2;
                var objimgt = -magnifytop * 2;objimgl = objimgl < minl ? minl : objimgl;objimgt = objimgt < mint ? mint : objimgt;
                objimg.css({ top: objimgt, left: objimgl });
            });
            pic.mouseleave(function () {
                magnify.hide();bigpic.hide();
            });
        }
    });

    //进入购物车
    $('#gouwuche').on('click', function () {
        var name = $.cookie('name');
        if (name) {
            location.href = 'gouwuche.html';
        } else {
            alert('请先登录！');
            location.href = 'login.html';
        }
    });

    $('#gwcar').on('click', function () {
        var name = $.cookie('name');
        if (name) {
            location.href = 'gouwuche.html';
        } else {
            alert('请先登录！');
            location.href = 'login.html';
        }
    });
    // console.log(now);


    //点击加入购物车（判断是否登陆）
    //购物车飞入
    var offset = $("#gwcar").offset();
    $('#ct1').on('click', '#prdCartBtn', function (event) {
        // console.log(now);
        var addcar = $(this);
        var img = addcar.parents().find('#detailZoom').attr('src');
        var flyer = $('<img class="u-flyer" src="' + img + '">');

        var name = $.cookie('name');
        if (name) {
            var c0 = now;
            var c1 = $('#pa1').text();
            var c2 = $('#pa2').text();
            var c3 = $('#pa3').html();

            var c4 = $('#detailZoom').attr('src');
            c4 = c4.split('/');
            c4 = c4[c4.length - 1];

            var c5 = $('#pa4').html();

            var c6 = $('#pa5').html();
            c6 = c6.split('$');
            c6 = c6[c6.length - 1];

            var c7 = $('#pa6').html();
            c7 = c7.split('$');
            c7 = c7[c7.length - 1];

            var c8 = $('#pa7').html();
            var c9 = $('#pa8').html();

            var c10 = $('#qty').val();
            // console.log(c10);
            // console.log(c3, c4, c5);
            $.ajax({
                type: 'post',
                url: '../api/xiangqingye.php',
                async: true,
                data: {
                    b: 'gos',
                    c0: c0,
                    c1: c1,
                    c2: c2,
                    c3: c3,
                    c4: c4,
                    c5: c5,
                    c6: c6,
                    c7: c7,
                    c8: c8,
                    c9: c9,
                    c10: c10
                },
                success: function success(str) {
                    // console.log(str);
                    flyer.fly({
                        start: {
                            left: event.pageX,
                            top: event.pageY - getClientHeight()
                        },
                        end: {
                            left: offset.left + 10,
                            top: offset.top + 15,
                            width: 0,
                            height: 0
                        },
                        onEnd: function onEnd() {
                            $("#msg").show().animate({ opacity: '0.9' }, 200).fadeOut(1500);
                            // addcar.css("cursor", "default").removeClass('orange').unbind('click');
                            this.destory();
                        }
                    });
                    // alert('加入购物车成功！');
                }
            });
            // console.log(event.pageX, event.pageY);
        } else {
            alert('您还没有登录！');
            location.href = 'login.html';
        }
    });
    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            var clientHeight = document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
        } else {
            var clientHeight = document.body.clientHeight > document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    }

    //限购
    $('#ct1').on('input', '#qty', function () {
        if ($(this).val() <= 10) {
            goodTotal($(this));
            NumPrice();
        } else {
            alert("最多可购买10件!");
            $(this).val('10');
        }
    });

    // $('#ct1').on('mousemove', '#pic', function (e) {
    //     var pic = $("#pic");
    //     var magnify = $("#magnify");
    //     var bigpic = $("#bigpic");
    //     var objimg = $("#bigimg");
    //     magnify.show();
    //     bigpic.show();
    //     var pagex = e.pageX;
    //     var pagey = e.pageY;
    //     var pictop = pic.offset().top;
    //     var picleft = pic.offset().left;
    //     var magnifyw = magnify.width();
    //     var magnifyh = magnify.height();
    //     var magnifytop = pagey - pictop - magnifyh / 2;
    //     var magnifyleft = pagex - picleft - magnifyw / 2;
    //     var picw = pic.width() - magnifyw;
    //     var pich = pic.height() - magnifyh; magnifytop = magnifytop < 0 ? 0 : magnifytop;
    //     magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
    //     magnifytop = magnifytop > pich ? pich : magnifytop;
    //     magnifyleft = magnifyleft > picw ? picw : magnifyleft;
    //     magnify.css({ top: magnifytop, left: magnifyleft });
    //     var minl = bigpic.width() - objimg.width();
    //     var mint = bigpic.height() - objimg.height();
    //     var objimgl = -magnifyleft * 2;
    //     var objimgt = -magnifytop * 2; objimgl = objimgl < minl ? minl : objimgl; objimgt = objimgt < mint ? mint : objimgt;
    //     objimg.css({ top: objimgt, left: objimgl })

    // });
    // $('#ct1').on('mouseleave', '.pic', function () {
    //     magnify.hide();
    //     bigpic.hide();
    // });


    //放大镜

});