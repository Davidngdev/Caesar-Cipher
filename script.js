function translate() {
    const plaintextInput = document.getElementById('plaintext').value;
    const shiftInput = parseInt(document.getElementById('shift').value);
    const outputValue = caesarCipher(plaintext, shift);
    document.getElementById('output').innerHTML = outputValue;
    plaintextInput.addEventListener('input', translate);
    shiftInput.addEventListener('input', translate);
  }
  function caesarCipher(string, shift) {
   return string.replace(/[a-zA-Z]/g, function(c) {
    const base = c < 'a' ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
   });
  }