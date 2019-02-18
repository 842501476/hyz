$(function () {


    var data = decodeURI(location.search);//获取从列表页传过来的商品id
    var now = data.slice(1);//切割
    //列表页点击的商品渲染
    $.ajax({

        type: 'post',
        url: '../api/xiangqingye.php',
        async: true,
        data: {
            b: 'goo',
            'num': now,
        },
        success: function (str) {
            var arr = JSON.parse(str);
            var html = arr.map(function (item) {
                return `   <div class="navigator product">
                <ul>
                    <li><a href="/kr/" class="home">首页</a></li>
                    <li><a href="###">商品详情</a></li>
                </ul>
            </div>
            <section class="detailSpec">
                <div id="prdDetailTopArea">

                    <div class="productName">
                        <span class="brand" id='pa1' style='font-weight:bold;'>${item.goodname}</span>
                        <span class="brand" id='pa2' style='color:#ccc;'>${item.goodname2}</span>
                        <em class="name" id='pa3'>${item.title}</em>

                        <p class="para">&nbsp;</p>
                        <ul class="link">
                            <li>
                                <a href="###" class="btn2 gline gaEvtTg">立即前往品牌专卖店</a>
                            </li>
                            <li>

                                <a href="javascript:loginClick('wish');" class="wish gaEvtTg"></a>

                            </li>
                            <li class="gaEvtTg">
                                <a href="#none" class="sns btnLayer">SNS分享</a>
                            </li>
                        </ul>
                        <div class="layerContainer detail">
                            <div id="sns_prd20000481884" class="layerpop snsShare">
                                <div name="sns_desc" style="display:none;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="productArea">
                    <div class="photo magnifier" id="magnifier1">
                    <p class="logo">
                        <img src="../images/jjaa.png">
                    </p>
                    <div class="photoView">
                                <div style="height:460px;width:460px;" class="zoomWrapper orig pic">
                                <img id="detailZoom" src="../images/${item.img}" style="position: absolute;width:100%;height:100%">
                                <div class="magnify"></div>
                                </div>
                                <div class="bigpic">
                                    <img src="../images/${item.img}" alt="">
                                </div>
                    </div>

                    

                    <div class="magnifier-view">
                    </div>
                            
                            <p class="zoomDesc">把鼠标移至图片上可放大查看。</p>
                            <div class="starScore">
                                <span class="starIcon five">
                                    <span></span>
                                </span>
                                <span class="text"><em>100分</em><a href="#tabReview" class="scrollLink"><span>(${item.pfs})</span></a></span>
                            </div>
                        </div>
                        <div class="info">
                            <div id="prdPriceBenefit">
                                <div class="iconFlag" id='pa4'>
                                    ${item.biaoqian}
                                </div>
                                <div class="infoData price">
                                    <dl class="normal">
                                        <dt>原价</dt>
                                        <dd><em id='pa5'>$${item.oldprice}</em> <span>(约${item.oldrmb}元)</span></dd>
                                    </dl>
                                    <dl class="member">
                                        <dt><i>会员价</i><span>(普通)</span></dt>
                                        <dd>
                                            <div class="priceArea">
                                                <strong id='pa6'>$${item.newprice}</strong>
                                                <span class="fc6">(约${item.newrmb}元)</span>
                                                <span class="fcf1" id='pa7'>${item.dazhe}</span>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <form id="preCalForm" name="preCalForm" method="post"></form>
                                <div class="infoData">
                                    <dl class="buyBenefit">
                                        <dt>购物优惠</dt>
                                        <dd>
                                            <div class="coupon">
                                                <p class="desc">不可用购物车优惠券</p>
                                                <p class="desc"><i>赠品</i><a href="javascript:;" class="view"
                                                        onclick="goBrandGift()">查看详情</a></p>
                                            </div>
                                            <ul class="guide">
                                                <li class="multiLine">
                                                    <div class="tit">
                                                        <em>現金使用率</em>
                                                        <div class="tooltipWrap">
                                                            <a href="javascript:void(0);" class="btnTip">现金积分指南</a>
                                                        </div>
                                                    </div>
                                                    <span>最大30%</span>
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="infoData">
                                <dl class="code">
                                    <dt>商品代码</dt>
                                    <dd>
                                        <span class="productCode1"><i>参考代码:</i>318</span>
                                        <span class="productCode">商品代码:<i id='pa8'>${item.daima}</i></span>
                                    </dd>
                                </dl>
                            </div>
                            <div class="infoData">
                                <dl class="ea">
                                    <dt>数量</dt>
                                    <dd>
                                        <span class="spinner" id='xqysl'>
                                            <input id="qty" title="数量" type="number" value="1"
                                               min='1' max='10';>
                                            （限购10件）
                                        </span>
                                    </dd>
                                </dl>
                            </div>
                            <p class="prodInfoTxt">根据公司和品牌政策，部分的现金积分和积分可能无法使用。</p>
                            <div class="buyBtn">
                                <a href="###" class="btn1 rline toastBtn cart gaEvtTg"
                                    id="prdCartBtn" >加入购物车</a>
                                <a href="###" class="btn1 gaEvtTg"
                                    >立即购买</a>
                            </div>
                            <div class="orderTime" id="prdOrderTime">
                                <span>本商品仁川国际机场出境时，仅需提前3小时<br>购买即可。</span>
                                <a href="javascript:;" class="btn4 bgray availableTime">查看可订购时间</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="promotionBan">
                <ul>
                    <li>
                        <a href="###" class="gaEvtTg">
                            <img src="../images/xq1.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="###" class="gaEvtTg">
                            <img src="../images/xq2.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="###" class="gaEvtTg">
                            <img src="../images/xq3.jpg">
                        </a>
                    </li>
                </ul>
            </section>
            <div id="prdBtm">
                <div id="prdBtmDetailImg" class="proudctDetail">
                    <h3 class="conTitle">详细图片</h3>
                    <div class="optionPhoto">
                        <div class="optionDetail" style="display:block;">
                            <div class="imgArea">
                                <img src="../images/${item.img}"
                                    alt="">
                            </div>
                            <div class="imgArea">
                                <img src="../images/${item.img}"
                                    alt="">
                            </div>
                            <div class="imgArea">
                                <img src="../images/${item.img}"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
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
                var pich = pic.height() - magnifyh; magnifytop = magnifytop < 0 ? 0 : magnifytop;
                magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
                magnifytop = magnifytop > pich ? pich : magnifytop;
                magnifyleft = magnifyleft > picw ? picw : magnifyleft;
                magnify.css({ top: magnifytop, left: magnifyleft });
                var minl = bigpic.width() - objimg.width();
                var mint = bigpic.height() - objimg.height();
                var objimgl = -magnifyleft * 2;
                var objimgt = -magnifytop * 2; objimgl = objimgl < minl ? minl : objimgl; objimgt = objimgt < mint ? mint : objimgt;
                objimg.css({ top: objimgt, left: objimgl })
            });
            pic.mouseleave(function () { magnify.hide(); bigpic.hide() });
        }
    });

    //进入购物车
    $('#gouwuche').on('click', function () {
        var name = $.cookie('name');
        if (name) {
            location.href = 'gouwuche.html'
        } else {
            alert('请先登录！');
            location.href = 'login.html'
        }
    });

    $('#gwcar').on('click', function () {
        var name = $.cookie('name');
        if (name) {
            location.href = 'gouwuche.html'
        } else {
            alert('请先登录！');
            location.href = 'login.html'
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
                success: function (str) {
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
                        onEnd: function () {
                            $("#msg").show().animate({ opacity: '0.9' }, 200).fadeOut(1500);
                            // addcar.css("cursor", "default").removeClass('orange').unbind('click');
                            this.destory();
                        }
                    });
                    // alert('加入购物车成功！');
                }
            });
            // console.log(event.pageX, event.pageY);
        }
        else {
            alert('您还没有登录！')
            location.href = 'login.html'
        }

    });
    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        } else {
            var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    }



    //限购
    $('#ct1').on('input', '#qty', function () {
        if ($(this).val() <= 10) {
            goodTotal($(this));
            NumPrice();
        }
        else {
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




