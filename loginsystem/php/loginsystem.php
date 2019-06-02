
<?php
//数据验证账号密码是否正确
//链接数据库
mysql_connect('127.0.0.1','root','root');

mysql_query('use dayone');

// account: 123123
// password: 123123

$account=$_POST['accounr_login'];
$password=$_POST['pwd_login'];
//验证账号与密码是否正确
$sql="select * from register where ( account='$account') and ( password='$password')";
$result=mysql_query($sql);
$rows=mysql_fetch_assoc($result);
if($rows){
    $rows=[
        'dig'=>200,
        'mas'=>'成功登入，即将跳转...',
        'datas'=>$rows
    ];
}else{
    $rows=[
        'dig'=>-1,
        'mas'=>'账号或密码错误',
        'datas'=>$rows
    ];
};
echo json_encode($rows);