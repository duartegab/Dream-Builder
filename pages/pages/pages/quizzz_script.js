const questions = [
    {
        question: "1. Qual objetivo de carreira te atrai mais?",
        answers: {
            ADS: "Criar, projetar, desenvolver e configurar programas e sistemas;",
            DSM: "Projetar, desenvolver e testar software;",
            GE: "Definir objetivos empresariais e criar estratégias eficientes;",
            GPI: "Melhorar qualidade e produtividade na produção industrial;",
            GRH: "Planejar e atuar na gestão de pessoas."
        },
    },
    {
        question: "2. Quais responsabilidades você gostaria de ter?",
        answers: {
            ADS: "(A) Desenvolver e otimizar sistemas, melhorar eficiência e resolver problemas tecnológicos;",
            DSM: "(B) Criar soluções tecnológicas de qualidade, focando em integração e entrega contínua;",
            GE: "(C) Otimizar operações e melhorar a eficiência organizacional;",
            GPI: "(D) Elaborar planos de manutenção de máquinas e garantir segurança;",
            GRH: "(E) Melhorar performance de equipes e implementar programas de qualidade de vida no trabalho."
        },
    },
    {
        question: "3. Quais habilidades você gostaria de desenvolver?",
        answers: {
            ADS: "(A) Habilidades em matemática, estatística e programação;",
            DSM: "(B) Habilidades em programação, computação em nuvem e segurança da informação;",
            GE: "(C) Habilidades em contabilidade, economia e marketing;",
            GPI: "(D) Habilidades em produção enxuta, cadeia de suprimentos e normas industriais;",
            GRH: "(E) Habilidades em motivação, liderança e gestão emocional."
        },
    },
    {
        question: "4. Qual tipo de projeto você gostaria de trabalhar?",
        answers: {
            ADS: "(A) Projetos de desenvolvimento e otimização de sistemas;",
            DSM: "(B) Projetos de desenvolvimento de aplicativos móveis e web;",
            GE: "(C) Projetos de planejamento estratégico e organização empresarial;",
            GPI: "(D) Projetos de melhoria de processos produtivos e logística;",
            GRH: "(E) Projetos de recrutamento, seleção e treinamento de pessoal."
        },
    },
    {
        question: "5. O que mais te motiva no trabalho?",
        answers: {
            ADS: "(A) Resolver problemas tecnológicos complexos;",
            DSM: "(B) Inovar e criar novas tecnologias;",
            GE: "(C) Planejar e executar estratégias empresariais;",
            GPI: "(D) Melhorar processos produtivos e eficiência;",
            GRH: "(E) Ajudar pessoas a se desenvolverem profissionalmente."
        },
    },
    {
        question: "6. Qual tipo de empresa você gostaria de trabalhar?",
        answers: {
            ADS: "(A) Empresas de TI, consultorias, instituições financeiras;",
            DSM: "(B) Startups, grandes corporações de tecnologia, centros de pesquisa;",
            GE: "(C) Grandes corporações, empresas de consultoria empresarial;",
            GPI: "(D) Indústrias, empresas de logística, empresas de produção;",
            GRH: "(E) Empresas com foco em desenvolvimento de pessoas e cultura organizacional."
        },
    },
    {
        question: "7. Como você prefere trabalhar em equipe?",
        answers: {
            ADS: "(A) Colaborando com desenvolvedores e analistas de sistemas;",
            DSM: "(B) Trabalhando em times de desenvolvimento ágil;",
            GE: "(C) Trabalhando com gestores e estrategistas empresariais;",
            GPI: "(D) Coordenando equipes de produção e logística;",
            GRH: "(E) Facilitando a cooperação e o desenvolvimento de equipes."
        },
       
    },
];

let currentQuestionIndex = 0;
let userSelections = {};

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const currentQuestion = questions[currentQuestionIndex];
    const answers = [];

    for (const category in currentQuestion.answers) {
        answers.push(
            `<label>
                <input type="radio" name="question${currentQuestionIndex}" value="${category}">
                ${currentQuestion.answers[category]}
            </label>`
        );
    }

    const output = `
        <div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join('')}</div>
    `;

    quizContainer.innerHTML = output;
}

function showResults() {
    let categoryCounts = {};

    for (const questionIndex in userSelections) {
        const selectedCategory = userSelections[questionIndex];
        if (categoryCounts[selectedCategory]) {
            categoryCounts[selectedCategory]++;
        } else {
            categoryCounts[selectedCategory] = 1;
        }
    }

    let maxCount = -1;
    let resultCategory = null;

    for (const category in categoryCounts) {
        if (categoryCounts[category] > maxCount) {
            maxCount = categoryCounts[category];
            resultCategory = category;
        }
    }

    const result = resultCategory ? resultCategory : "Por favor, responda todas as perguntas.";
    document.getElementById('results').innerHTML = `Você se encaixa melhor em: ${result}`;
}


function showNextQuestion() {
    saveUserSelection();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        buildQuiz();
        updateNavigationButtons();
    }
}

function showPreviousQuestion() {
    saveUserSelection();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        buildQuiz();
        updateNavigationButtons();
    }
}

function saveUserSelection() {
    const selectedOption = document.querySelector(`input[name=question${currentQuestionIndex}]:checked`);
    if (selectedOption) {
        userSelections[currentQuestionIndex] = selectedOption.value;
    }
}

function loadUserSelection() {
    const selectedOptionValue = userSelections[currentQuestionIndex];
    if (selectedOptionValue) {
        document.querySelector(`input[name=question${currentQuestionIndex}][value=${selectedOptionValue}]`).checked = true;
    }
}

function updateNavigationButtons() {
    document.getElementById('previous').disabled = currentQuestionIndex === 0;
    document.getElementById('next').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit').style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';

    loadUserSelection();
}

document.addEventListener('DOMContentLoaded', (event) => {
    buildQuiz();
    updateNavigationButtons();

    document.getElementById('next').addEventListener('click', showNextQuestion);
    document.getElementById('previous').addEventListener('click', showPreviousQuestion);
    document.getElementById('submit').addEventListener('click', showResults);
});
