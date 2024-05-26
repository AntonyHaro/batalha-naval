<?php
$host = 'sql10.freemysqlhosting.net';
$dbname = 'sql10708711';
$username = 'sql10708711';
$password = 'YVWxEtv44S';


try {
    // Conectar ao banco de dados
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
