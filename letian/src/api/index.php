<?php
    include 'connect.php';

    $a = isset($_POST['a']) ? $_POST['a'] : '';

    if($a=='syxr1'){
    $res=$conn->query('select * from goodlist1');
    $row = $res->fetch_all(MYSQLI_ASSOC);
    $res->num_rows;
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }

    if($a=='syxr2'){
        $res=$conn->query('select * from goodlist2');
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $res->num_rows;
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }

    if($a=='syxr3'){
        $res=$conn->query('select * from goodlist3');
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $res->num_rows;
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }
    if($a=='syxr4'){
        $res=$conn->query('select * from goodlist4');
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $res->num_rows;
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }
    if($a=='syxr5'){
        $res=$conn->query('select * from goodlist3');
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $res->num_rows;
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }
    if($a=='syxr6'){
        $res=$conn->query('select * from goodlist6');
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $res->num_rows;
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }
    if($a=='syxr7'){
        $res=$conn->query('select * from goodlist3');
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $res->num_rows;
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }
    if($a=='syxr8'){
        $res=$conn->query('select * from goodlist5');
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $res->num_rows;
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }
?>