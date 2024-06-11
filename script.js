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
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: ""
    },

];



let currentQuestion = 1;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score');

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
    if (answer === currentQuizData.correctAnswer) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert('Quiz completed!');
        // You can add further actions after completing the quiz
    }
}

// Initial load
loadQuestion();




What does USB stand for?

A) Universal Serial Bus
B) Unified System Bandwidth
C) Unique Serial Block
D) Unified System Board
Correct Answer: A) Universal Serial Bus
Which type of display technology does not require a backlight?

A) LCD
B) LED
C) OLED
D) Plasma
Correct Answer: C) OLED (Organic Light-Emitting Diode)
Which component of a computer system converts digital data into analog signals for transmission over telephone lines?

A) Modem
B) Router
C) Switch
D) Hub
Correct Answer: A) Modem (Modulator-Demodulator)
Which of the following is not an input device?

A) Keyboard
B) Mouse
C) Monitor
D) Scanner
Correct Answer: C) Monitor
What does LAN stand for?

A) Local Access Network
B) Large Area Network
C) Local Area Network
D) Longitudinal Access Network
Correct Answer: C) Local Area Network
Which of the following is used to cool down the CPU in a computer?

A) Heat Sink
B) Fan
C) Liquid Cooling System
D) All of the above
Correct Answer: D) All of the above
Which interface standard is used to connect external hard drives and other peripherals to a computer?

A) SATA
B) USB
C) HDMI
D) Thunderbolt
Correct Answer: B) USB (Universal Serial Bus)
What is the purpose of a heat sink in a computer?

A) To store data permanently
B) To provide power to other components
C) To cool down the CPU
D) To process and output audio signals
Correct Answer: C) To cool down the CPU
Which type of memory is non-volatile?

A) RAM
B) ROM
C) Cache
D) Virtual Memory
Correct Answer: B) ROM (Read-Only Memory)
What is the function of a network switch?

A) To connect multiple devices in a network
B) To convert digital data into analog signals
C) To provide power to other network devices
D) To convert analog signals into digital data
Correct Answer: A) To connect multiple devices in a network
Which of the following is not a type of computer port?

A) USB
B) HDMI
C) CPU
D) Ethernet
Correct Answer: C) CPU