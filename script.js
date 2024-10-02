// script.js

let currentState = 0;

const story = [
    {
        question: "You wake up in a dark forest. What do you want to do?",
        answers: [
            { text: "Explore the forest", nextState: 1 },
            { text: "Go back to sleep", nextState: 2 },
        ],
    },
    {
        question: "You find a path leading to a village. What do you do?",
        answers: [
            { text: "Go to the village", nextState: 3 },
            { text: "Continue exploring the forest", nextState: 4 },
        ],
    },
    {
        question: "You wake up again. This time, you are safe in your bed. The end.",
        answers: [],
    },
    {
        question: "The villagers welcome you. They offer you food. What do you do?",
        answers: [
            { text: "Accept the food", nextState: 5 },
            { text: "Politely refuse", nextState: 6 },
        ],
    },
    {
        question: "You stumble upon a treasure chest! What do you do?",
        answers: [
            { text: "Open the chest", nextState: 7 },
            { text: "Leave it alone", nextState: 8 },
        ],
    },
    {
        question: "You eat the food and feel energized. You decide to stay. The end.",
        answers: [],
    },
    {
        question: "The villagers respect your choice but you feel lonely. The end.",
        answers: [],
    },
    {
        question: "Inside the chest, you find gold! You are now rich. The end.",
        answers: [],
    },
    {
        question: "You walk away, feeling adventurous. The end.",
        answers: [],
    },
];

function renderQuestion() {
    const questionContainer = document.getElementById("question");
    const answersContainer = document.getElementById("answers");
    const currentStory = story[currentState];

    questionContainer.innerText = currentStory.question;
    answersContainer.innerHTML = "";

    currentStory.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.onclick = () => {
            currentState = answer.nextState;
            renderQuestion();
        };
        answersContainer.appendChild(button);
    });

    document.getElementById("next-btn").style.display = currentStory.answers.length === 0 ? "none" : "block";
}

// Start the game
renderQuestion();
