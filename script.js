jQuery(document).ready(function ($) {
    $('.loop').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 15,
        responsive: {
            600: {
                items: 1.2
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var playIcon = document.getElementById("playIcon");
    var pauseIcon = document.getElementById("pauseIcon");
    var replayIcon = document.getElementById("replayIcon");

    playIcon.addEventListener("click", function () {
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
        setTimeout(function () {
            pauseIcon.classList.add("hidden");
            replayIcon.classList.remove("hidden");
        }, 10000); // 10 seconds
    });

    replayIcon.addEventListener("click", function () {
        replayIcon.classList.add("hidden");
        playIcon.classList.remove("hidden");
    });
});
function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function () {
    moveToSelected($(this));
});

$('#prev').click(function () {
    moveToSelected('prev');
});

$('#next').click(function () {
    moveToSelected('next');
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal-highlight-heading, .reveal-highlight-link-one, .reveal-highlight-link-two, .typography-site-body-text");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

$(document).ready(function() {
    // Find the maximum height among all carousel items
    var maxHeight = 0;
    $(".loop .item").each(function(){
        var itemHeight = $(this).height();
        if (itemHeight > maxHeight) {
            maxHeight = itemHeight;
        }
    });

    // Set the same height to all carousel items
    $(".loop .item").css("height", maxHeight + "px");
});

// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var element = document.querySelector('.section3-text');

    if (isInViewport(element)) {
        element.classList.add('visible');
    }
}

// Add scroll event listener
window.addEventListener('scroll', function() {
    handleScroll();
});

// video loop times in section 3
const video = document.getElementById('sec3Video');
const loopCount = 3; // Set the number of times you want the video to loop

let loopIndex = 0;

function handleVideoEnded() {
    loopIndex++;
    if (loopIndex < loopCount) {
        video.play(); // Replay the video if loopIndex is less than loopCount
    }
}

// Add event listener for video ended
video.addEventListener('ended', handleVideoEnded);

// Start playing the video
video.play();
