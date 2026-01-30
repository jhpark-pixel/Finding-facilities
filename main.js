
const data = {
  // 1. Facilities data structure with detailed attributes for filtering and tagging
  facilities: [
    { id: "seoul_classic500", name: "더클래식500", region: "서울", petFriendly: false, contract: ["임대"], deposit: 90000, monthly: 250, medicalCare: true, tags: ["luxury", "urban"], image: "https://i.postimg.cc/nrSrDFkQ/oegwan-3.png", link: "#" },
    { id: "seoul_gangnam", name: "서울시니어스 강남타워", region: "서울", petFriendly: true, contract: ["임대", "분양"], deposit: 60000, monthly: 200, medicalCare: true, tags: ["urban"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "seoul_gayang", name: "서울시니어스 가양타워", region: "서울", petFriendly: false, contract: ["임대"], deposit: 30000, monthly: 150, medicalCare: false, tags: ["urban"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "seoul_gangseo", name: "서울시니어스 강서타워", region: "서울", petFriendly: false, contract: ["임대"], deposit: 35000, monthly: 180, medicalCare: true, tags: ["urban"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "seoul_seoultower", name: "서울시니어스 서울타워", region: "서울", petFriendly: true, contract: ["임대"], deposit: 40000, monthly: 220, medicalCare: true, tags: ["urban", "luxury"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "seoul_signum", name: "더시그넘하우스", region: "서울", petFriendly: true, contract: ["임대", "분양"], deposit: 70000, monthly: 300, medicalCare: true, tags: ["luxury"], image: "https://i.postimg.cc/nhJr9PKS/oegwan-1(daepyo).png", link: "#" },
    { id: "seoul_noblesse", name: "노블레스타워", region: "서울", petFriendly: false, contract: ["임대"], deposit: 25000, monthly: 130, medicalCare: false, tags: ["urban"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "seoul_highone", name: "하이원빌리지", region: "서울", petFriendly: false, contract: ["임대"], deposit: 20000, monthly: 120, medicalCare: false, tags: ["nature"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "metro_caredoc_baegot", name: "케어닥케어홈 배곧점", region: "수도권", petFriendly: true, contract: ["임대"], deposit: 10000, monthly: 100, medicalCare: true, tags: ["nature"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "metro_caredoc_songchu", name: "케어닥케어홈 송추점", region: "수도권", petFriendly: true, contract: ["임대"], deposit: 12000, monthly: 110, medicalCare: true, tags: ["nature"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "metro_samsung_noble", name: "삼성노블카운티", region: "수도권", petFriendly: false, contract: ["임대", "분양"], deposit: 80000, monthly: 350, medicalCare: true, tags: ["luxury", "nature"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "metro_bundang", name: "서울시니어스 분당타워", region: "수도권", petFriendly: false, contract: ["임대", "분양"], deposit: 50000, monthly: 250, medicalCare: true, tags: ["urban", "nature"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "metro_signum_cheongna", name: "더시그넘하우스(청라)", region: "수도권", petFriendly: true, contract: ["분양"], deposit: 60000, monthly: 280, medicalCare: true, tags: ["luxury", "urban"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "metro_baegun", name: "백운호수 푸르지오", region: "수도권", petFriendly: true, contract: ["분양"], deposit: 70000, monthly: 300, medicalCare: false, tags: ["nature", "luxury"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "metro_yudang", name: "유당실버타운", region: "수도권", petFriendly: false, contract: ["임대"], deposit: 15000, monthly: 100, medicalCare: true, tags: ["nature"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "metro_wirye", name: "위례심포니아", region: "수도권", petFriendly: true, contract: ["분양"], deposit: 55000, monthly: 260, medicalCare: false, tags: ["urban"], image: "https://i.postimg.cc/0NN8pRzZ/oegwan-1(daepyo).jpg", link: "#" },
    { id: "busan_vl", name: "VL 라우어(오시리아)", region: "기타", petFriendly: true, contract: ["분양"], deposit: 80000, monthly: 400, medicalCare: true, tags: ["luxury", "nature"], image: "https://i.postimg.cc/bNXN4BBW/oegwan-1(daepyo).png", link: "#" },
    { id: "etc_chungsim", name: "청심빌리지", region: "기타", petFriendly: false, contract: ["임대"], deposit: 20000, monthly: 150, medicalCare: true, tags: ["nature"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "etc_science", name: "사이언스빌리지", region: "기타", petFriendly: false, contract: ["임대"], deposit: 25000, monthly: 180, medicalCare: false, tags: ["nature"], image: "https://via.placeholder.com/300", link: "#" },
    { id: "etc_noblepines", name: "노블파인스", region: "기타", petFriendly: true, contract: ["임대"], deposit: 18000, monthly: 120, medicalCare: true, tags: ["nature", "luxury"], image: "https://i.postimg.cc/mk1fmT4m/oegwan-1(daepyo).png", link: "#" }
  ],
  questions: [
    // --- Step 1: Filter Questions ---
    {
      type: "filter",
      key: "region",
      question: "가장 선호하는 지역은 어디인가요?",
      answers: [
        { text: "서울", value: "서울" },
        { text: "수도권(경기/인천)", value: "수도권" },
        { text: "기타(부산, 강원 등)", value: "기타" },
      ],
    },
    {
      type: "filter",
      key: "petFriendly",
      question: "반려동물과 함께 지낼 수 있어야 하나요?",
      answers: [
        { text: "네, 필수입니다", value: true },
        { text: "아니오, 괜찮습니다", value: false },
      ],
    },
    {
        type: "filter",
        key: "budget",
        question: "원하시는 보증금/월 생활비 금액대는 어느 정도인가요?",
        answers: [
          { text: "보증금 3억 이하, 월 150만원 이하", value: { deposit: 30000, monthly: 150 } },
          { text: "보증금 6억 이하, 월 300만원 이하", value: { deposit: 60000, monthly: 300 } },
          { text: "금액에 상관없이 좋은 곳이면 OK", value: { deposit: Infinity, monthly: Infinity } },
        ],
    },
    {
        type: "filter",
        key: "contract",
        question: "선호하는 계약 형태는 무엇인가요?",
        answers: [
          { text: "매달 월세를 내는 임대 방식", value: "임대" },
          { text: "완전히 소유하는 분양 방식", value: "분양" },
          { text: "둘 다 상관없음", value: "any" },
        ],
    },
    {
        type: "filter",
        key: "medicalCare",
        question: "의료/요양 서비스가 필수적인가요?",
        answers: [
          { text: "네, 전문적인 의료 서비스가 중요해요", value: true },
          { text: "아니오, 기본적인 건강 관리면 충분해요", value: false },
        ],
    },
    // --- Step 2: Scoring Questions ---
    {
      type: "scoring",
      question: "부모님께서 선호하는 생활 환경은 어떤 곳인가요?",
      answers: [
        { text: "활동적인 여가 활동이 가득한 도심", score: "urban" },
        { text: "조용하고 한적한 자연 속", score: "nature" },
        { text: "편안하고 고급스러운 시설", score: "luxury" },
      ],
    },
    {
      type: "scoring",
      question: "어떤 종류의 여가 활동을 즐기시나요?",
      answers: [
        { text: "쇼핑, 영화, 공연 등 문화생활", score: "urban" },
        { text: "산책, 등산, 텃밭 가꾸기 등", score: "nature" },
        { text: "골프, 스파, 피트니스 등 고급 스포츠", score: "luxury" },
      ],
    },
    {
      type: "scoring",
      question: "의료 시설과의 접근성은 얼마나 중요하게 생각하시나요?",
      answers: [
        { text: "종합병원이 가까운 곳이 최우선", score: "urban" },
        { text: "주기적인 건강 관리가 가능한 곳", score: "nature" },
        { text: "최고 수준의 의료 서비스가 제공되는 곳", score: "luxury" },
      ],
    },
    {
      type: "scoring",
      question: "주변 사람들과의 교류를 얼마나 원하시나요?",
      answers: [
        { text: "다양한 사람들과 어울리는 것을 즐김", score: "urban" },
        { text: "소수의 사람들과 깊은 관계를 맺고 싶음", score: "nature" },
        { text: "개인의 프라이버시가 더 중요함", score: "luxury" },
      ],
    },
    {
        type: "scoring",
        question: "선호하는 식사 스타일은 무엇인가요?",
        answers: [
          { text: "다양한 종류의 맛집을 즐기고 싶음", score: "urban" },
          { text: "직접 기른 유기농 식단", score: "nature" },
          { text: "호텔급의 고품격 식사", score: "luxury" },
        ],
    },
    {
        type: "scoring",
        question: "가족들이 방문하기에 얼마나 편리해야 할까요?",
        answers: [
          { text: "대중교통으로 쉽게 올 수 있는 곳", score: "urban" },
          { text: "자연 경관을 함께 즐길 수 있는 곳", score: "nature" },
          { text: "주차 공간이 넓고 편의시설이 좋은 곳", score: "luxury" },
        ],
    },
  ],
};

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const allFacilitiesScreen = document.getElementById("all-facilities-screen");
const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressBar = document.getElementById("progress-bar");
const resultEl = document.getElementById("result");
const allFacilitiesListEl = document.getElementById("all-facilities-list");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const restartBtn = document.getElementById("restart-btn");
const viewAllBtn = document.getElementById("view-all-btn");
const backToResultBtn = document.getElementById("back-to-result-btn");

let currentQuestionIndex = 0;
let userScores = {};
let userFilters = {};

function startQuiz() {
  currentQuestionIndex = 0;
  userScores = { urban: 0, nature: 0, luxury: 0 };
  userFilters = {};
  
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  allFacilitiesScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  document.querySelector(".container").classList.remove("hidden");
  
  showQuestion();
}

function showQuestion() {
  const currentQuestion = data.questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectAnswer(currentQuestion, answer));
    optionsEl.appendChild(button);
  });

  updateProgressBar();
}

function selectAnswer(question, answer) {
  if (question.type === "filter") {
    userFilters[question.key] = answer.value;
  } else if (question.type === "scoring") {
    userScores[answer.score]++;
  }

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
    questionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    resultEl.innerHTML = ""; 

    // 1. Absolute Filtering
    let filteredFacilities = data.facilities.filter(facility => {
        if (userFilters.region && facility.region !== userFilters.region) return false;
        if (userFilters.petFriendly && facility.petFriendly !== userFilters.petFriendly) return false;
        if (userFilters.medicalCare && facility.medicalCare !== userFilters.medicalCare) return false;
        if (userFilters.contract && userFilters.contract !== 'any' && !facility.contract.includes(userFilters.contract)) return false;
        if (userFilters.budget) {
            if (facility.deposit > userFilters.budget.deposit || facility.monthly > userFilters.budget.monthly) {
                return false;
            }
        }
        return true;
    });

    // 2. Scoring and Recommendation
    if (filteredFacilities.length === 0) {
        resultEl.innerHTML = "<h3>아쉽게도 조건에 맞는 시설을 찾지 못했어요.</h3><p>필터 조건을 변경하여 다시 시도해보세요!</p>";
        return;
    }

    const sortedScores = Object.entries(userScores).sort((a, b) => b[1] - a[1]);
    const representativePropensity = sortedScores[0][0];

    const recommendedFacilities = filteredFacilities
        .filter(facility => facility.tags.includes(representativePropensity))
        .slice(0, 3);

    if (recommendedFacilities.length === 0) {
        // If no facilities match the top propensity, show the best from the filtered list as a fallback.
        const fallback = filteredFacilities.slice(0, 3);
        displayResults(fallback, "조건에 맞는 추천 시설");
    } else {
        displayResults(recommendedFacilities, "당신에게 추천하는 실버타운");
    }
}

function displayResults(facilities, title) {
    resultEl.innerHTML = `<h3>${title}</h3>`;
    const resultContainer = document.createElement('div');
    resultContainer.id = "result-items-container";

    facilities.forEach(facility => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
        resultItem.innerHTML = `
            <a href="${facility.link}" target="_blank">
                <img src="${facility.image}" alt="${facility.name}" class="result-image">
                <h4>${facility.name}</h4>
            </a>
            <p>${facility.region} / ${facility.contract.join(", ")}</p>
        `;
        resultContainer.appendChild(resultItem);
    });
    resultEl.appendChild(resultContainer);
}


function showAllFacilities() {
    startScreen.classList.add('hidden');
    questionScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    document.querySelector('.container').classList.add('hidden');
    allFacilitiesScreen.classList.remove('hidden');
    allFacilitiesListEl.innerHTML = '<h2>전체 시설 보기</h2>';

    const regions = ["서울", "수도권", "기타"];
    regions.forEach(regionName => {
        const facilitiesInRegion = data.facilities.filter(f => f.region === regionName);
        if (facilitiesInRegion.length > 0) {
            const regionContainer = document.createElement('div');
            regionContainer.classList.add('region-container');
            
            const regionTitle = document.createElement('h3');
            regionTitle.classList.add('region-title');
            regionTitle.textContent = regionName === '기타' ? '부산·영남권 및 기타' : regionName;
            regionContainer.appendChild(regionTitle);

            const facilitiesGrid = document.createElement('div');
            facilitiesGrid.classList.add('facilities-grid');

            facilitiesInRegion.forEach(facility => {
                const facilityItem = document.createElement('div');
                facilityItem.classList.add('result-item');
                facilityItem.innerHTML = `
                    <a href="${facility.link}" target="_blank">
                        <img src="${facility.image}" alt="${facility.name}" class="result-image">
                        <h4>${facility.name}</h4>
                    </a>
                `;
                facilitiesGrid.appendChild(facilityItem);
            });
            
            regionContainer.appendChild(facilitiesGrid);
            allFacilitiesListEl.appendChild(regionContainer);
        }
    });
}


function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

function loadTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌙";
  }
}

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    allFacilitiesScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    document.querySelector('.container').classList.remove('hidden');
});
darkModeToggle.addEventListener("click", toggleDarkMode);
viewAllBtn.addEventListener("click", showAllFacilities);
backToResultBtn.addEventListener("click", () => {
    allFacilitiesScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    document.querySelector('.container').classList.remove('hidden');
});

loadTheme();
