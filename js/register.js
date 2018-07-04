function getJson(json){
   var data=$.parseJSON(json);
    // 知道span名
    document.getElementById('name').innerHTML=data.userName;
    //是否有跳过
    if(data.isFirstConnect===false){
        document.getElementById('small').style.display="none";
    }
   return data;
}
$(document).ready(function () {
    $('body').height($('body')[0].clientHeight);
    // 判断是自动还是手动注册 
    window.SysClientJs.getUFORegisiter('getJson');
});

//点击跳过
$('#small').click(function(){
    window.SysClientJs.RegisiterFinish();//圆环app
});
//select隐藏框
$('#text').click(function(){
    $("#content").css('display','block');
});
//点击时的样式
$('#tbl').on('click','tr',function(){
    $("#tbl tr").each(function(i,elem){
        $(elem).removeClass("selected");
        $(elem).find("span").css("display","none");
        $(elem).find("span").removeClass("checked");
    });
    $(this).addClass("selected");
    $(this).find("span").addClass("checked");
    $(this).find("span").css("display","inline");
    $('#num').text($(this).data("id"));
    $("#content").css('display','none');
})
//点击下一步
$('#next').click(function(){
    let phone = $('#phone').val();
    if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(phone))){ 
       Toast('手机号格式不正确',2000);
     }else{
        //传值判断是否注册成功
        RegisiterFinish();//圆环app
     }
})
//toast提示
function Toast(msg,duration){  
    duration=isNaN(duration)?3000:duration;  
    var m = document.createElement('div');  
    m.innerHTML = msg;  
    m.style.cssText="width:60%; min-width:150px; background:#000; opacity:0.5; height:40px; color:#fff; line-height:40px; text-align:center; border-radius:5px; position:fixed; top:40%; left:20%; z-index:999999; font-weight:bold;";  
    document.body.appendChild(m);  
    setTimeout(function() {  
        var d = 0.5;  
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';  
        m.style.opacity = '0';  
        setTimeout(function() { document.body.removeChild(m) }, d * 1000);  
    }, duration);  
}  
