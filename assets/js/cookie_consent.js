// Cookie consent logic

function hideDisclaimer() {
  document.getElementById('disclaimer-banner').style.display = 'none';
}

(function() {
  if (localStorage.getItem('disclaimer-confirm')) {
    hideDisclaimer();
  }
})();

// document.getElementById("b-btn").addEventListener('click', function() {
//   localStorage.setItem('disclaimer-confirm', 'true');
//   hideDisclaimer();
// })
function handleBtnClick() {
  localStorage.setItem('disclaimer-confirm', 'true');
  hideDisclaimer();
}