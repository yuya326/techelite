<?php
session_start();

// セッションデータを取得
$name = $_SESSION['name'] ?? '';
$email = $_SESSION['email'] ?? '';
$seat = $_SESSION['seat'] ?? '';
$tel = $_SESSION['tel'] ?? '';
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
</head>
<body>
    <?php include('header.php'); ?>
    <div class="inquiry_list">
        <div class="inquiry_confirmation">お問い合わせ内容確認</div>
        <div class="name">
            <div class="name_left">お名前</div>
            <div> <?= htmlspecialchars($name, ENT_QUOTES, 'UTF-8') ?></div>
        </div>
        <div class="seat">
            <div class="seat_left">希望席</div>
            <div><?= htmlspecialchars($seat, ENT_QUOTES, 'UTF-8') ?></div>
        </div>
        <div class="email">
            <div class="email_left">メールアドレス</div>
            <div><?= htmlspecialchars($email, ENT_QUOTES, 'UTF-8') ?></div>
        </div>
        <div class="tel">
            <div class="tel_left">電話番号</div>
            <div> <?= htmlspecialchars($tel, ENT_QUOTES, 'UTF-8')?: '未入力' ?></div>
        </div>
    </div>
    <div class="confirm_button">
        <form action="index.php#reservation" method="GET" class="confirm_back">
            <button type="submit">戻る</button>
        </form>
        <form action="thanks.php" method="POST" class="confirm_send">
            <button type="submit">送信</button>
        </form>
    </div>
    <?php include('footer.php'); ?>
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="js/index.js"></script>
</body>
</html>