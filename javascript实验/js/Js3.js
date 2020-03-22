/*
 *计算两个日期相差的天数
 *@date1：日期类型的字符串（yyyy-mm-dd） 
 *@date2：日期类相的字符串 （yyyy-mm-dd）
 *@return：返回日期天数差 
*/
function getDays(date1, date2) {
    var date1Str = date1.split("-");//将日期字符串分隔为数组，数组元素分别为年、月、日 
    //根据年、月、日的值创建Date对象
    var date1Obj = new Date(date1Str[0], (date1Str[1] - 1), date1Str[2]);
    var date2Str = date2.split("-");
    var date2Obj = new Date(date2Str[0], (date2Str[1] - 1), date2Str[2]);
    var t1 = date1Obj.getTime();		        //返回从1970-1-1开始计算到Date对象中的时间之间的毫秒数
    var t2 = date2Obj.getTime();		       //返回从1970-1-1开始计算到Date对象中的时间之间的毫秒数
    var datetime = 1000 * 60 * 60 * 24;	    //表示一天24小时时间内的毫秒值 
    var minusDays = Math.floor(((t2 - t1) / datetime));//计算出两个日期天数差 
    var days = Math.abs(minusDays);			//如果结果为负数，取绝对值
    return days;
}
function gethours(date1, date2) {
    var date1Str = date1.split("-");//将日期字符串分隔为数组，数组元素分别为年、月、日 
    //根据年、月、日的值创建Date对象
    var date1Obj = new Date(date1Str[0], (date1Str[1] - 1), date1Str[2]);
    var date2Str = date2.split("-");
    var date2Obj = new Date(date2Str[0], (date2Str[1] - 1), date2Str[2]);
    var t1 = date1Obj.getTime();		        //返回从1970-1-1开始计算到Date对象中的时间之间的毫秒数
    var t2 = date2Obj.getTime();		       //返回从1970-1-1开始计算到Date对象中的时间之间的毫秒数
    var Hourstime = 1000 * 60 * 60;	    //表示一小时时间内的毫秒值 
    var minusHours = Math.floor(((t2 - t1) / Hourstime));//计算出两个日期小时差 
    var Hours = Math.abs(minusHours);			//如果结果为负数，取绝对值
    return Hours;
}
function checkDate(date) {
    var reg = /^((19\d{2})|(20[0-1]\d))-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1])$/;//利用正则表达式验证日期格式
    if (!reg.test(date))/*校验失败返回flase成功返回true*/ {
        return false;
    }
    else {
        return true;
    }

}
function check() {
    var start_date = document.getElementById("start_date").value;//获取日期开始对象
    var end_date = document.getElementById("end_date").value;//获取日期结束对象

    if (start_date == "") {
        alert("请输入开始日期！");
        return;
    }
    else {
        if (!checkDate(start_date))/*调用checkDate函数校验日期是否正确*/ {
            alert("您输入的开始日期无效！");
            return;
        }
    }
    if (end_date == "") {
        alert("请输入终止日期！");
        return;
    } else {
        if (!checkDate(end_date)) /*调用checkDate函数校验日期是否正确*/ {
            alert("您输入的终止日期无效！");
            return;
        }
    }
    document.getElementById("minusDay").value = getDays(start_date, end_date);//调用getDays函数输出计算后的天数差
    document.getElementById("minusHours").value = gethours(start_date, end_date);//调用gethours函数输出计算后的小时差
}