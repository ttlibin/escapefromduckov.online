// MOD Search and Display System for Escape From Duckov
class MODSearchSystem {
  constructor() {
    // Language system
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.translations = {
      'en': {
        title: 'Escape From Duckov Mods',
        searchPlaceholder: 'Search for MODs by name, author, or tags...',
        categories: ['All', 'Interface', 'Storage', 'Economy', 'Utility', 'Combat', 'Maps', 'Audio'],
        sortBy: 'Sort by:',
        sortOptions: ['Recently Updated', 'Most Downloaded', 'Highest Rated', 'Name (A-Z)']
      },
      'zh-CN': {
        title: '逃离鸭科夫 MOD',
        searchPlaceholder: '按名称、作者或标签搜索MOD...',
        categories: ['全部', '界面', '存储', '经济', '实用', '战斗', '地图', '音频'],
        sortBy: '排序方式：',
        sortOptions: ['最近更新', '最多下载', '评分最高', '名称 (A-Z)']
      },
      'zh-TW': {
        title: '逃離鴨科夫 MOD',
        searchPlaceholder: '按名稱、作者或標籤搜尋MOD...',
        categories: ['全部', '界面', '存儲', '經濟', '實用', '戰鬥', '地圖', '音訊'],
        sortBy: '排序方式：',
        sortOptions: ['最近更新', '最多下載', '評分最高', '名稱 (A-Z)']
      },
      'ja': {
        title: 'エスケープ・フロム・ダックオブ MOD',
        searchPlaceholder: 'MODを名前、作者、タグで検索...',
        categories: ['すべて', 'インターフェース', 'ストレージ', 'エコノミー', 'ユーティリティ', 'コンバット', 'マップ', 'オーディオ'],
        sortBy: '並び替え：',
        sortOptions: ['最近更新', '最多ダウンロード', '評価が高い', '名前順 (A-Z)']
      },
      'ko': {
        title: '이스케이프 프롬 덕커브 MOD',
        searchPlaceholder: 'MOD을 이름, 작성자, 태그로 검색...',
        categories: ['전체', '인터페이스', '저장', '경제', '유틸티', '전투', '맵', '오디오'],
        sortBy: '정렬 방식:',
        sortOptions: ['최근 업데이트', '다운로드 수', '평점 높음', '이름순 (A-Z)']
      },
      'de': {
        title: 'Escape From Duckov MODs',
        searchPlaceholder: 'MODs nach Name, Autor oder Tags suchen...',
        categories: ['Alle', 'Interface', 'Speicher', 'Wirtschaft', 'Nützlichkeit', 'Kampf', 'Karten', 'Audio'],
        sortBy: 'Sortieren nach:',
        sortOptions: ['Zuletzt aktualisiert', 'Meist Downloads', 'Höchste Bewertung', 'Name (A-Z)']
      },
      'fr': {
        title: 'MODs Escape From Duckov',
        searchPlaceholder: 'Rechercher des MODs par nom, auteur ou tags...',
        categories: ['Tous', 'Interface', 'Stockage', 'Économie', 'Utilité', 'Combat', 'Cartes', 'Audio'],
        sortBy: 'Trier par:',
        sortOptions: ['Récemment mis à jour', 'Plus téléchargés', 'Mieux notés', 'Nom (A-Z)']
      }
    };

    // MOD Categories for filtering
    this.categories = ['All', 'Interface', 'Storage', 'Economy', 'Utility', 'Combat', 'Maps', 'Audio'];

    // Complete MOD data with all requested mods and proper structure
    this.sampleMods = [
      // MOD 1: 显示物品在当前背包和仓库的数量
      {
        name: '显示物品在当前背包和仓库的数量',
        description: '在探索时显示物品在当前背包和仓库的数量，方便判断是否需要同类物品。\n\n[25.10.20] v0.1 已更新多语言支持！\n[25.10.20] v0.2 修复黑市/升级物品显示bug\n\n由于本mod是基于游戏原版仓库代码实现的，与其他修改仓库的mod（如增加存储空间）可能会有冲突。',
        image: 'images/151.jpg',
        video: 'images/151.webm',
        category: 'Utility',
        steamId: '3589651647',
        tags: ['inventory', 'storage', 'utility']
      },
      // MOD 2: Better Hydration & Energy HUD
      {
        name: 'Better Hydration & Energy HUD',
        description: 'At water/food "rings," show two lines:\nTop: Amount needed to fill (difference)\nBottom: Current value / Max value (integers, spaced)\nPer-item controls for X/Y offsets and font size.',
        image: 'images/152.jpg',
        video: 'images/152.webm',
        category: 'Interface',
        steamId: '3591875771',
        tags: ['HUD', 'interface', 'survival']
      },
      {
        name: 'Better Hydration & Energy HUD',
        description: 'At water/food "rings," show two lines:\nTop: Amount needed to fill (difference)\nBottom: Current value / Max value (integers, spaced)\nPer-item controls for X/Y offsets and font size.',
        image: 'images/152.jpg',
        video: 'images/152.webm',
        category: 'Interface',
        steamId: '3591875771',
        tags: ['HUD', 'interface', 'survival']
      },
      // MOD 3: Show The Cost
      {
        name: 'Show The Cost',
        description: 'Shows the cost! github: https://github.com/xvrsl/duckov_modding (Name suggested by @Sola [RU] ) by xvrsl',
        image: 'images/153.jpg',
        video: 'images/153.webm',
        category: 'Interface',
        steamId: '3532400883',
        tags: ['interface', 'economy', 'utility']
      },
      {
        name: 'Show The Cost',
        description: 'Shows the cost! github: https://github.com/xvrsl/duckov_modding (Name suggested by @Sola [RU] ) by xvrsl',
        image: 'images/153.jpg',
        video: 'images/153.webm',
        category: 'Interface',
        steamId: '3532400883',
        tags: ['interface', 'economy', 'utility']
      },
      // MOD 4: 史诗级背包扩容V2.11·Epic Backpack Expansion
      {
        name: '史诗级背包扩容V2.11·Epic Backpack Expansion',
        description: 'Epic Backpack Expansion (Categories / Pages / Search / Lag-Free)',
        image: 'images/154.jpg',
        video: 'images/154.webm',
        category: 'Storage',
        steamId: '3595314238',
        tags: ['inventory', 'storage', 'expansion']
      },
      {
        name: '史诗级背包扩容V2.11·Epic Backpack Expansion',
        description: 'Epic Backpack Expansion (Categories / Pages / Search / Lag-Free)',
        image: 'images/154.jpg',
        video: 'images/154.webm',
        category: 'Storage',
        steamId: '3595314238',
        tags: ['inventory', 'storage', 'expansion']
      },
      // MOD 5: Display Cash With Money
      {
        name: 'Display Cash With Money',
        description: 'Who still doesn\'t know that cash can be spent like money?',
        image: 'images/155.jpg',
        video: 'images/155.webm',
        category: 'Economy',
        steamId: '3588488152',
        tags: ['economy', 'interface', 'cash']
      },
      {
        name: 'Display Cash With Money',
        description: 'Who still doesn\'t know that cash can be spent like money?',
        image: 'images/155.jpg',
        video: 'images/155.webm',
        category: 'Economy',
        steamId: '3588488152',
        tags: ['economy', 'interface', 'cash']
      },
      // MOD 6: 显示物品可用次数
      {
        name: '显示物品可用次数',
        description: '显示钥匙剩余可用次数/总可用次数！（尤其方便看钥匙包里面钥匙的状态）此外还会显示装备可用耐久，药品等可用的治疗量等。',
        image: 'images/156.jpg',
        video: 'images/156.webm',
        category: 'Interface',
        steamId: '3592946080',
        tags: ['interface', 'utility', 'durability']
      },
      // MOD 7: Dynamic Crosshair
      {
        name: 'Dynamic Crosshair',
        description: 'This mod synchronizes the crosshair color (both hip-fire and ADS) with the weapon\'s effective range indicator text, providing intuitive feedback for engagement distance. However, the crosshair will retain its default color when at the closest range tier. by faoifh, assisted by AI',
        image: 'images/157.jpg',
        video: 'images/157.webm',
        category: 'Combat',
        steamId: '3592198463',
        tags: ['combat', 'interface', 'crosshair']
      },
      // MOD 8: Boss实时地图标记 Live Boss Map Markers
      {
        name: 'Boss实时地图标记 Live Boss Map Markers',
        description: '在地图上实时标明BOSS的位置，方便寻找BOSS击杀 Marks boss positions on map in real time using the 3rd map mark icon and red color.',
        image: 'images/158.jpg',
        video: 'images/158.webm',
        category: 'Maps',
        steamId: '3589079671',
        tags: ['maps', 'bosses', 'tactical']
      },
      // MOD 9: Item Value Rarity Display & Search Sounds
      {
        name: 'Item Value Rarity Display & Search Sounds',
        description: 'Make your looting experience more exciting!\nThis mod adds a rarity display to in-game items (based on their value), recalibrates search duration, and adds search sound effects.',
        image: 'images/159.jpg',
        video: 'images/159.webm',
        category: 'Audio',
        steamId: '3588386576',
        tags: ['audio', 'interface', 'looting']
      },
      // MOD 10: ShowQuestsAreaOnMap-任务显示mod
      {
        name: 'ShowQuestsAreaOnMap-任务显示mod',
        description: 'Display item locations and quest locations on map\nThe MOD supports multiple languages',
        image: 'images/160.jpg',
        video: 'images/160.webm',
        category: 'Maps',
        steamId: '3591556337',
        tags: ['maps', 'quests', 'interface']
      }
    ];

    // Initialize search system
    this.init();

    // Test DOM element creation
    setTimeout(() => {
      const testArticle = document.createElement('article');
      testArticle.className = 'card';
      testArticle.innerHTML = '<h3>Test MOD</h3><p>Test description</p><a href="#" class="mod-download-btn">Test Download</a>';
      const testDisplay = document.getElementById('modDisplay');
      if (testDisplay) {
        testDisplay.appendChild(testArticle);
        console.log('Test article added successfully');
      } else {
        console.error('MOD display element not found!');
      }
    }, 1000);
  }

