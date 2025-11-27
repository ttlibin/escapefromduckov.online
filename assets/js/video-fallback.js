// Simple video link functionality - now using static screenshot
document.addEventListener('DOMContentLoaded', function() {
    const videoLink = document.querySelector('.video-link-btn');

    if (videoLink) {
        videoLink.addEventListener('click', function(e) {
            // Open YouTube video in new tab
            window.open('https://www.youtube.com/watch?v=sSlRUkJx050', '_blank', 'noopener,noreferrer');
        });
    }
});