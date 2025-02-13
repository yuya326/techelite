$(function(){
    $(".m9d1").click(function(){
        $(this).css("backgroundColor","#BEA574").css("color","#FFF");/* クリックすると選択した要素のみ背景色変化 */
        $(".m9d3, .m9d2").css("backgroundColor","").css("color", "#525252");/* それ以外の要素の背景色を白に */

        var content = $(this).data("content");/* クリックした要素のデータをcontentに代入 */
        $(".schedule_explanation").text(content);/* service_explanationにcontentのデータを出力 */
    });
});

$(function(){
    $(".m9d2").click(function(){
        $(this).css("backgroundColor","#BEA574").css("color","#FFF");/* クリックすると選択した要素のみ背景色変化 */
        $(".m9d1, .m9d3").css("backgroundColor","").css("color", "#525252");/* それ以外の要素の背景色を白に */

        var content = $(this).data("content");/* クリックした要素のデータをcontentに代入 */
        $(".schedule_explanation").text(content);/* service_explanationにcontentのデータを出力 */
    });
});

$(function(){
    $(".m9d3").click(function(){
        $(this).css("backgroundColor","#BEA574").css("color","#FFF");/* クリックすると選択した要素のみ背景色変化 */
        $(".m9d1, .m9d2").css("backgroundColor","").css("color", "#525252");/* それ以外の要素の背景色を白に */

        var content = $(this).data("content");/* クリックした要素のデータをcontentに代入 */
        $(".schedule_explanation").text(content);/* service_explanationにcontentのデータを出力 */
    });
});

$(document).ready(function() {
    $("#autoClick").trigger("click");/* DOMが読み込まれたらid autoClickがクリックされた状態になる */
});



/* -------↓ハンバーガーメニュー↓-------*/

var headerHeight = $('header').outerHeight(); /*ヘッダーの高さを取得 */
$('.nav').css('top', headerHeight + 'px');/*navのtopに取得したヘッダーの高さを代入(pxによってpaddingも込みの数値) */

$('.nav_toggle').on('click', function() {/*nav toggleをクリックすると */
    var $this = $(this);/*nav toggleをthisに格納 */
    var $nav = $('.nav');/*navをnav(jquery内の)に格納 */
    if ($nav.hasClass('show')) {/*クリックしたときにnavにshowが付与されていたら */
        $('.nav_menu_li').get().reverse().forEach(function(item, index) { /*menu liの配列を逆順にして繰り返し処理 */
            setTimeout(function() {/*指定した時間が経過したら実行 */
                $(item).removeClass('show');/*時間経過でshowを削除 */
            }, index * 100);/*項目×0.1秒の時間が経過されたらliからshowを削除(逆順なので下からアニメーションで順番に非表示) */
        });
        setTimeout(function() {/*指定した時間が経過したら実行 */
            $nav.removeClass('show');/*navからshowを削除(navを閉じる)*/
            $this.removeClass('show');/*nav toggleからshowを削除(toggleを3本線状態に) */
        }, $('.nav_menu_li').length * 100); /*lengthにはmenu liの数が代入され(3項目なのでここでは3)その数×0.1秒経過したら上記のnav toggleからshow削除実行*/
    } 
    else {/*クリックしたときにnavにshowが付与されていないならば */
        $nav.addClass('show');/*navに付与(navのdisplay block適用) */
        $('.nav_menu_li').each(function(index) {/*nav menu liの全ての要素に順番に繰り返し処理 indexは項目番号(0から増えていく)*/
            var $this = $(this);/*thisにnav menu liを格納 */
            setTimeout(function() {/*指定した時間が経過したら実行 */
                $this.addClass('show');/*時間経過でmenu liにshowを付与 */
            }, index * 100); /*項目×0.1秒の時間が経過されたらliにshowが付与(上からアニメーションで順番に表示される) */
        });
    $this.addClass('show');/*nav toggleにshow付与 */
    }
});



