// Анимация при видимости пользователя__________________________________________
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
    }, {
        threshold: 0.1,
        rootMargin: '0px',
    });
  
const targetElement1 = document.querySelector('.explore-text-sculpture-1');
const targetElement2 = document.querySelector('.explore-text-sculpture-2');
const targetElement3 = document.querySelector('.explore-text-sculpture-3');
const targetElement4 = document.querySelector('.explore-text-sculpture-4');
const targetElement5 = document.querySelector('.about-block-title');
const targetElement6 = document.querySelector('.about-block-description');
const targetElement7 = document.querySelector('.about-text-content');
const targetElement8 = document.querySelector('.faq-block');
if (targetElement1) {
    observer.observe(targetElement1);
}
if (targetElement2) {
    observer.observe(targetElement2);
}
if (targetElement3) {
    observer.observe(targetElement3);
}
if (targetElement4) {
    observer.observe(targetElement4);
}
if (targetElement5) {
    observer.observe(targetElement5);
}
if (targetElement6) {
    observer.observe(targetElement6);
}
if (targetElement7) {
    observer.observe(targetElement7);
}
if (targetElement8) {
    observer.observe(targetElement8);
}

// Отображение данных Home_____________________________
async function loadHomeData() {
    try {
        const response = await fetch('./config/main-config.json');
        const data = await response.json();

        const exploreTextElement = document.querySelector('.explore-text');
        const exploreTitleElement = document.querySelector('.explore-title');
        const exploreContentText1 = document.querySelector(".explore-text-sculpture-1-text");
        const exploreContentText2 = document.querySelector(".explore-text-sculpture-2-text");
        const exploreContentText3 = document.querySelector(".explore-text-sculpture-3-text");
        const exploreContentText4 = document.querySelector(".explore-text-sculpture-4-text");
        const aboutTitle = document.querySelector(".about-block-title");
        const aboutDescription = document.querySelector(".about-block-description");
        const faqTitle = document.querySelector(".faq-block-title");
        const faqDescription = document.querySelector(".faq-block-description");

        exploreTextElement.textContent = data.explore[0]['explore-text'];
        exploreTitleElement.textContent = data.explore[0]['explore-title'];
        exploreContentText1.textContent = data.explore[0]['explore-content-text-1'];
        exploreContentText2.textContent = data.explore[0]['explore-content-text-2'];
        exploreContentText3.textContent = data.explore[0]['explore-content-text-3'];
        exploreContentText4.textContent = data.explore[0]['explore-content-text-4'];
        aboutTitle.textContent = data.about[0]['title'];
        aboutDescription.textContent = data.about[0]['description'];
        faqTitle.textContent = data.faq[0]['title'];
        faqDescription.textContent = data.faq[0]['description'];
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

loadHomeData();

// Отображение данных Footer_____________________________
async function loadFooterData() {
    try {
        const response = await fetch('./config/footer-config.json');
        const data = await response.json();

        const footerText = document.querySelector('.text-footer');
        const footerDetailsDaily = document.querySelector('.text-details-daily');
        const footerDetailsLast = document.querySelector('.text-details-last');
        const footerCenterText = document.querySelector('.footer-center-text');
        const footerGold = document.querySelector('.gold');
        const footerCircle = document.querySelector('.circle');

        footerText.textContent = data.content[0]['title'];
        footerDetailsDaily.textContent = data.content[0]['Daily'];
        footerDetailsLast.textContent = data.content[0]['Last entry'];
        footerCenterText.textContent = data.content[0]['Work By'];
        footerGold.textContent = data.content[0]['Company'];
        footerCircle.textContent = data.content[0]['Eyear'];

    } catch (error) {
        console.error('Error loading data:', error);
    }
}

loadFooterData();

// Отображение данных Info___________________________________
document.addEventListener('DOMContentLoaded', () => {
    fetch('./config/main-config.json')
        .then(response => response.json())
        .then(data => {
            const sculptureGrid = document.querySelector('.sculpture-grid');

            data.info.forEach(item => {
                const sculptureItem = document.createElement('div');
                sculptureItem.className = 'sculpture-item';
            
                const sculptureItemDescription = document.createElement('div');
                sculptureItemDescription.className = 'sculpture-item-description';
            
                const title = document.createElement('h3');
                title.className = 'title sculpture-title';
                title.textContent = item.title;
            
                const description = document.createElement('p');
                description.className = 'text sculpture-text';
                description.textContent = item.description;
            
                const img = document.createElement('img');
                img.src = item["src"];
                img.alt = item.title;
                img.className = 'sculpture-img';
            
                sculptureItemDescription.appendChild(title);
                sculptureItemDescription.appendChild(description);
                sculptureItem.appendChild(sculptureItemDescription);
                sculptureItem.appendChild(img);
            
                sculptureGrid.appendChild(sculptureItem);
                
                observer.observe(sculptureItemDescription);
                observer.observe(img);
            });
        })
        .catch(error => console.error('Error loading the JSON:', error));
});

// Отображение данных About___________________________________
document.addEventListener('DOMContentLoaded', () => {
    fetch('./config/main-config.json')
        .then(response => response.json())
        .then(data => {
            const aboutData = data.about[0];
            
            const textContentElement = document.querySelector('.about-text-content');
            
            for (let i = 1; i <= 10; i++) {
                const paragraph = document.createElement('p');
                const textKey = `text-${i}`;
                if (aboutData[textKey]) {
                    paragraph.textContent = aboutData[textKey];
                    textContentElement.appendChild(paragraph);
                }
            }
        })
        .catch(error => console.error('Error loading the JSON:', error));
});

// Отображение данных Faq___________________________________
document.addEventListener('DOMContentLoaded', () => {
    fetch('./config/main-config.json')
        .then(response => response.json())
        .then(data => {
            const faqData = data.faq[0];

            const titleElement = document.querySelector('.faq-block-title');
            const descriptionElement = document.querySelector('.faq-block-description');
            titleElement.textContent = faqData.title;
            descriptionElement.textContent = faqData.description;

            const faqContent = document.querySelector('.faq-content');

            faqData['question-content'].forEach(item => {
                const questionContainer = document.createElement('div');
                questionContainer.classList.add('question-container');

                const questionText = document.createElement('p');
                questionText.classList.add('question');
                questionText.classList.add('title');
                questionText.textContent = item['question-title'];

                const arrowImage = document.createElement('img');
                arrowImage.src = item.src;
                arrowImage.alt = 'Arrow';

                questionContainer.appendChild(questionText);
                questionContainer.appendChild(arrowImage);
                faqContent.appendChild(questionContainer);

                const questionDetail = document.createElement('div');
                questionDetail.classList.add('question-text');
                questionDetail.classList.add('text');
                questionDetail.textContent = item['question-text'];
                questionDetail.style.display = 'none';
                faqContent.appendChild(questionDetail);


                questionContainer.addEventListener('click', () => {
                    const isVisible = questionDetail.style.display === 'block';
                    questionDetail.style.display = isVisible ? 'none' : 'block';
                    if(!isVisible){
                        setTimeout(()=>{questionDetail.classList.add('shown');}, 0);
                    } else{
                        questionDetail.classList.remove('shown');
                    }
                    questionContainer.style.marginBottom = isVisible ? "50px" : "10px";
                    arrowImage.style.transform = isVisible ? "rotate(0deg)" : "rotate(90deg)";
                });
            });
        })
        .catch(error => console.error('Error loading the JSON:', error));
});

// Отображение данных Footer___________________________________
document.addEventListener('DOMContentLoaded', () => {
    fetch('./config/footer-config.json')
        .then(response => response.json())
        .then(data => {

            const socialLinksContainer = document.querySelector('.social-links');
            
            if (data.links && data.links.length > 0) {
                data.links.forEach(link => {
                    // Создаем элемент <a>
                    const anchor = document.createElement('a');
                    anchor.href = link.path;
                    anchor.target = "_blank";

                    // Создаем элемент <img> для иконки
                    const img = document.createElement('img');
                    img.src = link.src;
                    img.alt = `${link.name} Icon`;

                    // Добавляем изображение в ссылку
                    anchor.appendChild(img);

                    // Добавляем ссылку в контейнер
                    socialLinksContainer.appendChild(anchor);
                });
            } else {
                console.warn('No links found in JSON data.');
            }
        })
        .catch(error => console.error('Error loading the JSON:', error));
});

const scrollToTopButton = document.getElementById('scrollToTop');

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Обрабатываем клик по кнопке
scrollToTopButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Отображение данных Header___________________________________
document.addEventListener('DOMContentLoaded', () => {
    fetch('./config/header-config.json')
        .then(response => response.json())
        .then(data => {
            const navItemsContainer = document.querySelector('.nav-items');
        
            if (data.nav && data.nav.length > 0) {
                data.nav.forEach((link, index) => {
                // Создаем элемент <li>
                const navItem = document.createElement('li');
                navItem.classList.add('nav-item');
        
            // Создаем элемент <a>
            const navLink = document.createElement('a');
            navLink.textContent = link.name;
            navLink.href = link.path;
            navLink.classList.add('text');
            navLink.classList.add('nav-link');
        
            if(index === 0){
                navLink.classList.add('gallery');
            }

            navItemsContainer.appendChild(navItem);
            navItem.appendChild(navLink);
        
            navLink.addEventListener('click', function(e) {
                if (this.hash) {
                    e.preventDefault();

                const target = document.querySelector(this.hash);
                // Плавная прокрутка
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            }
        });
        });
        } else {
            console.warn('No links found in JSON data.');
        }
    })
    .catch(error => console.error('Error loading the JSON:', error));
});