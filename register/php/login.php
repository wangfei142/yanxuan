<?php
//数据添加接口
// 链接数据库
mysql_connect('127.0.0.1','root','root');
//选择数据库
mysql_query('use dayone');
//接收HTML的数据

$account = $_POST['account'];

$pwd = $_POST['pwd'];

$phone = $_POST['phone'];

//修改库里的数据
$sql="insert into register(account,pwd,phone) values ('$account','$pwd','$phone')";
// mysql_query() 函数执行一条 MySQL 查询。
mysql_query($sql);
//增删改获取受影响的行数
$num = mysql_affected_rows();
//设置判断是否变动
if( $num > 0 ){
    //自定义数据返回
    $res=[  
        'dig'=>200,
        'meassage'=>'注册成功'
    ];  
}else{
    //自定义数据返回
    $rse=[  
        'dig'=>-1,
        'meassage'=>'网络异常'
    ];
};
//返回字符串
echo json_encode($res);
?>