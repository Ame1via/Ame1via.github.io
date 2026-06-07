
const difficulties = {
  intro: {
    label: "入门",
    note: "用中文先建立概念，题目直接，提示较多。",
    copyKey: "intro"
  },
  standard: {
    label: "标准",
    note: "中日或中英关键词并行，加入基础辨析。",
    copyKey: "standard"
  },
  advanced: {
    label: "高级",
    note: "强调案例、定义、相近概念与判断步骤。",
    copyKey: "advanced"
  },
  exam: {
    label: "考试",
    note: "隐藏多余提示，更接近限时自测与混合题型。",
    copyKey: "exam"
  }
};

const modes = [
  { id: "card", label: "知识卡片" },
  { id: "quiz", label: "刷题" },
  { id: "review", label: "复习" }
];

const subjects = [
  {
    id: "law",
    title: "法律",
    subtitle: "截图课程内容",
    topics: [
      {
        id: "criminal",
        title: "刑法总论",
        label: "刑法総論",
        terms: [
          ["罪刑法定主义", "法律没有预先规定时，国家不能事后处罚。"],
          ["犯罪三要素", "构成要件该当性、违法性、有责性。"],
          ["构成要件", "判断行为是否落入犯罪类型的入口。"],
          ["错误论", "行为人对事实或法律认识错误时，如何影响责任。"]
        ],
        copy: {
          intro: "刑法总论先问一个核心问题：国家什么时候可以处罚一个人。第一步看行为是否符合犯罪类型，第二步看有没有违法阻却事由，第三步看行为人是否可以被责难。",
          standard: "刑法総論围绕犯罪成立要件展开：構成要件該当性、違法性、有責性。课程还要覆盖罪刑法定主义、因果关系、主观构成要件、过失犯、责任主义与刑罚正当化根据。",
          advanced: "学习重点不只是背概念，而是把个案事实放进犯罪成立结构中。因果关系、具体事实错误、抽象事实错误会影响构成要件与故意判断，责任主义则限制国家处罚范围。",
          exam: "用犯罪成立三阶段快速判断：构成要件是否满足，违法性是否被阻却，有责性是否存在。遇到错误论题目时，先分清事实错误与法律错误。"
        },
        questions: [
          {
            prompt: "刑法中的“犯罪三要素”通常指什么？",
            answers: ["构成要件该当性、违法性、有责性", "契约、代理、时效", "国会、内阁、裁判所"],
            correct: 0,
            explain: "刑法总论通常用三阶段结构分析犯罪是否成立。"
          },
          {
            prompt: "“没有法律规定就不能处罚”最接近哪个原则？",
            answers: ["罪刑法定主义", "表见代理", "取得时效"],
            correct: 0,
            explain: "罪刑法定主义要求犯罪与刑罚必须由法律预先规定。"
          }
        ]
      },
      {
        id: "civil",
        title: "民法总则",
        label: "民法総則",
        terms: [
          ["契约成立", "意思表示合致后，法律关系开始发生。"],
          ["代理制度", "代理人作出意思表示，效果归属于本人。"],
          ["无权代理", "没有代理权却以代理人身份行动。"],
          ["时效", "时间经过导致权利取得或请求权消灭。"]
        ],
        copy: {
          intro: "民法总则处理私人之间的基本规则。当前重点是代理和时效：谁能代表谁做法律行为，时间经过会怎样改变权利状态。",
          standard: "民法総則的学习范围包括契约成立过程、代理制度、代理的成立要件、代理权、表见代理、时效制度、取得时效、消灭时效、期限与条件。",
          advanced: "代理题的核心是效果归属。先确认代理权是否存在，再判断相对人保护规则是否适用。时效题要区分取得时效与消灭时效，并注意期限、条件对法律效果的控制。",
          exam: "遇到民法题，先找法律行为、当事人、意思表示和时间经过。代理题看授权与外观，时效题看权利变动方向。"
        },
        questions: [
          {
            prompt: "代理制度中，代理行为的法律效果原则上归属于谁？",
            answers: ["本人", "代理人", "裁判所"],
            correct: 0,
            explain: "代理人实施意思表示，但法律效果归属于本人。"
          },
          {
            prompt: "“时间经过导致请求权消灭”对应哪类制度？",
            answers: ["消灭时效", "表见代理", "构成要件"],
            correct: 0,
            explain: "消灭时效关注权利因长期不行使而失去请求力等效果。"
          }
        ]
      },
      {
        id: "constitution",
        title: "日本国宪法",
        label: "日本国憲法",
        terms: [
          ["国民主权", "国家权力的最终根据在国民。"],
          ["统治机构", "国会、内阁、裁判所的权力分配。"],
          ["和平主义", "宪法层面对战争与武力的限制。"],
          ["基本人权", "国家必须尊重并保障个人权利。"]
        ],
        copy: {
          intro: "日本国宪法课程从历史、基本原则和统治结构开始，再进入基本人权。它适合和现实社会问题一起学，因为宪法经常回答国家权力能做什么、不能做什么。",
          standard: "截图中的宪法课程包括日本国憲法の歴史・基本原理、国民主権、天皇制、統治の基本原理、国会、内閣、裁判所、平和主義、基本的人権、表現の自由。",
          advanced: "高级学习要把抽象原则转成审查步骤。比如表现自由问题中，要看限制目的、限制手段、审查强度，以及现代社会问题如何改变利益衡量。",
          exam: "答题时先定位权利或统治机关，再说明宪法原则，最后把具体事实放入审查框架。"
        },
        questions: [
          {
            prompt: "下列哪一项不属于宪法统治机构的核心主题？",
            answers: ["过失犯", "国会", "内阁"],
            correct: 0,
            explain: "过失犯属于刑法总论，不属于宪法统治机构。"
          },
          {
            prompt: "表现自由通常属于哪个学习板块？",
            answers: ["基本人权", "代理制度", "宏观经济指标"],
            correct: 0,
            explain: "表现自由是基本人权领域的重要主题。"
          }
        ]
      }
    ]
  },
  {
    id: "jlpt",
    title: "JLPT N1",
    subtitle: "通用考试体系",
    topics: [
      {
        id: "n1-vocab",
        title: "文字词汇",
        label: "文字・語彙",
        terms: [
          ["抽象語", "政策、制度、心理、评价类高频词。"],
          ["漢語", "正式文章中出现频率高，常用于新闻和评论。"],
          ["類義語", "相近词的语气、对象、场景差异。"],
          ["慣用句", "固定表达，不能只按字面理解。"]
        ],
        copy: {
          intro: "N1词汇先按主题学，比孤立背单词更稳。法律、社会、经济、心理类词汇可以和课程内容联动。",
          standard: "文字・語彙需要整理抽象語、漢語、類義語、慣用表現，并和阅读文章里的使用场景一起记。",
          advanced: "高级阶段要练语感差异：同义词在正式度、搭配对象、评价色彩上的不同，往往就是N1选项陷阱。",
          exam: "考试模式重点是快速排除：先看搭配，再看语体，最后看句子整体逻辑。"
        },
        questions: [
          {
            prompt: "N1词汇中，最容易和法律课程联动的是哪类词？",
            answers: ["制度、责任、权利等抽象词", "只表示颜色的词", "儿童日常拟声词"],
            correct: 0,
            explain: "法律和社会科学文章大量使用制度、责任、权利、义务等抽象词。"
          }
        ]
      },
      {
        id: "n1-grammar",
        title: "文法",
        label: "文法",
        terms: [
          ["逆接", "即使、虽然、然而的逻辑。"],
          ["限定", "只限于、正因为、除非等表达。"],
          ["评价", "不得不说、未必、难免等语气。"],
          ["书面语", "论文、评论、新闻中常见结构。"]
        ],
        copy: {
          intro: "N1文法不是只背句型，而是判断逻辑。每个句型都要知道它表达转折、原因、限定还是评价。",
          standard: "文法学习按功能整理：逆接、条件、限定、程度、评价、书面语。这样阅读时可以更快看出作者态度。",
          advanced: "高级阶段要比较相近句型。比如表示让步、限定、否定评价的句型，中文翻译可能接近，但语气强度不同。",
          exam: "考试模式先判断前后句关系，再选文法。不要从中文直译选答案。"
        },
        questions: [
          {
            prompt: "N1文法训练中，最应该优先判断什么？",
            answers: ["前后句逻辑关系", "字体大小", "作者姓名"],
            correct: 0,
            explain: "N1文法很多题考逻辑功能，而不是单个词的孤立意思。"
          }
        ]
      },
      {
        id: "n1-reading",
        title: "阅读",
        label: "読解",
        terms: [
          ["主张", "作者真正要表达的判断。"],
          ["根据", "支撑主张的理由或例子。"],
          ["对比", "常用于区分旧观点和新观点。"],
          ["指示词", "これ、それ、そのような等指代关系。"]
        ],
        copy: {
          intro: "N1阅读先抓作者主张，再看理由。法律和经济类文章很适合练这一点。",
          standard: "読解需要追主張、根拠、対比、指示詞、段落機能。截图里的课程说明也可以变成阅读材料。",
          advanced: "高级阅读要能分辨作者让步、反驳、修正和结论。尤其是长文，答案通常藏在论证结构里。",
          exam: "考试模式先看问题，再定位段落。长文不要逐字翻译，先抓论证骨架。"
        },
        questions: [
          {
            prompt: "N1长文阅读中，最核心的抓手通常是什么？",
            answers: ["作者主张和论证结构", "每个汉字的笔画", "图片颜色"],
            correct: 0,
            explain: "长文阅读的关键是论证关系，而不是孤立词汇。"
          }
        ]
      }
    ]
  },
  {
    id: "english",
    title: "English",
    subtitle: "学术与法律英语",
    topics: [
      {
        id: "academic",
        title: "学术阅读",
        label: "Academic Reading",
        terms: [
          ["claim", "作者提出的主张。"],
          ["evidence", "支撑主张的证据。"],
          ["counterargument", "相反观点或反驳对象。"],
          ["implication", "结论带出的影响。"]
        ],
        copy: {
          intro: "英语阅读可以和法律、N1一起练：先找主张、理由、例子和结论。",
          standard: "Academic reading focuses on claims, evidence, counterarguments, and implications. The goal is to read structure, not just vocabulary.",
          advanced: "At a higher level, compare how the writer limits a claim, concedes a point, and shifts from evidence to interpretation.",
          exam: "In exam mode, identify the main claim first, then test every option against the passage instead of memory."
        },
        questions: [
          {
            prompt: "In academic reading, what does “claim” usually mean?",
            answers: ["The writer's main argument", "A random example", "A punctuation mark"],
            correct: 0,
            explain: "A claim is the position or argument the writer wants to establish."
          }
        ]
      },
      {
        id: "grammar",
        title: "语法表达",
        label: "Grammar",
        terms: [
          ["modality", "may, must, should 表示确定性和义务。"],
          ["concession", "although, even if 等让步关系。"],
          ["condition", "if, unless, provided that 等条件关系。"],
          ["reference", "this, that, which 的指代。"]
        ],
        copy: {
          intro: "英语语法不只为了做题，也能帮助你写清楚法律和学术观点。",
          standard: "Grammar study is organized by function: condition, concession, causation, modality, and reference.",
          advanced: "Advanced grammar asks how a sentence controls responsibility, certainty, and scope. This is useful for legal and academic writing.",
          exam: "In exam mode, identify the logical function before choosing the grammar form."
        },
        questions: [
          {
            prompt: "Which word often expresses concession?",
            answers: ["although", "therefore", "because"],
            correct: 0,
            explain: "Although introduces a concession or contrast."
          }
        ]
      },
      {
        id: "legal-english",
        title: "法律英语",
        label: "Legal English",
        terms: [
          ["liability", "责任，尤其是法律责任。"],
          ["intent", "故意、意图。"],
          ["negligence", "过失。"],
          ["statute", "成文法、制定法。"]
        ],
        copy: {
          intro: "法律英语可以从刑法、民法、宪法概念延伸。先把核心词和中文、日文概念对上。",
          standard: "Legal English connects terms such as liability, intent, negligence, statute, agency, contract, and constitutional rights.",
          advanced: "Advanced practice compares legal terms across systems. For example, negligence is not just carelessness; it is a structured legal standard.",
          exam: "In exam mode, choose the term by legal function: responsibility, mental state, source of law, or institutional power."
        },
        questions: [
          {
            prompt: "Which English term is closest to “过失”？",
            answers: ["negligence", "statute", "claim"],
            correct: 0,
            explain: "Negligence is the usual legal English term for fault based on lack of due care."
          }
        ]
      }
    ]
  }
];

