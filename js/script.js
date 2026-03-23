console.log("script.js connected!");

let answers = [];

const questionBlock = document.querySelectorAll(".question-block");

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