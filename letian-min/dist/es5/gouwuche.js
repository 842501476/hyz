'use strict';

$(function () {
    //退出
    $('#logout').on('click', function () {
        window.location.href = '../index.html';
        $.removeCookie('name', { path: '/' });
        update();
    });

    $.ajax({

        type: 'post',
        url: '../api/gouwuche.php',
        async: true,
        data: {
            a: 'gwcxr'
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            var html = arr.map(function (item) {
                return '<tr class="prdBoundary"  id=\'' + item.goodid + '\'>\n                <td class="alL verT pl20">\n                    <div class="checkboxGroup point">\n                        <input id="' + (item.goodid + 4) + '" name="check" type="checkbox" value="1" class=\'cbx\'>\n                        <label for="' + (item.goodid + 4) + '" class="hide"><span></span></label>\n                    </div>\n                </td>\n                <td class="verT">\n                    <div class="productItem">\n\n                        <div class="img">\n                            <a href="###">\n                                <img src="../images/' + item.img + '">\n                            </a>\n                        </div>\n                        <div class="info">\n                            <div class="flagArea mb9">\n                                ' + item.biaoqian + '\n                            </div>\n                            <a href="">\n                                <div class="brand"><strong>' + item.goodname + '</strong>' + item.goodname2 + '</div>\n                                <div class="product">' + item.title + '</div>\n                                <div class="code">' + item.daima + '</div>\n                            </a>\n                            <div class="etcTxt"><strong>\u4E0D\u53EF\u7528</strong><i>\u8D2D\u7269\u8F66\u4F18\u60E0\u5238</i></div>\n                            <div class="optionArea">\n                            </div>\n                        </div>\n                    </div>\n                </td>\n                <td>\n                    <div class="priceArea">\n                        <div class="price cancel">$' + item.oldprice + '</div>\n                        <div class="deals">$' + item.newprice + '</div>\n                        <div class="discount">\n                            <span>' + item.dazhe + '</span>\n                            <div class="tooltipWrap">\n                                <a href="javascript:void(0);" class="btnTip"></a>\n                                <div class="contTip" style="display: none; top: -162px; left: -166px;">\n                                    <div class="dcCont">\n                                        <div class="tableArea tableIner alC">\n                                            <h4 class="smTitle">\u6298\u6263\u4F18\u60E0</h4>\n                                            <div class="tableBox">\n                                                <table>\n                                                    <caption>\u6298\u6263\u4F18\u60E0</caption>\n                                                    <thead>\n                                                        <tr>\n                                                            <th scope="col">\u9879\u76EE</th>\n                                                            <th scope="col">\u4F18\u60E0\u7387</th>\n                                                            <th scope="col">\u4F18\u60E0\u91D1\u989D</th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr>\n                                                            <td>\u4F1A\u5458\u4F18\u60E0<br>(\u666E\u901A)</td>\n                                                            <td><span class="fcf1">9.5\u6298</span></td>\n                                                            <td>\n                                                                $7.45\n                                                                <br>\u7EA650.59\u5143\n                                                            </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <a href="javascript:void(0);" class="btnClose"></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </td>\n                <td>\n                    <div class="eaModify disIb">\n                        <div class="form">\n\n\n                        <a href="javascript:void(0)" class="up btnUp" title="" id=\'gwx\'></a>\n                        <input type="text" name="ordQty" title="" value="' + item.goodnum + '" class=\'gdnum\'>\n                        <a href="javascript:void(0)" class="down btnDown" title="" id=\'gws\'></a>\n\n\n                        </div>\n                        <a href="#none" class="modify btnModify">\u4FEE\u6539</a>\n                    </div>\n                </td>\n                <td>\n                    <div class="priceArea">\n                    <span class=\'meiyuan\' style=\'font-weight:bold;color:red;\'>$</span>\n                        <span class="deals djzj">' + (item.newprice * item.goodnum).toFixed(2) + '</span>\n                        <div class="other">(\u7EA6' + (item.newprice * item.goodnum).toFixed(2) * 12 + '.00\u5143)</div>\n                    </div>\n                </td>\n                <td class="btnCell pr20 alR">\n                    <div class="btnPrdArea">\n                        <a href="javascript:void(0);" class="btn4 rline btnBuynow">\u7ACB\u5373\u8D2D\u4E70</a>\n                        <div class="tooltipPrd">\n                            <a href="javascript:void(0);" class="btn4 bline btnContinue">\u4FDD\u7559\u5728\u8D2D\u7269\u8F66</a>\n                        </div>\n                        <a href="###" class="btn4 aline btnDelete">\u5220\u9664</a>\n                    </div>\n                </td>\n            </tr>';
            }).join('');
            $('#gwlb').html(html);
            update();
        }

    });

    //减数量
    $('#gwlb').on('click', '#gws', function () {
        //		console.log($(this));
        var val = $(this).prev().val();
        // console.log(val);
        val--; //自增一
        if (val <= 1) {
            //库存量
            val = 1;
        }

        $(this).prev().val(val); //赋值
        goodTotal($(this));
        // NumPrice();
        var goodid = $(this).parents('tr').attr('id');
        // console.log(goodid);
        $.ajax({
            type: 'post',
            url: '../api/gouwuche.php',
            async: true,
            data: {
                a: 'gwcj',
                'goodnum': val,
                'goodid': goodid
            },
            success: function success(str) {
                // console.log(str);
            }
        });
    });

    //加数量
    $('#gwlb').on('click', '#gwx', function () {
        //		console.log($(this));
        var val = $(this).next().val();
        // console.log(val);
        val++; //自增一
        if (val >= 10) {
            //库存量
            val = 10;
        }
        $(this).next().val(val); //赋值
        goodTotal($(this));
        // NumPrice();
        var goodid = $(this).parents('tr').attr('id');
        $.ajax({
            type: 'post',
            url: '../api/gouwuche.php',
            async: true,
            data: {
                a: 'gwcz',
                'goodnum': val,
                'goodid': goodid
            },
            success: function success(str) {
                // console.log(str);
            }
        });
    });

    function goodTotal(now) {
        //找单价
        var price = now.parents("td").prev().find('.deals').text();
        price = price.slice(1) * 1;
        // console.log(price);
        //找数量
        var num = now.parent().find('input').val() * 1;

        // console.log(price, num);

        //小计=单价*数量
        var total = (price * num).toFixed(2);
        // console.log(price, num, total);
        now.parents('td').next().find('.deals').html(total); //设置值
        NumPrice();
    }

    //删除一条
    $('#gwlb').on('click', '.btnDelete', function () {
        var res = confirm('您确定要删除吗？');
        if (res) {
            $(this).parents('tr').remove();
            update(); //判断是否删完了
            NumPrice();

            var goodid = $(this).parents('tr').attr('id');
            $.ajax({
                type: 'post',
                url: '../api/gouwuche.php',
                async: true,
                data: {
                    a: 'gwcsc',
                    'goodid': goodid
                },
                success: function success(str) {
                    // console.log(str);
                }
            });
        }
    });

    //更新
    // update();
    function update() {
        if ($('#gws').size() == 0) {
            //已结删完所有的行，没有必要保留总价了
            $('#gww0').css('display', 'none');
            $('#gwwp').css('display', 'block');
        }
    }

    //选中单行
    $('#bigg').on('click', '.checkboxGroup input', function () {
        // console.log($(this).prop('checked'));
        NumPrice();
    });

    //全选
    $('#check_all').on('click', function () {
        if ($(this).prop('checked')) {
            //给所有的复选框都勾上
            $('.checkboxGroup input').prop('checked', 'checked');
        } else {
            $('.checkboxGroup input').removeAttr('checked');
        }
        NumPrice();
    });

    var arr = []; //存被选中的行的下标数
    function NumPrice() {
        arr = [];
        for (var i = 0; i < $('.cbx').size(); i++) {
            if ($('.cbx').eq(i).prop('checked')) {
                arr.push(i);
            }
        }
        // console.log(arr);
        if (arr.length == $('.cbx').size()) {
            // console.log($('.prdBoundary'));
            //所有商品被选中了，控制权限勾上
            $('#check_all').prop('checked', 'checked');
        } else {
            $('#check_all').removeAttr('checked');
        }
        //		console.log(arr);

        var priceAll = 0; //总价
        var numAll = 0; //总数量

        for (var i = 0; i < arr.length; i++) {
            numAll += $('.gdnum').eq(arr[i]).val() * 1;
            priceAll += $('.djzj').eq(arr[i]).text() * 1;
        }

        //		console.log(numAll);
        //		console.log(priceAll);
        $('#allnum').html(numAll + ' 件商品');
        $('#totalprice').html('$' + priceAll.toFixed(2));
    };

    //手动输入
    $('#gwlb').on('input', '.gdnum', function () {
        if ($(this).val() <= 10) {
            goodTotal($(this));
            NumPrice();

            var val = $(this).val();
            var goodid = $(this).parents('tr').attr('id');
            // console.log(val, goodid);
            $.ajax({
                type: 'post',
                url: '../api/gouwuche.php',
                async: true,
                data: {
                    a: 'gwcsr',
                    'goodnum': val,
                    'goodid': goodid
                },
                success: function success(str) {
                    // console.log(str);
                }
            });
        } else {
            alert("最多可购买10件!");
            $(this).val('10');
        }
    });

    //全删选中
    $('#dellall').on('click', function () {
        var res = confirm('您确定要清空购物车吗？');
        // console.log(arr);//[2]
        if (res) {
            //i=2 
            for (var i = arr.length - 1; i >= 0; i--) {
                //从尾部开始删除
                // console.log(arr.length);//3
                $('#gwlb .prdBoundary').eq(arr[i]).remove();
                update();
                NumPrice();
                $.ajax({
                    type: 'post',
                    url: '../api/gouwuche.php',
                    async: true,
                    data: {
                        a: 'gwcqs'
                        // 'goodid': goodid
                    },
                    success: function success(str) {}
                });
            }
        }
    });
});