//ハンバーガーメニュークリック時(index.php#○○をindex内でクリックするとスクロールしないため)
$('.nav_menu_li a').on('click', function() {
    var targetId = $(this).attr('href'); // リンク先を取得
    if (window.location.pathname === '/index.php' && targetId.indexOf('index.php#') === 0) {
        targetId = targetId.replace('index.php#', '#'); // 現在index.phpであり、かつリンクがindex.php#○○であればリンクに#以降を残す
    }
    $('html, body').animate({// html と body 要素に対してアニメーションを適用
        scrollTop: $(targetId).offset().top - $('header').outerHeight()
    }, 500, function() {// 対象要素の高さからヘッダーの高さを引いた場所へ0.5秒でスクロール
        $('.nav_toggle').trigger('click'); // nav toggleをクリック→スクロール後にメニューが閉じる
    });
    window.location.hash = targetId; // スクロール後にURLの末尾に＃○○追加→戻るを押すと前回のスクロール位置へ
});



/* -------↑ハンバーガーメニュー↑-------*/



/* -------以下swiper【！！バージョン11では右側の画像が表示されない！バージョン８で表示される！！】-------*/
const swiper = new Swiper(".swiper", {// swiper定義
    loop: true,// スライドが最後になってもループ
    slidesPerView: 1.2,// スライド1.2枚分表示(中央は全部表示)
    centeredSlides : true,    //現在のスライドが中央表示
    spaceBetween: 20,    // スライド間の余白20px
    initialSlide: 1,// 最初のスライドのインデックスを1(0から始まる為2番目)
    pagination: {
    el: ".swiper-pagination",// ページネーションが表示される要素
    clickable: true,// ページネーションもクリック可能に
    },
    navigation: {// 前後の矢印
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});



// ヘッダーがposition fixedなので、スライドが被ってしまわないように
var headerHeight = $('header').outerHeight();
$('.swiper').css('top', headerHeight + 'px');// ヘッダーの高さを余白込みで取得
$(window).on('resize', function() {// ウィンドウサイズ変更時にも画像の位置を調整→ハンバーガーメニュー出現と同時にヘッダーを少し太くしているため
    var headerHeight = $('header').outerHeight();  // ヘッダーの高さを再取得
    $('.swiper').css('top', headerHeight + 'px');  // 画像の位置を調整
});



//フォームボタン活性化の条件
function updateSubmitButtonState() {
    var isValid = $("#myForm input[required]").filter(function() {
        return $(this).val() === "";
    }).length === 0; // 必須項目が空でないかチェック
    var email = $("input[name='email']").val();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid &= emailPattern.test(email); // メールの形式チェック
    var seat = $("select[name='seat']").val();
    isValid &= seat !== ""; // 座席が選ばれているかチェック
    $("#submitBtn").prop("disabled", !isValid); // ボタンの有効/無効設定
}
$("#myForm").on("input", updateSubmitButtonState);
$(document).ready(updateSubmitButtonState); // ページロード時に状態を更新




//ヘッダーメニュークリック時(index.php#○○をindex内でクリックするとスクロールしないため)
$('.header_menu a').on('click', function() {
    var targetId = $(this).attr('href'); // リンク先を取得
    if (window.location.pathname === '/index.php' && targetId.indexOf('index.php#') === 0) {
        targetId = targetId.replace('index.php#', '#'); // 現在index.phpであり、かつリンクがindex.php#○○であればリンクに#以降を残す
    }
    $('html, body').animate({// html と body 要素に対してアニメーションを適用
        scrollTop: $(targetId).offset().top - $('header').outerHeight()
    }, 500, function() {// 対象要素の高さからヘッダーの高さを引いた場所へ0.5秒でスクロール
    });
    window.location.hash = targetId; // スクロール後にURLの末尾に＃○○追加→戻るを押すと前回のスクロール位置へ
});
