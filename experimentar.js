document.addEventListener('DOMContentLoaded', function() {
    let currentFaunaIndex = 0;
    const faunaSlides = document.querySelectorAll('.artists-slides-fauna .artists-slide-fauna');
    const totalFaunaSlides = faunaSlides.length;

    function updateFaunaSliderPosition() {
        document.querySelector('.artists-slides-fauna').style.transform = `translateX(-${currentFaunaIndex * 100}%)`;
    }

    function moveToNextFaunaSlide() {
        currentFaunaIndex = (currentFaunaIndex + 1) % totalFaunaSlides;
        updateFaunaSliderPosition();
    }

    function moveToPrevFaunaSlide() {
        currentFaunaIndex = (currentFaunaIndex - 1 + totalFaunaSlides) % totalFaunaSlides;
        updateFaunaSliderPosition();
    }

    document.querySelector('.artists-next').addEventListener('click', moveToNextFaunaSlide);
    document.querySelector('.artists-prev').addEventListener('click', moveToPrevFaunaSlide);

    // Show the first slide initially
    updateFaunaSliderPosition();
});
