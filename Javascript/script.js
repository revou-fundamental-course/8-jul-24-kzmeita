document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById('result').textContent = "Masukkan nilai yang valid.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Kurus';
    } else if (bmi < 24.9) {
        category = 'Normal';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesitas';
    }

    document.getElementById('result').textContent = `BMI Anda adalah ${bmi}, yang termasuk dalam kategori ${category}.`;
});
