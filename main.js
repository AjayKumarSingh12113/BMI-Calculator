
document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();// it act to stop the submit form to submit

    // input take
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const heightM = heightCm / 100;

    // Calculate BMI
    const bmi = weight / (heightM * heightM);

    //  BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display the results
    document.getElementById('bmi-value').textContent = `Your BMI is ${bmi.toFixed(1)}`;
    document.getElementById('bmi-category').textContent = `Category: ${category}`;
});
