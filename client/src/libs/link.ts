function isValidUrl(url: string): boolean {
  try {
    const check = new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}
// https://dev.to/davidemaye/how-to-validate-urls-in-javascript-adm
export default isValidUrl;