function extendStudyBank() {
  const topicById = (id) => subjects.flatMap((subject) => subject.topics).find((topic) => topic.id === id);
  const addQuestions = (topicId, questions) => {
    const topic = topicById(topicId);
    if (topic) topic.questions.push(...questions);
  };

  addQuestions("criminal", [
    {
      prompt: "判断犯罪是否成立时，为什么通常先看构成要件？",
      answers: ["它先限定国家处罚的行为类型", "它直接决定赔偿金额", "它只处理合同解释"],
      correct: 0,
      explain: "构成要件是犯罪类型的入口，先确认行为是否落入法律预设的处罚范围。"
    },
    {
      prompt: "正当防卫最主要影响犯罪成立结构中的哪一层？",
      answers: ["违法性", "时效", "代理权"],
      correct: 0,
      explain: "正当防卫通常作为违法阻却事由讨论，重点在违法性层面。"
    },
    {
      prompt: "责任主义最直接限制的是什么？",
      answers: ["没有可责难性时不得处罚", "所有债务都自动消灭", "国会可以不受宪法限制"],
      correct: 0,
      explain: "责任主义要求刑罚必须以行为人的可责难性为基础。"
    },
    {
      prompt: "刑法中讨论因果关系时，核心问题通常是什么？",
      answers: ["结果能否归属于该行为", "契约是否成立", "表见代理是否成立"],
      correct: 0,
      explain: "因果关系用于判断行为与结果之间是否存在刑法上可归责的联系。"
    }
  ]);

  addQuestions("civil", [
    {
      prompt: "表见代理保护的重点对象通常是谁？",
      answers: ["有合理信赖的相对人", "没有行为能力的本人", "犯罪被害人"],
      correct: 0,
      explain: "表见代理关注外观和信赖，核心是保护善意且有合理信赖的相对人。"
    },
    {
      prompt: "民法中“期限”和“条件”的共同点是什么？",
      answers: ["都会影响法律效果发生或消灭的时间结构", "都会构成犯罪", "都会产生国会监督权"],
      correct: 0,
      explain: "期限和条件都可以控制法律效果何时发生、停止或消灭。"
    },
    {
      prompt: "无权代理在被本人追认后，通常会产生什么效果？",
      answers: ["代理行为可能对本人发生效力", "行为必然构成刑事犯罪", "相对人永远不能撤回"],
      correct: 0,
      explain: "无权代理经本人追认后，法律效果可以归属于本人。"
    }
  ]);

  addQuestions("constitution", [
    {
      prompt: "宪法中讨论统治机构时，最常见的分析对象是什么？",
      answers: ["国家机关之间的权力分配", "私人之间的买卖价格", "单词的敬语程度"],
      correct: 0,
      explain: "统治机构部分关注国会、内阁、裁判所等国家机关的权限和关系。"
    },
    {
      prompt: "基本人权问题中，为什么要看国家行为的限制目的和手段？",
      answers: ["为了判断限制是否具有宪法上的正当性", "为了确定代理权是否存在", "为了计算 GDP"],
      correct: 0,
      explain: "权利限制是否合宪，需要看目的、手段和限制强度是否相称。"
    },
    {
      prompt: "和平主义主题最直接关联哪一类宪法问题？",
      answers: ["战争、武力与国家安全权力", "时效完成", "词汇搭配"],
      correct: 0,
      explain: "和平主义主要处理宪法层面对战争、武力和国家安全权力的限制。"
    }
  ]);

  addQuestions("n1-vocab", [
    {
      prompt: "N1 词汇题中，遇到近义词时最应该先比较什么？",
      answers: ["搭配对象和语体", "字的颜色", "页码大小"],
      correct: 0,
      explain: "近义词陷阱常出现在搭配、正式度、评价色彩和使用场景上。"
    },
    {
      prompt: "“抽象語”在 N1 阅读和词汇中为什么重要？",
      answers: ["它常承载制度、评价、心理和社会概念", "它只能用于儿童对话", "它不需要语境"],
      correct: 0,
      explain: "N1 高频文章常涉及社会、制度、评价等抽象内容。"
    },
    {
      prompt: "做 N1 词汇选择时，最稳的顺序是哪一个？",
      answers: ["看搭配，再看语体，最后看全句逻辑", "先猜最长选项", "只看汉字外形"],
      correct: 0,
      explain: "搭配和语体能先排掉明显不合适的选项，再用句意确认。"
    },
    {
      prompt: "漢語词在 N1 中常见于什么文本？",
      answers: ["新闻、评论、说明文等正式文本", "只用于拟声词", "只用于幼儿读物"],
      correct: 0,
      explain: "漢語词正式度较高，常出现在说明、评论、新闻和学术性文章里。"
    }
  ]);

  addQuestions("n1-grammar", [
    {
      prompt: "如果前句承认一种情况，后句提出相反结论，优先考虑哪类文法功能？",
      answers: ["让步或逆接", "数量单位", "人称代词"],
      correct: 0,
      explain: "承认前提后转向不同结论，通常是让步或逆接关系。"
    },
    {
      prompt: "N1 文法中“限定”表达常用来做什么？",
      answers: ["缩小适用范围或条件", "表示颜色", "标记页码"],
      correct: 0,
      explain: "限定表达用于说明只有某种范围、条件或对象才成立。"
    },
    {
      prompt: "判断文法题时，为什么不能只靠中文直译？",
      answers: ["相近句型的语气和适用场景可能不同", "中文直译一定没有意义", "日语没有逻辑关系"],
      correct: 0,
      explain: "中文意思相近的句型，在日语中可能有正式度、主观性、语气强度差异。"
    },
    {
      prompt: "“不得不说”“未必”“难免”等表达主要涉及什么？",
      answers: ["评价和语气", "货币供给", "代理权归属"],
      correct: 0,
      explain: "这些表达往往体现作者判断、保留、评价或语气强度。"
    }
  ]);

  addQuestions("n1-reading", [
    {
      prompt: "阅读长文时，指示词“それ”一类词最需要回到哪里确认？",
      answers: ["前文的具体指代对象", "文章封面", "随机选项"],
      correct: 0,
      explain: "指示词题需要回到前文确认它承接的对象或论点。"
    },
    {
      prompt: "如果段落先介绍旧观点，再提出新观点，这通常是什么结构？",
      answers: ["对比结构", "无关罗列", "数学证明"],
      correct: 0,
      explain: "旧观点和新观点并置，通常是为了形成对比或推进论证。"
    },
    {
      prompt: "N1 阅读选项判断时，最可靠的做法是什么？",
      answers: ["用文章中的论证关系逐项核对", "选最像常识的答案", "只看选项长度"],
      correct: 0,
      explain: "N1 阅读答案必须回到文章结构和作者主张中验证。"
    },
    {
      prompt: "作者在长文中先让步再反驳，通常是为了什么？",
      answers: ["增强结论的说服力", "改变字体", "隐藏题号"],
      correct: 0,
      explain: "让步后反驳可以承认一部分合理性，同时把读者带向作者真正结论。"
    }
  ]);

  addQuestions("n1-vocab", [
    {
      prompt: "“怠る”这类词的核心语义更接近什么？",
      answers: ["应该做却疏忽、不做", "提前完成", "详细说明"],
      correct: 0,
      explain: "怠る常用于疏忽职责、检查、准备等语境。"
    },
    {
      prompt: "“必須”最适合放在哪种语境里？",
      answers: ["申请、条件、资格中表示必不可少", "随便寒暄", "表示颜色变化"],
      correct: 0,
      explain: "必須表示不可缺少，常和条件、科目、资格、能力搭配。"
    },
    {
      prompt: "“下落”常用于哪类对象？",
      answers: ["价格、股价、数值", "性格突然变化", "船只入港"],
      correct: 0,
      explain: "下落强调数值或价格下降。"
    },
    {
      prompt: "“がらりと変わる”强调什么？",
      answers: ["变化幅度大、状态完全不同", "缓慢微调", "没有变化"],
      correct: 0,
      explain: "がらりと常表示状态、态度、气氛等发生明显变化。"
    },
    {
      prompt: "区分“下降”和“下落”时，哪个判断更有用？",
      answers: ["搭配对象和语域", "笔画数量", "是否有片假名"],
      correct: 0,
      explain: "N1 近义词常要看搭配对象，而不是只看中文翻译。"
    }
  ]);

  addQuestions("n1-grammar", [
    {
      prompt: "“というもの”在时间表达中常强调什么？",
      answers: ["某段时间以来持续如此", "只比较两个名词", "命令对方行动"],
      correct: 0,
      explain: "这个表达常用于强调从某时起一直持续的状态。"
    },
    {
      prompt: "“にしても”和“としても”都可能表示让步时，最该看什么？",
      answers: ["前后句逻辑和句型接续", "选项长度", "是否有汉字"],
      correct: 0,
      explain: "相近文法要结合接续、语气和上下文功能判断。"
    },
    {
      prompt: "N1 文法题里，空格前后如果是长期状态描述，优先考虑什么？",
      answers: ["持续、期间、状态变化相关表达", "拟声词", "专有名词"],
      correct: 0,
      explain: "文法功能需要和句子的时间结构一致。"
    },
    {
      prompt: "做文法选择时，为什么要先排除接续不合的选项？",
      answers: ["接续错误的选项即使意思像也不能成立", "接续永远不重要", "为了减少阅读文章"],
      correct: 0,
      explain: "N1 文法同时考意义和形式，接续是第一道筛选。"
    },
    {
      prompt: "“即使承认前项，后项仍成立”的关系通常叫什么？",
      answers: ["让步", "并列列举", "定义"],
      correct: 0,
      explain: "让步表达常用于承认某条件后，仍提出后续判断。"
    }
  ]);

  addQuestions("n1-reading", [
    {
      prompt: "如果选项把作者的谨慎判断改成绝对断言，通常有什么风险？",
      answers: ["过度概括", "读音错误", "字体错误"],
      correct: 0,
      explain: "N1 阅读常用“过强选项”制造陷阱。"
    },
    {
      prompt: "阅读中遇到“つまり”，后面通常承担什么功能？",
      answers: ["总结或换言", "无关插入", "题号说明"],
      correct: 0,
      explain: "つまり常引出概括、换言或结论。"
    },
    {
      prompt: "阅读中遇到“むしろ”，通常提示什么？",
      answers: ["作者要把判断转向另一侧重点", "继续同义重复", "开始列页码"],
      correct: 0,
      explain: "むしろ常表示与预想不同，强调更应该如此的一面。"
    },
    {
      prompt: "为什么阅读题不能只看含有同一词的选项？",
      answers: ["同词选项可能偷换关系或结论", "同词一定正确", "文章没有逻辑"],
      correct: 0,
      explain: "N1 阅读考的是论证关系，不只是关键词匹配。"
    },
    {
      prompt: "长文中每段第一句和最后一句常有什么用？",
      answers: ["提示段落功能或论证推进", "只负责装饰", "只显示出版信息"],
      correct: 0,
      explain: "段首段尾常出现主题、转折、总结和推进信号。"
    }
  ]);

  const law = subjects.find((subject) => subject.id === "law");
  if (law) {
    law.topics.push(
      {
        id: "legality",
        title: "罪刑法定",
        label: "罪刑法定主義",
        terms: [
          ["法律主义", "犯罪和刑罚必须由法律规定。"],
          ["禁止溯及处罚", "事后制定的刑罚规范原则上不能处罚过去行为。"],
          ["禁止类推解释", "不能把不属于条文文义范围的行为类推成犯罪。"],
          ["明确性", "刑罚法规必须足够清楚，让人能够预见后果。"]
        ],
        copy: {
          intro: "罪刑法定主义保护人不被国家事后任意处罚。先记住四个关键词：法律、事前、文义、明确。",
          standard: "学习罪刑法定时，要把法律主义、禁止溯及处罚、禁止类推解释、绝对不定期刑禁止、明确性原则放在一起看。",
          advanced: "高级辨析的重点是解释和类推的边界。刑法解释可以扩张，但不能越过文义可承受范围，把未被规范的行为硬放进犯罪。",
          exam: "考试题先问：有没有法律根据；适用是否溯及；解释是否越界；条文是否足够明确。"
        },
        questions: [
          {
            prompt: "罪刑法定主义最直接限制的是谁的权力？",
            answers: ["国家处罚权", "私人买卖自由", "考试出题权"],
            correct: 0,
            explain: "罪刑法定主义要求国家处罚必须有事前法律根据。"
          },
          {
            prompt: "刑法中禁止类推解释，是为了防止什么？",
            answers: ["把条文没有覆盖的行为扩张成犯罪", "合同无法成立", "货币供给增加"],
            correct: 0,
            explain: "类推解释会破坏行为人对犯罪范围的预见可能性。"
          },
          {
            prompt: "禁止溯及处罚通常指什么？",
            answers: ["不能用事后法律处罚过去行为", "不能引用判例", "不能解释条文"],
            correct: 0,
            explain: "刑罚法规原则上只能面向将来的行为适用。"
          },
          {
            prompt: "刑罚法规明确性不足时，最主要的问题是什么？",
            answers: ["行为人无法预见什么会被处罚", "代理权自动成立", "GDP 无法统计"],
            correct: 0,
            explain: "明确性原则要求处罚范围足够清楚，避免恣意适用。"
          },
          {
            prompt: "扩张解释和类推解释的关键区别在哪里？",
            answers: ["是否仍在文义可能范围内", "是否使用日语", "是否有图表"],
            correct: 0,
            explain: "扩张解释仍需受文义边界限制，类推则越过了条文本身。"
          }
        ]
      },
      {
        id: "causation",
        title: "结果与因果关系",
        label: "結果と因果関係",
        terms: [
          ["结果犯", "以一定结果发生作为构成要件要素的犯罪。"],
          ["条件关系", "没有该行为，结果是否仍会发生的基础判断。"],
          ["归责", "在条件关系之外，判断结果是否可规范性地归属于行为。"],
          ["假定因果", "即使没有该行为，结果也可能由其他原因发生的场景。"]
        ],
        copy: {
          intro: "因果关系不是只问物理原因，而是问结果能不能算到这个行为头上。先从条件关系开始，再进入规范归责。",
          standard: "刑法因果关系通常包含事实层面的条件关系和规范层面的归责判断。尤其在介入因素、假定因果、结果具体化问题中容易出题。",
          advanced: "高级题会把多个原因、被害人行为、第三人介入或自然力放进案情。要分清事实上的原因链和刑法上是否应归责。",
          exam: "答题时先用条件关系定位，再看介入因素是否切断归责，最后说明结果的具体化程度。"
        },
        questions: [
          {
            prompt: "刑法因果关系的第一步通常是什么？",
            answers: ["确认行为与结果之间是否存在条件关系", "判断代理权", "计算通胀率"],
            correct: 0,
            explain: "条件关系是因果关系判断的基础入口。"
          },
          {
            prompt: "第三人异常介入可能影响什么判断？",
            answers: ["结果是否仍可归责于原行为", "契约是否合意", "单词读音"],
            correct: 0,
            explain: "介入因素可能使结果不再规范性地归属于最初行为。"
          },
          {
            prompt: "“没有该行为，结果是否仍会发生”主要是在问什么？",
            answers: ["条件关系", "表见代理", "财政政策"],
            correct: 0,
            explain: "这是条件关系判断的典型提问方式。"
          },
          {
            prompt: "因果关系题为什么不能只靠自然科学原因？",
            answers: ["刑法还要判断规范上的归责范围", "自然科学完全无用", "题目只考翻译"],
            correct: 0,
            explain: "刑法关心处罚边界，因此需要规范性筛选。"
          },
          {
            prompt: "结果犯中，结果与行为关系不明时，最可能影响哪一项？",
            answers: ["构成要件是否充足", "国会是否解散", "N1 文法分类"],
            correct: 0,
            explain: "结果犯需要把结果和行为连接起来，因果不明会影响构成要件判断。"
          }
        ]
      },
      {
        id: "intent-negligence",
        title: "故意与过失",
        label: "故意・過失",
        terms: [
          ["故意", "认识并容认构成要件事实。"],
          ["过失", "违反注意义务而造成结果。"],
          ["事实错误", "对构成要件事实认识错误。"],
          ["责任要素", "影响行为人是否可以被责难的因素。"]
        ],
        copy: {
          intro: "故意和过失处理行为人的主观状态。故意重在认识事实，过失重在注意义务。",
          standard: "判断故意时要问行为人认识了哪些构成要件事实；判断过失时要问注意义务、预见可能性和结果回避可能性。",
          advanced: "错误论会把事实错误、法律错误、具体事实错误、抽象事实错误放在一起考。核心是错误是否影响故意或责任。",
          exam: "答题先定位主观状态，再问认识对象、注意义务和错误类型。不要把所有错误都直接当成无罪。"
        },
        questions: [
          {
            prompt: "故意犯判断中，最关键的是行为人认识了什么？",
            answers: ["构成要件事实", "资产市场价格", "文章页码"],
            correct: 0,
            explain: "故意通常要求对构成要件事实有认识和容认。"
          },
          {
            prompt: "过失犯的核心通常不是恶意，而是什么？",
            answers: ["注意义务违反", "代理权授予", "宪法改正程序"],
            correct: 0,
            explain: "过失重在应注意、能注意而没有注意。"
          },
          {
            prompt: "事实错误可能最直接影响哪一项？",
            answers: ["故意成立", "货币供给", "阅读段落功能"],
            correct: 0,
            explain: "如果行为人没有认识构成要件事实，故意可能被否定。"
          },
          {
            prompt: "过失题中常见的两个能力判断是什么？",
            answers: ["预见可能性和结果回避可能性", "读音和声调", "税率和汇率"],
            correct: 0,
            explain: "过失判断常围绕能否预见结果、能否避免结果展开。"
          },
          {
            prompt: "法律错误和事实错误的区别是什么？",
            answers: ["一个错在规范认识，一个错在事实认识", "一个用于经济，一个用于英语", "没有区别"],
            correct: 0,
            explain: "事实错误涉及事实认知，法律错误涉及规范评价或违法性认识。"
          }
        ]
      },
      {
        id: "attempt-accomplice",
        title: "未遂与共犯",
        label: "未遂犯・共犯",
        terms: [
          ["未遂", "已经开始实行但犯罪没有既遂。"],
          ["实行着手", "行为进入构成要件实现的危险阶段。"],
          ["正犯", "作为犯罪实现中心的人。"],
          ["共犯", "教唆、帮助或共同实现犯罪的人。"]
        ],
        copy: {
          intro: "未遂和共犯都在问犯罪边界：还没完成要不要罚，多个人参与时如何分配责任。",
          standard: "未遂题重点在实行着手和危险性。共犯题重点在正犯性、共同性、教唆或帮助与结果之间的关系。",
          advanced: "高级题会考共同正犯、教唆犯、帮助犯、未遂的处罚根据和中止未遂。关键是不要把所有参与都同等处罚。",
          exam: "先判断行为是否进入实行阶段，再判断参与者在犯罪实现中的角色和贡献。"
        },
        questions: [
          {
            prompt: "未遂犯成立通常要求行为达到什么阶段？",
            answers: ["实行着手", "契约谈判", "国会审议"],
            correct: 0,
            explain: "未遂不是单纯想法，需要行为进入实行阶段。"
          },
          {
            prompt: "共同正犯判断中，最重要的是看什么？",
            answers: ["共同实现犯罪的意思和实质贡献", "是否同姓", "是否读同一本书"],
            correct: 0,
            explain: "共同正犯需要共同性和对犯罪实现的实质参与。"
          },
          {
            prompt: "帮助犯与正犯的区别主要在于什么？",
            answers: ["是否处于犯罪实现的中心", "是否使用英文", "是否涉及 GDP"],
            correct: 0,
            explain: "帮助犯通常是辅助他人犯罪，正犯是犯罪实现中心。"
          },
          {
            prompt: "中止未遂为什么会成为独立问题？",
            answers: ["行为人主动停止可能影响处罚评价", "它决定货币政策", "它只影响文法题"],
            correct: 0,
            explain: "主动中止体现不同的责任和政策评价。"
          },
          {
            prompt: "教唆犯的典型行为是什么？",
            answers: ["使他人产生犯罪决意", "直接统计国民收入", "解释代词指示对象"],
            correct: 0,
            explain: "教唆犯重在引起他人的犯罪决意。"
          }
        ]
      }
    );
  }

  addQuestions("academic", [
    {
      prompt: "When a paragraph gives evidence after a claim, what should you track?",
      answers: ["How the evidence supports or limits the claim", "Only the number of words", "The font family"],
      correct: 0,
      explain: "Academic reading is about the relation between claims, evidence, limits, and conclusions."
    },
    {
      prompt: "What is a counterargument?",
      answers: ["A view the writer responds to or challenges", "A decorative heading", "A type of punctuation"],
      correct: 0,
      explain: "A counterargument is a position that the writer answers, qualifies, or rejects."
    },
    {
      prompt: "If a writer says “however,” what should you expect?",
      answers: ["A contrast or shift in the argument", "A list of random examples", "A pronunciation guide"],
      correct: 0,
      explain: "Words like “however” often mark a turn in the reasoning."
    },
    {
      prompt: "What does an implication usually point to?",
      answers: ["A consequence or broader meaning of the conclusion", "A spelling rule only", "A court building"],
      correct: 0,
      explain: "Implications are what follows from an argument beyond the immediate claim."
    }
  ]);

  addQuestions("grammar", [
    {
      prompt: "What does modality help express?",
      answers: ["Certainty, obligation, permission, or possibility", "Only color", "Only page numbers"],
      correct: 0,
      explain: "Modal verbs control how strong, necessary, or possible a statement is."
    },
    {
      prompt: "Which phrase introduces a condition?",
      answers: ["provided that", "nevertheless", "in contrast"],
      correct: 0,
      explain: "“Provided that” sets a condition for the statement to hold."
    },
    {
      prompt: "Why are reference words like “this” and “that” important?",
      answers: ["They connect a sentence to earlier ideas", "They always mean the same noun", "They remove logic from the text"],
      correct: 0,
      explain: "Reference words carry argument structure across sentences."
    }
  ]);

  addQuestions("legal-english", [
    {
      prompt: "Which term usually means the legal source enacted by a legislature?",
      answers: ["statute", "intent", "evidence"],
      correct: 0,
      explain: "A statute is a written law enacted by a legislative body."
    },
    {
      prompt: "What does “liability” usually refer to?",
      answers: ["Legal responsibility", "A reading strategy", "A currency unit"],
      correct: 0,
      explain: "Liability means responsibility recognized by law."
    },
    {
      prompt: "Why is “negligence” more than ordinary carelessness?",
      answers: ["It is a structured legal standard about duty and breach", "It is only an emotion", "It means written statute"],
      correct: 0,
      explain: "Negligence is assessed through legal elements such as duty, breach, causation, and damage."
    },
    {
      prompt: "Which term is closest to a person's mental state or purpose?",
      answers: ["intent", "statute", "jurisdiction"],
      correct: 0,
      explain: "Intent concerns purpose or mental state."
    }
  ]);

  subjects.push({
    id: "economics",
    title: "经济",
    subtitle: "宏观经济学",
    topics: [
      {
        id: "macro-income",
        title: "国民收入",
        label: "Macroeconomics",
        terms: [
          ["GDP", "一定时期内一国或地区生产的最终产品和服务价值。"],
          ["消费", "家庭部门对产品和服务的支出。"],
          ["投资", "企业用于资本形成和存货变化的支出。"],
          ["总需求", "经济中对产品和服务的总体需求。"]
        ],
        copy: {
          intro: "宏观经济学先看整体经济如何被测量。GDP、消费、投资和政府支出，是理解经济波动的入口。",
          standard: "国民收入分析关注产出、收入、支出之间的关系。理解 GDP 不是背公式，而是看经济活动如何被统计和解释。",
          advanced: "高级学习要区分名义量和实际量、短期波动和长期增长，并注意统计指标无法完整表达生活质量。",
          exam: "考试模式先识别变量：产出、收入、支出、价格。再判断题目问的是统计定义、因果机制还是政策效果。"
        },
        questions: [
          {
            prompt: "GDP 通常衡量的是什么？",
            answers: ["一定时期内最终产品和服务的市场价值", "一个人的全部存款", "某本书的页数"],
            correct: 0,
            explain: "GDP 是宏观层面的总量指标，关注最终产品和服务的价值。"
          },
          {
            prompt: "为什么要区分名义 GDP 和实际 GDP？",
            answers: ["为了排除价格变化对产出判断的干扰", "为了判断代理权", "为了计算犯罪成立"],
            correct: 0,
            explain: "实际 GDP 用价格调整后，更适合观察真实产出变化。"
          }
        ]
      },
      {
        id: "macro-money",
        title: "货币与通胀",
        label: "Money and Inflation",
        terms: [
          ["货币供给", "经济中可用于支付和流通的货币数量。"],
          ["通货膨胀", "一般价格水平持续上升。"],
          ["利率", "资金使用价格，也是货币政策的重要传导变量。"],
          ["预期", "人们对未来价格、收入和政策的判断。"]
        ],
        copy: {
          intro: "货币和通胀主题回答一个问题：钱的数量、价格和人们的预期，如何影响整个经济。",
          standard: "学习时要把货币供给、利率、价格水平和预期连起来看。不要把通胀只理解为单个商品涨价。",
          advanced: "高级层面要看政策可信度、预期形成和短期真实变量之间的关系。通胀不是单一原因造成的。",
          exam: "遇到货币题，先确认题目问货币数量、利率、价格水平还是预期，再判断传导方向。"
        },
        questions: [
          {
            prompt: "通货膨胀通常指什么？",
            answers: ["一般价格水平持续上升", "某个商品偶然降价", "合同自动成立"],
            correct: 0,
            explain: "通胀是总体价格水平问题，不是单个商品的短期价格变化。"
          },
          {
            prompt: "利率在宏观经济中常被理解为什么？",
            answers: ["资金使用的价格", "刑罚的种类", "日语敬语形式"],
            correct: 0,
            explain: "利率会影响储蓄、投资、消费和货币政策传导。"
          }
        ]
      },
      {
        id: "macro-policy",
        title: "财政与货币政策",
        label: "Policy",
        terms: [
          ["财政政策", "政府通过支出、税收等影响总需求。"],
          ["货币政策", "中央银行通过利率和货币条件影响经济。"],
          ["乘数效应", "初始支出变化带来更大总产出变化的机制。"],
          ["政策时滞", "政策从决定到产生效果之间的时间延迟。"]
        ],
        copy: {
          intro: "政策主题关心政府和中央银行如何回应经济波动。关键不是背结论，而是看工具、目标和副作用。",
          standard: "财政政策通常通过政府支出和税收影响总需求，货币政策则常通过利率和金融条件影响消费与投资。",
          advanced: "高级学习要关注政策时滞、挤出效应、预期反应和不同经济状态下政策效果的差异。",
          exam: "做政策题时，先分清财政政策和货币政策，再判断它影响的是需求、供给、价格还是预期。"
        },
        questions: [
          {
            prompt: "增加政府支出通常属于哪类政策工具？",
            answers: ["财政政策", "货币政策", "刑法解释"],
            correct: 0,
            explain: "政府支出和税收属于财政政策的主要工具。"
          },
          {
            prompt: "中央银行调整政策利率通常属于什么？",
            answers: ["货币政策", "民法代理", "宪法统治机构"],
            correct: 0,
            explain: "利率和货币条件是货币政策的重要工具。"
          }
        ]
      }
    ]
  });

  const economics = subjects.find((subject) => subject.id === "economics");
  if (economics) {
    economics.topics.push(
      {
        id: "macro-consumption",
        title: "消费与储蓄",
        label: "Consumption and Saving",
        terms: [
          ["跨期选择", "在当前消费和未来消费之间分配资源。"],
          ["储蓄", "当前收入中没有用于消费的部分。"],
          ["预算约束", "可选择方案受到收入、价格和利率限制。"],
          ["平滑消费", "家庭倾向于把消费安排得相对稳定。"]
        ],
        copy: {
          intro: "消费储蓄问题把个人选择放到时间轴上：今天多花，未来就少一些；今天多存，未来就多一些。",
          standard: "中级宏观经济学常用跨期选择理解家计的消费和储蓄决策。利率、收入预期和预算约束都会影响选择。",
          advanced: "高级学习要把生命周期、永久收入、借贷约束和不确定性放在一起看，理解为什么消费不总是跟当前收入同步变化。",
          exam: "题目出现消费、储蓄、利率、未来收入时，先画出当前和未来两个时期的约束关系。"
        },
        questions: [
          {
            prompt: "跨期消费选择主要比较什么？",
            answers: ["现在消费和未来消费", "刑法总论和民法总则", "读音和字形"],
            correct: 0,
            explain: "跨期选择把资源分配放在不同时间点之间分析。"
          },
          {
            prompt: "利率上升可能影响储蓄决策，是因为它改变了什么？",
            answers: ["当前消费与未来消费的交换条件", "犯罪成立三要素", "日语文法功能"],
            correct: 0,
            explain: "利率改变了今天少消费一单位能换来多少未来消费。"
          },
          {
            prompt: "消费平滑指的是什么倾向？",
            answers: ["让消费随时间保持相对稳定", "让价格永远不变", "让所有法律相同"],
            correct: 0,
            explain: "消费平滑说明家庭不一定把短期收入波动全部转化为消费波动。"
          },
          {
            prompt: "借贷约束会怎样影响消费？",
            answers: ["限制家庭把未来收入提前用于现在消费", "自动提高刑罚", "改变文章主张"],
            correct: 0,
            explain: "不能自由借款时，当前消费会更受当前收入限制。"
          }
        ]
      },
      {
        id: "macro-investment",
        title: "投资与资产市场",
        label: "Investment and Assets",
        terms: [
          ["投资", "企业形成资本、扩大生产能力的支出。"],
          ["资本成本", "使用或购置资本需要承担的成本。"],
          ["资产市场", "资金、风险和跨期资源配置的场所。"],
          ["风险分配", "不同主体承担和转移不确定性的机制。"]
        ],
        copy: {
          intro: "投资不是买股票的日常说法，而是企业形成资本。资产市场则把储蓄、投资、风险和利率连接起来。",
          standard: "企业投资决策常受预期收益、资本成本、利率和不确定性影响。资产市场帮助连接家庭储蓄和企业投资。",
          advanced: "高级分析要看资产价格、风险溢价、融资约束和信息不对称如何改变投资行为。",
          exam: "看到投资题，先问企业为什么增加资本；看到资产市场题，先问资金和风险如何被配置。"
        },
        questions: [
          {
            prompt: "宏观经济学中的企业投资主要指什么？",
            answers: ["资本形成相关支出", "个人买一本书", "法院判决"],
            correct: 0,
            explain: "宏观投资关注机器、厂房、存货等资本形成。"
          },
          {
            prompt: "资产市场连接家庭储蓄和企业投资，是因为什么？",
            answers: ["它配置资金和风险", "它解释故意犯", "它只处理日语读音"],
            correct: 0,
            explain: "资产市场让资金从储蓄者流向需要资金的主体，并分配风险。"
          },
          {
            prompt: "利率上升对企业投资可能有什么影响？",
            answers: ["提高资本使用成本，抑制部分投资", "必然增加所有投资", "和投资完全无关"],
            correct: 0,
            explain: "较高利率会提高融资或机会成本。"
          },
          {
            prompt: "预期收益下降时，企业投资通常会怎样？",
            answers: ["可能减少", "必然变成刑事责任", "自动提高 GDP 统计口径"],
            correct: 0,
            explain: "投资取决于未来收益预期和成本比较。"
          }
        ]
      },
      {
        id: "macro-long-short",
        title: "长期与短期模型",
        label: "Long Run / Short Run",
        terms: [
          ["长期", "价格、预期和市场调整较充分的分析视角。"],
          ["短期", "价格或工资调整不完全，需求波动更重要的视角。"],
          ["IS-LM", "分析产品市场与货币市场短期均衡的模型。"],
          ["总需求总供给", "用整体需求和整体供给解释产出与价格。"]
        ],
        copy: {
          intro: "宏观经济学经常分长期和短期。长期看增长和结构，短期看波动、需求和政策。",
          standard: "长期模型通常强调市场调整和预期一致，短期模型关注价格黏性、需求不足和政策效果。",
          advanced: "高级学习要比较 IS-LM、AD-AS、实际商业周期和新凯恩斯模型各自的假设和解释力。",
          exam: "题目问增长、资本、技术，多半偏长期；问衰退、需求、利率政策，多半偏短期。"
        },
        questions: [
          {
            prompt: "长期分析更常关注什么？",
            answers: ["增长、技术和结构调整", "单个词汇读音", "无权代理"],
            correct: 0,
            explain: "长期宏观重点在潜在产出、增长和经济结构。"
          },
          {
            prompt: "短期模型为什么常强调总需求？",
            answers: ["价格或工资调整不完全时，需求会影响产出", "需求永远无关", "只为了背公式"],
            correct: 0,
            explain: "短期中价格黏性使需求变化能影响实际产出。"
          },
          {
            prompt: "IS-LM 模型通常用于分析什么？",
            answers: ["产品市场和货币市场的短期均衡", "宪法权利限制", "日语假名书写"],
            correct: 0,
            explain: "IS-LM 是传统短期宏观模型。"
          },
          {
            prompt: "AD-AS 模型把哪两类力量放在一起？",
            answers: ["总需求和总供给", "正犯和共犯", "主张和证据"],
            correct: 0,
            explain: "AD-AS 用总需求和总供给解释产出与价格水平。"
          }
        ]
      },
      {
        id: "macro-open",
        title: "开放经济",
        label: "Open Economy",
        terms: [
          ["汇率", "两种货币之间的交换价格。"],
          ["资本流动", "资金跨国移动。"],
          ["净出口", "出口减进口。"],
          ["蒙代尔-弗莱明模型", "开放经济短期宏观分析的经典模型。"]
        ],
        copy: {
          intro: "开放经济把国外部门放进宏观分析。汇率、资本流动和贸易会改变政策效果。",
          standard: "开放经济中，利率、汇率、资本流动和净出口相互连接。政策效果会因资本流动程度和汇率制度不同而变化。",
          advanced: "高级题要比较固定汇率与浮动汇率、资本自由流动与资本管制下财政和货币政策的差异。",
          exam: "看到开放经济题，先确认汇率制度，再看资本是否自由流动，最后判断政策传导路径。"
        },
        questions: [
          {
            prompt: "开放经济分析比封闭经济多考虑什么？",
            answers: ["国外部门、汇率和资本流动", "刑罚种类", "文法敬体"],
            correct: 0,
            explain: "开放经济需要加入国际贸易和国际资本流动。"
          },
          {
            prompt: "净出口等于什么？",
            answers: ["出口减进口", "消费加储蓄", "故意加过失"],
            correct: 0,
            explain: "净出口是出口与进口之间的差额。"
          },
          {
            prompt: "汇率变化会直接影响哪类宏观变量？",
            answers: ["出口、进口和国际资本流动", "犯罪三要素", "指示词指代"],
            correct: 0,
            explain: "汇率改变本国商品和外国商品的相对价格。"
          },
          {
            prompt: "判断开放经济政策效果时，为什么要看汇率制度？",
            answers: ["固定和浮动汇率下政策传导不同", "汇率制度决定所有刑法解释", "因为题目必须有图"],
            correct: 0,
            explain: "汇率制度会改变货币政策和财政政策的约束条件。"
          }
        ]
      }
    );
  }
}

