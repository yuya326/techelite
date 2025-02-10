$(function(){
    $(".production").click(function(){
        $(this).css("backgroundColor","#b3ffff");/* クリックすると選択した要素のみ背景色変化 */
        $(".development, .consulting").css("backgroundColor","");/* それ以外の要素の背景色を白に */

        var content = $(this).data("content");/* クリックした要素のデータをcontentに代入 */
        $(".service_explanation").text(content);/* service_explanationにcontentのデータを出力 */
    });
});

$(function(){
    $(".consulting").click(function(){
        $(this).css("backgroundColor","#ffdea0");/* クリックすると選択した要素のみ背景色変化 */
        $(".production, .development").css("backgroundColor","");/* それ以外の要素の背景色を白に */

        var content = $(this).data("content");/* クリックした要素のデータをcontentに代入 */
        $(".service_explanation").text(content);/* service_explanationにcontentのデータを出力 */
    });
});

$(function(){
    $(".development").click(function(){
        $(this).css("backgroundColor","#a7ff99");/* クリックすると選択した要素のみ背景色変化 */
        $(".production, .consulting").css("backgroundColor","");/* それ以外の要素の背景色を白に */

        var content = $(this).data("content");/* クリックした要素のデータをcontentに代入 */
        $(".service_explanation").text(content);/* service_explanationにcontentのデータを出力 */
    });
});

$(document).ready(function() {
    $("#autoClick").trigger("click");/* DOMが読み込まれたらid autoClickがクリックされた状態になる */
});

$("#prefectures").change(function() {
    var prefecture = $(this).val(); // 選択された都道府県の値を取得
    var municipalities = $("#municipalities"); // 市区町村の<select>要素を取得

    municipalities.empty(); // 既存の選択肢を削除

    // 都道府県に応じた市区町村のデータ
    var cityData = {
        hokkaido: ["札幌市","函館市","小樽市","旭川市","室蘭市","釧路市","帯広市","北見市","夕張市","岩見沢市","網走市","留萌市","苫小牧市","稚内市","美唄市","芦別市","江別市","赤平市","紋別市","士別市","名寄市","三笠市","根室市","千歳市","滝川市","砂川市","歌志内市","深川市","富良野市","登別市","恵庭市","伊達市","北広島市","石狩市","北斗市"],
        aomori: ["青森市","弘前市","八戸市","黒石市","五所川原市","十和田市","三沢市","むつ市","つがる市"],
        iwate:["盛岡市","宮古市","大船渡市","花巻市","北上市","久慈市","遠野市","一関市","陸前高田市","釜石市","二戸市","八幡平市","奥州市","滝沢市"]
    };

    // 選択された都道府県に対応する市区町村を追加
    if (cityData[prefecture]) {
        cityData[prefecture].forEach(function(city) {
            municipalities.append('<option value="' + city + '">' + city + '</option>');
        });
    }
});


/* -------以下、ハンバーガーメニュー -------*/

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

$('.nav_menu_li a').on('click', function() {/*nav menu liのaがクリックされたとき */
    var targetId = $(this).attr('href');/*リンク先を取得 */
    var targetElement = $(targetId);/*targetElementに取得したリンクを代入 */
    $('html, body').animate({/*htmlとbodyにアニメーション適用【ブラウザによってbodyだけだと正しく制御できない事がある模様】 */
        scrollTop: $(targetId).offset().top - headerHeight /*目的の要素までの距離を取得し、ヘッダーの高さ差し引いている */
    }, 500, function() {/*目的地まで0.5秒でスクロールを完了させる */
        $('.nav_toggle').trigger('click');
    });
});


// /* -------以上、ハンバーガーメニュー -------*/

