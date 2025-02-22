document.querySelector('.read-more').addEventListener('click', function() {
    document.querySelector('.schedule_container').classList.add('show-more');
    document.querySelector('.section5').classList.add('show-more'); // ここを追加
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.schedule_container').classList.remove('show-more');
    document.querySelector('.section5').classList.remove('show-more'); // ここを追加
});