extendStudyBank();

function adaptForChineseStudentsInJapan() {
  const subjectById = (id) => subjects.find((subject) => subject.id === id);
  const topicById = (id) => subjects.flatMap((subject) => subject.topics).find((topic) => topic.id === id);
  const addQuestions = (topicId, questions) => {
    const topic = topicById(topicId);
    if (topic) topic.questions.push(...questions);
  };

  const law = subjectById("law");
  if (law) law.subtitle = "日本法 / 中文注释";

  const jlpt = subjectById("jlpt");
  if (jlpt) {
    jlpt.title = "日语";
    jlpt.subtitle = "JLPT N1 / 留学生日语";
  }

  const economics = subjectById("economics");
  if (economics) economics.subtitle = "日本語原文 + 中文注释";

  addQuestions("legality", [
    {
      prompt: "「罪刑法定主義」に直接含まれないものはどれか。注：直接含まれない=不直接包含",
      answers: ["表見代理の保護", "遡及処罰の禁止", "類推解釈の禁止"],
      correct: 0,
      explain: "表見代理は民法の代理制度。罪刑法定主義では、法律主義、遡及処罰の禁止、類推解釈の禁止、明確性などが中心。"
    },
    {
      prompt: "「類推解釈の禁止」が問題になる場面として最も近いものはどれか。注：類推=相似类推",
      answers: ["条文の文言を超えて処罰範囲を広げる", "条文の意味を辞書で確認する", "被告人の氏名を確認する"],
      correct: 0,
      explain: "刑法では処罰範囲を文言外へ広げる類推解釈が禁止される。中国語で言うと，不能把条文没有写到的行为硬类推成犯罪。"
    },
    {
      prompt: "「明確性の原則」が要求するものはどれか。注：明確性=清楚、可预见",
      answers: ["処罰される行為を予測できる程度の明確さ", "裁判官が自由に犯罪を作れること", "法律を全部ひらがなで書くこと"],
      correct: 0,
      explain: "明確性の原則は、国民が何をすると処罰されるか予測できることを要求する。"
    }
  ]);

  addQuestions("causation", [
    {
      prompt: "「因果関係」の検討で、まず確認するものはどれか。注：因果関係=行为与结果的连接",
      answers: ["条件関係", "表現の自由", "消滅時効"],
      correct: 0,
      explain: "まず事実レベルで条件関係を確認し、その後に刑法上の帰属・帰責を検討する。"
    },
    {
      prompt: "第三者の行為が途中で介入した場合、主に問題になるのはどれか。注：介入=中途插入",
      answers: ["結果を最初の行為に帰責できるか", "契約書の字体", "中央銀行の利率"],
      correct: 0,
      explain: "第三者行為、被害者行為、自然力などが介入すると、結果を原行為に帰責できるかが問題になる。"
    },
    {
      prompt: "「結果犯」において因果関係が重要な理由はどれか。注：結果犯=需要一定结果发生的犯罪",
      answers: ["結果を構成要件要素として要求するから", "常に共犯が必要だから", "法律英語だけで判断するから"],
      correct: 0,
      explain: "結果犯では、行為だけでなく結果発生とその因果関係が構成要件の一部になる。"
    }
  ]);

  addQuestions("intent-negligence", [
    {
      prompt: "「故意」を判断する時、中心になるのはどれか。注：故意=认识并容认",
      answers: ["構成要件事実の認識", "GDP の増加率", "敬語の丁寧さ"],
      correct: 0,
      explain: "故意は構成要件事実を認識しているかが中心。日本法の語感では「認識・認容」が重要。"
    },
    {
      prompt: "「過失犯」で典型的に問題になるものはどれか。注：過失=违反注意义务",
      answers: ["注意義務違反", "国民主権", "語彙の類義語"],
      correct: 0,
      explain: "過失犯では、注意義務、予見可能性、結果回避可能性が重要になる。"
    },
    {
      prompt: "「事実の錯誤」は主に何に影響しうるか。注：錯誤=错误认识",
      answers: ["故意の成否", "国会の構成", "資産市場の機能"],
      correct: 0,
      explain: "構成要件事実を誤認している場合、故意が否定される可能性がある。"
    }
  ]);

  addQuestions("attempt-accomplice", [
    {
      prompt: "「実行の着手」が問題になるのはどの領域か。注：実行の着手=开始实行",
      answers: ["未遂犯", "取得時効", "金融政策"],
      correct: 0,
      explain: "未遂犯では、単なる準備を超えて実行に着手したかが重要。"
    },
    {
      prompt: "「共同正犯」の判断で重要なものはどれか。注：共同正犯=共同实行犯罪的人",
      answers: ["共同実行の意思と実質的な寄与", "同じ教科書を持つこと", "同じ国籍であること"],
      correct: 0,
      explain: "共同正犯は、共同性と犯罪実現への実質的寄与を見る。"
    },
    {
      prompt: "「教唆犯」として最も近い行為はどれか。注：教唆=唆使、引起决意",
      answers: ["他人に犯罪を決意させる", "犯罪を止める", "GDP を計算する"],
      correct: 0,
      explain: "教唆犯は、他人に犯罪の決意を生じさせることが中心。"
    }
  ]);

  addQuestions("n1-vocab", [
    {
      prompt: "「怠る」と最も自然に結びつく表現はどれか。注：怠る=疏忽、懈怠",
      answers: ["点検を怠る", "色を怠る", "駅を怠る"],
      correct: 0,
      explain: "「怠る」は義務・作業・注意などをしない時に使う。中国語的直译“怠慢”不完全等同，要看搭配。"
    },
    {
      prompt: "「必須条件」の意味として最も近いものはどれか。注：必須=必须、不可缺少",
      answers: ["欠かせない条件", "あってもなくてもよい条件", "間違った条件"],
      correct: 0,
      explain: "日本留学场景中常见「応募の必須条件」「履修必須科目」。"
    },
    {
      prompt: "「下落」と相性がよい語はどれか。注：相性=搭配关系",
      answers: ["株価", "性格", "入港"],
      correct: 0,
      explain: "「株価が下落する」「地価が下落する」が自然。性格变化通常不用下落。"
    }
  ]);

  addQuestions("n1-grammar", [
    {
      prompt: "「ここ一か月というもの、忙しい」の「というもの」は何を表すか。注：というもの=某段时间以来",
      answers: ["ある時点から続く状態", "一回だけの動作", "命令"],
      correct: 0,
      explain: "「というもの」は、ある期間ずっと同じ状態が続くことを強調する。"
    },
    {
      prompt: "「たとえ反対されても、続ける」に近い文法機能はどれか。注：たとえ...ても=即使...也",
      answers: ["譲歩", "原因", "定義"],
      correct: 0,
      explain: "譲歩は“承认前项，但后项仍然成立”。这是 N1 文法判断的核心功能之一。"
    },
    {
      prompt: "文法問題でまず確認すべきものはどれか。注：接続=前后接续形式",
      answers: ["意味機能と接続", "選択肢の長さ", "漢字の画数"],
      correct: 0,
      explain: "N1 文法不能只看中文意思，接続不合的选项通常先排除。"
    }
  ]);

  addQuestions("n1-reading", [
    {
      prompt: "「つまり」の後ろに来る内容として最も多いものはどれか。注：つまり=也就是说",
      answers: ["要約・言い換え", "無関係な例", "題名だけ"],
      correct: 0,
      explain: "「つまり」は总结或换言信号，阅读中常提示作者真正要你抓住的内容。"
    },
    {
      prompt: "「むしろ」が出た時、読む側は何に注意するべきか。注：むしろ=倒不如说、反而",
      answers: ["筆者が重点を反転させる可能性", "文章が終わること", "数字だけを見ること"],
      correct: 0,
      explain: "「むしろ」常把判断从通常理解转到作者更强调的一侧。"
    },
    {
      prompt: "選択肢が本文の一語をそのまま使っていても危ない理由はどれか。",
      answers: ["論理関係を入れ替えている可能性がある", "同じ語なら必ず正しい", "本文には論理がない"],
      correct: 0,
      explain: "N1 阅读不能靠关键词匹配，要核对主张、理由、转折、限定。"
    }
  ]);

  addQuestions("macro-income", [
    {
      prompt: "「国民経済計算」が扱うものとして最も近いものはどれか。注：国民経済計算=国民经济核算",
      answers: ["一国全体の生産・所得・支出", "個人の刑事責任", "日語の敬語形式"],
      correct: 0,
      explain: "国民経済計算は GDP などを通じて全体経済を測る枠組み。"
    },
    {
      prompt: "「名目GDP」と「実質GDP」を区別する理由はどれか。注：名目=未剔除价格变化；実質=剔除价格变化",
      answers: ["価格変化と産出変化を分けるため", "刑法解釈を禁止するため", "読解問題を短くするため"],
      correct: 0,
      explain: "実質 GDP は物価変動を調整し、産出量の変化を見やすくする。"
    },
    {
      prompt: "GDP に含まれるのはどれか。",
      answers: ["最終財・サービスの生産価値", "中古品の単なる転売全部", "未遂犯の成立要件"],
      correct: 0,
      explain: "GDP は一定期間の最終財・サービスの生産を測る。"
    }
  ]);

  addQuestions("macro-consumption", [
    {
      prompt: "「消費・貯蓄決定」で重要な視点はどれか。注：貯蓄=储蓄",
      answers: ["現在と将来の資源配分", "類推解釈の禁止", "助詞の発音"],
      correct: 0,
      explain: "中级宏观常用两期间模型看现在消费、未来消费和储蓄之间的关系。"
    },
    {
      prompt: "「予算制約」は何を表すか。注：予算制約=预算约束",
      answers: ["選べる消費の範囲", "犯罪の個数", "文章の段落数"],
      correct: 0,
      explain: "予算制約は所得、価格、利率などによって选择范围受限。"
    },
    {
      prompt: "「消費の平準化」とは何か。注：平準化=平滑化、稳定化",
      answers: ["消費を時間的に安定させようとすること", "物価を常に上げること", "刑罰を重くすること"],
      correct: 0,
      explain: "收入短期波动时，家庭可能通过储蓄或借贷让消费更平稳。"
    }
  ]);

  addQuestions("macro-investment", [
    {
      prompt: "「投資決定」で企業が主に比較するものはどれか。",
      answers: ["期待収益と資本コスト", "故意と過失", "漢字と仮名"],
      correct: 0,
      explain: "企业投资取决于未来收益预期、资本成本、利率和不确定性。"
    },
    {
      prompt: "「資産市場」の役割として最も近いものはどれか。注：資産市場=资产市场",
      answers: ["貯蓄と投資、リスク配分を結びつける", "犯罪を定義する", "文法接続を決める"],
      correct: 0,
      explain: "資産市場は資金の流れとリスクの配分を担う。"
    },
    {
      prompt: "利子率が上がると、投資にどのような影響がありうるか。注：利子率=利率",
      answers: ["資本コストが上がり投資が抑えられる可能性", "必ず投資が増える", "投資とは無関係"],
      correct: 0,
      explain: "利率上升通常提高融资成本或机会成本。"
    }
  ]);

  addQuestions("macro-long-short", [
    {
      prompt: "短期マクロモデルで「価格の粘着性」が重要になる理由はどれか。注：粘着性=价格不易快速调整",
      answers: ["需要変化が産出に影響しやすくなるから", "刑罰がなくなるから", "単語の読み方が固定されるから"],
      correct: 0,
      explain: "价格或工资不完全调整时，总需求变化会影响实际产出。"
    },
    {
      prompt: "「長期」の分析で中心になりやすいものはどれか。",
      answers: ["成長・技術・生産能力", "一時的な誤字", "代理人の氏名"],
      correct: 0,
      explain: "长期看潜在产出、增长、技术和结构。"
    },
    {
      prompt: "IS-LM モデルが結びつける市場はどれか。",
      answers: ["財市場と貨幣市場", "刑法と民法だけ", "語彙と漢字だけ"],
      correct: 0,
      explain: "IS-LM 是短期宏观中连接产品市场和货币市场的模型。"
    }
  ]);

  addQuestions("macro-open", [
    {
      prompt: "「開放経済」で追加して考えるものはどれか。注：開放経済=开放经济",
      answers: ["為替レートと国際資本移動", "故意の認識", "読解の指示語"],
      correct: 0,
      explain: "开放经济要考虑贸易、汇率、资本流动和国外部门。"
    },
    {
      prompt: "「純輸出」とは何か。注：純輸出=净出口",
      answers: ["輸出から輸入を引いたもの", "消費から貯蓄を引いたもの", "犯罪から刑罰を引いたもの"],
      correct: 0,
      explain: "純輸出 = 輸出 - 輸入。"
    },
    {
      prompt: "固定相場制と変動相場制を区別する理由はどれか。注：相場=汇率",
      answers: ["政策効果の伝わり方が変わるから", "文法問題の接続が変わるから", "刑法の条文が消えるから"],
      correct: 0,
      explain: "汇率制度会影响财政政策、货币政策和资本流动的传导路径。"
    }
  ]);

  addQuestions("criminal", [
    {
      prompt: "「刑法総論」と「刑法各論」の区別として最も適切なものはどれか。注：総論=总论；各論=分论",
      answers: ["総論は共通原理、各論は個別犯罪類型を扱う", "総論は民法、各論は経済学を扱う", "両者に区別はない"],
      correct: 0,
      explain: "刑法総論は犯罪成立、故意、過失、未遂、共犯などの共通構造を扱う。"
    },
    {
      prompt: "「刑罰の正当化根拠」を問う時、中心になる対立はどれか。",
      answers: ["応報刑論と目的刑論", "名目GDPと実質GDP", "表見代理と無権代理"],
      correct: 0,
      explain: "刑罚为什么可以被正当化，常围绕応報（报应）和予防（预防）来讨论。"
    },
    {
      prompt: "「刑法の謙抑性」とは何を意味するか。注：謙抑性=克制性、最后手段性",
      answers: ["刑法はむやみに使うべきではない", "刑法はすべての問題を処罰で解決する", "刑法は契約だけを扱う"],
      correct: 0,
      explain: "刑法は強い制裁なので、他の手段で足りる場合には慎重であるべきという発想。"
    },
    {
      prompt: "「法益保護」が刑法の任務とされる時、法益とは何か。注：法益=法律保护的利益",
      answers: ["刑法が保護しようとする利益", "単なる感情", "試験の点数"],
      correct: 0,
      explain: "生命、身体、財産、公共安全などが典型的な法益。"
    }
  ]);

  addQuestions("civil", [
    {
      prompt: "「意思表示」の説明として最も近いものはどれか。注：意思表示=法律行为中的意思表达",
      answers: ["法律効果を発生させる意思の外部表示", "刑罰を科す国家行為", "物価の上昇"],
      correct: 0,
      explain: "契約成立や代理で重要になる基本概念。"
    },
    {
      prompt: "「取消し」と「無効」の違いとして近いものはどれか。注：取消し=撤销；無効=无效",
      answers: ["取消しは取り消されるまで効力が問題になる", "両者は完全に同じ", "無効は必ず刑罰になる"],
      correct: 0,
      explain: "細部は制度ごとに異なるが、取消しと無効は法律効果の扱いが違う。"
    },
    {
      prompt: "「表見代理」が成立する時、相手方について通常必要なものはどれか。",
      answers: ["代理権があると信頼したことについて保護に値する事情", "犯罪の故意", "GDP の減少"],
      correct: 0,
      explain: "表見代理は外観と相手方の信頼保護がポイント。"
    }
  ]);

  addQuestions("constitution", [
    {
      prompt: "「違憲審査」で問われるものはどれか。注：違憲審査=违宪审查",
      answers: ["国家行為が憲法に反しないか", "契約の代金が高いか", "日語の読み方が正しいか"],
      correct: 0,
      explain: "憲法では、法律や国家行為が憲法上許されるかが問題になる。"
    },
    {
      prompt: "「公共の福祉」という語が出る時、主に何と何の調整が問題になるか。注：公共の福祉=公共利益/权利协调",
      answers: ["個人の権利と他者・社会の利益", "消費と貯蓄だけ", "故意と過失だけ"],
      correct: 0,
      explain: "日本国憲法の人権論では、権利制約の根拠や限界として議論される。"
    },
    {
      prompt: "「表現の自由」の制約を考える時、最初に確認したいものはどれか。",
      answers: ["どの表現がどのように制限されているか", "株価が下落したか", "代理人が誰か"],
      correct: 0,
      explain: "自由権の問題は、権利内容、制約、目的、手段、審査強度の順に考えると整理しやすい。"
    }
  ]);

  addQuestions("n1-vocab", [
    {
      prompt: "留学生生活で「履修」と最も関係が深いものはどれか。注：履修=选课/修课",
      answers: ["授業科目", "刑罰の種類", "為替介入"],
      correct: 0,
      explain: "大学では「履修登録」「履修要件」「単位を履修する」がよく出る。"
    },
    {
      prompt: "「提出期限に間に合う」の「期限」に近い意味はどれか。注：期限=截止时间/期限",
      answers: ["決められた締切", "理由", "代理人"],
      correct: 0,
      explain: "レポート、在留手続、奨学金申請などで非常に重要な語。"
    },
    {
      prompt: "「在留資格」の意味として最も近いものはどれか。",
      answers: ["日本に滞在するための資格", "授業の成績", "刑法の条文番号"],
      correct: 0,
      explain: "留学生にとって在留資格・更新・資格外活動は実務上重要。"
    },
    {
      prompt: "「免除」と「猶予」の違いを考える時、近い説明はどれか。注：免除=免除；猶予=暂缓",
      answers: ["免除は負担をなくす、猶予は時期を先に延ばす", "どちらも必ず処罰する", "どちらも株価の用語"],
      correct: 0,
      explain: "授業料、手続、法律効果など複数分野で出る語。"
    }
  ]);

  addQuestions("n1-grammar", [
    {
      prompt: "「レポートを出さないことには、単位は取れない」の機能はどれか。注：ないことには=如果不...就无法...",
      answers: ["必要条件", "単純な過去", "敬語"],
      correct: 0,
      explain: "「AないことにはBない」は A がなければ B が成立しないという条件。"
    },
    {
      prompt: "「勉強したからといって、必ず合格するとは限らない」の意味はどれか。注：からといって=虽说...但不一定...",
      answers: ["前項から後項が必然とは言えない", "前項が必ず原因になる", "後項を命令する"],
      correct: 0,
      explain: "N1 常见功能：否定过度推论。"
    },
    {
      prompt: "「法律用語は覚えるに越したことはない」の意味はどれか。注：に越したことはない=最好不过",
      answers: ["できるならそうした方がよい", "絶対にしてはいけない", "すでに終わった"],
      correct: 0,
      explain: "表示“最好这样”，但语气比命令柔和。"
    },
    {
      prompt: "「出席率が低いとあって、先生に注意された」の「あって」は何を表すか。注：とあって=由于特殊情况",
      answers: ["理由・事情", "逆接", "単純な並列"],
      correct: 0,
      explain: "「とあって」常说明造成后项的特殊原因或背景。"
    }
  ]);

  addQuestions("n1-reading", [
    {
      prompt: "大学のお知らせ文を読む時、最初に確認すべき情報はどれか。",
      answers: ["対象者・期限・必要書類", "文字の美しさ", "出版社名だけ"],
      correct: 0,
      explain: "留学生実務では、誰が対象か、いつまでか、何を出すかが最重要。"
    },
    {
      prompt: "奨学金案内で「ただし」が出たら何に注意するべきか。注：ただし=但是/但书",
      answers: ["条件や例外", "文章が終わったこと", "漢字の数"],
      correct: 0,
      explain: "ただし以下に重要な限制、例外、追加条件が出ることが多い。"
    },
    {
      prompt: "在留手続の説明で「原則として」が出た場合、読む側は何を意識するべきか。注：原則として=原则上",
      answers: ["例外がありうる", "絶対に例外がない", "意味がない飾り"],
      correct: 0,
      explain: "「原則として」は実務文書でよく出る。例外や別条件が後に続く可能性がある。"
    },
    {
      prompt: "「なお」から始まる文でよく示されるものはどれか。",
      answers: ["補足情報", "必ず反対意見", "本文と無関係な冗談"],
      correct: 0,
      explain: "なお、ただし、また、したがって等の接続語で機能を読むと通知文が読みやすい。"
    }
  ]);

  addQuestions("macro-money", [
    {
      prompt: "「インフレーション」の説明として最も近いものはどれか。注：インフレーション=通货膨胀",
      answers: ["一般物価水準の持続的上昇", "一つの商品だけの値下げ", "犯罪成立の三要素"],
      correct: 0,
      explain: "物価全体の持続的上昇がポイント。"
    },
    {
      prompt: "「中央銀行」の役割として近いものはどれか。",
      answers: ["金融政策を通じて通貨・金融環境に影響を与える", "大学の履修登録を行う", "刑罰を決める"],
      correct: 0,
      explain: "日本では日本銀行が中央銀行。利率、貨幣、金融市場と関係する。"
    },
    {
      prompt: "「期待インフレ率」が重要な理由はどれか。注：期待=预期",
      answers: ["人々の賃金・価格・消費行動に影響しうるから", "過失犯を直接成立させるから", "助詞の接続を決めるから"],
      correct: 0,
      explain: "預期会影响经济主体如何定价、谈工资、消费和投资。"
    }
  ]);

  addQuestions("macro-policy", [
    {
      prompt: "「財政政策」の例として最も近いものはどれか。",
      answers: ["政府支出の増減", "中央銀行の政策金利操作", "故意の認識"],
      correct: 0,
      explain: "财政政策主要通过政府支出、税收、财政赤字等影响经济。"
    },
    {
      prompt: "「金融政策」の例として最も近いものはどれか。",
      answers: ["政策金利の調整", "国会議員の選挙", "契約の取消し"],
      correct: 0,
      explain: "金融政策通常由中央银行通过利率、货币条件等实施。"
    },
    {
      prompt: "「政策ラグ」とは何か。注：ラグ=时间滞后",
      answers: ["政策決定から効果が出るまでの遅れ", "文章の要約", "犯罪の故意"],
      correct: 0,
      explain: "政策需要识别问题、决定、执行、传导，因此效果不一定马上出现。"
    }
  ]);
}

