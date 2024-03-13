// parallax.js
document.addEventListener('DOMContentLoaded', function () {
    var parallaxSections = document.querySelectorAll('.parallax-section');

    function updateParallax() {
        parallaxSections.forEach(function (section) {
            var scrollPosition = window.scrollY;
            var sectionOffset = section.offsetTop;
            var sectionHeight = section.offsetHeight;

            var parallaxValue = (scrollPosition - sectionOffset) / sectionHeight * 100;

            section.style.backgroundPositionY = parallaxValue + '%';
        });
    }

    // Update parallax effect on scroll
    window.addEventListener('scroll', function () {
        updateParallax();
    });

    // Update parallax effect on resize
    window.addEventListener('resize', function () {
        updateParallax();
    });

    // Initial parallax update
    updateParallax();
});
