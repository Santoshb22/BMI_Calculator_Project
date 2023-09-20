const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    const bmi = (weight / ((height * height) / 10000));
    document.getElementById("result").textContent = bmi.toFixed(2);
    
});