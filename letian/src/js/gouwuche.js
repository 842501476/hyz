
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
        success: function (str) {
            var arr = JSON.parse(str);
            var html = arr.map(function (item) {
                return `<tr class="prdBoundary"  id='${item.goodid}'>
                <td class="alL verT pl20">
                    <div class="checkboxGroup point">
                        <input id="${(item.goodid) + 4}" name="check" type="checkbox" value="1" class='cbx'>
                        <label for="${(item.goodid) + 4}" class="hide"><span></span></label>
                    </div>
                </td>
                <td class="verT">
                    <div class="productItem">

                        <div class="img">
                            <a href="###">
                                <img src="../images/${item.img}">
                            </a>
                        </div>
                        <div class="info">
                            <div class="flagArea mb9">
                                ${item.biaoqian}
                            </div>
                            <a href="">
                                <div class="brand"><strong>${item.goodname}</strong>${item.goodname2}</div>
                                <div class="product">${item.title}</div>
                                <div class="code">${item.daima}</div>
                            </a>
                            <div class="etcTxt"><strong>不可用</strong><i>购物车优惠券</i></div>
                            <div class="optionArea">
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="priceArea">
                        <div class="price cancel">$${item.oldprice}</div>
                        <div class="deals">$${item.newprice}</div>
                        <div class="discount">
                            <span>${item.dazhe}</span>
                            <div class="tooltipWrap">
                                <a href="javascript:void(0);" class="btnTip"></a>
                                <div class="contTip" style="display: none; top: -162px; left: -166px;">
                                    <div class="dcCont">
                                        <div class="tableArea tableIner alC">
                                            <h4 class="smTitle">折扣优惠</h4>
                                            <div class="tableBox">
                                                <table>
                                                    <caption>折扣优惠</caption>
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">项目</th>
                                                            <th scope="col">优惠率</th>
                                                            <th scope="col">优惠金额</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>会员优惠<br>(普通)</td>
                                                            <td><span class="fcf1">9.5折</span></td>
                                                            <td>
                                                                $7.45
                                                                <br>约50.59元
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btnClose"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="eaModify disIb">
                        <div class="form">


                        <a href="javascript:void(0)" class="up btnUp" title="" id='gwx'></a>
                        <input type="text" name="ordQty" title="" value="${item.goodnum}" class='gdnum'>
                        <a href="javascript:void(0)" class="down btnDown" title="" id='gws'></a>


                        </div>
                        <a href="#none" class="modify btnModify">修改</a>
                    </div>
                </td>
                <td>
                    <div class="priceArea">
                    <span class='meiyuan' style='font-weight:bold;color:red;'>$</span>
                        <span class="deals djzj">${(item.newprice * item.goodnum).toFixed(2)}</span>
                        <div class="other">(约${(item.newprice * item.goodnum).toFixed(2) * 12}.00元)</div>
                    </div>
                </td>
                <td class="btnCell pr20 alR">
                    <div class="btnPrdArea">
                        <a href="javascript:void(0);" class="btn4 rline btnBuynow">立即购买</a>
                        <div class="tooltipPrd">
                            <a href="javascript:void(0);" class="btn4 bline btnContinue">保留在购物车</a>
                        </div>
                        <a href="###" class="btn4 aline btnDelete">删除</a>
                    </div>
                </td>
            </tr>`;
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
        val--;//自增一
        if (val <= 1) {//库存量
            val = 1;
        }

        $(this).prev().val(val);//赋值
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
                'goodid': goodid,
            },
            success: function (str) {
                // console.log(str);
            }
        })
    });


    //加数量
    $('#gwlb').on('click', '#gwx', function () {
        //		console.log($(this));
        var val = $(this).next().val();
        // console.log(val);
        val++;//自增一
        if (val >= 10) {//库存量
            val = 10;
        }
        $(this).next().val(val);//赋值
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
                'goodid': goodid,
            },
            success: function (str) {
                // console.log(str);
            }
        })

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
        now.parents('td').next().find('.deals').html(total);//设置值
        NumPrice();
    }

    //删除一条
    $('#gwlb').on('click', '.btnDelete', function () {
        var res = confirm('您确定要删除吗？');
        if (res) {
            $(this).parents('tr').remove();
            update();//判断是否删完了
            NumPrice();

            var goodid = $(this).parents('tr').attr('id');
            $.ajax({
                type: 'post',
                url: '../api/gouwuche.php',
                async: true,
                data: {
                    a: 'gwcsc',
                    'goodid': goodid,
                },
                success: function (str) {
                    // console.log(str);
                }
            })
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



    var arr = [];//存被选中的行的下标数
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

        var priceAll = 0;//总价
        var numAll = 0;//总数量

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
                    'goodid': goodid,
                },
                success: function (str) {
                    // console.log(str);
                }
            })
        }
        else {
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
            for (var i = arr.length - 1; i >= 0; i--) {//从尾部开始删除
                // console.log(arr.length);//3
                $('#gwlb .prdBoundary').eq(arr[i]).remove();
                update();
                NumPrice();
                $.ajax({
                    type: 'post',
                    url: '../api/gouwuche.php',
                    async: true,
                    data: {
                        a: 'gwcqs',
                        // 'goodid': goodid
                    },
                    success: function (str) {
                    }
                });

            }


        }
    });
});