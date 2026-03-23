let answers = [];

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, index) => {
    const buttons = block.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");
            
            answers[index] = button.dataset.answer;

            console.log(answers);
        });
    });
});

function displayResult() {
    let scores = {
        chill: 0,
        energy: 0,
        emotional: 0,
        experimental: 0
    };

    answers.forEach(answer => {
        if (answer) {
            scores[answer]++;
        }
    });

    let result = "";
    let max = 0;

    for (let key in scores) {
        if (scores[key] > max) {
            max = scores[key];
            result = key;
        }
    }

    let resultText = "";

    if (result === "chill") {
        resultText = "You're a Chill vibe 🌊";
    } else if (result === "energy") {
        resultText = "You're Energetic ⚡";
    } else if (result === "emotional") {
        resultText = "You're Emotional 🎧";
    } else if (result === "experimental") {
        resultText = "You're Experimental 🎨";
    }

    document.getElementById("result-container").style.display = "block";
    document.getElementById("result-text").textContent = resultText;

}

document.getElementById("show-result").addEventListener("click", displayResult);