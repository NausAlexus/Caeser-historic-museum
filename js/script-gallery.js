$(document).ready(function() {
    $('.gallery').on('click', function(e) {
        e.preventDefault(); 

        let url = $(this).attr('href'); // Получаем URL из атрибута href ссылки

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function(response) {
                $('.main').html(response); // Заменяем содержимое <main> новым контентом
            },
            error: function() {
                alert('Error loading data:');
            }
        });
    });
});





