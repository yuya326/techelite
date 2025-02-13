<?php
session_start();

// POSTで送信されたらセッションに保存
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $_SESSION['name'] = $_POST['name'] ?? '';
    $_SESSION['email'] = $_POST['email'] ?? '';
    $_SESSION['seat'] = $_POST['seat'] ?? '';
    $_SESSION['tel'] = $_POST['tel'] ?? '';

    // リダイレクトして確認ページに遷移
    header("Location: confirm.php");
    exit();
}

// セッションデータがあれば入力欄に表示
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
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
</head>
<body>
    <?php include('header.php'); ?>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="img/slide_1.jpg" alt="スライド画像1"></div>
            <div class="swiper-slide"><img src="img/slide_2.jpg" alt="スライド画像2"></div>
            <div class="swiper-slide"><img src="img/slide_3.jpg" alt="スライド画像3"></div>
        </div>
        <div class="swiper-button-prev"><img src="img/slide-btn-prev.svg" alt="スライドボタン前"></div>
        <div class="swiper-button-next"><img src="img/slide-btn-next.svg" alt="スライドボタン次"></div>
        <div class="swiper-pagination"></div>
    </div>
    <div class="summer_title">今年も始まる<span class="summer">夏祭り</span></div>
    <div id="schedule" class="schedule">スケジュール</div> 
    <div class="schedule_content">
        <div class="schedule_box">
            <div class="schedule_list">
                <div id="autoClick" class="m9d1"data-content="9月1日の内容">9月1日</div>
                <div class="m9d2"data-content="9月2日の内容">9月2日</div>
                <div class="m9d3"data-content="9月3日の内容">9月3日</div>
            </div>    
            <div class="explanation_box">
                <div class="schedule_explanation"></div>
            </div>
        </div>
    </div>
    <div id="access" class="access">アクセス</div> 
    <p>〒771-1154 徳島県徳島市応神町東貞方南川淵</p>
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11112.095267448653!2d134.52290369420086!3d34.10421604288311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355373abe3d15637%3A0xac295ae5e2536dbe!2z5ZCJ6YeO5bed5YyX5bK46YGL5YuV5bqD5aC044K944OV44OI44Oc44O844Or5aC0ROmdog!5e0!3m2!1sja!2sjp!4v1739285773375!5m2!1sja!2sjp" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div id="reservation" class="reservation">席予約</div> 

    <form id="myForm" action="index.php" method="POST">
        <div>
            <label for="name"><strong>お名前</strong><span class="required">*必須</span></label>
            <input type="text" name="name" required placeholder="例)田中 太郎" value="<?= htmlspecialchars($name, ENT_QUOTES, 'UTF-8') ?>">
        </div>
        <div>
            <label for="seat"><strong>席の場所</strong><span class="required">*必須</span></label>
            <select name="seat" id="prefectures" required value="<?= htmlspecialchars($seat, ENT_QUOTES, 'UTF-8') ?>">
                <option value="">---</option>
                <option value="SS席"<?= ($seat === 'SS席') ? 'selected' : '' ?>>SS席</option>
                <option value="S席"<?= ($seat === 'S席') ? 'selected' : '' ?>>S席</option>
                <option value="A席"<?= ($seat === 'A席') ? 'selected' : '' ?>>A席</option>
                <option value="B席"<?= ($seat === 'B席') ? 'selected' : '' ?>>B席</option>
                <option value="C席"<?= ($seat === 'C席') ? 'selected' : '' ?>>C席</option>
            </select>    
        </div>
        <div>
            <label for="email"><strong>メールアドレス</strong><span class="required">*必須</span></label>
            <input type="email" name="email" required placeholder="例) abcd123@example.com" value="<?= htmlspecialchars($email, ENT_QUOTES, 'UTF-8') ?>">
        </div>
        <div>
            <label for="tel"><strong>電話番号</strong><span class="not_required">*任意</span></label>
            <input type="tel" name="tel" pattern="[0-9]{10,11}" placeholder="例)09012345678" value="<?= htmlspecialchars($tel, ENT_QUOTES, 'UTF-8') ?>">
        </div>
        <div class="index_button">
            <input type="submit" id="submitBtn" value="送信" disabled>
        </div>
    </form>
    <?php include('footer.php'); ?>
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="js/index.js"></script>
</body>
</html>

