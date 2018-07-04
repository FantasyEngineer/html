//获取注册时间
var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();
if(month<10){
    month="0"+month;
}
if(day<10){
    day="0"+day;
}
var newDate=day+'/'+month+'/'+year;
$(document).ready(function () {
    　$('#sthird_time').text("000");
});
//点击下一步
$('#next').click(function(){
        RegisiterFinish();//圆环app
     }
)
