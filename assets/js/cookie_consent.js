// Cookie consent logic
const cookieConsent = document.getElementById('cookie-consent');
const acceptCookiesButton = document.getElementById('accept-cookies');

// Check if the user has previously accepted cookies
const hasConsented = localStorage.getItem('cookie-consent-accepted');

if (!hasConsented) {
  cookieConsent.style.display = 'block';
}

acceptCookiesButton.addEventListener('click', () => {
  // Set a flag in local storage to remember user consent
  localStorage.setItem('cookie-consent-accepted', 'true');
  cookieConsent.style.display = 'none';
});
