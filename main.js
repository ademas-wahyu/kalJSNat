// main.js

function hitung() {
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);
    const operator = document.getElementById('operator').value;
  
    let hasil;
  
    switch (operator) {
      case '+':
        hasil = angka1 + angka2;
        break;
      case '-':
        hasil = angka1 - angka2;
        break;
      case '*':
        hasil = angka1 * angka2;
        break;
      case '/':
        if (angka2 === 0) {
          hasil = "Tidak dapat dibagi dengan nol";
        } else {
          hasil = angka1 / angka2;
        }
        break;
      default:
        hasil = "Operator tidak valid";
    }
  
    document.getElementById('hasil').textContent = hasil;
  }