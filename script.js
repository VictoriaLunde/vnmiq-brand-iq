// VNMIQ BrandIQ™ Diagnostic Model
// Source of truth for questions, weights, score bands, and audience-aware wording.

const BRANDIQ_MODEL = {
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

  optionLabels: [
    "Not defined — this is a major gap today.",
    "Early stage — some thinking exists, but it is inconsistent.",
    "Developing — we have a foundation, but it needs refinement.",
    "Strong — this is clearly defined and usually consistent.",
    "Excellent — this is strategic, documented, differentiated, and repeatable."
  ],

  questions: [
    // =========================
    // 1. BRAND FOUNDATION
    // =========================

    {
      id: "F1",
      c: "foundation",
      q: "How clearly can you explain why your brand exists beyond making money?"
    },

    {
      id: "F2",
      c: "foundation",
      q: "How clearly defined are your brand's mission, vision, and core values?"
    },

    {
      id: "F3",
      c: "foundation",
      q: "How consistently do your business, content, product, or partnership decisions reflect your brand strategy?"
    },

    {
      id: "F4",
      c: "foundation",
      q: "How confident are you that your brand can evolve without losing its core identity?"
    },


    // =========================
    // 2. AUDIENCE INTELLIGENCE
    // =========================

    {
      id: "A1",
      c: "audience",

      q: "How specifically can you describe the audience or ideal customer your brand is built for?",

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
      c: "audience",
      q: "How well do you understand the problems, motivations, aspirations, and buying behavior of that audience?"
    },

    {
      id: "A3",
      c: "audience",
      q: "How much real customer or audience insight informs your brand decisions?"
    },

    {
      id: "A4",
      c: "audience",
      q: "How clearly can you identify which audience segments are most valuable to your growth?"
    },


    // =========================
    // 3. POSITIONING
    // =========================

    {
      id: "P1",
      c: "positioning",
      q: "How clearly can you explain what category your brand belongs in and what it should be known for?"
    },

    {
      id: "P2",
      c: "positioning",
      q: "How differentiated is your brand from the alternatives your audience could choose instead?"
    },

    {
      id: "P3",
      c: "positioning",
      q: "How strong is the reason someone should choose your brand specifically?"
    },

    {
      id: "P4",
      c: "positioning",
      q: "How consistently does your positioning hold up across your website, social channels, sales conversations, and partnerships?"
    },


    // =========================
    // 4. MESSAGING
    // =========================

    {
      id: "M1",
      c: "messaging",
      q: "How quickly can a new person understand what you offer and why it matters?"
    },

    {
      id: "M2",
      c: "messaging",
      q: "How clearly defined is your core value proposition?"
    },

    {
      id: "M3",
      c: "messaging",
      q: "How consistent is your brand voice across content, marketing, sales, and customer communication?"
    },

    {
      id: "M4",
      c: "messaging",

      q: "How well can anyone speaking for the brand communicate the same core story?",

      variants: {
        creator:
          "How consistently can you communicate the same core story across your content, collaborations, pitches, and offers?",

        startup:
          "How well can founders, sellers, and marketers communicate the same core story?",

        company:
          "How well can different teams communicate the same core brand story?"
      }
    },


    // =========================
    // 5. BRAND IDENTITY
    // =========================

    {
      id: "I1",
      c: "identity",
      q: "How recognizable is your brand without relying only on your logo or name?"
    },

    {
      id: "I2",
      c: "identity",
      q: "How consistently do you use visual brand codes such as color, typography, imagery, layout, and creative direction?"
    },

    {
      id: "I3",
      c: "identity",
      q: "How well does your visual identity reflect the position you want to own in the market?"
    },

    {
      id: "I4",
      c: "identity",
      q: "How scalable is your current visual system across web, social, campaigns, presentations, products, and partnerships?"
    },


    // =========================
    // 6. BRAND EXPERIENCE
    // =========================

    {
      id: "E1",
      c: "experience",
      q: "How consistent does your brand feel from first impression through purchase, delivery, and follow-up?"
    },

    {
      id: "E2",
      c: "experience",
      q: "How intentionally have you designed the experience people have when interacting with your brand?"
    },

    {
      id: "E3",
      c: "experience",
      q: "How well do your website, social presence, sales process, and customer experience reinforce the same promise?"
    },

    {
      id: "E4",
      c: "experience",
      q: "How likely is someone to describe your brand the way you intended after experiencing it?"
    },


    // =========================
    // 7. MARKET READINESS
    // =========================

    {
      id: "R1",
      c: "market",
      q: "How ready is your brand to support a larger investment in content, marketing, sales, or partnerships?"
    },

    {
      id: "R2",
      c: "market",
      q: "How clearly can your current brand strategy guide a go-to-market campaign?"
    },

    {
      id: "R3",
      c: "market",
      q: "How confident are you that increased visibility would strengthen—not expose weaknesses in—your brand?"
    },

    {
      id: "R4",
      c: "market",
      q: "How prepared are you to measure which brand signals actually contribute to growth and revenue?"
    }
  ],


  // =========================
  // SCORE BANDS
  // =========================

  scoreBands: [
    {
      min: 0,
      max: 39,

      title: "Foundation at Risk",

      gtm: "Not Yet Ready",

      recommendation: "Blueprint",

      copy:
        "Your brand has meaningful strategic gaps that can make growth expensive, inconsistent, or difficult to sustain."
    },

    {
      min: 40,
      max: 59,

      title: "Emerging Brand",

      gtm: "Not Yet Ready",

      recommendation: "Blueprint",

      copy:
        "Your brand has useful building blocks, but the foundation is not yet consistent enough to support aggressive scale."
    },

    {
      min: 60,
      max: 79,

      title: "Growth-Ready Brand",

      gtm: "Moderately Ready",

      recommendation: "Blueprint",

      copy:
        "Your brand has a credible strategic foundation. The next advantage will come from tightening the gaps that could limit market performance."
    },

    {
      min: 80,
      max: 100,

      title: "Brand Intelligent",

      gtm: "High Readiness",

      recommendation: "GTM IQ",

      copy:
        "Your brand foundation is strong, differentiated, and increasingly ready to support sophisticated go-to-market execution."
    }
  ],


  // =========================
  // QUESTION PERSONALIZATION
  // =========================

  getQuestionText(question, audienceType) {
    return question.variants?.[audienceType] || question.q;
  },


  // =========================
  // BRANDIQ SCORING
  // =========================

  calculateScores(answers) {
    const grouped = {};

    Object.keys(this.categoryNames).forEach((key) => {
      grouped[key] = [];
    });

    this.questions.forEach((question, index) => {
      const value = answers[index];

      if (value != null) {
        grouped[question.c].push(Number(value));
      }
    });

    const categoryScores = {};

    Object.entries(grouped).forEach(([key, values]) => {
      if (!values.length) {
        categoryScores[key] = 0;
        return;
      }

      const average =
        values.reduce((total, value) => total + value, 0) /
        values.length;

      categoryScores[key] = Math.round(
        (average / 5) * 100
      );
    });


    // Weighted BrandIQ score

    const overall = Math.round(
      Object.entries(categoryScores).reduce(
        (total, [key, score]) => {
          return total + score * this.weights[key];
        },
        0
      )
    );

    return {
      overall,
      categoryScores
    };
  },


  // =========================
  // MATURITY BAND
  // =========================

  getBand(score) {
    return this.scoreBands.find(
      (band) =>
        score >= band.min &&
        score <= band.max
    );
  },


  // =========================
  // STRONGEST / WEAKEST SIGNAL
  // =========================

  getSignals(categoryScores) {
    const sorted = Object.entries(categoryScores).sort(
      (a, b) => b[1] - a[1]
    );

    return {
      strongest: sorted[0],
      weakest: sorted[sorted.length - 1]
    };
  }
};
