<?php
    include 'connect.php';
    $b=isset($_POST['b']) ? $_POST['b'] : '';

    if($b=='goo'){
        $num = isset($_POST['num']) ? $_POST['num'] : '';
        // echo $num;
        $sql="SELECT * from goodlist where goodid=$num";
        $res=$conn->query($sql);
        // echo $res;
        $row = $res->fetch_all(MYSQLI_ASSOC);
        // var_dump($row);
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }

    if($b=='gos'){
        $c0 = isset($_POST['c0']) ? $_POST['c0'] : '';
        $c1 = isset($_POST['c1']) ? $_POST['c1'] : '';
        $c2 = isset($_POST['c2']) ? $_POST['c2'] : '';
        $c3 = isset($_POST['c3']) ? $_POST['c3'] : '';
        $c4 = isset($_POST['c4']) ? $_POST['c4'] : '';
        $c5 = isset($_POST['c5']) ? $_POST['c5'] : '';
        $c6 = isset($_POST['c6']) ? $_POST['c6'] : '';
        $c7 = isset($_POST['c7']) ? $_POST['c7'] : '';
        $c8 = isset($_POST['c8']) ? $_POST['c8'] : '';
        $c9 = isset($_POST['c9']) ? $_POST['c9'] : '';
        $c10 = isset($_POST['c10']) ? $_POST['c10'] : '';
        // echo $c1,$c2,$c3,$c4,$c5,$c6,$c7,$c8,$c9;


        $sql1="SELECT * from shopping where goodid=$c0";
        $res1=$conn->query($sql1);
        $row1=$res1->num_rows;
        // echo $row;
        if($row1>0){
            $sql3="UPDATE shopping set goodnum=goodnum+$c10 where goodid=$c0";
            $conn->query($sql3);


            // $sql4="SELECT goodnum from shopping where goodid=$c0";
            // $res2=$conn->query($sql4);
            // $row2 = $res2->fetch_all(MYSQLI_ASSOC);
            // echo json_encode($row2,JSON_UNESCAPED_UNICODE);
        }
        else{
            $sql2="INSERT into shopping (goodid,goodname,goodname2,title,img,biaoqian,oldprice,newprice,dazhe,daima,goodnum) values ('$c0','$c1','$c2','$c3','$c4','$c5','$c6','$c7','$c8','$c9','$c10')";
            $conn->query($sql2);
        }
    }
    



?>