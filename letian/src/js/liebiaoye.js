window.onload = () => {
    var list = getid('listt');
    var imgt = getid('imgt');
    var footerContent = getid('footerContent');
    var sp = getid('sp');
    var num0 = 2;
    function show(arr) {
        var res = arr.map(function (item) {
            return `<li class="productMd rightSt" pid="${item.goodid}">
                    <a href="###" class="link js-contextmenu">
                        <div class="img">
                            <img src="../images/${item.img}" alt="">
                        </div>
                        <div class="info">
                            <div class="flagArea">
                                ${item.biaoqian}
                            </div>
                            <div class="brand">
                                <strong>${item.goodname}</strong>
                                ${item.goodname2}
                            </div>
                            <div class="product">${item.title}</div>
                        </div>
                        <div class="price">
                            <span class="cancel">$${item.oldprice}</span>
                            <strong class="off">
                                ${item.dazhe}
                            </strong>
                        </div>
                        <div class="discount">
                            <strong>$${item.newprice}</strong>
                        </div>
                        <span class="evaluation">
                            <span class="starIcon gray this_icon_span five"><span></span></span>
                            <span class="num">(${item.pfs})</span>
                        </span>
                    </a>
                    <div class="btnArea">
                        <a class="ico toastBtn relProduct" href="###"><span
                                class="blind">收藏商品</span></a>
                        <a class="ico shoping toastBtn cart" href="###"><span
                                class="blind">加入购物车</span></a>
                        <a class="btnU" href="###">立即订购</a>
                    </div>
                </li>`;
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
            var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            if (document.body) {
                bodyScrollHeight = document.body.scrollHeight;
            }
            if (document.documentElement) {
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
            return scrollHeight;
        }
        window.onscroll = () => {
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

                }
                else {
                    imgt.style.display = 'block';
                    setTimeout(function () {
                        imgt.style.display = 'none';
                        sp.style.display = 'block';
                        footerContent.style.display = 'block';
                    }, 1500);
                }
            }
        }
    });
}

//判断购物车是否登录
$(function () {
    $('#gouwuche').on('click', function () {
        var name = $.cookie('name')
        if (name) {
            // console.log('1');
            location.href = 'gouwuche.html'
        } else {
            location.href = 'login.html'
        }
    });

    $('#listt').on('click', 'li', function () {
        var res = $(this).attr('pid');
        location.href = 'xiangqingye.html?' + res;
    })



    $('#listt').on('click', 'a', function () {
        var res = $(this).attr('pid');
        location.href = 'xiangqingye.html?' + res;
    })
});
