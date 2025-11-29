// Global Language System for Escape From Duckov Website
class LanguageSystem {
  constructor() {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.translations = {
      'en': {
        pageTitle: 'Escape From Duckov Survival Hub',
        nav_home: 'Home',
        nav_guides: 'Guides',
        nav_wiki: 'Wiki',
        nav_mods: 'Mods',
        nav_news: 'News',
        nav_about: 'About',
        nav_contact: 'Contact',
        contactTitle: 'Contact Us',
        contactDescription: 'Reach out for tactical feedback, feature requests, or questions. Our team typically responds within 24-48 hours.',
        contactForm: {
          nameText: 'text" placeholder="Your Name" required>',
          nameEmail: 'email" placeholder="Your Email" required>',
          messageText: 'textarea" placeholder="Your Message" rows="4" required>',
          subjectText: 'textarea" placeholder="Subject (Optional)" rows="1">',
        },
        home: 'Home',
        guides: 'Guides',
        wiki: 'Wiki',
        mods: 'Mods',
        news: 'News',
        about: 'About',
        contact: 'Contact',
          searchPlaceholder: 'Search for MODs by name, author, or tags...',
        categories: ['All', 'Interface', 'Storage', 'Economy', 'Utility', 'Combat', 'Maps', 'Audio'],
        sortBy: 'Sort by:',
        sortOptions: ['Recently Updated', 'Most Downloaded', 'Highest Rated', 'Name (A-Z)'],
        // Home page specific
        whatIsEscape: 'What is Escape From Duckov',
        duckovAtGlance: 'Duckov at a Glance',
        whyItHooks: 'Why It Hooks Players',
        gameFeatures: 'Game Features',
        howToPlay: 'How to Play',
        loadoutFormula: 'Loadout Formula',
        internalPages: 'Hub Modules',
        faq: 'FAQ',
        sixStepLoop: 'Six-Step Survival Loop',
        fourThreeTwoRule: '4-3-2 Packing Rule',
        // Page content translations
        introParagraph1: 'Escape From Duckov drops you into a broken city of paranoid ducks, guerrilla drones, and mutated fauna. You begin as an Average Duck with a salvaged weapon and a debt to settle. Survival hinges on scouting weather windows, balancing hydration, and hauling contraband to extraction before the timer expires.',
        introParagraph2: 'Each raid is a self-contained story: infiltrate, collect, escape, reinvest. Failures hurt, but every attempt feeds the hideout with blueprints and intel. Our portal keeps the loop approachable with annotated maps, risk tiers, and staging checklists.',
        whyItHooksParagraph1: 'Escape From Duckov blends extraction tension with base-building comfort. Combat feels deliberate thanks to 50+ firearms, improvised melee options, and attachment trees that push every playstyle. Deep skill paths let you spec as silent courier, close-quarters brawler, or long-range tactician.',
        whyItHooksParagraph2: 'True stakes arrive from the extraction economy: the deeper you go, the richer the loot, yet the tougher the enemy ducks. This balance creates a constant risk-versus-reward puzzle, which we document through season-specific guides.',
        vastMaps: 'Five sprawling zones—Sunken Reeds, Neon Garrison, Polar Gravel, Ember Coop, Skygrain Port—cycle weather, fauna, and spawn tables daily. Our map cards track extraction doors, sniper nests, and boss wander routes.',
        dynamicCombat: 'Over fifty weapons plus modular attachments let you build recoil-free ARs, silenced pea shooters, or crowd-control shotguns. Enemy ducks switch tactics based on noise, sightlines, and time of day.',
        hideoutGrowth: 'Upgrade med bays, hydroponics, radar towers, and workbenches to transform scrap into rare gear. We highlight construction priority lists and blueprint drop odds.',
        skillTrees: 'Invest in mobility, stamina, ballistics, or stealth. Our wiki explains how each perk affects regen, recoil, and weight caps.',
        contractsEvents: 'Daily smuggling tasks, weekly hunts, and seasonal events such as Halloween raids keep the sandbox alive. We archive the best reward routes.',
        modSupport: 'Steam Workshop integration allows first-person toggles, boss trackers, UI overlays, and LAN co-op tweaks. Our mod hub verifies compatibility tags.',
        // News page specific
        newsLibrary: 'News Library',
        newsTitle: 'News',
        newsDescription: 'Daily smuggling tasks, weekly hunts, and seasonal events such as Halloween raids keep the sandbox alive. We archive the best reward routes.',
        newsFilters: ['All', 'Sunken Reeds', 'Neon Garrison', 'Polar Gravel', 'Ember Coop', 'Skygrain Port', 'Difficulty', 'Contracts'],
        // Guides page specific
        guidesLibrary: 'Guides Library',
        guidesTitle: 'Escape From Duckov Field Manuals',
        guidesDescription: 'Plan extraction routes, prepare loadouts, and master every Duckov map with data-backed walkthroughs.',
        mapFilters: ['All', 'Sunken Reeds', 'Neon Garrison', 'Polar Gravel', 'Ember Coop', 'Skygrain Port', 'Difficulty', 'Contracts']
      },
      'zh-CN': {
        pageTitle: '逃离鸭科夫生存中心 | 指南、维基、MOD、资讯',
        nav_home: '首页',
        nav_guides: '指南',
        nav_wiki: '维基',
        nav_mods: 'MOD',
        nav_news: '资讯',
        nav_about: '关于',
        nav_contact: '联系',
        home: '首页',
        guides: '指南',
        wiki: '维基',
        mods: 'MOD',
        news: '资讯',
        about: '关于',
        contact: '联系',
        searchPlaceholder: '按名称、作者或标签搜索MOD...',
        categories: ['全部', '界面', '存储', '经济', '实用', '战斗', '地图', '音频'],
        sortBy: '排序方式：',
        sortOptions: ['最近更新', '最多下载', '评分最高', '名称 (A-Z)'],
        // Home page specific
        whatIsEscape: '什么是逃离鸭科夫',
        duckovAtGlance: '鸭科夫概览',
        whyItHooks: '为何吸引玩家',
        gameFeatures: '游戏特色',
        howToPlay: '如何游玩',
        loadoutFormula: '装备配置公式',
        internalPages: '中心模块',
        faq: '常见问题',
        sixStepLoop: '六步生存循环',
        fourThreeTwoRule: '4-3-2 装备规则',
        // Guides page specific
        guidesLibrary: '指南库',
        guidesTitle: '逃离鸭科夫野外手册',
        guidesDescription: '规划突入路线，准备装备配置，并通过数据支持的攻略掌握每张鸭科夫地图。',
        mapFilters: ['全部', '沉没芦苇', '霓虹驻军', '极地砂砾', '余烬鸡舍', '天空谷港', '难度', '合同']
      },
      'zh-TW': {
        pageTitle: '逃離鴨科夫生存中心 | 指南、維基、MOD、資訊',
        nav_home: '首頁',
        nav_guides: '指南',
        nav_wiki: '維基',
        nav_mods: 'MOD',
        nav_news: '資訊',
        nav_about: '關於',
        nav_contact: '聯繫',
        home: '首頁',
        guides: '指南',
        wiki: '維基',
        mods: 'MOD',
        news: '資訊',
        about: '關於',
        contact: '聯繫',
        searchPlaceholder: '按名稱、作者或標籤搜尋MOD...',
        categories: ['全部', '界面', '存儲', '經濟', '實用', '戰鬥', '地圖', '音訊'],
        sortBy: '排序方式：',
        sortOptions: ['最近更新', '最多下載', '評分最高', '名稱 (A-Z)'],
        // Home page specific
        whatIsEscape: '什麼是逃離鴨科夫',
        duckovAtGlance: '鴨科夫概覽',
        whyItHooks: '為何吸引玩家',
        gameFeatures: '遊戲特色',
        howToPlay: '如何遊玩',
        loadoutFormula: '裝備配置公式',
        internalPages: '中心模組',
        faq: '常見問題',
        sixStepLoop: '六步生存循環',
        fourThreeTwoRule: '4-3-2 裝備規則',
        // Guides page specific
        guidesLibrary: '指南庫',
        guidesTitle: '逃離鴨科夫野外手冊',
        guidesDescription: '策劃突入路線，準備裝備配置，並透過數據支援的攻略掌握每張鴨科夫地圖。',
        mapFilters: ['全部', '沉沒蘆葦', '霓虹駐軍', '極地砂礫', '余燼雞舍', '天空谷港', '難度', '合約']
      },
      'ja': {
        pageTitle: 'エスケープ・フロム・ダックオブ生存ハブ | ガイド、Wiki、MOD、ニュース',
        nav_home: 'ホーム',
        nav_guides: 'ガイド',
        nav_wiki: 'ウィキ',
        nav_mods: 'MOD',
        nav_news: 'ニュース',
        nav_about: 'について',
        nav_contact: 'お問い合わせ',
        home: 'ホーム',
        guides: 'ガイド',
        wiki: 'ウィキ',
        mods: 'MOD',
        news: 'ニュース',
        about: 'について',
        contact: 'お問い合わせ',
        searchPlaceholder: 'MODを名前、作者、タグで検索...',
        categories: ['すべて', 'インターフェース', 'ストレージ', 'エコノミー', 'ユーティリティ', 'コンバット', 'マップ', 'オーディオ'],
        sortBy: '並び替え：',
        sortOptions: ['最近更新', '最多ダウンロード', '評価が高い', '名前順 (A-Z)'],
        // Home page specific
        whatIsEscape: 'エスケープ・フロム・ダックオブとは',
        duckovAtGlance: 'ダックオブ概要',
        whyItHooks: 'プレイヤーを魅了する理由',
        gameFeatures: 'ゲーム機能',
        howToPlay: 'プレイ方法',
        loadoutFormula: '装備設定公式',
        internalPages: 'ハブモジュール',
        faq: 'よくある質問',
        sixStepLoop: '六段階サバイバルループ',
        fourThreeTwoRule: '4-3-2 梱包ルール',
        // Guides page specific
        guidesLibrary: 'ガイドライブラリ',
        guidesTitle: 'エスケープ・フロム・ダックオブ野外マニュアル',
        guidesDescription: '抽出ルートを計画し、ロードアウトを準備し、データバックのガイドで各ダックオブマップをマスターします。',
        mapFilters: ['すべて', '沈没アシ', 'ネオンガリソン', '極地砂利', 'エンバーコープ', 'スカイグレイン港', '難易度', '契約']
      },
      'ko': {
        pageTitle: '이스케이프 프롬 덕커브 생존 허브 | 가이드, 위키, MOD, 뉴스',
        nav_home: '홈',
        nav_guides: '가이드',
        nav_wiki: '위키',
        nav_mods: 'MOD',
        nav_news: '뉴스',
        nav_about: '소개',
        nav_contact: '문의',
        home: '홈',
        guides: '가이드',
        wiki: '위키',
        mods: 'MOD',
        news: '뉴스',
        about: '소개',
        contact: '문의',
        searchPlaceholder: 'MOD을 이름, 작성자, 태그로 검색...',
        categories: ['전체', '인터페이스', '저장', '경제', '유틸티', '전투', '맵', '오디오'],
        sortBy: '정렬 방식:',
        sortOptions: ['최근 업데이트', '다운로드 수', '평점 높음', '이름순 (A-Z)'],
        // Home page specific
        whatIsEscape: '이스케이프 프롬 덕커브란?',
        duckovAtGlance: '덕커브 개요',
        whyItHooks: '플레이어를 매료하는 요소',
        gameFeatures: '게임 기능',
        howToPlay: '플레이 방법',
        loadoutFormula: '장비 설정 공식',
        internalPages: '허브 모듈',
        faq: '자주 묻는 질문',
        sixStepLoop: '6단계 생존 루프',
        fourThreeTwoRule: '4-3-2 장비 규칙',
        // Guides page specific
        guidesLibrary: '가이드 라이브러리',
        guidesTitle: '이스케이프 프롬 덕커브 야외 매뉴얼',
        guidesDescription: '추출 루트를 계획하고, 로드아웃을 준비하며, 데이터 기반 가이드로 모든 덕커브 맵을 마스터하세요.',
        mapFilters: ['전체', '선쟁갈숲', '네온 가리슨', '극지사砾', '엠버 닭장', '스카이그레인 항구', '난이도', '계약']
      },
      'de': {
        pageTitle: 'Escape From Duckov Überlebens-Hub | Anleitungen, Wiki, MODs, Nachrichten',
        nav_home: 'Startseite',
        nav_guides: 'Anleitungen',
        nav_wiki: 'Wiki',
        nav_mods: 'MODs',
        nav_news: 'Nachrichten',
        nav_about: 'Über',
        nav_contact: 'Kontakt',
        home: 'Startseite',
        guides: 'Anleitungen',
        wiki: 'Wiki',
        mods: 'MODs',
        news: 'Nachrichten',
        about: 'Über',
        contact: 'Kontakt',
        searchPlaceholder: 'MODs nach Name, Autor oder Tags suchen...',
        categories: ['Alle', 'Interface', 'Speicher', 'Wirtschaft', 'Nützlichkeit', 'Kampf', 'Karten', 'Audio'],
        sortBy: 'Sortieren nach:',
        sortOptions: ['Zuletzt aktualisiert', 'Meiste Downloads', 'Höchste Bewertung', 'Name (A-Z)'],
        // Home page specific
        whatIsEscape: 'Was ist Escape From Duckov',
        duckovAtGlance: 'Duckov auf einen Blick',
        whyItHooks: 'War es Spieler fesselt',
        gameFeatures: 'Spiel-Features',
        howToPlay: 'Wie man spielt',
        loadoutFormula: 'Ausrüstungs-Formel',
        internalPages: 'Hub-Module',
        faq: 'Häufig gestellte Fragen',
        sixStepLoop: 'Sechsschrittiger Überlebensloop',
        fourThreeTwoRule: '4-3-2 Packregel',
        // Guides page specific
        guidesLibrary: 'Anleitungen-Bibliothek',
        guidesTitle: 'Escape From Duckov Feldhandbücher',
        guidesDescription: 'Extraktionsrouten planen, Ausrüstungen vorbereiten und jede Duckov-Karte mit datengestützten Walkthroughs meistern.',
        mapFilters: ['Alle', 'Sonnen Schilf', 'Neon-Festung', 'Polarkies', 'Ember-Kooperative', 'Himmelshafen', 'Schwierigkeitsgrad', 'Verträge']
      },
      'fr': {
        pageTitle: 'Centre de Survie Duckov | Guides, Wiki, MODs, Actualités',
        nav_home: 'Accueil',
        nav_guides: 'Guides',
        nav_wiki: 'Wiki',
        nav_mods: 'MODs',
        nav_news: 'Actualités',
        nav_about: 'À propos',
        nav_contact: 'Contact',
        home: 'Accueil',
        guides: 'Guides',
        wiki: 'Wiki',
        mods: 'MODs',
        news: 'Actualités',
        about: 'À propos',
        contact: 'Contact',
        searchPlaceholder: 'Rechercher des MODs par nom, auteur ou tags...',
        categories: ['Tous', 'Interface', 'Stockage', 'Économie', 'Utilité', 'Combat', 'Cartes', 'Audio'],
        sortBy: 'Trier par:',
        sortOptions: ['Récemment mis à jour', 'Plus téléchargés', 'Mieux notés', 'Nom (A-Z)'],
        // Home page specific
        whatIsEscape: 'Qu\'est-ce que Escape From Duckov',
        duckovAtGlance: 'Duckov en un clin d\'œil',
        whyItHooks: 'Pourquoi cela accroche les joueurs',
        gameFeatures: 'Fonctionnalités du jeu',
        howToPlay: 'Comment jouer',
        loadoutFormula: 'Formule d\'équipement',
        internalPages: 'Modules du hub',
        faq: 'FAQ',
        sixStepLoop: 'Boucle de survie à six étapes',
        fourThreeTwoRule: 'Règle d\'emport 4-3-2'
      }
    };

    this.init();
  }

