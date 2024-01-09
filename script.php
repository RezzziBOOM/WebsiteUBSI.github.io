<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Page</title>
    <style>
        body {
            text-align: center;
        }

        table {
            margin: 50px auto; 
            width: 70%; 
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid black;
        }

        th, td {
            padding: 15px;
        }
    </style>
</head>
<body>

    <h1>Data Yang Anda Kirimkan:</h1>
    <p>Terimakasih Masukan Untuk Website Kami | Salam Kelompok 3</p>
    <hr>

    <?php
        $full_name = $_POST['full_name'];
        $email = $_POST['email'];
        $mobile_number = $_POST['mobile_number'];
        $email_subject = $_POST['email_subject'];
        $message = $_POST['message'];

        echo "<table>";
        echo "<tr><td>Nama Kamu:</td><td>$full_name</td></tr>";
        echo "<tr><td>Email:</td><td>$email</td></tr>";
        echo "<tr><td>Nomor HP:</td><td>$mobile_number</td></tr>";
        echo "<tr><td>Subject Email:</td><td>$email_subject</td></tr>";
        echo "<tr><td>Pesan:</td><td>$message</td></tr>";
        echo "</table>";
    ?>
    
    <br>
    <a href="index.html"><button type="button">Kembali</button></a>

</body>
</html>
