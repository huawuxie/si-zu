$('#phone').val(localStorage.username)
$('#btn').click(function(){
    $.ajax({
        url:'php/index.php?c=Login&a=personal_register',
        type:'post',
        data:{
            img:$('.table-cell .logoimg').attr('src'),
            name:$('#username').val(),
            phone:$('#phone').val(),
            text:$('#messages').val(),
        },
        success:function(data){
            console.log(data)
            var str=JSON.parse(data);
            if (str.code) {
                window.location.href='html.html'
                alert('保存成功')
            }
        }
    })
})
$('.aside').click(function(){
    window.location.href='html.html'
})