  init() {
    this.currentCategory = 'All';
    this.searchTerm = '';
    this.sortBy = 'updated'; // 'updated', 'downloads', 'rating', 'name'
    this.currentPage = 1;
    this.modsPerPage = 50; // Set high number to show all MODs at once

    // DOM elements
    this.searchInput = document.getElementById('modSearchInput');
    this.searchButton = document.getElementById('searchButton');
    this.categoryButtons = document.querySelectorAll('.filter-bar button');
    this.modDisplay = document.getElementById('modDisplay');

    // Debug: Check if DOM elements are found
    console.log('Search Input:', this.searchInput);
    console.log('Search Button:', this.searchButton);
    console.log('Category Buttons:', this.categoryButtons.length);
    console.log('Mod Display:', this.modDisplay);

    // Bind events
    this.bindEvents();

    // Load initial mods
    console.log('Loading initial MODs...');
    this.displayMods();
  }

  bindEvents() {
    // Search functionality
    this.searchInput.addEventListener('input', (e) => {
      this.searchTerm = e.target.value.toLowerCase();
      this.displayMods();
    });

    this.searchButton.addEventListener('click', () => {
      this.searchTerm = this.searchInput.value.toLowerCase();
      this.displayMods();
    });

    // Category filtering
    this.categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        this.categoryButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');
        this.currentCategory = button.textContent.trim();
        this.currentPage = 1;

        this.displayMods();
      });
    });

    // Sorting functionality
    const sortOptions = document.querySelectorAll('.sort-options button');
    sortOptions.forEach(option => {
      option.addEventListener('click', () => {
        // Remove active class from all sort options
        sortOptions.forEach(opt => opt.classList.remove('active'));

        // Add active class to clicked option
        option.classList.add('active');
        this.sortBy = option.dataset.sort;
        this.currentPage = 1;

        this.displayMods();
      });
    });

    // No pagination functionality needed - all MODs display at once
  }

  filterMods() {
    let filteredMods = this.sampleMods;

    // Filter by category
    if (this.currentCategory !== 'All') {
      filteredMods = filteredMods.filter(mod =>
        mod.category === this.currentCategory
      );
    }

    // Filter by search term
    if (this.searchTerm) {
      filteredMods = filteredMods.filter(mod =>
        mod.name.toLowerCase().includes(this.searchTerm) ||
        mod.description.toLowerCase().includes(this.searchTerm)
      );
    }

    // Sort the filtered mods
    this.sortMods(filteredMods);
    return filteredMods;
  }

  sortMods(mods) {
    switch (this.sortBy) {
      case 'name':
        mods.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'downloads':
        mods.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
        break;
      case 'rating':
        mods.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'updated':
        mods.sort((a, b) => new Date(b.updated || '2024-01-01') - new Date(a.updated || '2024-01-01'));
        break;
      default:
        // Default to sorting by downloads (most recent)
        mods.sort((a, b) => new Date(b.updated || '2024-01-01') - new Date(a.updated || '2024-01-01'));
        break;
    }
  }

  displayMods() {
    const modDisplay = this.modDisplay;
    if (!modDisplay) return;

    // Get filtered and sorted mods
    const filteredMods = this.filterMods();
    console.log('Total filtered mods:', filteredMods.length);

    // Clear existing mods
    modDisplay.innerHTML = '';

    // Show all MODs without pagination
    const paginatedMods = filteredMods; // Display all filtered MODs at once

    // Create mod cards
    paginatedMods.forEach(mod => {
      console.log('Creating mod card for:', mod.name);
      try {
        const modCard = this.createModCard(mod);
        if (modCard) {
          modDisplay.appendChild(modCard);
        } else {
          console.error('Failed to create card for:', mod.name);
        }
      } catch (error) {
        console.error('Error creating card for', mod.name, ':', error);
      }
    });

    // No pagination - all MODs are displayed at once

    // Show message if no mods found
    if (filteredMods.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.innerHTML = `
        <h3>No MODs found</h3>
        <p>Try adjusting your search or filters to find the MODs you're looking for.</p>
      `;
      modDisplay.appendChild(noResults);
    }
  }

  createModCard(mod) {
    const article = document.createElement('article');
    article.className = 'card';

    // Create video container
    const videoContainer = document.createElement('div');
    videoContainer.className = 'mod-video-container';

    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.className = 'mod-video';

    if (mod.video) {
      const source = document.createElement('source');
      source.src = mod.video;
      source.type = 'video/webm';
      video.appendChild(source);
    }

    if (mod.image) {
      video.poster = mod.image;
    }

    // Fallback image
    const fallbackImg = document.createElement('img');
    fallbackImg.src = mod.image || 'images/default-mod.jpg';
    fallbackImg.alt = mod.name;
    fallbackImg.className = 'mod-card-image';

    video.appendChild(fallbackImg);
    videoContainer.appendChild(video);

    // Mod info
    const infoContainer = document.createElement('div');
    infoContainer.className = 'mod-info';

    // Title
    const title = document.createElement('h3');
    title.textContent = mod.name;
    infoContainer.appendChild(title);

    // Description
    const description = document.createElement('p');
    description.textContent = mod.description;
    infoContainer.appendChild(description);

    // Steam download button
    if (mod.steamId) {
      const downloadBtn = document.createElement('a');
      downloadBtn.href = `https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.steamId}`;
      downloadBtn.target = '_blank';
      downloadBtn.rel = 'noopener noreferrer';
      downloadBtn.className = 'mod-download-btn';
      downloadBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 16a5 5 0 0 5-5h-1a4 4 0 1 1-4-4V1a5 5 0 0 0 10z"/>
          <path d="M10 8h4V7h-4V4H9v3H5v1h4v3h1V8z"/>
        </svg>
        Download on Steam
      `;
      downloadBtn.style.marginTop = '12px';
      infoContainer.appendChild(downloadBtn);
    }

    article.appendChild(videoContainer);
    article.appendChild(infoContainer);
    return article;
  }

  initLanguageSystem() {
    // Update UI based on current language
    this.updateLanguageUI();

    // Bind language button events
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.dataset.lang;
        this.switchLanguage(lang);
      });
    });

    // Set active language button
    this.setActiveLanguageButton(this.currentLanguage);
  }

  switchLanguage(lang) {
    if (lang === this.currentLanguage) return;

    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
    this.currentLanguage = lang;

    // Update UI
    this.updateLanguageUI();
    this.setActiveLanguageButton(lang);

    // Re-render MOD cards with new language
    this.displayMods();
  }

  updateLanguageUI() {
    const t = this.translations[this.currentLanguage];
    if (!t) return;

    // Update page title
    document.title = t.title;

    // Update search placeholder
    if (this.searchInput) {
      this.searchInput.placeholder = t.searchPlaceholder;
    }

    // Update category buttons
    if (this.categoryButtons.length > 0) {
      const categories = t.categories;
      this.categoryButtons.forEach((button, index) => {
        button.textContent = categories[index];
      });
    }

    // Update sort labels
    const sortSpan = document.querySelector('.sort-options span');
    if (sortSpan) {
      sortSpan.textContent = t.sortBy;
    }

    // Update sort buttons
    const sortButtons = document.querySelectorAll('.sort-btn');
    const sortOptions = t.sortOptions;
    sortButtons.forEach((button, index) => {
      if (button.dataset.sort) {
        button.textContent = sortOptions[index];
      }
    });
  }

  setActiveLanguageButton(lang) {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
      button.classList.remove('active');
      if (button.dataset.lang === lang) {
        button.classList.add('active');
      }
    });
  }
}

// Initialize the MOD search system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing MOD search system...');
  try {
    const modSystem = new MODSearchSystem();
    console.log('MOD search system initialized successfully');

    // Initialize language system
    modSystem.initLanguageSystem();

    // Debug: Log sample MODs data
    console.log('Sample MODs count:', modSystem.sampleMods.length);
    console.log('First MOD:', modSystem.sampleMods[0]);

    // Test creating one MOD card
    setTimeout(() => {
      const testCard = modSystem.createModCard(modSystem.sampleMods[0]);
      if (testCard) {
        console.log('Test MOD card created successfully');
      } else {
        console.error('Failed to create test MOD card');
      }
    }, 500);

  } catch (error) {
    console.error('Error initializing MOD search system:', error);
  }
});