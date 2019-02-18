$(function () {
    //登录
    $('#verifyUserNameMsg').html('*').css('color', 'red');
    $('#verifyUserNameMsg1').html('*').css('color', 'red');
    $('#verifyUserNameMsg2').html('*').css('color', 'red');
    $('#btnLogin').on('click', function () {
        if ($('#username2').val().trim() && $('#password2').val().trim()) {
            $.ajax({
                type: 'post',
                url: '../api/login.php',
                data: {
                    a: 'login',
                    username: $('#username2').val().trim(),
                    password: $('#password2').val().trim()
                    // username: 'hyzhyz',
                    // password: '123456'
                },
                success: function (str) {
                    if (str == 0) {
                        alert('密码或用户名错误！');
                    }
                    else {
                        $.cookie('name', $('#username2').val().trim(), { expires: 1, path: '/' });
                        window.location.href = '../index.html';
                        update();

                    }

                },
            });
        } else {
            alert('不能为空');
        }
    });


    //用户名存在验证
    var isok1 = false;
    $('#username1').on('blur', function () {
        if ($('#username1').val().trim()) {
            if (checkReg.name($('#username1').val().trim())) {
                isok1 = true;
                $.ajax({
                    type: 'post',
                    url: '../api/login.php',
                    data: {
                        a: 'yz',
                        username: $('#username1').val().trim()
                    },
                    success: function (str) {
                        // console.log(str);
                        if (str == 0) {
                            var arr = '用户名可以使用';
                            $('#verifyUserNameMsg').html(arr).css('color', 'green');
                        }
                        else {
                            var arr = '用户名已存在';
                            $('#verifyUserNameMsg').html(arr).css('color', 'red');
                        }
                    }
                });
            }
            else {
                $('#verifyUserNameMsg').html('用户名格式不正确!').css('color', 'red');
            }
        } else {
            $('#verifyUserNameMsg').html('*').css('color', 'red');
            // alert('不能为空');
        }
    });

    //密码强度：简陋版
    $('#password1').on('input', function () {
        if ($('#password1').val().trim().length >= 6) {
            $('#verifyUserNameMsg1').html('密码强度：一般').css('color', 'orange');
        }
        else if ($('#password1').val().trim().length < 6) {
            $('#verifyUserNameMsg1').html('密码强度：差').css('color', 'red');
        }
        else if ($('#password1').val().trim().length >= 10) {
            $('#verifyUserNameMsg1').html('密码强度：强').css('color', 'red');
        }
        else {
            // alert('不能为空');
            $('#verifyUserNameMsg1').html('*').css('color', 'red');
        }
    });
    $('#password0').on('input', function () {
        // console.log(1);
        if ($('#password1').val().trim() === $('#password0').val().trim()) {
            $('#verifyUserNameMsg2').html('匹配').css('color', 'green');
        } else {
            // alert('不能为空');
            $('#verifyUserNameMsg2').html('*').css('color', 'red');
        }
    });



    //注册
    //随机验证码
    $('#random').html(randomCode());
    $('#random').css('background', randomColor(16));
    $('#random').on('click', function () {
        $('#random').css('background', randomColor(16));
        $('#random').html(randomCode());
    })
    $('#btnReg').on('click', function () {
        if ($('#username1').val().trim() && $('#password1').val().trim() === $('#password0').val().trim() && isok1) {
            if ($('#tex').val().toLowerCase() == $('#random').html().toLowerCase()) {
                $.ajax({
                    type: 'post',
                    url: '../api/login.php',
                    data: {
                        a: 'reg',
                        username: $('#username1').val().trim(),
                        password: $('#password1').val().trim()
                    },
                    success: function (str) {
                        alert(str);
                        window.location.href = '../index.html';
                    },
                });
            } else {
                // $('#username1,#password1').val('');
                alert('验证码输入不正确');
                $('#random').html(randomCode());
            }
        } else {

            alert('注册信息填写错误！');
        }
    });


    //进购物车判断是否登录状态
    $(function () {
        $('#gouwuche').on('click', function () {
            var name = $.cookie('name')
            if (name) {
            } else {
                alert('请先登录！');
            }
        });
    });


    //退出
    $('#logout').on('click', function () {
        alert('退出成功！');
        // window.location.href = '../index.html';
        $.removeCookie('name', { path: '/' });
        update();
    });



});
// update();
// 更新状态
function update() {
    var name = $.cookie('name');

    if (name) {
        $('#reg').css('display', 'none');
        $('#login').css('display', 'none');
        $('#logout').css('display', 'block');
        $('#userinfo').html('欢迎您：' + name);
    } else {
        $('#reg').css('display', 'block');
        $('#login').css('display', 'block');
        $('#logout').css('display', 'none');
        $('#userinfo').html('');
    }
}
