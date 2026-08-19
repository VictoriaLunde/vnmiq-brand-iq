// ======================================================
// VNMIQ BrandIQ™ Assessment
// script.js
// ======================================================


// ======================================================
// CONFIGURATION
// ======================================================

const CONFIG = {
  // Existing VNMIQ Formspree endpoint
  formspreeEndpoint: "https://formspree.io/f/xwleoapy",

  // Change these when the final VNMIQ pages are live
  brandBlueprintUrl:
    "https://vnmiq.com/brand-intelligence-blueprint",

  gtmIqUrl:
    "https://vnmiq.com/gtm-iq"
};


// ======================================================
// BRANDIQ MODEL
// ======================================================

const BRANDIQ = {
  version: "1.0.0",

  weights: {
    foundation: 0.15,
    audience: 0.15,
    positioning: 0.18,
    messaging: 0.15,
    identity: 0.10,
    experience: 0.12,
    market: 0.15
  },

  categoryNames: {
    foundation: "Brand Foundation",
    audience: "Audience Intelligence",
    positioning: "Positioning",
    messaging: "Messaging",
    identity: "Brand Identity",
    experience: "Brand Experience",
    market: "Market Readiness"
  },

  answerOptions: [
    {
      score: 1,
      label:
        "Not defined — this is a major gap today."
    },
    {
      score: 2,
      label:
        "Early stage — some thinking exists, but it is inconsistent."
    },
    {
      score: 3,
      label:
        "Developing — we have a foundation, but it needs refinement."
    },
    {
      score: 4,
      label:
        "Strong — this is clearly defined and usually consistent."
    },
    {
      score: 5,
      label:
        "Excellent — this is strategic, documented, differentiated, and repeatable."
    }
  ],

  questions: [

    // ==================================================
    // 1. BRAND FOUNDATION
    // ==================================================

    {
      id: "F1",
      category: "foundation",
      question:
        "How clearly can you explain why your brand exists beyond making money?"
    },

    {
      id: "F2",
      category: "foundation",
      question:
        "How clearly defined are your brand's mission, vision, and core values?"
    },

    {
      id: "F3",
      category: "foundation",
      question:
        "How consistently do your business, content, product, or partnership decisions reflect your brand strategy?"
    },

    {
      id: "F4",
      category: "foundation",
      question:
        "How confident are you that your brand can evolve without losing its core identity?"
    },


    // ==================================================
    // 2. AUDIENCE INTELLIGENCE
    // ==================================================

    {
      id: "A1",
      category: "audience",

      question:
        "How specifically can you describe the audience or ideal customer your brand is built for?",

      variants: {
        creator:
          "How specifically can you describe the audience, community, or customer your personal brand is built for?",

        startup:
          "How specifically can you describe the ICP and end user your startup is built for?",

        company:
          "How specifically can you describe the highest-value customer segments your company is built to serve?"
      }
    },

    {
      id: "A2",
      category: "audience",

      question:
        "How well do you understand the problems, motivations, aspirations, and buying behavior of that audience?"
    },

    {
      id: "A3",
      category: "audience",

      question:
        "How much real customer or audience insight informs your brand decisions?"
    },

    {
      id: "A4",
      category: "audience",

      question:
        "How clearly can you identify which audience segments are most valuable to your growth?"
    },


    // ==================================================
    // 3. POSITIONING
    // ==================================================

    {
      id: "P1",
      category: "positioning",

      question:
        "How clearly can you explain what category your brand belongs in and what it should be known for?"
    },

    {
      id: "P2",
      category: "positioning",

      question:
        "How differentiated is your brand from the alternatives your audience could choose instead?"
    },

    {
      id: "P3",
      category: "positioning",

      question:
        "How strong is the reason someone should choose your brand specifically?"
    },

    {
      id: "P4",
      category: "positioning",

      question:
        "How consistently does your positioning hold up across your website, social channels, sales conversations, and partnerships?"
    },


    // ==================================================
    // 4. MESSAGING
    // ==================================================

    {
      id: "M1",
      category: "messaging",

      question:
        "How quickly can a new person understand what you offer and why it matters?"
    },

    {
      id: "M2",
      category: "messaging",

      question:
        "How clearly defined is your core value proposition?"
    },

    {
      id: "M3",
      category: "messaging",

      question:
        "How consistent is your brand voice across content, marketing, sales, and customer communication?"
    },

    {
      id: "M4",
      category: "messaging",

      question:
        "How well can anyone speaking for the brand communicate the same core story?",

      variants: {
        creator:
          "How consistently can you communicate the same core story across your content, collaborations, pitches, and offers?",

        startup:
          "How well can founders, sellers, and marketers communicate the same core story?",

        company:
          "How well can different teams communicate the same core brand story?"
      }
    },


    // ==================================================
    // 5. BRAND IDENTITY
    // ==================================================

    {
      id: "I1",
      category: "identity",

      question:
        "How recognizable is your brand without relying only on your logo or name?"
    },

    {
      id: "I2",
      category: "identity",

      question:
        "How consistently do you use visual brand codes such as color, typography, imagery, layout, and creative direction?"
    },

    {
      id: "I3",
      category: "identity",

      question:
        "How well does your visual identity reflect the position you want to own in the market?"
    },

    {
      id: "I4",
      category: "identity",

      question:
        "How scalable is your current visual system across web, social, campaigns, presentations, products, and partnerships?"
    },


    // ==================================================
    // 6. BRAND EXPERIENCE
    // ==================================================

    {
      id: "E1",
      category: "experience",

      question:
        "How consistent does your brand feel from first impression through purchase, delivery, and follow-up?"
    },

    {
      id: "E2",
      category: "experience",

      question:
        "How intentionally have you designed the experience people have when interacting with your brand?"
    },

    {
      id: "E3",
      category: "experience",

      question:
        "How well do your website, social presence, sales process, and customer experience reinforce the same promise?"
    },

    {
      id: "E4",
      category: "experience",

      question:
        "How likely is someone to describe your brand the way you intended after experiencing it?"
    },


    // ==================================================
    // 7. MARKET READINESS
    // ==================================================

    {
      id: "R1",
      category: "market",

      question:
        "How ready is your brand to support a larger investment in content, marketing, sales, or partnerships?"
    },

    {
      id: "R2",
      category: "market",

      question:
        "How clearly can your current brand strategy guide a go-to-market campaign?"
    },

    {
      id: "R3",
      category: "market",

      question:
        "How confident are you that increased visibility would strengthen—not expose weaknesses in—your brand?"
    },

    {
      id: "R4",
      category: "market",

      question:
        "How prepared are you to measure which brand signals actually contribute to growth and revenue?"
    }
  ],


  // ==================================================
  // SCORE BANDS
  // ==================================================

  scoreBands: [

    {
      min: 0,
      max: 39,

      title:
        "Foundation at Risk",

      gtmReadiness:
        "Not Yet Ready",

      recommendation:
        "blueprint",

      description:
        "Your brand has meaningful strategic gaps that can make growth expensive, inconsistent, or difficult to sustain."
    },

    {
      min: 40,
      max: 59,

      title:
        "Emerging Brand",

      gtmReadiness:
        "Not Yet Ready",

      recommendation:
        "blueprint",

      description:
        "Your brand has useful building blocks, but the foundation is not yet consistent enough to support aggressive growth."
    },

    {
      min: 60,
      max: 79,

      title:
        "Growth-Ready Brand",

      gtmReadiness:
        "Moderately Ready",

      recommendation:
        "blueprint",

      description:
        "Your brand has a credible strategic foundation. Your next advantage comes from tightening the gaps that could limit market performance."
    },

    {
      min: 80,
      max: 100,

      title:
        "Brand Intelligent",

      gtmReadiness:
        "High Readiness",

      recommendation:
        "gtm",

      description:
        "Your brand foundation is strong, differentiated, and increasingly ready to support sophisticated go-to-market execution."
    }
  ]
};


