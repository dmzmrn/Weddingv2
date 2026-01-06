// Envelope Animation Preloader Script
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const openWebsiteBtn = document.getElementById('openWebsite');
    const envelopeOverlay = document.getElementById('envelope-overlay');
    const mainWebsite = document.getElementById('main-website');
    
    let autoRedirectTimer = null;

    // Make envelope open on hover
    envelope.addEventListener('mouseenter', function() {
        envelope.classList.add('open');
        
        // Start automatic redirect timer after card is shown (1.5 seconds)
        if (autoRedirectTimer) {
            clearTimeout(autoRedirectTimer);
        }
        
        autoRedirectTimer = setTimeout(function() {
            showMainWebsite();
        }, 2000);
    });

    // Clear timer when mouse leaves (optional - remove if you want timer to continue)
    envelope.addEventListener('mouseleave', function() {
        // Optionally clear timer if user moves away
        // Uncomment the line below if you want to cancel auto-redirect on mouse leave
        // if (autoRedirectTimer) clearTimeout(autoRedirectTimer);
    });

    // Open website button click (manual trigger)
    if (openWebsiteBtn) {
        openWebsiteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear auto timer since user clicked manually
            if (autoRedirectTimer) {
                clearTimeout(autoRedirectTimer);
            }
            
            showMainWebsite();
        });
    }

    // Function to hide overlay and show main website
    function showMainWebsite() {
        envelope.classList.add('sent');
        
        setTimeout(function() {
            envelope.classList.add('fly-away');
        }, 500);
        
        // Hide overlay after fly-away animation
        setTimeout(() => {
            envelopeOverlay.classList.add('hidden');
            
            // Show main website
            if (mainWebsite) {
                mainWebsite.classList.remove('main-website-hidden');
                mainWebsite.classList.add('main-website-visible');
            }
            
            // Remove overlay from DOM after transition
            setTimeout(() => {
                envelopeOverlay.style.display = 'none';
            }, 800);
        }, 1300);
    }
});