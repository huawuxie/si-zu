var off=true;
	$("#logo").click(function(){
		console.log(111)
		if (off) {
			$("#nav-list").stop().animate({'left':'0'},500);
			$("#logoimg").stop().animate({'left':'65%'},500)
			off=false;
		}
		else{
			$("#nav-list").stop().animate({'left':'-65%'},500);
			$("#logoimg").stop().animate({'left':'0'},500)
			off=true;
		}
	})
	$('#iimg').click(function(){
		if ($('#mc').text()=='未登录') {
			window.location.href='ziliao.html'
		}
    })
// $('#tui').click(function(){
//     delete localStorage.username;
//     window.location.href='zhuce.html'
// })
var val=localStorage.username
if (val!=undefined) {
	$('#mc').text(val)
	$.ajax({
		url:'php/index.php?c=Login&a=index_query',
		type:'post',
		data:{
			phone:val,
		},
		success:function(data){
			if (data=='') {
				return;
			}
			var str=JSON.parse(data);
			console.log(str)
			$.each(str.data,function(i,item){
				console.log(item)
				$('#iimg').attr('src',item.img)
				$('#mc').text(item.name)
				localStorage.userimg=JSON.stringify({img:$('#iimg').attr('src'),name:$('#mc').text()})
			})
		}
	})
}
else{
	$('#iimg').attr('src','images/personal_03.png')
	$('#mc').text('未登录');
	localStorage.userimg=JSON.stringify({img:$('#iimg').attr('src'),name:$('#mc').text()})
}
console.log(111)