let next = document.getElementById('next');
let prev = document.getElementById('prev');

// when click on next button
next.addEventListener('click',()=>{
    let slides = document.querySelector('.movie-list');
    let thumbnail = document.querySelector('.thumbnail');
    let slidesItem = slides.querySelectorAll('.movie-list .items');
    let thumbnailItem = thumbnail.querySelectorAll('.container .thumbnail .item');
    slides.append(slidesItem[0]);
    thumbnail.append(thumbnailItem[0]);
    // container.classList.add('next');
});

// when click on prev button
prev.addEventListener('click',()=>{
    let slider = document.querySelector('.container .movie-list');
    let thumbnail = document.querySelector('.container .thumbnail');
    let sliderItem = slider.querySelectorAll('.container .movie-list .items');
    let thumbnailItem = thumbnail.querySelectorAll('.container .thumbnail .item');
    slider.prepend(sliderItem[sliderItem.length - 1]);
    thumbnail.prepend(thumbnailItem[thumbnailItem.length - 1]);
    // container.classList.add('prev');
});

function showSlider(type){
    let sliderItem = slider.querySelectorAll(' .items');
    let thumbnailItem = thumbnail.querySelectorAll(' .item');

    if(type == 'next'){
        slider.appendChild(sliderItem[0]);
        thumbnail.appendChild(thumbnailItem[0]);
        // container.classList.add('next');
    }
    else{
        slider.prepend(sliderItem[sliderItem.length - 1]);
        thumbnail.prepend(thumbnailItem[thumbnailItem.length - 1]);
        // container.classList.add('prev');
    }

    // let timeout=2000;
    // let settimeout = setTimeout(()=>{
    //     container.classList.remove('next');
    //     container.classList.remove('prev');
    // }, timeout);

    // clearTimeout(settimeout);
}