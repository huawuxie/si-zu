 <?php 
    header("content-type:text/html;charset=utf-8");
    //创建连接
    $conn = mysqli_connect("localhost","root","root" );
    
    if( $conn ){
        echo "连接成功！";
    }else{
        die("连接失败！".mysqli_connect_error() );
    }
    //选择要操作的数据库
    mysqli_select_db($conn, "nw");
    //设置读取数据库的编码，不然显示汉字为乱码
    mysqli_query($conn, "set names utf8");
    
    
    $kid = empty( $_GET["kid"] )?"null":$_GET["kid"];
    //执行SQL语句
    $sql = "select head username from data  where head={$kid}";
    $result = mysqli_query($conn, $sql);
    
    
    $username = $_GET["username"];
    //如果是录入页面提交，那么$action等于add
    $action = empty($_GET["action"])?"add":$_GET["action"];
    
    if($action == "add"){
        $str1 = "数据添加成功！";
        $str2 = "数据添加失败！";
        $sql1 = "insert into data(username) value('$username')";
        echo $sql1;	
    }else if($action=="update" ){
        $str1 = "数据更新成功！";
        $str2 = "数据更新失败！";
        $kid = $_POST["kid"];
        $sql1 = "update data set username='{$username}'  where head={$kid}";
        echo $sql1;
    }else{
        die("请选择操作方法");
    }
    
    
    //执行SQL语句
    
    $result = mysqli_query($conn, $sql1);
    
    //输出数据
    //var_dump( $result );
    if( $result ){
        echo "<script>alert('{$str1}');</script>";
        //Refresh: 暂停时间
    }else{
        echo $str2.mysqli_error($conn);
    }
    
    //关闭数据连接
    mysqli_close( $conn );
    
    
?>