// ======================================================
// APPLICATION STATE
// ======================================================

const state = {
  profile: {
    firstName: "",
    email: "",
    brandName: "",
    website: "",
    audienceType: ""
  },

  currentQuestion: 0,

  answers:
    new Array(
      BRANDIQ.questions.length
    ).fill(null),

  sourceData: {}
};


// ======================================================
// DOM HELPERS
// ======================================================

const get = (id) =>
  document.getElementById(id);


const sections = [
  "home",
  "profileSection",
  "assessmentSection",
  "resultsSection"
];


// ======================================================
// PAGE NAVIGATION
// ======================================================

function showSection(sectionId) {

  sections.forEach((id) => {

    const section =
      get(id);

    if (!section) return;

    if (id === sectionId) {

      section.classList.remove(
        "hidden"
      );

      section.classList.add(
        "active-section"
      );

    } else {

      section.classList.add(
        "hidden"
      );

      section.classList.remove(
        "active-section"
      );

    }

  });


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ======================================================
// SOURCE / UTM CAPTURE
// ======================================================

function captureSourceData() {

  const params =
    new URLSearchParams(
      window.location.search
    );


  state.sourceData = {
    utmSource:
      params.get("utm_source") || "",

    utmMedium:
      params.get("utm_medium") || "",

    utmCampaign:
      params.get("utm_campaign") || "",

    utmContent:
      params.get("utm_content") || "",

    referrer:
      document.referrer || ""
  };

}


// ======================================================
// START BUTTON
// ======================================================

get("startAssessmentBtn")
  ?.addEventListener(
    "click",
    () => {

      showSection(
        "profileSection"
      );

    }
  );


// ======================================================
// PROFILE FORM
// ======================================================

get("profileForm")
  ?.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const firstName =
        get("firstName")
          .value
          .trim();


      const email =
        get("email")
          .value
          .trim();


      const brandName =
        get("brandName")
          .value
          .trim();


      const website =
        get("website")
          .value
          .trim();


      const audienceType =
        get("audienceType")
          .value;


      if (
        !firstName ||
        !email ||
        !brandName ||
        !audienceType
      ) {

        get("profileError")
          .classList
          .remove("hidden");

        return;

      }


      get("profileError")
        .classList
        .add("hidden");


      state.profile = {
        firstName,
        email,
        brandName,
        website,
        audienceType
      };


      state.currentQuestion =
        0;


      showSection(
        "assessmentSection"
      );


      renderQuestion();

    }
  );


