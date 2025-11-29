// Video Performance Optimization for Escape From Duckov Website
document.addEventListener('DOMContentLoaded', function() {
  // Lazy load videos when they come into viewport
  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        if (video.paused && video.readyState >= 2) {
          video.play().catch(e => {
            console.log('Autoplay prevented:', e);
            // Fallback: add play button overlay
            if (!video.classList.contains('manual-play-fallback')) {
              addPlayButton(video);
            }
          });
        }
        observer.unobserve(video);
      } else {
        // Pause videos when out of viewport to save resources
        const video = entry.target;
        if (!video.paused) {
          video.pause();
        }
      }
    });
  }, {
    threshold: 0.1, // Start loading when 10% is visible
    rootMargin: '50px' // Start loading 50px before entering viewport
  });

  // Observe all video elements
  const videos = document.querySelectorAll('video[autoplay]');
  videos.forEach(video => {
    // Set initial load state
    video.preload = 'metadata';

    // Add error handling
    video.addEventListener('error', function() {
      console.log('Video error:', video.src);
      // Fallback to poster image
      video.style.display = 'none';
      const img = video.querySelector('img');
      if (img) {
        img.style.display = 'block';
      }
    });

    // Add loading state indicator
    video.addEventListener('waiting', function() {
      video.classList.add('video-loading');
    });

    video.addEventListener('playing', function() {
      video.classList.remove('video-loading');
    });

    // Start observing
    videoObserver.observe(video);
  });

  // Add play button fallback for autoplay blocked videos
  function addPlayButton(video) {
    const playButton = document.createElement('button');
    playButton.innerHTML = '▶';
    playButton.className = 'video-play-fallback';
    playButton.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.7);
      color: white;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      font-size: 24px;
      cursor: pointer;
      z-index: 10;
      transition: background 0.3s ease;
    `;

    playButton.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(0, 0, 0, 0.9)';
    });

    playButton.addEventListener('mouseleave', function() {
      this.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    playButton.addEventListener('click', function() {
      video.play().then(() => {
        playButton.remove();
        video.classList.add('manual-play-fallback');
      }).catch(e => {
        console.log('Manual play failed:', e);
      });
    });

    const container = video.parentElement;
    if (container && container.style.position !== 'absolute' && container.style.position !== 'relative') {
      container.style.position = 'relative';
    }

    container.appendChild(playButton);
  }

  // Optimize for mobile devices
  if (window.innerWidth <= 768) {
    videos.forEach(video => {
      // Reduce resolution for mobile
      if (video.src.includes('.webm')) {
        video.setAttribute('playsinline', 'true');
        video.setAttribute('muted', 'true');
      }
    });
  }

  // Add video loading CSS styles
  const style = document.createElement('style');
  style.textContent = `
    .video-loading {
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }

    .video-play-fallback:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }

    /* Optimize video containers for performance */
    .guide-video-container,
    .mod-video-container,
    .news-video-container,
    .wiki-video-container,
    .contact-video-container {
      will-change: transform;
      contain: layout style paint;
    }
  `;
  document.head.appendChild(style);

  console.log('Escape From Duckov - Video optimization loaded');
});