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
        question: "원하시는 보증금/월 생활비 금액대는 어느 정도인가요?",
        answers: [
          { text: "보증금 1~2억, 월 200~300만원", type: "urban" },
          { text: "보증금 3~5억, 월 300~500만원", type: "nature" },
          { text: "보증금 6억 이상, 월 500만원 이상", type: "luxury" },
        ],
    },
    {
        question: "희망하는 지역은 어디인가요?",
        answers: [
          { text: "서울", type: "urban" },
          { text: "경기도", type: "nature" },
          { text: "그 외", type: "luxury" },
        ],
    },
  ],
  results: {
    urban: [
      {
        name: "VL라우어",
        description: "뛰어난 접근성과 편리한 생활 인프라를 자랑하는 곳입니다. 주변에 대형 병원, 쇼핑몰, 문화 시설이 밀집해 있어 활동적인 부모님께 안성맞춤입니다. 다양한 동호회와 커뮤니티 활동을 통해 다른 입주민들과 즐거운 교류를 할 수 있습니다.",
        image: "https://i.postimg.cc/bNXN4BBW/oegwan-1(daepyo).png",
        link: "https://www.caredoc.kr/facility/vl%EB%9D%BC%EC%9A%B0%EC%96%B4%EC%98%A4%EC%8B%9C%EB%A6%AC%EC%95%84-SVT-07976ff9de?facilityType=SILVER_TOWN&isRouter=true"
      },
      {
        name: "위례 심포니아",
        description: "뛰어난 접근성과 편리한 생활 인프라를 자랑하는 곳입니다. 주변에 대형 병원, 쇼핑몰, 문화 시설이 밀집해 있어 활동적인 부모님께 안성맞춤입니다. 다양한 동호회와 커뮤니티 활동을 통해 다른 입주민들과 즐거운 교류를 할 수 있습니다.",
        image: "https://i.postimg.cc/0NN8pRzZ/oegwan-1(daepyo).jpg",
        link: "https://www.caredoc.kr/facility/%EC%9C%84%EB%A1%80%EC%8B%AC%ED%8F%AC%EB%8B%88%EC%95%84-SVT-144e2249d1?facilityType=SILVER_TOWN&isRouter=true"
      },
      {
        name: "더클래식500 (서울 광진)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "서울시니어스 강남타워",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "서울시니어스 가양타워",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "서울시니어스 강서타워",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "서울시니어스 서울타워",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "더시그넘하우스(강남)",
        description: "아름다운 자연에 둘러싸여 맑은 공기와 평화로운 생활을 누릴 수 있는 곳입니다. 텃밭을 가꾸고, 산책로를 거닐며 전원생활의 여유를 만끽할 수 있습니다. 자연 친화적인 식단과 건강 관리 프로그램으로 건강한 노후를 보낼 수 있습니다.",
        image: "https://i.postimg.cc/nhJr9PKS/oegwan-1(daepyo).png",
        link: "https://www.caredoc.kr/facility/%EB%8D%94%EC%8B%9C%EA%B7%B8%EB%84%98%ED%95%98%EC%9A%B0%EC%8A%A4%EA%B0%95%EB%82%A8-SVT-1553710a93?facilityType=SILVER_TOWN&isRouter=true"
      },
      {
        name: "노블레스타워 (서울 성북)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "하이원빌리지 (서울 용산)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "라티브(오시리아) (부산)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      }
    ],
    nature: [
        {
            name: "노블파인스",
            description: "아름다운 자연에 둘러싸여 맑은 공기와 평화로운 생활을 누릴 수 있는 곳입니다. 텃밭을 가꾸고, 산책로를 거닐며 전원생활의 여유를 만끽할 수 있습니다. 자연 친화적인 식단과 건강 관리 프로그램으로 건강한 노후를 보낼 수 있습니다.",
            image: "https://i.postimg.cc/mk1fmT4m/oegwan-1(daepyo).png",
            link: "https://www.caredoc.kr/facility/%EB%85%B8%EB%B8%94%ED%8C%8C%EC%9D%B8%EC%8A%A4-SVT-81f663e9a3?facilityType=SILVER_TOWN&isRouter=true"
        },
      {
        name: "케어닥케어홈 배곧점 1호점 (경기 시흥)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "케어닥케어홈 송추점 (경기 양주)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "케어닥케어홈 용인점 (경기 용인)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "삼성노블카운티 (ILU, 용인)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "서울시니어스 분당타워 (성남)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "더시그넘하우스(청라) (인천)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "백운호수 푸르지오 숲속의 아침 1단지 (의왕)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "백운호수 푸르지오 숲속의 아침 2단지 (의왕)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "유당실버타운 (수원)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "마리스텔라 (인천)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "청심빌리지 (가평)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      },
      {
        name: "사이언스빌리지(대전)",
        description: "설명이 필요합니다.",
        image: "https://via.placeholder.com/300",
        link: "#"
      }
    ],
    luxury: [
        {
            name: "마곡 VL르웨스트",
            description: "호텔급의 시설과 서비스를 제공하는 최고급 실버타운입니다. 넓고 고급스러운 주거 공간, 전담 매니저의 케어, 스파, 골프 등 다양한 프리미엄 서비스를 누릴 수 있습니다. 프라이빗한 생활을 보장하며 가장 편안하고 품격 있는 노후를 선사합니다.",
            image: "https://i.postimg.cc/bJNq9Xdk/oegwan-1(daepyo).jpg",
            link: "https://www.caredoc.kr/facility/vl%EB%A5%B4%EC%9B%A8%EC%8A%A4%ED%8A%B8%EB%A7%88%EA%B3%A1-SVT-fad8d13d5a?facilityType=SILVER_TOWN&isRouter=true"
        },
        {
            name: "더클래식500",
            description: "호텔급의 시설과 서비스를 제공하는 최고급 실버타운입니다. 넓고 고급스러운 주거 공간, 전담 매니저의 케어, 스파, 골프 등 다양한 프리미엄 서비스를 누릴 수 있습니다. 프라이빗한 생활을 보장하며 가장 편안하고 품격 있는 노후를 선사합니다.",
            image: "https://i.postimg.cc/nrSrDFkQ/oegwan-3.png",
            link: "https://www.caredoc.kr/facility/%EB%8D%94%ED%81%B4%EB%9E%98%EC%8B%9D500-SVT-a1eccc58dc?facilityType=SILVER_TOWN&isRouter=true"
        }
    ]
  }
};

const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const allFacilitiesScreen = document.getElementById('all-facilities-screen');
const startBtn = document.getElementById('start-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const progressBar = document.getElementById('progress-bar');
const resultEl = document.getElementById('result');
const allFacilitiesListEl = document.getElementById('all-facilities-list');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const restartBtn = document.getElementById('restart-btn');
const viewAllBtn = document.getElementById('view-all-btn');
const backToResultBtn = document.getElementById('back-to-result-btn');

let currentQuestionIndex = 0;
const scores = {
  urban: 0,
  nature: 0,
  luxury: 0,
};

function startQuiz() {
  currentQuestionIndex = 0;
  scores.urban = 0;
  scores.nature = 0;
  scores.luxury = 0;
  startScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  allFacilitiesScreen.classList.add('hidden');
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

  const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);

  resultEl.innerHTML = '';

  if (sortedScores.length === 0 || sortedScores[0][1] === 0) {
    resultEl.innerHTML = '<p>추천할 만한 시설을 찾지 못했습니다. 다시 시도해보세요!</p>';
    return;
  }
  
  resultEl.innerHTML = `<h3>당신에게 추천하는 실버타운</h3>`;

  const topCategory = sortedScores[0][0];
  const topResults = data.results[topCategory].slice(0, 3);

  topResults.forEach(resultData => {
    if (resultData) {
      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');
      resultItem.innerHTML = `
        <a href="${resultData.link}" target="_blank">
          <img src="${resultData.image}" alt="${resultData.name}" class="result-image">
          <h4>${resultData.name}</h4>
        </a>
        <p>${resultData.description}</p>
      `;
      resultEl.appendChild(resultItem);
    }
  });
}

function showAllFacilities() {
    resultScreen.classList.add('hidden');
    allFacilitiesScreen.classList.remove('hidden');
    allFacilitiesListEl.innerHTML = '';

    Object.values(data.results).flat().forEach(resultData => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <a href="${resultData.link}" target="_blank">
                <img src="${resultData.image}" alt="${resultData.name}" class="result-image">
                <h4>${resultData.name}</h4>
            </a>
            <p>${resultData.description}</p>
        `;
        allFacilitiesListEl.appendChild(resultItem);
    });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    darkModeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', () => {
    resultScreen.classList.add('hidden');
    allFacilitiesScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
});
darkModeToggle.addEventListener('click', toggleDarkMode);
viewAllBtn.addEventListener('click', showAllFacilities);
backToResultBtn.addEventListener('click', () => {
    allFacilitiesScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
});


loadTheme();