// ======================================================
// AUDIENCE-SPECIFIC QUESTION COPY
// ======================================================

function getQuestionText(
  question
) {

  const audience =
    state.profile
      .audienceType;


  if (
    question.variants &&
    question.variants[audience]
  ) {

    return question
      .variants[audience];

  }


  return question.question;

}


// ======================================================
// RENDER QUESTION
// ======================================================

function renderQuestion() {

  const question =
    BRANDIQ.questions[
      state.currentQuestion
    ];


  const selectedAnswer =
    state.answers[
      state.currentQuestion
    ];


  // Category

  get("categoryLabel")
    .textContent =
      BRANDIQ
        .categoryNames[
          question.category
        ];


  // Question

  get("questionText")
    .textContent =
      getQuestionText(
        question
      );


  // Progress

  const currentNumber =
    state.currentQuestion + 1;


  const totalQuestions =
    BRANDIQ.questions.length;


  const progress =
    Math.round(
      (
        currentNumber /
        totalQuestions
      ) *
      100
    );


  get("progressText")
    .textContent =
      `Question ${currentNumber} of ${totalQuestions}`;


  get("progressPercent")
    .textContent =
      `${progress}%`;


  get("progressBar")
    .style
    .width =
      `${progress}%`;


  // Answer options

  const answerContainer =
    get("answerOptions");


  answerContainer.innerHTML =
    "";


  BRANDIQ
    .answerOptions
    .forEach(
      (option) => {

        const optionElement =
          document.createElement(
            "button"
          );


        optionElement.type =
          "button";


        optionElement.className =
          "answer-option";


        if (
          selectedAnswer ===
          option.score
        ) {

          optionElement
            .classList
            .add(
              "selected"
            );

        }


        optionElement.innerHTML = `

          <span class="answer-number">
            ${option.score}
          </span>

          <span class="answer-copy">
            ${option.label}
          </span>

        `;


        optionElement
          .addEventListener(
            "click",
            () => {

              selectAnswer(
                option.score
              );

            }
          );


        answerContainer
          .appendChild(
            optionElement
          );

      }
    );


  // Previous button

  get("previousBtn")
    .disabled =
      state.currentQuestion === 0;


  // Next button

  get("nextBtn")
    .disabled =
      selectedAnswer === null;


  if (
    state.currentQuestion ===
    totalQuestions - 1
  ) {

    get("nextBtn")
      .innerHTML =
        `See My BrandIQ <span>→</span>`;

  } else {

    get("nextBtn")
      .innerHTML =
        `Next <span>→</span>`;

  }

}


