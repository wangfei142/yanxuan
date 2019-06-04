<?php 
//数据返回接口
// 链接数据库
mysql_connect('127.0.0.1','root','root');
//选择数据库
mysql_query('use dayone');

$phone = $_POST["phone"];
//查询库里的数据
$sql="select * from register where phone='$phone'";
// mysql_query() 函数执行一条 MySQL 查询。
$result=mysql_query($sql);
//增删改获取受影响的行数
$row = mysql_fetch_assoc($result);
//设置判断是否变动
if($row){
    //自定义数据返回
    $res = [  
        'dig'=>200,
        'meassage'=>'号码已注册',
      
    ]; 
}else{
    //自定义数据返回
    $res = [        
        'dig'=>-1,
        'meassage'=>'未被使用'
    ]; 
};
//返回字符串
echo json_encode($res);