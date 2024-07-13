function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    let status = '';

    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (ideal)';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        status = 'Kelebihan berat badan';
    } else {
        status = 'Kegemukan (obesitas)';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>BMI Anda adalah: ${bmi.toFixed(2)}</p><p>Status berat badan: ${status}</p>`;
}
