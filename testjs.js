function showBanner() {
    document.getElementById('popup-banner').style.display = 'block';
}

function closeBanner() {
    document.getElementById('popup-banner').style.display = 'none';
}

// Show the banner when the page loads
window.onload = showBanner;