// ======================================================
// SELECT ANSWER
// ======================================================

function selectAnswer(
  score
) {

  state.answers[
    state.currentQuestion
  ] = score;


  renderQuestion();

}


// ======================================================
// PREVIOUS
// ======================================================

get("previousBtn")
  ?.addEventListener(
    "click",
    () => {

      if (
        state.currentQuestion > 0
      ) {

        state.currentQuestion--;

        renderQuestion();

      }

    }
  );


// ======================================================
// NEXT
// ======================================================

get("nextBtn")
  ?.addEventListener(
    "click",
    () => {

      const answer =
        state.answers[
          state.currentQuestion
        ];


      if (
        answer === null
      ) {

        return;

      }


      if (
        state.currentQuestion <
        BRANDIQ.questions.length - 1
      ) {

        state.currentQuestion++;

        renderQuestion();

      } else {

        calculateResults();

      }

    }
  );


// ======================================================
// SCORE CALCULATION
// ======================================================

function calculateCategoryScores() {

  const categories = {};


  Object.keys(
    BRANDIQ.categoryNames
  ).forEach(
    (category) => {

      categories[category] = [];

    }
  );


  BRANDIQ
    .questions
    .forEach(
      (
        question,
        index
      ) => {

        const answer =
          state.answers[
            index
          ];


        if (
          answer !== null
        ) {

          categories[
            question.category
          ].push(
            Number(answer)
          );

        }

      }
    );


  const categoryScores = {};


  Object.entries(
    categories
  ).forEach(
    (
      [
        category,
        answers
      ]
    ) => {

      const total =
        answers.reduce(
          (
            sum,
            value
          ) =>
            sum + value,
          0
        );


      const average =
        total /
        answers.length;


      // Converts 1–5 average
      // to 0–100 score

      categoryScores[
        category
      ] =
        Math.round(
          (
            average /
            5
          ) *
          100
        );

    }
  );


  return categoryScores;

}


// ======================================================
// OVERALL WEIGHTED SCORE
// ======================================================

function calculateOverallScore(
  categoryScores
) {

  let weightedTotal =
    0;


  Object.entries(
    categoryScores
  ).forEach(
    (
      [
        category,
        score
      ]
    ) => {

      weightedTotal +=
        score *
        BRANDIQ.weights[
          category
        ];

    }
  );


  return Math.round(
    weightedTotal
  );

}


// ======================================================
// SCORE BAND
// ======================================================

function getScoreBand(
  score
) {

  return BRANDIQ
    .scoreBands
    .find(
      (band) =>

        score >= band.min &&
        score <= band.max

    );

}


// ======================================================
// STRONGEST / WEAKEST SIGNAL
// ======================================================

function getSignals(
  categoryScores
) {

  const sorted =
    Object.entries(
      categoryScores
    )
    .sort(
      (
        first,
        second
      ) =>
        second[1] -
        first[1]
    );


  return {
    strongest:
      sorted[0],

    weakest:
      sorted[
        sorted.length - 1
      ]
  };

}


// ======================================================
// AUDIENCE LABEL
// ======================================================

function getAudienceLabel(
  audienceType
) {

  const labels = {
    creator:
      "Personal Brand / Creator",

    startup:
      "Startup / Founder",

    company:
      "Company / Established Brand"
  };


  return labels[
    audienceType
  ] || audienceType;

}


// ======================================================
// FINAL RESULTS
// ======================================================

function calculateResults() {

  const categoryScores =
    calculateCategoryScores();


  const overallScore =
    calculateOverallScore(
      categoryScores
    );


  const band =
    getScoreBand(
      overallScore
    );


  const signals =
    getSignals(
      categoryScores
    );


  const result = {
    overallScore,

    categoryScores,

    band,

    strongest:
      signals.strongest,

    weakest:
      signals.weakest
  };


  displayResults(
    result
  );


  saveResult(
    result
  );


  submitResult(
    result
  );

}


// ======================================================
// DISPLAY RESULTS
// ======================================================

