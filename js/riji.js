$(document).ready(function () {
    //点击发送
    $("#send").on("click", function () {
        if ($(".message").val().length == 0) {
            $(".reveal-modal").css("animation", "reveal-modal 0.3s ease-in forwards").delay(1000).slideUp(300);
            $(".reveal-modal h1").html("内容不能为空哦");
            return;
        }
        else {
            //上传头像+发布留言
                var arr=''
                $('.moreImgs img').each(function(i,item){
                    arr+=$(item).attr('src')+','
                })
                console.log(arr)
                $.ajax({
                    url:'php/index.php?c=Login&a=riji_register',
                    type: 'post',
                    data: {
                        countes: $('#text').val(),
                        img:arr,
                        name:111,
                    },
                    success:function(data) {
                        console.log(data)
                        var str=JSON.parse(data)
                        if (str.code=='200') {
                            alert('上传成功')
                            window.location.href="../views/diary.html"
                        }
                    }
                })
        }
    })
    $("#myUpload").upload({uploadPath:'php/upload.php', isMulti:false,callback:function(msg){}});
});