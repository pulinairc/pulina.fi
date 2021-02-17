export default function getLocalization(stringKey) {
  if (typeof window.annastiina_screenReaderText === 'undefined' || typeof window.annastiina_screenReaderText[stringKey] === 'undefined') {
    // eslint-disable-next-line no-console
    console.error(`Missing translation for ${stringKey}`);
    return '';
  }
  return window.annastiina_screenReaderText[stringKey];
}
