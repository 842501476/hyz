<?php

include 'connect.php';

$a = isset($_POST['a']) ? $_POST['a'] : '';
$goodnum = isset($_POST['goodnum']) ? $_POST['goodnum'] : '';
$goodid = isset($_POST['goodid']) ? $_POST['goodid'] : '';

if($a=='gwcxr'){
$res=$conn->query('select * from shopping');
$row = $res->fetch_all(MYSQLI_ASSOC);
$res->num_rows;
echo json_encode($row,JSON_UNESCAPED_UNICODE);}


if($a=='gwcj'){
    $res=$conn->query("update shopping set goodnum='$goodnum' where goodid=$goodid");
    // echo $goodnum;
}

if($a=='gwcz'){
    $res=$conn->query("update shopping set goodnum='$goodnum' where goodid=$goodid");
    // echo $goodnum;
}

if($a=='gwcsc'){
    $res=$conn->query("delete from shopping where goodid=$goodid");
    // echo $goodnum;
}

if($a=='gwcsr'){
    $res=$conn->query("update shopping set goodnum='$goodnum' where goodid=$goodid");
    // echo $goodnum;
}

if($a=='gwcqs'){
    $res=$conn->query("DELETE from shopping");
    // echo $goodnum;
}
?>