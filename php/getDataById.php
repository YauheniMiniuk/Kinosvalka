<?php
    function getDataById($id){
        require_once 'dbconnect.php'; // подключаем скрипт
    
        // подключаемся к серверу
        $link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($link));
        $query = "SELECT * FROM movies WHERE id=$id";
        $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
        if($result)
        {
            $rows = mysqli_num_rows($result);
            $to_encode = array();
            for ($i = 0;$i<$rows;++$i){
                $row = mysqli_fetch_row($result);
                $to_encode[] = $row;
            }
            
        }
        return json_encode($to_encode);
        // закрываем подключение
        mysqli_close($link);
    }
    $id=$_POST['id'];
    $a = getDataById($id);
    echo $a;
?>