  init() {
    this.bindEvents();

    // 立即更新，如果DOM还未准备好则等待
    const updateUI = () => {
      this.updateLanguageUI();
      // 额外强制更新以确保所有导航链接都被正确翻译
      setTimeout(() => this.forceUpdateNavigation(), 200);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateUI);
    } else {
      updateUI();
    }
  }

  bindEvents() {
    const languageSelector = document.getElementById('globalLanguageSelector');
    if (languageSelector) {
      languageSelector.addEventListener('change', (e) => {
        this.switchLanguage(e.target.value);
      });
    }
  }

  switchLanguage(lang) {
    if (lang === this.currentLanguage) return;

    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
    this.currentLanguage = lang;

    // Update UI
    this.updateLanguageUI();
  }

  updateLanguageUI() {
    const t = this.translations[this.currentLanguage];
    if (!t) return;

    console.log(`Updating language UI to: ${this.currentLanguage}`);
    console.log('Available translations for nav items:', {
      nav_mods: t.nav_mods,
      nav_news: t.nav_news,
      nav_about: t.nav_about,
      nav_contact: t.nav_contact
    });

    // Update page title
    document.title = t.pageTitle;

    // Update navigation links with enhanced debugging
    const navLinks = document.querySelectorAll('.nav__links a[data-lang]');
    console.log(`Found ${navLinks.length} navigation links with data-lang attribute`);

    navLinks.forEach((link, index) => {
      const langKey = link.getAttribute('data-lang');
      const currentText = link.textContent.trim();
      const expectedText = t[langKey];

      console.log(`[${index + 1}] Checking ${langKey}: "${currentText}" (expected: "${expectedText}")`);

      if (langKey && expectedText) {
        if (currentText !== expectedText) {
          console.log(`✅ Updating ${langKey}: "${currentText}" → "${expectedText}"`);
          link.textContent = expectedText;
        } else {
          console.log(`ℹ️  ${langKey} already correct: "${currentText}"`);
        }
      } else if (langKey) {
        console.warn(`❌ Missing translation for ${langKey} in language ${this.currentLanguage}`);
      } else {
        console.warn(`❌ Link has no data-lang attribute: "${currentText}"`);
      }
    });

    // Update active language in dropdown
    const languageSelector = document.getElementById('globalLanguageSelector');
    if (languageSelector) {
      languageSelector.value = this.currentLanguage;
    }

    // Language buttons are replaced by dropdown - no need to update

    // Update search placeholders and category buttons
    this.updateSearchUI();
    this.updateCategoryButtons();
    this.updateSortButtons();

    // Update page-specific content
    this.updatePageContent();

    // 强制更新：确保所有导航链接都被正确翻译
    this.forceUpdateNavigation();
  }

  // 强制更新导航链接的翻译 - 简化版本
  forceUpdateNavigation() {
    const t = this.translations[this.currentLanguage];
    if (!t) {
      console.warn(`No translations found for language: ${this.currentLanguage}`);
      return;
    }

    const navLinks = document.querySelectorAll('.nav__links a[data-lang]');
    console.log(`Force updating ${navLinks.length} navigation links for language ${this.currentLanguage}...`);

    navLinks.forEach((link, index) => {
      const langKey = link.getAttribute('data-lang');
      const currentText = link.textContent.trim();
      const expectedText = t[langKey];

      console.log(`Force[${index + 1}] ${langKey}: "${currentText}" → "${expectedText}"`);

      if (langKey && expectedText && currentText !== expectedText) {
        link.textContent = expectedText;
        console.log(`✅ Force updated ${langKey}: "${currentText}" → "${expectedText}"`);
      } else if (!expectedText) {
        console.warn(`❌ No translation for ${langKey} in ${this.currentLanguage}`);
      }
    });

    // 更新语言选择器
    const selector = document.getElementById('globalLanguageSelector');
    if (selector && selector.value !== this.currentLanguage) {
      selector.value = this.currentLanguage;
      console.log(`✅ Updated language selector to: ${this.currentLanguage}`);
    }
  }

  
  updateSearchUI() {
    const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="MOD"]');
    const searchButtons = document.querySelectorAll('button[id*="searchButton"]');

    searchInputs.forEach(input => {
      const t = this.translations[this.currentLanguage];
      if (t && input.placeholder !== t.searchPlaceholder) {
        input.placeholder = t.searchPlaceholder;
      }
    });

    searchButtons.forEach(button => {
      const t = this.translations[this.currentLanguage];
      if (t && button.textContent !== 'Search') {
        button.textContent = t.searchPlaceholder || 'Search';
      }
    });
  }

  updateCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.filter-btn[data-category]');
    const t = this.translations[this.currentLanguage];

    if (t && t.categories) {
      categoryButtons.forEach((button, index) => {
        if (button.dataset.category) {
          button.textContent = t.categories[index] || button.textContent;
        }
      });
    }
  }

  updateSortButtons() {
    const sortButtons = document.querySelectorAll('.sort-btn[data-sort]');
    const t = this.translations[this.currentLanguage];

    if (t && t.sortBy && t.sortOptions) {
      sortButtons.forEach((button, index) => {
        if (button.dataset.sort) {
          button.textContent = t.sortOptions[index] || button.textContent;
        }
      });
    }

    // Update sort labels
    const sortLabel = document.querySelector('.sort-options span');
    if (sortLabel && t) {
      sortLabel.textContent = t.sortBy;
    }
  }

  updatePageContent() {
    const t = this.translations[this.currentLanguage];
    if (!t) return;

    // Update section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(element => {
      const text = element.textContent.trim();
      switch(text) {
        case 'What is Escape From Duckov':
          element.textContent = t.whatIsEscape || text;
          break;
        case 'Game Features':
          element.textContent = t.gameFeatures || text;
          break;
        case 'How to Play':
          element.textContent = t.howToPlay || text;
          break;
        case 'Loadout Formula':
          element.textContent = t.loadoutFormula || text;
          break;
        case 'Hub Modules':
          element.textContent = t.internalPages || text;
          break;
        case 'FAQ':
          element.textContent = t.faq || text;
          break;
      }
    });

    // Update card titles
    const cardTitles = document.querySelectorAll('.card h2, .card h3');
    cardTitles.forEach(element => {
      const text = element.textContent.trim();
      switch(text) {
        case 'Duckov at a Glance':
          element.textContent = t.duckovAtGlance || text;
          break;
        case 'Why It Hooks Players':
          element.textContent = t.whyItHooks || text;
          break;
        case 'Six-Step Survival Loop':
          element.textContent = t.sixStepLoop || text;
          break;
        case '4-3-2 Packing Rule':
          element.textContent = t.fourThreeTwoRule || text;
          break;
      }
    });

    // Update paragraph content
    const paragraphs = document.querySelectorAll('article.card p');
    paragraphs.forEach(paragraph => {
      const text = paragraph.textContent.trim();
      let translationKey = null;

      // Match text with translation keys
      if (text.includes('broken city of paranoid ducks')) {
        translationKey = 'introParagraph1';
      } else if (text.includes('Each raid is a self-contained story')) {
        translationKey = 'introParagraph2';
      } else if (text.includes('blends extraction tension with base-building comfort')) {
        translationKey = 'whyItHooksParagraph1';
      } else if (text.includes('True stakes arrive from the extraction economy')) {
        translationKey = 'whyItHooksParagraph2';
      } else if (text.includes('Five sprawling zones') || text.includes('Five sprawling zones—Sunken Reeds')) {
        translationKey = 'vastMaps';
      } else if (text.includes('Over fifty weapons') || text.includes('Over fifty weapons plus modular attachments')) {
        translationKey = 'dynamicCombat';
      } else if (text.includes('Upgrade med bays') || text.includes('Upgrade med bays, hydroponics, radar towers')) {
        translationKey = 'hideoutGrowth';
      } else if (text.includes('Invest in mobility') || text.includes('Deep skill paths let you spec')) {
        translationKey = 'skillTrees';
      } else if (text.includes('Daily smuggling tasks') || text.includes('Daily smuggling tasks, weekly hunts')) {
        translationKey = 'contractsEvents';
      } else if (text.includes('Steam Workshop integration allows first-person toggles')) {
        translationKey = 'modSupport';
      }

      if (translationKey && t[translationKey]) {
        paragraph.textContent = t[translationKey];
      }
    });

    // Update guides page specific elements
    const guidesTitle = document.querySelector('header.page-header h1');
    const guidesDesc = document.querySelector('header.page-header p');
    const filterButtons = document.querySelectorAll('.filter-bar button:not([data-category])');

    if (guidesTitle && t.guidesTitle) {
      guidesTitle.textContent = t.guidesTitle;
    }
    if (guidesDesc && t.guidesDescription) {
      guidesDesc.textContent = t.guidesDescription;
    }
    if (filterButtons && t.mapFilters) {
      filterButtons.forEach((button, index) => {
        if (index < t.mapFilters.length) {
          button.textContent = t.mapFilters[index];
        }
      });
    }
  }
}

// Initialize global language system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.languageSystem = new LanguageSystem();
});

// 处理页面导航后的语言同步
window.addEventListener('pageshow', function(event) {
  // 如果是从缓存加载的页面，确保语言系统正确初始化
  if (event.persisted && window.languageSystem) {
    console.log('Page restored from cache, updating language...');
    setTimeout(() => {
      window.languageSystem.forceUpdateNavigation();
    }, 100);
  }
});