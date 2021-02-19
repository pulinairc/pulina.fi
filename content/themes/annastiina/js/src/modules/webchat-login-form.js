/* eslint-disable func-names */
// Type the same thing on other required input
window.onload = function () {
  if (document.getElementById('nick') != null) {
    const src = document.getElementById('nick');
    const dst = document.getElementById('username');
    src.addEventListener('input', () => {
      dst.value = src.value;
    });
  }
};
