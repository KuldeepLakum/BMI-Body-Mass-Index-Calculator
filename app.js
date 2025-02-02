const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const bmiValue = document.querySelector("#bmiValue");
const msg = document.querySelector("#msg");

function getBmiValue() {
    let weightVal = parseFloat(weight.value);
    let heightFt = parseFloat(height.value);

    if (weightVal > 0 && heightFt > 0) {
        let heightMt = heightFt * 0.3048; // Convert feet to meters
        let bmi = weightVal / (heightMt * heightMt);
        let finalBmi = bmi.toFixed(2);

        bmiValue.value = finalBmi;

        if (bmi < 19) {
            msg.innerHTML = `${finalBmi}, Underweight`;
            msg.style.color = "orange";
        } else if (bmi <= 25) {
            msg.innerHTML = `${finalBmi}, Normal`;
            msg.style.color = "green";
        } else if (bmi <= 30) {
            msg.innerHTML = `${finalBmi}, Overweight`;
            msg.style.color = "red";
        } else {
            msg.innerHTML = `${finalBmi}, Obese`;
            msg.style.color = "black";
            msg.style.backgroundColor = "red";
        }
    } else {
        msg.innerHTML = "Please enter valid values!";
        msg.style.color = "red";
    }
}
