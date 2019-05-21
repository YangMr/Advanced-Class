//等待页面所有DOM元素加载完毕之后在执行
$(function () {
    //下拉菜单效果
    $(".member").hover(function () {
        //鼠标移入时,背景图标修改为上箭头
        $(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
        //下拉菜单展示
        $(".member .member_ul").stop().slideDown();
    },function () {
        //鼠标移入时,背景图标修改为下箭头
        $(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
        //下拉菜单消失
        $(".member .member_ul").stop().slideUp();
    })

    //设置注册框水平居中并且垂直居中
    center($("#reg"));

    //弹出注册框并且进行锁屏遮罩
    $(".reg").click(function () {
        //设置注册框水平居中并且垂直居中
        center($("#reg"));
        //让遮罩层淡入
        $("#screen").fadeIn();
        //注册框淡入
        $("#reg").fadeIn();
        //隐藏滚动条
        $("body").parent().css("overflow-y","hidden");
    });

    //关闭注册框
    $("#reg .close").click(function () {
        //注册框淡入
        $("#reg").fadeOut();
        //让遮罩层淡入
        $("#screen").fadeOut();
        //隐藏滚动条
        $("body").parent().css("overflow-y","auto");
    })

    //Bmob初始化
    Bmob.initialize("ac831ca649dd632e9d69564962c95457", "e3a2fae8b52e9bb24e85671bfbb97d41");

    //进行注册
    $("#reg .submit").click(function () {
        var query = Bmob.Query('register');
        query.set("username",$("#reg .text").val());
        query.set("password","123456");
        query.set("ques","1");
        query.set("ans","apple");
        query.set("ps","hello world");
        query.save().then(res => {
            //注册框淡入
            $("#reg").fadeOut();
            //让遮罩层淡入
            $("#screen").fadeOut();
            //隐藏滚动条
            $("body").parent().css("overflow-y","auto");
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    })

    $("#reg .text").blur(function () {
        var query = Bmob.Query("register");
        query.find().then(res => {
            $.each(res,function (index,element) {
                if(element.username == $("#reg .text").val()){
                    $("#reg .succ_user").html("用户名被占用").show()
                }else{
                    $("#reg .succ_user").html("可用").show()
                }
            })
            console.log(res)
        });
    })

})

//水平居中,并且垂直居中方法
function center(element) {
    element.css({
        left : ($(window).width() - element.outerWidth()) / 2,
        top : ($(window).height() - element.outerHeight()) / 2
    })
}