function displayResults(
  result
) {

  showSection(
    "resultsSection"
  );


  // Overall score

  get("overallScore")
    .textContent =
      result.overallScore;


  get("scoreRing")
    .style
    .setProperty(
      "--score",
      result.overallScore
    );


  // Maturity

  get("maturityTitle")
    .textContent =
      result.band.title;


  get("maturityDescription")
    .textContent =
      result.band.description;


  // Strongest

  const strongestCategory =
    result.strongest[0];


  const strongestScore =
    result.strongest[1];


  get("strongestSignal")
    .textContent =
      `${
        BRANDIQ
          .categoryNames[
            strongestCategory
          ]
      } — ${strongestScore}`;


  // Weakest

  const weakestCategory =
    result.weakest[0];


  const weakestScore =
    result.weakest[1];


  get("weakestSignal")
    .textContent =
      `${
        BRANDIQ
          .categoryNames[
            weakestCategory
          ]
      } — ${weakestScore}`;


  // GTM readiness

  get("gtmReadiness")
    .textContent =
      result.band
        .gtmReadiness;


  // Brand path

  get("brandPath")
    .textContent =
      getAudienceLabel(
        state.profile
          .audienceType
      );


  renderPillarScores(
    result.categoryScores
  );


  renderRecommendation(
    result
  );

}


// ======================================================
// PILLAR RESULTS
// ======================================================

function renderPillarScores(
  categoryScores
) {

  const container =
    get("pillarResults");


  container.innerHTML =
    "";


  Object.entries(
    BRANDIQ.categoryNames
  ).forEach(
    (
      [
        key,
        name
      ]
    ) => {

      const score =
        categoryScores[key];


      const item =
        document.createElement(
          "div"
        );


      item.className =
        "pillar-result";


      item.innerHTML = `

        <div class="pillar-heading">

          <span class="pillar-name">
            ${name}
          </span>

          <span class="pillar-score">
            ${score}
          </span>

        </div>


        <div class="pillar-track">

          <div
            class="pillar-fill"
            style="width: ${score}%"
          ></div>

        </div>

      `;


      container
        .appendChild(
          item
        );

    }
  );

}


// ======================================================
// RECOMMENDATION ROUTING
// ======================================================

function renderRecommendation(
  result
) {

  let title;
  let description;
  let buttonText;
  let buttonUrl;


  if (
    result.band
      .recommendation ===
    "gtm"
  ) {

    title =
      "Your brand is ready for a GTM stress test.";


    description =
      "Your BrandIQ indicates a strong strategic foundation. The next question is whether your go-to-market engine is equally prepared to turn that brand strength into demand, pipeline, customers, and revenue.";


    buttonText =
      "Take the GTM IQ Assessment →";


    buttonUrl =
      CONFIG.gtmIqUrl;

  } else {

    title =
      "Turn your BrandIQ into an actionable brand strategy.";


    description =
      "Your Brand Intelligence Blueprint turns this diagnostic into a prioritized strategy covering your brand foundation, audience, positioning, messaging, identity, experience, and most important next moves.";


    buttonText =
      "Get My Brand Intelligence Blueprint →";


    buttonUrl =
      CONFIG.brandBlueprintUrl;

  }


  get("recommendationTitle")
    .textContent =
      title;


  get("recommendationDescription")
    .textContent =
      description;


  get("recommendationBtn")
    .textContent =
      buttonText;


  get("recommendationBtn")
    .href =
      buttonUrl;

}


// ======================================================
// LOCAL STORAGE
// ======================================================

function saveResult(
  result
) {

  const payload =
    buildPayload(
      result
    );


  try {

    localStorage
      .setItem(
        "vnmiq_brand_iq_result",

        JSON.stringify(
          payload
        )
      );

  } catch (error) {

    console.error(
      "Unable to save BrandIQ result locally:",
      error
    );

  }

}


// ======================================================
// FORM PAYLOAD
// ======================================================

