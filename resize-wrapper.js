function resizeWrapper() {
  var wrapper = document.querySelector('.wrapper');
  var body = document.querySelector('.body');
  if (!wrapper || !body) return;

  // Below 830px remove-wrapper.js unwraps .wrapper entirely, so let CSS handle it.
  if (window.innerWidth <= 830) {
    wrapper.style.height = '';
    return;
  }

  var bodyRect = body.getBoundingClientRect();
  var wrapperRect = wrapper.getBoundingClientRect();
  var neededHeight = Math.ceil(bodyRect.bottom - wrapperRect.top) + 40;
  wrapper.style.height = neededHeight + 'px';
}

window.addEventListener('load', resizeWrapper);

(function () {
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeWrapper, 150);
  });
})();
