// Function to calculate BMI
function calculateBMI(weight, height) {
    // Convert height from cm to meters
    height = height / 100;
    // Calculate BMI
    return (weight / (height * height)).toFixed(2);
}

// Function to provide explanation based on BMI value
function getBMIExplanation(bmi, gender) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

// Event listener for form submission
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    // Get input values
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;
    
    // Validate input values
    if (weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }
    
    // Calculate BMI
    const bmi = calculateBMI(weight, height);
    
    // Get BMI explanation
    const explanation = getBMIExplanation(bmi, gender);
    
    // Display result
    document.getElementById('bmiValue').innerText = `BMI Anda: ${bmi}`;
    document.getElementById('bmiExplanation').innerText = `Keterangan: ${explanation}`;
});
