const db = {
    facilities: [
      // 서울특별시
      { id: "seoul_theclassic500", name: "더클래식500", region: "서울특별시", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["luxury"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-a1eccc58dc/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%203@(w1920_q80_fwebp).png", link: "https://www.caredoc.kr/facility/%EB%8D%94%ED%81%B4%EB%9E%98%EC%8B%9D500-SVT-a1eccc58dc?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 3, nature: 1, luxury: 3 } },
      { id: "seoul_gangnam_tower", name: "서울시니어스 강남타워", region: "서울특별시", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["urban"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-eabbd660de/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%8B%88%EC%96%B4%EC%8A%A4%EA%B0%95%EB%82%A8%ED%83%80%EC%9B%8C-SVT-eabbd660de?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 3, nature: 0, luxury: 0 } },
      { id: "seoul_gayang_tower", name: "서울시니어스 가양타워", region: "서울특별시", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["urban"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-7fda8e4612/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%8B%88%EC%96%B4%EC%8A%A4%EA%B0%80%EC%96%91%ED%83%80%EC%9B%8C-SVT-7fda8e4612?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 2, nature: 0, luxury: 0 } }, // Inferred from tags
      { id: "seoul_gangseo_tower", name: "서울시니어스 강서타워", region: "서울특별시", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["urban"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-0b1a0236dc/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%8B%88%EC%96%B4%EC%8A%A4%EA%B0%95%EC%84%9C%ED%83%80%EC%9B%8C-SVT-0b1a0236dc?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 2, nature: 0, luxury: 0 } }, // Inferred from tags
      { id: "seoul_seoul_tower", name: "서울시니어스 서울타워", region: "서울특별시", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["urban"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-7b66cedb59/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%8B%88%EC%96%B4%EC%8A%A4%EC%84%9C%EC%9A%B8%ED%83%80%EC%9B%8C-SVT-7b66cedb59?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 2, nature: 0, luxury: 0 } }, // Inferred from tags
      { id: "seoul_vl_magok", name: "VL르웨스트 마곡", region: "서울특별시", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["luxury"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-fad8d13d5a/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/vl%EB%A5%B4%EC%9B%A8%EC%8A%A4%ED%8A%B8%EB%A7%88%EA%B3%A1-SVT-fad8d13d5a?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 0, nature: 0, luxury: 2 } }, // Inferred from tags
      { id: "seoul_thesignum_gangnam", name: "더시그넘하우스(강남)", region: "서울특별시", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["luxury"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-1553710a93/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png", link: "https://www.caredoc.kr/facility/%EB%8D%94%EC%8B%9C%EA%B7%B8%EB%84%98%ED%95%98%EC%9A%B0%EC%8A%A4%EA%B0%95%EB%82%A8-SVT-1553710a93?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 3, nature: 1, luxury: 3 } },
      { id: "seoul_noblestower", name: "노블레스타워", region: "서울특별시", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["urban"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-45b683b4d0/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EB%85%B8%EB%B8%94%EB%A0%88%EC%8A%A4%ED%83%80%EC%9B%8C-SVT-45b683b4d0?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 2, nature: 0, luxury: 0 } }, // Inferred from tags
      { id: "seoul_highone_village", name: "하이원빌리지", region: "서울특별시", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["urban"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-1f96e31759/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png", link: "https://www.caredoc.kr/facility/%ED%95%98%EC%9D%B4%EC%9B%90%EB%B9%8C%EB%A6%AC%EC%A7%80-SVT-1f96e31759?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 2, nature: 0, luxury: 0 } }, // Inferred from tags

      // 수도권 (경기·인천)
      { id: "metro_caredoc_baegot_1", name: "케어닥케어홈 배곧점 1호점", region: "수도권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["nature"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-3b5d86d3dc/%EC%99%B8%EA%B4%80/00002_%EB%B0%B0%EA%B3%A7%EC%8B%A0%EB%8F%84%EC%8B%9C%EC%A0%90%201%EA%B4%80_%EC%99%B8%EA%B4%80%202@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EC%BC%80%EC%96%B4%EB%8B%A5%EC%BC%80%EC%96%B4%ED%99%88-%EB%B0%B0%EA%B3%A7%EC%A0%901%EA%B4%80-SVT-3b5d86d3dc?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 0, nature: 2, luxury: 0 } }, // Inferred from tags
      { id: "metro_caredoc_songchu", name: "케어닥케어홈 송추점", region: "수도권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["nature"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-f0f3acbec4/%EC%99%B8%EA%B4%80/00001_%EC%86%A1%EC%B6%94%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8%EC%A0%90%20_%EC%99%B8%EA%B4%80%202@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EC%BC%80%EC%96%B4%EB%8B%A5%EC%BC%80%EC%96%B4%ED%99%88-%EC%86%A1%EC%B6%94%EC%A0%90-SVT-f0f3acbec4?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 1, nature: 3, luxury: 0 } },
      { id: "metro_caredoc_yongin", name: "케어닥케어홈 용인점", region: "수도권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["nature"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-3d77c325a8/%EC%99%B8%EA%B4%80/00002_%EC%9A%A9%EC%9D%B8%EB%8D%94%ED%8D%BC%EC%8A%A4%ED%8A%B8%EC%A0%90_%EC%99%B8%EA%B4%80%202@(w1920_q80_fjpg).jpg", link: "https://www.caredoc.kr/facility/%EC%BC%80%EC%96%B4%EB%8B%A5%EC%BC%80%EC%96%B4%ED%99%88-%EC%9A%A9%EC%9D%B8%EC%A0%90-SVT-3d77c325a8?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 0, nature: 2, luxury: 0 } }, // Inferred from tags
      { id: "metro_samsung_noble_ilu", name: "삼성노블카운티 (ILU)", region: "수도권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["nature"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-1bf6d69e42/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201@(w1920_q80_fwebp).png", link: "https://www.caredoc.kr/facility/%EC%82%BC%EC%84%B1%EB%85%B8%EB%B8%94%EC%B9%B4%EC%9A%B4%ED%8B%B0ilu-SVT-1bf6d69e42?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 1, nature: 2, luxury: 3 } },
      { id: "metro_bundang_tower", name: "서울시니어스 분당타워", region: "수도권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["urban"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-30c9b20e0a/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png", link: "https://www.caredoc.kr/facility/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%8B%88%EC%96%B4%EC%8A%A4%EB%B6%84%EB%8B%B9%ED%83%80%EC%9B%8C-SVT-30c9b20e0a?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 2, nature: 0, luxury: 0 } }, // Inferred from tags
      { id: "metro_thesignum_cheongna", name: "더시그넘하우스(청라)", region: "수도권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["nature"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-2c75792336/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EB%8D%94%EC%8B%9C%EA%B7%B8%EB%84%98%ED%95%98%EC%9A%B0%EC%8A%A4%EC%B2%AD%EB%9D%BC-SVT-2c75792336?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 0, nature: 2, luxury: 0 } }, // Inferred from tags
      { id: "metro_baegun_prugio", name: "백운호수 푸르지오 숲속의 아침", region: "수도권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["nature"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-5950055c5a/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EB%B0%B1%EC%9A%B4%ED%98%B8%EC%88%98-%ED%91%B8%EB%A5%B4%EC%A7%80%EC%98%A4%EC%88%B2%EC%86%8D%EC%9D%98-%EC%95%84%EC%B9%A81%EB%8B%A8%EC%A7%80-SVT-5950055c5a?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 1, nature: 3, luxury: 1 } },
      { id: "metro_yudang_silvertown", name: "유당실버타운", region: "수도권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["nature"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-968432ff6c/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EC%9C%A0%EB%8B%B9%EC%8B%9C%EB%B2%84%ED%83%80%EC%9A%B4-SVT-968432ff6c?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 0, nature: 2, luxury: 0 } }, // Inferred from tags
      { id: "metro_wirye_symphonia", name: "위례심포니아", region: "수도권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["urban"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-144e2249d1/%EC%99%B8%EA%B4%80/00001_%EC%99%B8%EA%B4%80%201@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EC%9C%84%EB%A1%80%EC%8B%AC%ED%8F%AC%EB%8B%88%EC%95%84-SVT-144e2249d1?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 2, nature: 0, luxury: 0 } }, // Inferred from tags
      { id: "metro_maristella", name: "마리스텔라", region: "수도권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["urban"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-2cde772ee1/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EB%A7%88%EB%A6%AC%EC%8A%A4%ED%85%94%EB%9D%BC-SVT-2cde772ee1?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 2, nature: 0, luxury: 0 } }, // Inferred from tags

      // 부산·영남권
      { id: "busan_vl_osiria", name: "VL 라우어(오시리아)", region: "부산·영남권", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["luxury"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-07976ff9de/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png", link: "https://www.caredoc.kr/facility/vl%EB%9D%BC%EC%9A%B0%EC%96%B4%EC%8B%9C%EB%A6%AC%EC%95%84-SVT-07976ff9de?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 1, nature: 2, luxury: 3 } },

      // 강원·기타 지역
      { id: "etc_chungsim_village", name: "청심빌리지", region: "강원·기타 지역", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["nature"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-7dc620c548/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg", link: "https://www.caredoc.kr/facility/%EC%B2%AD%EC%8B%AC%EB%B9%8C%EB%A6%AC%EC%A7%80-SVT-7dc620c548?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 0, nature: 3, luxury: 0 } },
      { id: "etc_science_village", name: "사이언스빌리지", region: "강원·기타 지역", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["nature"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-e4fa852e8f/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png", link: "https://www.caredoc.kr/facility/%EC%82%AC%EC%9D%B4%EC%96%B8%EC%8A%A4%EB%B9%8C%EB%A6%AC%EC%A7%80-SVT-e4fa852e8f?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 0, nature: 2, luxury: 0 } }, // Inferred from tags
      { id: "etc_noblepines", name: "노블파인스", region: "강원·기타 지역", contract: ["임대"], deposit: 0, monthly: 0, medicalCare: false, tags: ["nature"], image: "https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-81f663e9a3/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png", link: "https://www.caredoc.kr/facility/%EB%85%B8%EB%B8%94%ED%8C%8C%EC%9D%B8%EC%8A%A4-SVT-81f663e9a3?facilityType=SILVER_TOWN&isRouter=true", scores: { urban: 0, nature: 2, luxury: 0 } } // Inferred from tags
    ],
    questions: [
      // --- Step 1: Filter Questions ---
      {
        type: "filter",
        key: "region",
        question: "어느 지역의 시설을 찾고 계신가요?",
        answers: [
          { text: "수도권", value: "수도권" },
          { text: "서울특별시", value: "서울특별시" },
          { text: "부산·영남권", value: "부산·영남권" },
          { text: "강원·기타 지역", value: "강원·기타 지역" },
          { text: "전체", value: "any" },
        ],
      },
      // Removed petFriendly question
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

let userAnswers = {
  filters: {},
  scores: {
    urban: 0,
    nature: 0,
    luxury: 0,
  },
};

let currentQuestionIndex = 0;
let recommendedFacilities = [];
let allFilteredFacilities = []; // New array for all facilities matching filters

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const allFacilitiesScreen = document.getElementById("all-facilities-screen");
const startBtn = document.getElementById("start-btn");
const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress-bar");
const resultItemsContainer = document.getElementById("result-items-container");
const restartBtn = document.getElementById("restart-btn");
const viewAllBtn = document.getElementById("view-all-btn");
const backToResultBtn = document.getElementById("back-to-result-btn");
const allFacilitiesGrid = document.getElementById("all-facilities-grid");
const darkModeToggle = document.getElementById("dark-mode-toggle");

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);
viewAllBtn.addEventListener("click", showAllFacilities);
backToResultBtn.addEventListener("click", backToResult);
darkModeToggle.addEventListener("click", toggleDarkMode);

// --- URL Hash Handling ---
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', handleHashChange);

function handleHashChange() {
  const hash = window.location.hash;

  if (hash === '#results') {
    questionScreen.classList.add('hidden');
    startScreen.classList.add('hidden');
    allFacilitiesScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    // We need to make sure recommendations are calculated and displayed
    if (recommendedFacilities.length === 0) {
        recommendFacilities();
        displayRecommendations();
    }
  } else if (hash === '#all') {
    questionScreen.classList.add('hidden');
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    allFacilitiesScreen.classList.remove('hidden');
    displayAllFacilities();
  } else if (hash.startsWith('#quiz-')) {
    const questionIndex = parseInt(hash.substring(6), 10);
    if (!isNaN(questionIndex) && questionIndex >= 0 && questionIndex < db.questions.length) {
        currentQuestionIndex = questionIndex;
        startScreen.classList.add("hidden");
        resultScreen.classList.add('hidden');
        allFacilitiesScreen.classList.add('hidden');
        questionScreen.classList.remove("hidden");
        displayQuestion();
    }
  }
  else {
    startScreen.classList.remove('hidden');
    questionScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    allFacilitiesScreen.classList.add('hidden');
  }
}

function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = {
    filters: {},
    scores: { urban: 0, nature: 0, luxury: 0 },
  };
  recommendFacilities(); // Populate facilities based on initial (empty) filters
  window.location.hash = 'quiz-0';
}

function displayQuestion() {
  const questionData = db.questions[currentQuestionIndex];
  updateProgressBar();

  questionContainer.textContent = questionData.question;
  optionsContainer.innerHTML = "";

  questionData.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("option-btn");
    button.addEventListener("click", () => handleAnswer(answer, questionData.type, questionData.key));
    optionsContainer.appendChild(button);
  });
  window.location.hash = `quiz-${currentQuestionIndex}`;
}

function handleAnswer(answer, type, key) {
  if (type === "filter") {
    if (answer.value !== "any") {
        userAnswers.filters[key] = answer.value;
    }
  } else if (type === "scoring") {
    userAnswers.scores[answer.score]++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < db.questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / db.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}


function showResult() {
    questionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    recommendFacilities();
    displayRecommendations();
    window.location.hash = 'results';
}

function recommendFacilities() {
    let facilitiesToConsider = db.facilities;

    // Apply filters if they are not causing an empty result
    let initiallyFiltered = facilitiesToConsider.filter(facility => {
        return Object.entries(userAnswers.filters).every(([key, value]) => {
            if (key === 'contract') {
                return facility[key].includes(value);
            }
            // Add other filter keys here if needed
            return facility[key] === value;
        });
    });

    // If initial filtering leads to no results, use all facilities for recommendation
    // to provide *some* recommendations based on scoring.
    if (initiallyFiltered.length === 0 && Object.keys(userAnswers.filters).length > 0) {
        facilitiesToConsider = db.facilities; // Fallback to all facilities
    } else {
        facilitiesToConsider = initiallyFiltered;
    }

    // Calculate a recommendation score for each facility
    const facilitiesWithScores = facilitiesToConsider.map(facility => {
        let recommendationScore = 0;
        // Ensure facility.scores exists and has the expected properties
        if (facility.scores) {
            recommendationScore += (facility.scores.urban || 0) * userAnswers.scores.urban;
            recommendationScore += (facility.scores.nature || 0) * userAnswers.scores.nature;
            recommendationScore += (facility.scores.luxury || 0) * userAnswers.scores.luxury;
        }
        return { ...facility, recommendationScore };
    });

    // Sort facilities by their recommendation score in descending order
    recommendedFacilities = facilitiesWithScores.sort((a, b) => b.recommendationScore - a.recommendationScore);
    
    // allFilteredFacilities는 필터링된 모든 시설 (스코어링 전에)을 담습니다.
    // 여기서는 추천 로직에 사용된 전체 시설을 담도록 변경합니다.
    allFilteredFacilities = [...recommendedFacilities];
}

function displayRecommendations() {
  resultItemsContainer.innerHTML = "";
  const top3 = recommendedFacilities.slice(0, 3);

  top3.forEach((facility) => {
    resultItemsContainer.innerHTML += createFacilityCard(facility);
  });
}

function createFacilityCard(facility) {
    return `
      <div class="result-item">
        <a href="${facility.link}" target="_blank">
          <img src="${facility.image}" alt="${facility.name}" class="result-image">
          <h4>${facility.name}</h4>
          <p>${facility.region}</p>
        </a>
      </div>
    `;
}

function restartQuiz() {
    resultScreen.classList.add("hidden");
    allFacilitiesScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    window.location.hash = '';
}

function showAllFacilities() {
    resultScreen.classList.add("hidden");
    allFacilitiesScreen.classList.remove("hidden");
    displayAllFacilities();
    window.location.hash = 'all';
}

function backToResult() {
    allFacilitiesScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    window.location.hash = 'results';
}

function displayAllFacilities() {
    const regions = {}; // Dynamically create regions object

    allFilteredFacilities.forEach(facility => {
        if (!regions[facility.region]) {
            regions[facility.region] = [];
        }
        regions[facility.region].push(facility);
    });

    let allFacilitiesHTML = "";
    // Sort regions to ensure consistent display order (optional but good for UX)
    const sortedRegions = Object.keys(regions).sort((a, b) => {
        // Custom sort order for regions if desired, e.g., Seoul, 수도권, Busan, etc.
        const order = ["서울특별시", "수도권", "부산·영남권", "강원·기타 지역"];
        return order.indexOf(a) - order.indexOf(b);
    });

    sortedRegions.forEach(region => {
        if (regions[region].length > 0) {
            allFacilitiesHTML += `
                <div class="region-container">
                    <h3 class="region-title">${region}</h3>
                    <div class="facilities-grid">
                        ${regions[region].map(createFacilityCard).join("")}
                    </div>
                </div>
            `;
        }
    });
    allFacilitiesGrid.innerHTML = allFacilitiesHTML;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}