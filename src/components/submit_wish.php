<?php
// Pastikan form dikirimkan dengan metode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data yang dikirimkan melalui form
    $name = $_POST["name"];
    $message = $_POST["message"];
    
    // Lakukan sesuatu dengan data yang diterima, misalnya simpan ke database
    // Contoh penggunaan: Simpan ke database MySQL
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dbwish";

    // Buat koneksi
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Periksa koneksi
    if ($conn->connect_error) {
        die("Koneksi gagal: " . $conn->connect_error);
    }

    // Persiapkan query SQL untuk menyimpan data
    $sql = "INSERT INTO wish (name, message) VALUES ('$name', '$message')";

    // Eksekusi query
    if ($conn->query($sql) === TRUE) {
        echo "Pesan berhasil dikirim";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Tutup koneksi
    $conn->close();
}
?>
