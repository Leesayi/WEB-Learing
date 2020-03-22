function check() {
    var password = document.getElementById("password");//获取密码文本框对象
    var repassword = document.getElementById("repassword");//获取确认密码文本框对象
    var age = document.getElementById("age");		//获取年龄文本框对象

    if (isNaN(age.value)) {
        //判断年龄是否为数字
        alert("年龄必须为数字！");
        age.focus();
        return;
    }

    if (age.value < 0 || age.value > 100) {
        //判断用户输入的年龄范围是否合法
        alert("年龄输入不合法");
        age.focus();
        return;
    }

    if (repassword.value != password.value) {
        //判断两次输入密码是否相同
        alert("两次输入密码不同");
        repassword.focus();
        return;
    }
    document.getElementById("myform").submit();
}