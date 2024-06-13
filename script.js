const quizData = [
    {
        question: "What does CPU stand for?",
        choices: ["Central Processing Unit", "Computer Personal Unit", "Central Personal Unit", "Central Processor Unit"],
        correctAnswer: "Central Processing Unit"
    },
    {
        question: "Which of the following is a primary storage device?",
        choices: [" Hard Disk Drive (HDD)", "Solid State Drive (SSD)", "Random Access Memory (RAM)", "External USB Drive"],
        correctAnswer: "Random Access Memory (RAM)"
    },
    {
        question: "What does RAM stand for?",
        choices: ["Random Access Memory", "Read-Only Memory", "Running Arithmetic Memory", "Real-time Access Memory"],
        correctAnswer: "Random Access Memory"
    },
    {
        question: "Which component of a computer stores data permanently?",
        choices: ["RAM", "CPU", "ROM ", "Cache"],
        correctAnswer: "ROM"
    },
    {
        question: "What does GPU stand for?",
        choices: ["Graphical Performance Unit", "Graphics Processing Unit", "General Processing Unit", "Graphics Performance Utility"],
        correctAnswer: "Graphics Processing Unit"
    },
    {
        question: "Which of the following is a secondary storage device?",
        choices: ["RAM", "CPU", "SSD", "Cache"],
        correctAnswer: "SSD (Solid State Drive)"
    },
    {
        question: "What is the purpose of a motherboard in a computer?",
        choices: ["To provide power to other components", "To execute program instructions", "To store data permanently", "To provide communication between components"],
        correctAnswer: "To provide communication between components"
    },
    {
        question: "What does PSU stand for in the context of computer hardware?",
        choices: ["Personal System Unit", "Power Supply Unit", "Peripheral Support Unit", "Primary Storage Unit"],
        correctAnswer: "Power Supply Unit"
    },
    {
        question: "Which component of a computer is responsible for managing and coordinating all hardware functions?",
        choices: ["CPU", "BIOS", "Motherboard", "Operating System"],
        correctAnswer: "CPU"
    },
    {
        question: "What does BIOS stand for?",
        choices: ["Basic Input Output System", "Binary Input Output System", " Basic Internal Operating System", "Binary Internal Operating System"],
        correctAnswer: "Basic Input Output System"
    },
    {
        question: "Which of the following is a peripheral device?",
        choices: ["CPU", "RAM", "Printer", "SSD"],
        correctAnswer: "Printer"
    },
    {
        question: "What does RAID stand for?",
        choices: ["Redundant Array of Independent Disks", "Random Access Integrated Drive", "Read-Only Array of Independent Disks", "Real-time Access and Integrated Disk"],
        correctAnswer: "Redundant Array of Independent Disks"
    },
    {
        question: "What is the purpose of a sound card in a computer?",
        choices: ["To provide power to speakers", "To process and output audio signals", "To improve graphics performance", "To store data permanently"],
        correctAnswer: "To process and output audio signals"
    },
    {
        question: "Which of the following is a network interface device?",
        choices: ["CPU", "GPU", "NIC", "HDD"],
        correctAnswer: "NIC"
    },
    {
        question: "What does USB stand for?",
        choices: ["Universal Serial Bus", "", "", ""],
        correctAnswer: "Universal Serial Bus"
    },
    {
        question: "What does USB stand for?",
        choices: ["Universal Serial Bus", "Unified System Bandwidth", "Unique Serial Block", "Unified System Board"],
        correctAnswer: "Universal Serial Bus"
    },
    {
        question: "Which type of display technology does not require a backlight?",
        choices: ["LCD", "LED", "OLED", "Plasma"],
        correctAnswer: "OLED"
    },
    {
        question: "Which component of a computer system converts digital data into analog signals for transmission over telephone lines?",
        choices: ["Modem", "Router", "Switch", "Hub"],
        correctAnswer: "Modem"
    },
    {
        question: "Which of the following is not an input device?",
        choices: ["Keyboard", "Mouse", "Monitor", "Scanner"],
        correctAnswer: "Monitor"
    },
    {
        question: "What does LAN stand for?",
        choices: ["Local Access Network", "Large Area Network", "Local Area Network", "Longitudinal Access Network"],
        correctAnswer: ""
    },
    {
        question: "Which of the following is used to cool down the CPU in a computer?",
        choices: ["Heat Sink", "Fan", "Liquid Cooling System", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the purpose of a heat sink in a computer?",
        choices: ["To store data permanently", "To provide power to other components", "To cool down the CPU", "To process and output audio signals"],
        correctAnswer: "To cool down the CPU"
    },
    {
        question: "Which type of memory is non-volatile?",
        choices: ["RAM", "ROM", "Cache", "Virtual Memory"],
        correctAnswer: "ROM"
    },
    {
        question: "What is the function of a network switch?",
        choices: ["To connect multiple devices in a network", "To convert digital data into analog signals", "To provide power to other network devices", "To convert analog signals into digital data"],
        correctAnswer: "To connect multiple devices in a network"
    },
    {
        question: "Which of the following is not a type of computer port?",
        choices: ["USB", "HDMI", "CPU", "Ethernet"],
        correctAnswer: "CPU"
    },
    {
        question: "Which interface standard is used to connect external hard drives and other peripherals to a computer?",
        choices: ["SATA", "USB", "HDMICPU", "Thunderbolt"],
        correctAnswer: "USB"
    },


];



let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score');
next = false;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = '';
    currentQuizData.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.addEventListener('click', () => {
            checkAnswer(choice);
        });
        choicesElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer ) {
        score++;
        next = true;
        scoreElement.innerText = `Score: ${score}`;
    }
    next = false;
}

function nextQuestion() {
    if (next) {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert('Quiz completed!');
        // You can add further actions after completing the quiz
    }
}
}

// Initial load
loadQuestion();