function buildPayload(
  result
) {

  return {
    assessment:
      "VNMIQ BrandIQ",

    assessmentVersion:
      BRANDIQ.version,

    firstName:
      state.profile.firstName,

    email:
      state.profile.email,

    brandName:
      state.profile.brandName,

    website:
      state.profile.website,

    audienceType:
      state.profile.audienceType,

    audienceLabel:
      getAudienceLabel(
        state.profile
          .audienceType
      ),

    brandIqScore:
      result.overallScore,

    maturityLevel:
      result.band.title,

    gtmReadiness:
      result.band
        .gtmReadiness,

    strongestPillar:
      BRANDIQ
        .categoryNames[
          result.strongest[0]
        ],

    strongestScore:
      result.strongest[1],

    weakestPillar:
      BRANDIQ
        .categoryNames[
          result.weakest[0]
        ],

    weakestScore:
      result.weakest[1],

    categoryScores:
      result.categoryScores,

    answers:
      state.answers,

    utmSource:
      state.sourceData
        .utmSource,

    utmMedium:
      state.sourceData
        .utmMedium,

    utmCampaign:
      state.sourceData
        .utmCampaign,

    utmContent:
      state.sourceData
        .utmContent,

    referrer:
      state.sourceData
        .referrer,

    completedAt:
      new Date()
        .toISOString()
  };

}


// ======================================================
// FORMSPREE SUBMISSION
// ======================================================

async function submitResult(
  result
) {

  const status =
    get(
      "submissionStatus"
    );


  if (
    !CONFIG
      .formspreeEndpoint
  ) {

    status.textContent =
      "Your BrandIQ result is ready.";

    return;

  }


  status.textContent =
    "Saving your BrandIQ result...";


  const payload =
    buildPayload(
      result
    );


  try {

    const response =
      await fetch(
        CONFIG
          .formspreeEndpoint,
        {
          method:
            "POST",

          headers: {
            "Content-Type":
              "application/json",

            Accept:
              "application/json"
          },

          body:
            JSON.stringify({

              form_name:
                "VNMIQ BrandIQ Assessment",

              first_name:
                payload.firstName,

              email:
                payload.email,

              brand_name:
                payload.brandName,

              website:
                payload.website,

              audience_type:
                payload.audienceLabel,

              brand_iq_score:
                payload.brandIqScore,

              maturity_level:
                payload.maturityLevel,

              gtm_readiness:
                payload.gtmReadiness,

              strongest_pillar:
                `${payload.strongestPillar} (${payload.strongestScore})`,

              weakest_pillar:
                `${payload.weakestPillar} (${payload.weakestScore})`,

              foundation_score:
                payload
                  .categoryScores
                  .foundation,

              audience_score:
                payload
                  .categoryScores
                  .audience,

              positioning_score:
                payload
                  .categoryScores
                  .positioning,

              messaging_score:
                payload
                  .categoryScores
                  .messaging,

              identity_score:
                payload
                  .categoryScores
                  .identity,

              experience_score:
                payload
                  .categoryScores
                  .experience,

              market_readiness_score:
                payload
                  .categoryScores
                  .market,

              answers:
                JSON.stringify(
                  payload.answers
                ),

              utm_source:
                payload.utmSource,

              utm_medium:
                payload.utmMedium,

              utm_campaign:
                payload.utmCampaign,

              utm_content:
                payload.utmContent,

              referrer:
                payload.referrer,

              completed_at:
                payload.completedAt

            })
        }
      );


    if (
      !response.ok
    ) {

      throw new Error(
        `Form submission failed: ${response.status}`
      );

    }


    status.textContent =
      "Your BrandIQ result has been saved.";

  } catch (error) {

    console.error(
      "BrandIQ submission error:",
      error
    );


    status.textContent =
      "Your BrandIQ result is complete. Automatic saving could not be confirmed.";

  }

}


// ======================================================
// RETAKE ASSESSMENT
// ======================================================

get("retakeBtn")
  ?.addEventListener(
    "click",
    () => {

      state.currentQuestion =
        0;


      state.answers =
        new Array(
          BRANDIQ.questions.length
        ).fill(null);


      showSection(
        "assessmentSection"
      );


      renderQuestion();

    }
  );


// ======================================================
// INITIALIZE
// ======================================================

function initializeBrandIQ() {

  captureSourceData();


  console.log(
    `VNMIQ BrandIQ™ v${BRANDIQ.version} loaded`
  );


  console.log(
    `${BRANDIQ.questions.length} diagnostic questions ready`
  );

}


initializeBrandIQ();
