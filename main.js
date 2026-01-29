const data = {
  questions: [
    {
      question: "부모님께서 선호하는 생활 환경은 어떤 곳인가요?",
      answers: [
        { text: "활동적인 여가 활동이 가득한 도심", type: "urban" },
        { text: "조용하고 한적한 자연 속", type: "nature" },
        { text: "편안하고 고급스러운 시설", type: "luxury" },
      ],
    },
    {
      question: "어떤 종류의 여가 활동을 즐기시나요?",
      answers: [
        { text: "쇼핑, 영화, 공연 등 문화생활", type: "urban" },
        { text: "산책, 등산, 텃밭 가꾸기 등", type: "nature" },
        { text: "골프, 스파, 피트니스 등 고급 스포츠", type: "luxury" },
      ],
    },
    {
        question: "의료 시설과의 접근성은 얼마나 중요하게 생각하시나요?",
        answers: [
          { text: "종합병원이 가까운 곳이 최우선", type: "urban" },
          { text: "주기적인 건강 관리가 가능한 곳", type: "nature" },
          { text: "최고 수준의 의료 서비스가 제공되는 곳", type: "luxury" },
        ],
    },
    {
        question: "주변 사람들과의 교류를 얼마나 원하시나요?",
        answers: [
          { text: "다양한 사람들과 어울리는 것을 즐김", type: "urban" },
          { text: "소수의 사람들과 깊은 관계를 맺고 싶음", type: "nature" },
          { text: "개인의 프라이버시가 더 중요함", type: "luxury" },
        ],
    },
    {
        question: "선호하는 식사 스타일은 무엇인가요?",
        answers: [
          { text: "다양한 종류의 맛집을 즐기고 싶음", type: "urban" },
          { text: "직접 기른 유기농 식단", type: "nature" },
          { text: "호텔급의 고품격 식사", type: "luxury" },
        ],
    },
    {
        question: "가족들이 방문하기에 얼마나 편리해야 할까요?",
        answers: [
          { text: "대중교통으로 쉽게 올 수 있는 곳", type: "urban" },
          { text: "자연 경관을 함께 즐길 수 있는 곳", type: "nature" },
          { text: "주차 공간이 넓고 편의시설이 좋은 곳", type: "luxury" },
        ],
    },
    {
        question: "어떤 종류의 주거 공간을 선호하시나요?",
        answers: [
          { text: "편리한 최신식 아파트형", type: "urban" },
          { text: "마당이 있는 단독 주택형", type: "nature" },
          { text: "넓고 고급스러운 최고급 빌라형", type: "luxury" },
        ],
    },
    {
        question: "새로운 것을 배우거나 취미를 가지는 것에 관심이 있으신가요?",
        answers: [
          { text: "백화점 문화센터처럼 다양한 강좌를 원함", type: "urban" },
          { text: "자연과 관련된 소소한 취미(원예, 공예 등)", type: "nature" },
          { text: "고급 악기, 미술 등 전문적인 레슨", type: "luxury" },
        ],
    },
    {
        question: "반려동물과 함께 지낼 수 있는 환경이 필요한가요?",
        answers: [
          { text: "반려동물과 함께 산책할 공원이 중요", type: "urban" },
          { text: "반려동물이 자유롭게 뛰어놀 수 있는 공간", type: "nature" },
          { text: "반려동물 케어 서비스가 제공되는 곳", type: "luxury" },
        ],
    },
    {
        question: "입주 비용과 월 생활비는 어느 정도로 생각하시나요?",
        answers: [
          { text: "합리적인 수준의 비용", type: "urban" },
          { text: "자연 친화적인 삶에 투자할 의향이 있음", type: "nature" },
          { text: "비용에 구애받지 않고 최고의 서비스를 원함", type: "luxury" },
        ],
    },
  ],
  results: {
    urban: {
      name: "도심 속 활기찬 라이프, '메트로폴리탄 실버타운'",
      description:
        "뛰어난 접근성과 편리한 생활 인프라를 자랑하는 곳입니다. 주변에 대형 병원, 쇼핑몰, 문화 시설이 밀집해 있어 활동적인 부모님께 안성맞춤입니다. 다양한 동호회와 커뮤니티 활동을 통해 다른 입주민들과 즐거운 교류를 할 수 있습니다.",
    },
    nature: {
      name: "자연과 함께하는 건강한 삶, '그린밸리 실버타운'",
      description:
        "아름다운 자연에 둘러싸여 맑은 공기와 평화로운 생활을 누릴 수 있는 곳입니다. 텃밭을 가꾸고, 산책로를 거닐며 전원생활의 여유를 만끽할 수 있습니다. 자연 친화적인 식단과 건강 관리 프로그램으로 건강한 노후를 보낼 수 있습니다.",
    },
    luxury: {
      name: "최고급 서비스와 편안함, '더 포레스트 프리미엄'",
      description:
        "호텔급의 시설과 서비스를 제공하는 최고급 실버타운입니다. 넓고 고급스러운 주거 공간, 전담 매니저의 케어, 스파, 골프 등 다양한 프리미엄 서비스를 누릴 수 있습니다. 프라이빗한 생활을 보장하며 가장 편안하고 품격 있는 노후를 선사합니다.",
    },
  },
};

const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const progressBar = document.getElementById('progress-bar');
const resultEl = document.getElementById('result');

let currentQuestionIndex = 0;
const scores = {
  urban: 0,
  nature: 0,
  luxury: 0,
};

function startQuiz() {
  startScreen.classList.add('hidden');
  questionScreen.classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const currentQuestion = data.questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = '';

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('option-btn');
    button.addEventListener('click', () => selectAnswer(answer.type));
    optionsEl.appendChild(button);
  });

  updateProgressBar();
}

function selectAnswer(type) {
  scores[type]++;
  currentQuestionIndex++;

  if (currentQuestionIndex < data.questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function updateProgressBar() {
  const progress = (currentQuestionIndex / data.questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function showResult() {
  questionScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  let resultType = 'urban';
  if (scores.nature > scores.urban && scores.nature > scores.luxury) {
    resultType = 'nature';
  } else if (scores.luxury > scores.urban && scores.luxury > scores.nature) {
    resultType = 'luxury';
  }

  const result = data.results[resultType];
  resultEl.innerHTML = `
    <h3>${result.name}</h3>
    <p>${result.description}</p>
  `;
}

startBtn.addEventListener('click', startQuiz);
