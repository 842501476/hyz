'use strict';

window.onload = function () {
    var list = getid('listt');
    var imgt = getid('imgt');
    var footerContent = getid('footerContent');
    var sp = getid('sp');
    var num0 = 2;
    function show(arr) {
        var res = arr.map(function (item) {
            return '<li class="productMd rightSt" pid="' + item.goodid + '">\n                    <a href="###" class="link js-contextmenu">\n                        <div class="img">\n                            <img src="../images/' + item.img + '" alt="">\n                        </div>\n                        <div class="info">\n                            <div class="flagArea">\n                                ' + item.biaoqian + '\n                            </div>\n                            <div class="brand">\n                                <strong>' + item.goodname + '</strong>\n                                ' + item.goodname2 + '\n                            </div>\n                            <div class="product">' + item.title + '</div>\n                        </div>\n                        <div class="price">\n                            <span class="cancel">$' + item.oldprice + '</span>\n                            <strong class="off">\n                                ' + item.dazhe + '\n                            </strong>\n                        </div>\n                        <div class="discount">\n                            <strong>$' + item.newprice + '</strong>\n                        </div>\n                        <span class="evaluation">\n                            <span class="starIcon gray this_icon_span five"><span></span></span>\n                            <span class="num">(' + item.pfs + ')</span>\n                        </span>\n                    </a>\n                    <div class="btnArea">\n                        <a class="ico toastBtn relProduct" href="###"><span\n                                class="blind">\u6536\u85CF\u5546\u54C1</span></a>\n                        <a class="ico shoping toastBtn cart" href="###"><span\n                                class="blind">\u52A0\u5165\u8D2D\u7269\u8F66</span></a>\n                        <a class="btnU" href="###">\u7ACB\u5373\u8BA2\u8D2D</a>\n                    </div>\n                </li>';
        }).join('');
        // console.log(res);
        list.innerHTML += res;
    }

    //滚动滑轮到最底部懒加载
    var url = '../api/liebiaoye.php';
    var data = 'page=1&qty=8';
    var isok = true;
    ajax('post', url, data, function (str) {
        //console.log(str);
        var arr = JSON.parse(str);

        console.log(arr);
        show(arr.list);
        function getScrollHeight() {
            var scrollHeight = 0,
                bodyScrollHeight = 0,
                documentScrollHeight = 0;
            if (document.body) {
                bodyScrollHeight = document.body.scrollHeight;
            }
            if (document.documentElement) {
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
            return scrollHeight;
        }
        window.onscroll = function () {
            var scrollTop = window.scrollY;
            var Wheight = window.innerHeight;
            if (getScrollHeight() == scrollTop + Wheight && isok) {
                isok = false;
                var total = arr.total;
                var num = Math.ceil(total / arr.qty);
                var data = 'qty=8&page=' + num0;
                if (num0 <= num) {
                    num0++;
                    imgt.style.display = 'block';
                    setTimeout(function () {
                        imgt.style.display = 'none';
                        ajax('post', url, data, function (str) {
                            var arr = JSON.parse(str);
                            show(arr.list);
                            isok = true;
                        });
                    }, 1500);
                } else {
                    imgt.style.display = 'block';
                    setTimeout(function () {
                        imgt.style.display = 'none';
                        sp.style.display = 'block';
                        footerContent.style.display = 'block';
                    }, 1500);
                }
            }
        };
    });
};

//判断购物车是否登录
$(function () {
    $('#gouwuche').on('click', function () {
        var name = $.cookie('name');
        if (name) {
            // console.log('1');
            location.href = 'gouwuche.html';
        } else {
            location.href = 'login.html';
        }
    });

    $('#listt').on('click', 'li', function () {
        var res = $(this).attr('pid');
        location.href = 'xiangqingye.html?' + res;
    });

    $('#listt').on('click', 'a', function () {
        var res = $(this).attr('pid');
        location.href = 'xiangqingye.html?' + res;
    });
});