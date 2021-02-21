// https://codepen.io/wilbo/pen/xRVLOj
// All pre tags on the page
const pres = document.getElementsByTagName('pre');

// Reformat html of pre tags
if (pres !== null) {
  for (let i = 0; i < pres.length; i++) {
    // check if its a pre tag with a prism class
    if (isPrismClass(pres[i])) {
      // insert code and copy element
      pres[
        i
      ].innerHTML = `<div class="copy"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg><span class="screen-reader-text"></span></div><code class="${pres[i].className}">${pres[i].innerHTML}</code>`;
    }
  }
}

// Create clipboard for every copy element
const clipboard = new Clipboard('.copy', {
  target: (trigger) => trigger.nextElementSibling,
});

// Do stuff when copy is clicked
clipboard.on('success', (event) => {
  event.trigger.textContent = 'kopioitu!';
  setTimeout(() => {
    event.clearSelection();
    event.trigger.textContent = '';
    // event.trigger.textContent = 'kopioi';
  }, 2000);
});

// Helper function
function isPrismClass(preTag) {
  return preTag.className.substring(0, 8) === 'language';
}
