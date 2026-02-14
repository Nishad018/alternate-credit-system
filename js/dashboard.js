async function calculateScore() {

    let data = {
        income: document.getElementById("income").value,
        expenses: document.getElementById("expenses").value,
        savings: document.getElementById("savings").value,
        recharge: document.getElementById("mobileRecharge").value,
        upi: document.getElementById("upiTransactions").value,
        years: document.getElementById("yearsInLocation").value,
        dependents: document.getElementById("familyDependents").value,
        userType: document.getElementById("userType").value
    };

    try {

        let response = await fetch("http://localhost:5000/calculate_score", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        let result = await response.json();

        document.getElementById("result").innerText =
            "Estimated Credit Score: " + result.score;

    }
    catch(error) {
        alert("Backend not connected yet");
    }
}