adaptForChineseStudentsInJapan();

function focusQuestionBankForExams() {
  const banned = ["履修", "在留", "奨学金", "留学生生活", "大学のお知らせ", "提出期限", "在留手続", "授業料"];
  const topicById = (id) => subjects.flatMap((subject) => subject.topics).find((topic) => topic.id === id);
  const addQuestions = (topicId, questions) => {
    const topic = topicById(topicId);
    if (topic) topic.questions.push(...questions);
  };

  subjects.forEach((subject) => {
    subject.topics.forEach((topic) => {
      topic.questions = topic.questions.filter((item) => {
        const text = `${item.prompt} ${item.answers.join(" ")} ${item.explain}`;
        return !banned.some((word) => text.includes(word));
      });
    });
  });

  const jlpt = subjects.find((subject) => subject.id === "jlpt");
  if (jlpt) jlpt.subtitle = "JLPT N1 / 考試日语";

  addQuestions("n1-vocab", [
    {
      prompt: "N1語彙問題で「妥当」と最も近い意味はどれか。注：妥当=合适、合理",
      answers: ["適切である", "非常に速い", "完全に偶然である"],
      correct: 0,
      explain: "試験では「妥当な判断」「妥当性」など、論理評価の語として出やすい。"
    },
    {
      prompt: "「著しい」と最も近い意味はどれか。注：著しい=显著的",
      answers: ["はっきり目立つ", "少しだけある", "まったく関係ない"],
      correct: 0,
      explain: "「著しい変化」「著しい増加」など、程度が大きいことを表す。"
    },
    {
      prompt: "「是正」と最も近い意味はどれか。注：是正=纠正",
      answers: ["悪い状態を正す", "問題を隠す", "何もしない"],
      correct: 0,
      explain: "評論文、政策文、法律文でよく出る語。"
    }
  ]);

  addQuestions("n1-grammar", [
    {
      prompt: "「Aを踏まえてBする」の機能として近いものはどれか。注：踏まえて=基于",
      answers: ["Aを根拠・前提にする", "Aを完全に否定する", "Aと無関係にする"],
      correct: 0,
      explain: "論説文・試験文脈で多い表現。根拠と結論の関係を読む。"
    },
    {
      prompt: "「Aに伴ってB」の意味として近いものはどれか。注：伴って=随着",
      answers: ["Aの変化と一緒にBも変化する", "BがAを否定する", "Aだけが例外になる"],
      correct: 0,
      explain: "変化・増減・制度変更などを扱う文章でよく出る。"
    },
    {
      prompt: "「Aをめぐって」の意味として近いものはどれか。注：めぐって=围绕",
      answers: ["Aを中心として問題や議論が起こる", "Aを完全に避ける", "Aを数える"],
      correct: 0,
      explain: "「憲法改正をめぐって」「政策をめぐって」のように議論対象を示す。"
    }
  ]);

  addQuestions("n1-reading", [
    {
      prompt: "論説文で「一方で」が出た時、読む側が注目すべきものはどれか。注：一方で=另一方面",
      answers: ["対比される観点", "単なる例の数", "文章の長さ"],
      correct: 0,
      explain: "N1読解では対比軸を取ることが重要。"
    },
    {
      prompt: "本文の結論を探す時、特に手がかりになりやすい表現はどれか。",
      answers: ["したがって", "たとえば", "ところで"],
      correct: 0,
      explain: "「したがって」は理由から結論へ進む信号。"
    },
    {
      prompt: "選択肢が本文より強く言い切っている場合、最も疑うべきものはどれか。",
      answers: ["過度な一般化", "漢字の読み", "段落番号"],
      correct: 0,
      explain: "「必ず」「すべて」などの強すぎる表現は読解の典型的な罠。"
    }
  ]);
}

focusQuestionBankForExams();

window.studyData = { difficulties, modes, subjects };
