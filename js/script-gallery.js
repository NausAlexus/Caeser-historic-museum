$(document).ready(function() {
    $('.nav-items').on('click', '.gallery', function(e) {
        e.preventDefault();

        let url = $(this).attr('href'); // Получаем URL из атрибута href ссылки

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function(response) {
                $('.main').html(response); // Заменяем содержимое <main> новым контентом


                fetch("./config/main-config.json")
                .then((response) => response.json())
                .then((data) => {
                    const galleryContainer =
                        document.querySelector(".gallery-container");
        
                    const galleryTitle = document.querySelector(".gallery-title");
                    galleryTitle.textContent = data.gallery[0]["gallery-title"];
        
                    // объект в массив
                    const galleryBlocks = Object.values(
                        data.gallery[0]["gallery-content"]
                    );
        
                    galleryBlocks.forEach((block) => {
                        const galleryContent = document.createElement("div");
                        galleryContent.className = "gallery-content";
        
                        
                        const imgContainer = document.createElement("div");
                        imgContainer.className = "gallery-content-img";
                        const img = document.createElement("img");
                        img.src = block.img;
                        img.alt = block.title;
                        imgContainer.appendChild(img);
        
                        
                        const title = document.createElement("div");
                        title.className = "gallery-content-title";
                        title.textContent = block.title;
        
                        
                        const location = document.createElement("div");
                        location.className = "gallery-content-location";
                        location.innerHTML = `<strong>Location:</strong> ${block.location}`;
        
                        
                        const artefacts = document.createElement("div");
                        artefacts.className = "gallery-content-artefacts";
                        artefacts.innerHTML = `<strong>Artefacts:</strong> ${block.artefacts}`;
        
                        
                        const text = document.createElement("div");
                        text.className = "gallery-content-text";
                        text.textContent = block.text;
        
                        
                        galleryContent.appendChild(imgContainer);
                        galleryContent.appendChild(title);
                        galleryContent.appendChild(location);
                        galleryContent.appendChild(artefacts);
                        galleryContent.appendChild(text);
        
                        galleryContainer.appendChild(galleryContent);
                    });
                    if (url.includes('gallery.html')) {
                        $('.nav-items').hide(); // Скрываем меню навигации
                        $('header').css("justify-content", "center")
                    } else {
                        $('.nav-items').show(); // Показываем меню навигации
                    }
                })
                .catch((error) => console.error("Error loading the JSON:", error));

            },
            error: function() {
                alert('Error loading data:');
            }
        });
    });
});