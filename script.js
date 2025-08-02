// 垃圾分类数据库
const wasteDatabase = {
    recyclable: {
        name: '可回收物',
        color: '#007bff',
        items: {
            '塑料瓶': '清洗后投放，去除瓶盖和标签',
            '易拉罐': '清空内容物，可压扁节省空间',
            '废纸': '保持干燥，避免污染',
            '玻璃瓶': '去除瓶盖，清洗干净',
            '纸箱': '拆开压平，去除胶带',
            '金属罐': '清空内容物，去除标签',
            '塑料袋': '清洁无污染的塑料袋',
            '报纸': '保持干燥整洁',
            '杂志': '去除塑料包装',
            '洗发水瓶': '清空内容物，去除泵头',
            '酒瓶': '清洗干净，去除软木塞',
            '铁盒': '清空内容物',
            '塑料盒': '清洗干净，去除标签',
            '纸质包装盒': '拆开压平'
        }
    },
    harmful: {
        name: '有害垃圾',
        color: '#dc3545',
        items: {
            '废电池': '包括纽扣电池、充电电池等',
            '荧光灯管': '完整投放，避免破损',
            '过期药品': '连同包装一起投放',
            '油漆桶': '确保内容物已清空',
            '杀虫剂': '连同包装投放',
            '水银温度计': '小心包装，避免破损',
            '废墨盒': '打印机墨盒',
            '化妆品': '过期化妆品及包装',
            '指甲油': '连同刷子一起',
            '农药瓶': '清空后投放',
            '消毒剂': '家用消毒剂瓶',
            '胶水': '各类胶水及包装'
        }
    },
    kitchen: {
        name: '厨余垃圾',
        color: '#28a745',
        items: {
            '果皮': '苹果皮、橙皮、香蕉皮等',
            '菜叶': '白菜叶、菠菜叶等',
            '剩菜剩饭': '米饭、面条、菜肴等',
            '蛋壳': '鸡蛋壳、鸭蛋壳',
            '鱼骨': '各类鱼刺鱼骨',
            '茶叶渣': '泡过的茶叶',
            '咖啡渣': '冲泡后的咖啡粉',
            '面包': '过期或剩余面包',
            '水果': '腐烂或过期水果',
            '蔬菜': '腐烂蔬菜',
            '肉类': '过期或剩余肉类',
            '坚果壳': '花生壳、核桃壳等',
            '玉米芯': '啃完的玉米棒',
            '骨头': '鸡骨、猪骨等小骨头'
        }
    },
    other: {
        name: '其他垃圾',
        color: '#6c757d',
        items: {
            '餐巾纸': '用过的纸巾',
            '烟蒂': '香烟头',
            '猫砂': '使用过的猫砂',
            '尿不湿': '婴儿尿布',
            '陶瓷': '破碎的陶瓷制品',
            '灰土': '扫地产生的灰尘',
            '毛发': '人和宠物毛发',
            '口香糖': '嚼过的口香糖',
            '创可贴': '使用过的创可贴',
            '卫生巾': '女性卫生用品',
            '棉签': '使用过的棉签',
            '牙签': '使用过的牙签',
            '竹筷': '一次性竹筷子',
            '塑料餐具': '污染严重的塑料餐具'
        }
    }
};

// 场景指南数据
const scenarioGuides = {
    campus: {
        title: '校园垃圾分类指南',
        content: `
            <div class="scenario-item">
                <h4>📚 学习用品</h4>
                <p><strong>可回收物：</strong>废纸、纸质包装盒、塑料文具盒</p>
                <p><strong>有害垃圾：</strong>废电池、荧光笔、修正液</p>
                <p><strong>其他垃圾：</strong>橡皮擦屑、铅笔屑</p>
            </div>
            <div class="scenario-item">
                <h4>🍱 食堂就餐</h4>
                <p><strong>厨余垃圾：</strong>剩菜剩饭、果皮、骨头</p>
                <p><strong>可回收物：</strong>饮料瓶、易拉罐</p>
                <p><strong>其他垃圾：</strong>餐巾纸、一次性餐具</p>
            </div>
            <div class="scenario-item">
                <h4>🏠 宿舍生活</h4>
                <p><strong>可回收物：</strong>快递盒、塑料瓶、废纸</p>
                <p><strong>有害垃圾：</strong>废电池、过期药品</p>
                <p><strong>其他垃圾：</strong>卫生纸、毛发</p>
            </div>
        `
    },
    office: {
        title: '办公室垃圾分类指南',
        content: `
            <div class="scenario-item">
                <h4>💼 办公用品</h4>
                <p><strong>可回收物：</strong>废纸、纸质文件夹、塑料文件袋</p>
                <p><strong>有害垃圾：</strong>废墨盒、废硒鼓、废电池</p>
                <p><strong>其他垃圾：</strong>胶带、便利贴</p>
            </div>
            <div class="scenario-item">
                <h4>☕ 茶水间</h4>
                <p><strong>厨余垃圾：</strong>茶叶渣、咖啡渣、果皮</p>
                <p><strong>可回收物：</strong>饮料瓶、易拉罐、纸杯（无蜡涂层）</p>
                <p><strong>其他垃圾：</strong>纸杯（有蜡涂层）、搅拌棒</p>
            </div>
            <div class="scenario-item">
                <h4>🖥️ 电子设备</h4>
                <p><strong>有害垃圾：</strong>废电池、废灯管、电子元件</p>
                <p><strong>可回收物：</strong>纸质包装盒、塑料包装</p>
            </div>
        `
    },
    takeout: {
        title: '外卖垃圾分类指南',
        content: `
            <div class="scenario-item">
                <h4>🥡 餐盒处理</h4>
                <p><strong>清洗后可回收：</strong>干净的塑料餐盒、铝箔盒</p>
                <p><strong>其他垃圾：</strong>严重污染的餐盒、泡沫餐盒</p>
                <p><strong>厨余垃圾：</strong>剩菜剩饭、汤汁</p>
            </div>
            <div class="scenario-item">
                <h4>🥤 饮品包装</h4>
                <p><strong>可回收物：</strong>塑料饮料瓶、易拉罐</p>
                <p><strong>其他垃圾：</strong>奶茶杯、吸管、杯盖</p>
                <p><strong>厨余垃圾：</strong>珍珠、果肉</p>
            </div>
            <div class="scenario-item">
                <h4>📦 包装材料</h4>
                <p><strong>可回收物：</strong>纸质包装袋、塑料包装袋（清洁）</p>
                <p><strong>其他垃圾：</strong>污染的包装袋、胶带</p>
            </div>
        `
    },
    home: {
        title: '家庭垃圾分类指南',
        content: `
            <div class="scenario-item">
                <h4>🍳 厨房垃圾</h4>
                <p><strong>厨余垃圾：</strong>菜叶、果皮、剩菜剩饭、蛋壳</p>
                <p><strong>可回收物：</strong>玻璃瓶、金属罐、塑料瓶</p>
                <p><strong>其他垃圾：</strong>保鲜膜、一次性手套</p>
            </div>
            <div class="scenario-item">
                <h4>🛁 卫生间</h4>
                <p><strong>其他垃圾：</strong>卫生纸、卫生巾、尿不湿、猫砂</p>
                <p><strong>可回收物：</strong>洗发水瓶、沐浴露瓶（清空）</p>
                <p><strong>有害垃圾：</strong>过期药品、化妆品</p>
            </div>
            <div class="scenario-item">
                <h4>🛋️ 客厅卧室</h4>
                <p><strong>可回收物：</strong>报纸、杂志、快递盒、饮料瓶</p>
                <p><strong>有害垃圾：</strong>废电池、荧光灯管</p>
                <p><strong>其他垃圾：</strong>毛发、灰尘、烟蒂</p>
            </div>
        `
    }
};

// 再生之旅数据
const journeyData = {
    plastic: {
        steps: [
            { title: '收集分拣', desc: 'PET瓶被收集并按颜色、材质分类' },
            { title: '清洗破碎', desc: '去除标签，清洗后破碎成小片' },
            { title: '熔融造粒', desc: '高温熔融制成再生塑料颗粒' },
            { title: '重新制造', desc: '制成新瓶子、纤维或其他塑料制品' }
        ],
        stats: [
            { value: '25', unit: '个塑料瓶', desc: '可制成1件抓绒衣' },
            { value: '80%', unit: '能源节约', desc: '相比原生产' }
        ]
    },
    paper: {
        steps: [
            { title: '收集运输', desc: '废纸被收集并运送到回收工厂' },
            { title: '分拣去杂', desc: '去除杂质，按纸张类型分类' },
            { title: '制浆漂白', desc: '打浆、去墨、漂白处理' },
            { title: '造纸成型', desc: '制成新的纸张产品' }
        ],
        stats: [
            { value: '1', unit: '吨废纸', desc: '可生产0.8吨新纸' },
            { value: '60%', unit: '水资源节约', desc: '相比原生产' }
        ]
    },
    metal: {
        steps: [
            { title: '收集分类', desc: '金属废料按材质分类收集' },
            { title: '清洗处理', desc: '去除污染物和非金属部分' },
            { title: '熔炼提纯', desc: '高温熔炼，提取纯净金属' },
            { title: '重新铸造', desc: '制成新的金属制品' }
        ],
        stats: [
            { value: '95%', unit: '能源节约', desc: '铝制品回收' },
            { value: '无限', unit: '循环次数', desc: '金属可无限回收' }
        ]
    },
    ewaste: {
        steps: [
            { title: '收集运输', desc: '电子废物专业收集运输' },
            { title: '拆解分类', desc: '人工拆解，分离不同材料' },
            { title: '提取回收', desc: '提取贵金属和有用材料' },
            { title: '安全处置', desc: '有害物质安全处理' }
        ],
        stats: [
            { value: '1', unit: '吨电路板', desc: '含金量超过金矿石' },
            { value: '90%', unit: '材料可回收', desc: '专业处理后' }
        ]
    }
};

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化应用
function initializeApp() {
    // 初始化导航
    initializeNavigation();
    
    // 初始化搜索功能
    initializeSearch();
    
    // 初始化场景指南
    showScenario('campus');
    
    // 初始化再生之旅
    showJourney('plastic');
    
    // 添加滚动动画
    addScrollAnimations();
    
    // 初始化用户积分系统
    initializeUserSystem();
}

// 导航功能
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 搜索功能
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchItem();
            }
        });
    }
}

// 搜索物品
function searchItem() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) {
        console.error('搜索输入框未找到');
        alert('搜索功能初始化失败，请刷新页面重试');
        return;
    }
    
    const query = searchInput.value.trim();
    console.log('搜索查询:', query);
    
    if (!query) {
        alert('请输入要搜索的物品名称');
        return;
    }
    
    const results = findWasteItem(query);
    console.log('搜索结果:', results);
    displaySearchResults(results, query);
}

// 查找垃圾物品
function findWasteItem(query) {
    const results = [];
    
    Object.keys(wasteDatabase).forEach(category => {
        const categoryData = wasteDatabase[category];
        Object.keys(categoryData.items).forEach(item => {
            if (item.includes(query) || query.includes(item)) {
                results.push({
                    name: item,
                    category: category,
                    categoryName: categoryData.name,
                    color: categoryData.color,
                    tips: categoryData.items[item]
                });
            }
        });
    });
    
    return results;
}

// 显示搜索结果
function displaySearchResults(results, query) {
    console.log('显示搜索结果函数被调用，结果数量:', results.length);
    
    // 首先尝试显示在内联结果区域
    const inlineResultsElement = document.getElementById('inlineSearchResults');
    
    if (results.length === 0) {
        if (inlineResultsElement) {
            inlineResultsElement.innerHTML = `
                <div class="no-results">
                    <h4>😔 未找到"${query}"的分类信息</h4>
                    <p>请尝试其他关键词，如：塑料瓶、废电池、果皮等</p>
                </div>
            `;
            inlineResultsElement.style.display = 'block';
        } else {
            alert(`未找到"${query}"的分类信息，请尝试其他关键词`);
        }
        return;
    }
    
    let resultHtml = `
        <div class="search-results-header">
            <h4>🔍 搜索"${query}"的结果：</h4>
            <button onclick="clearSearchResults()" class="clear-btn">✕ 清除结果</button>
        </div>
    `;
    
    results.forEach(result => {
        resultHtml += `
            <div class="search-result-item">
                <div class="result-name">${result.name}</div>
                <div class="result-category ${result.category}">${result.categoryName}</div>
                <div class="result-tips">${result.tips}</div>
            </div>
        `;
    });
    
    // 优先显示在内联区域
    if (inlineResultsElement) {
        inlineResultsElement.innerHTML = resultHtml;
        inlineResultsElement.style.display = 'block';
        // 滚动到结果区域
        inlineResultsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        console.log('搜索结果已显示在内联区域');
    } else {
        // 备用：显示在模态框中
        const searchResultsElement = document.getElementById('searchResults');
        const searchModalElement = document.getElementById('searchModal');
        
        if (searchResultsElement && searchModalElement) {
            searchResultsElement.innerHTML = resultHtml;
            searchModalElement.style.display = 'block';
            console.log('搜索结果已显示在模态框中');
        } else {
            alert('搜索结果显示失败，请刷新页面重试');
        }
    }
}

// 模态框功能
function openSearchModal() {
    document.getElementById('searchModal').style.display = 'block';
}

function closeSearchModal() {
    document.getElementById('searchModal').style.display = 'none';
}

function modalSearch() {
    const modalSearchInput = document.getElementById('modalSearchInput');
    if (!modalSearchInput) {
        console.error('模态框搜索输入框未找到');
        alert('模态框搜索功能初始化失败');
        return;
    }
    
    const query = modalSearchInput.value.trim();
    console.log('模态框搜索查询:', query);
    
    if (!query) {
        alert('请输入要搜索的物品名称');
        return;
    }
    
    const results = findWasteItem(query);
    console.log('模态框搜索结果:', results);
    displaySearchResults(results, query);
}

// 语音搜索（模拟）
function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'zh-CN';
        recognition.onresult = function(event) {
            const result = event.results[0][0].transcript;
            document.getElementById('searchInput').value = result;
            searchItem();
        };
        recognition.start();
    } else {
        alert('您的浏览器不支持语音识别功能');
    }
}

// 拍照识别（模拟）
function startPhotoSearch() {
    alert('拍照识别功能正在开发中，敬请期待！');
}

// 清除搜索结果
function clearSearchResults() {
    const inlineResultsElement = document.getElementById('inlineSearchResults');
    if (inlineResultsElement) {
        inlineResultsElement.style.display = 'none';
        inlineResultsElement.innerHTML = '';
    }
    
    // 清空搜索输入框
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
}

// 场景指南切换
function showScenario(scenario) {
    // 显示对应内容
    const content = scenarioGuides[scenario];
    document.getElementById('scenario-content').innerHTML = `
        <h4>${content.title}</h4>
        ${content.content}
    `;
}

// 再生之旅切换
function showJourney(type) {
    // 生成新内容
    const data = journeyData[type];
    const journeyContent = document.querySelector('.journey-content');
    
    journeyContent.innerHTML = `
        <div class="journey-item active">
            <div class="journey-steps">
                ${data.steps.map((step, index) => `
                    <div class="step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <h4>${step.title}</h4>
                            <p>${step.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="journey-stats">
                ${data.stats.map(stat => `
                    <div class="stat">
                        <span class="stat-value">${stat.value}</span>
                        <span class="stat-unit">${stat.unit}</span>
                        <span class="stat-desc">${stat.desc}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// 滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 滚动动画
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    });
    
    document.querySelectorAll('.benefit-card, .type-card, .interactive-card, .material-card').forEach(el => {
        observer.observe(el);
    });
}

// 用户系统
function initializeUserSystem() {
    // 初始化用户积分
    if (!localStorage.getItem('userScore')) {
        localStorage.setItem('userScore', '0');
    }
    
    // 初始化学习进度
    if (!localStorage.getItem('learningProgress')) {
        localStorage.setItem('learningProgress', JSON.stringify({}));
    }
}

// 获取用户积分
function getUserScore() {
    return parseInt(localStorage.getItem('userScore') || '0');
}

// 增加积分
function addScore(points) {
    const currentScore = getUserScore();
    const newScore = currentScore + points;
    localStorage.setItem('userScore', newScore.toString());
    
    // 显示积分增加提示
    showScoreNotification(points);
}

// 显示积分通知
function showScoreNotification(points) {
    const notification = document.createElement('div');
    notification.className = 'score-notification';
    notification.innerHTML = `+${points} 积分！`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-weight: bold;
        z-index: 2000;
        animation: slideInRight 0.5s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 游戏功能
let gameState = {
    score: 0,
    level: 1,
    combo: 0,
    currentItem: null,
    isPlaying: false,
    gameItems: [
        { name: '塑料瓶', type: 'recyclable', icon: '🍼' },
        { name: '废电池', type: 'harmful', icon: '🔋' },
        { name: '苹果核', type: 'kitchen', icon: '🍎' },
        { name: '烟蒂', type: 'other', icon: '🚬' },
        { name: '报纸', type: 'recyclable', icon: '📰' },
        { name: '过期药品', type: 'harmful', icon: '💊' },
        { name: '剩菜', type: 'kitchen', icon: '🥗' },
        { name: '纸巾', type: 'other', icon: '🧻' },
        { name: '玻璃瓶', type: 'recyclable', icon: '🍾' },
        { name: '温度计', type: 'harmful', icon: '🌡️' }
    ]
};

function startGame() {
    document.getElementById('gameModal').style.display = 'block';
}

function closeGameModal() {
    document.getElementById('gameModal').style.display = 'none';
    if (gameState.isPlaying) {
        pauseGame();
    }
}

function initGame() {
    gameState.score = 0;
    gameState.level = 1;
    gameState.combo = 0;
    gameState.isPlaying = true;
    
    updateGameDisplay();
    document.getElementById('startGameBtn').style.display = 'none';
    document.getElementById('pauseGameBtn').style.display = 'inline-block';
    
    generateNewItem();
}

function updateGameDisplay() {
    document.getElementById('gameScore').textContent = gameState.score;
    document.getElementById('gameLevel').textContent = gameState.level;
    document.getElementById('gameCombo').textContent = gameState.combo;
}

function generateNewItem() {
    if (!gameState.isPlaying) return;
    
    const randomItem = gameState.gameItems[Math.floor(Math.random() * gameState.gameItems.length)];
    gameState.currentItem = randomItem;
    
    const gameItemElement = document.getElementById('gameItem');
    gameItemElement.innerHTML = `
        <div class="item-display" draggable="true" ondragstart="dragStart(event)">
            <span class="item-icon">${randomItem.icon}</span>
            <span class="item-name">${randomItem.name}</span>
        </div>
    `;
    
    // 添加拖拽事件监听
    setupDragAndDrop();
}

function setupDragAndDrop() {
    const trashBins = document.querySelectorAll('.trash-bin');
    
    trashBins.forEach(bin => {
        bin.addEventListener('dragover', dragOver);
        bin.addEventListener('drop', drop);
        bin.addEventListener('click', () => handleBinClick(bin.dataset.type));
    });
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', '');
}

function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function drop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const binType = e.currentTarget.dataset.type;
    checkAnswer(binType);
}

function handleBinClick(binType) {
    checkAnswer(binType);
}

function checkAnswer(selectedType) {
    if (!gameState.isPlaying || !gameState.currentItem) return;
    
    const isCorrect = selectedType === gameState.currentItem.type;
    
    if (isCorrect) {
        gameState.score += 10 + (gameState.combo * 2);
        gameState.combo++;
        showFeedback('正确！+' + (10 + (gameState.combo - 1) * 2) + '分', 'success');
        
        if (gameState.score >= gameState.level * 50) {
            gameState.level++;
            showFeedback('升级到第' + gameState.level + '关！', 'level-up');
        }
    } else {
        gameState.combo = 0;
        showFeedback('错误！正确答案是：' + getTypeName(gameState.currentItem.type), 'error');
    }
    
    updateGameDisplay();
    
    setTimeout(() => {
        generateNewItem();
    }, 1500);
}

function getTypeName(type) {
    const typeNames = {
        'recyclable': '可回收物',
        'harmful': '有害垃圾',
        'kitchen': '厨余垃圾',
        'other': '其他垃圾'
    };
    return typeNames[type];
}

function showFeedback(message, type) {
    const feedback = document.createElement('div');
    feedback.className = `game-feedback ${type}`;
    feedback.textContent = message;
    feedback.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#ffc107'};
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: bold;
        z-index: 1000;
        animation: feedbackPop 1.5s ease-out;
    `;
    
    document.querySelector('.game-area').appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 1500);
}

function pauseGame() {
    gameState.isPlaying = false;
    document.getElementById('startGameBtn').style.display = 'inline-block';
    document.getElementById('startGameBtn').textContent = '继续游戏';
    document.getElementById('pauseGameBtn').style.display = 'none';
    
    // 保存游戏积分
    addScore(gameState.score);
}

// 测验功能
let quizState = {
    questions: [
        {
            question: '塑料饮料瓶属于哪类垃圾？',
            options: ['可回收物', '有害垃圾', '厨余垃圾', '其他垃圾'],
            correct: 0,
            explanation: '塑料饮料瓶是可回收物，可以重新加工制成新的塑料制品。'
        },
        {
            question: '废电池应该投放到哪个垃圾桶？',
            options: ['可回收物桶', '有害垃圾桶', '厨余垃圾桶', '其他垃圾桶'],
            correct: 1,
            explanation: '废电池含有重金属等有害物质，必须投放到有害垃圾桶。'
        },
        {
            question: '剩菜剩饭属于什么垃圾？',
            options: ['可回收物', '有害垃圾', '厨余垃圾', '其他垃圾'],
            correct: 2,
            explanation: '剩菜剩饭是厨余垃圾，可以通过堆肥等方式处理。'
        },
        {
            question: '过期药品应该如何处理？',
            options: ['直接扔掉', '投放到有害垃圾桶', '冲入下水道', '埋在土里'],
            correct: 1,
            explanation: '过期药品含有化学成分，属于有害垃圾，需要专门处理。'
        },
        {
            question: '废纸属于哪类垃圾？',
            options: ['可回收物', '有害垃圾', '厨余垃圾', '其他垃圾'],
            correct: 0,
            explanation: '废纸是可回收物，可以重新制成新的纸制品。'
        },
        {
            question: '用过的餐巾纸属于什么垃圾？',
            options: ['可回收物', '有害垃圾', '厨余垃圾', '其他垃圾'],
            correct: 3,
            explanation: '用过的餐巾纸已被污染，无法回收，属于其他垃圾。'
        },
        {
            question: '玻璃瓶应该投放到哪里？',
            options: ['可回收物桶', '有害垃圾桶', '厨余垃圾桶', '其他垃圾桶'],
            correct: 0,
            explanation: '玻璃瓶是可回收物，可以无限次回收利用。'
        },
        {
            question: '果皮果核属于什么垃圾？',
            options: ['可回收物', '有害垃圾', '厨余垃圾', '其他垃圾'],
            correct: 2,
            explanation: '果皮果核是天然有机物，属于厨余垃圾。'
        },
        {
            question: '废旧手机应该如何处理？',
            options: ['当作其他垃圾扔掉', '投放到有害垃圾桶', '送到专门回收点', '埋在土里'],
            correct: 2,
            explanation: '废旧手机含有贵重金属和有害物质，应送到专门的电子产品回收点。'
        },
        {
            question: '烟蒂属于哪类垃圾？',
            options: ['可回收物', '有害垃圾', '厨余垃圾', '其他垃圾'],
            correct: 3,
            explanation: '烟蒂含有有害物质但数量较少，通常归类为其他垃圾。'
        }
    ],
    currentQuestion: 0,
    score: 0,
    selectedAnswer: null,
    isAnswered: false
};

function startQuiz() {
    document.getElementById('quizModal').style.display = 'block';
}

function closeQuizModal() {
    document.getElementById('quizModal').style.display = 'none';
}

function initQuiz() {
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.selectedAnswer = null;
    quizState.isAnswered = false;
    
    document.getElementById('startQuizBtn').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    
    showQuestion();
}

function showQuestion() {
    const question = quizState.questions[quizState.currentQuestion];
    
    // 更新进度
    const progress = ((quizState.currentQuestion + 1) / quizState.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('questionCounter').textContent = `${quizState.currentQuestion + 1}/${quizState.questions.length}`;
    
    // 显示问题
    document.getElementById('questionText').textContent = question.question;
    
    // 显示选项
    const optionsArea = document.getElementById('optionsArea');
    optionsArea.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.innerHTML = `
            <input type="radio" id="option${index}" name="quizOption" value="${index}">
            <label for="option${index}">${option}</label>
        `;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsArea.appendChild(optionElement);
    });
    
    quizState.isAnswered = false;
    quizState.selectedAnswer = null;
    
    // 显示下一题按钮
    const nextBtn = document.getElementById('nextQuestionBtn');
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = quizState.currentQuestion === quizState.questions.length - 1 ? '完成测验' : '下一题';
    nextBtn.disabled = true;
}

function selectOption(index) {
    if (quizState.isAnswered) return;
    
    quizState.selectedAnswer = index;
    
    // 清除之前的选择
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // 标记选中的选项
    const selectedOption = document.querySelectorAll('.quiz-option')[index];
    selectedOption.classList.add('selected');
    
    // 启用下一题按钮
    document.getElementById('nextQuestionBtn').disabled = false;
}

function nextQuestion() {
    if (quizState.selectedAnswer === null) return;
    
    const question = quizState.questions[quizState.currentQuestion];
    const isCorrect = quizState.selectedAnswer === question.correct;
    
    // 显示正确答案
    document.querySelectorAll('.quiz-option').forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (index === quizState.selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    // 显示解释
    const explanation = document.createElement('div');
    explanation.className = 'answer-explanation';
    explanation.innerHTML = `
        <p><strong>${isCorrect ? '✅ 回答正确！' : '❌ 回答错误！'}</strong></p>
        <p>${question.explanation}</p>
    `;
    document.getElementById('optionsArea').appendChild(explanation);
    
    if (isCorrect) {
        quizState.score++;
    }
    
    quizState.isAnswered = true;
    
    // 延迟进入下一题
    setTimeout(() => {
        quizState.currentQuestion++;
        
        if (quizState.currentQuestion >= quizState.questions.length) {
            showQuizResult();
        } else {
            showQuestion();
        }
    }, 2000);
    
    // 禁用下一题按钮
    document.getElementById('nextQuestionBtn').disabled = true;
}

function showQuizResult() {
    const percentage = Math.round((quizState.score / quizState.questions.length) * 100);
    let level = '';
    let message = '';
    
    if (percentage >= 90) {
        level = '垃圾分类专家';
        message = '太棒了！您对垃圾分类知识掌握得非常好！';
    } else if (percentage >= 70) {
        level = '分类达人';
        message = '很不错！您已经掌握了大部分垃圾分类知识。';
    } else if (percentage >= 50) {
        level = '环保新手';
        message = '还不错！继续学习，您会做得更好。';
    } else {
        level = '需要加油';
        message = '加油！多学习垃圾分类知识，为环保贡献力量。';
    }
    
    const resultHTML = `
        <div class="quiz-final-result">
            <h3>🎉 测验完成！</h3>
            <div class="result-stats">
                <div class="stat-circle">
                    <span class="percentage">${percentage}%</span>
                    <span class="score-text">${quizState.score}/${quizState.questions.length}</span>
                </div>
            </div>
            <div class="result-level">
                <h4>${level}</h4>
                <p>${message}</p>
            </div>
            <div class="result-actions">
                <button class="btn-primary" onclick="initQuiz()">重新测验</button>
                <button class="btn-secondary" onclick="closeQuizModal()">关闭</button>
            </div>
        </div>
    `;
    
    document.getElementById('quizResult').innerHTML = resultHTML;
    document.getElementById('quizResult').style.display = 'block';
    document.getElementById('questionArea').style.display = 'none';
    document.getElementById('nextQuestionBtn').style.display = 'none';
    
    // 添加积分
    const earnedPoints = quizState.score * 5;
    addScore(earnedPoints);
}

// 排行榜功能
function showRanking() {
    document.getElementById('rankingModal').style.display = 'block';
    loadRankingData();
}

function closeRankingModal() {
    document.getElementById('rankingModal').style.display = 'none';
}

function loadRankingData() {
    const userScore = getUserScore();
    
    // 模拟排行榜数据
    const rankings = [
        { name: '环保小达人', score: 1250, avatar: '🌱' },
        { name: '分类专家', score: 980, avatar: '♻️' },
        { name: '绿色生活家', score: 875, avatar: '🌿' },
        { name: '您', score: userScore, avatar: '👤', isUser: true },
        { name: '垃圾分类新手', score: 320, avatar: '🌱' },
        { name: '环保志愿者', score: 650, avatar: '🌍' },
        { name: '分类达人', score: 420, avatar: '🗂️' },
        { name: '绿色先锋', score: 780, avatar: '🌳' }
    ];
    
    rankings.sort((a, b) => b.score - a.score);
    
    // 找到用户排名
    const userRank = rankings.findIndex(user => user.isUser) + 1;
    
    // 更新用户统计
    document.getElementById('userCurrentScore').textContent = userScore;
    document.getElementById('userRank').textContent = userRank;
    
    // 生成排行榜HTML
    const rankingListHTML = rankings.map((user, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
        const rankNumber = index + 1;
        const isUserClass = user.isUser ? 'user-rank' : '';
        
        return `
            <div class="rank-item ${isUserClass}">
                <div class="rank-position">
                    ${medal || `<span class="rank-number">${rankNumber}</span>`}
                </div>
                <div class="rank-avatar">${user.avatar}</div>
                <div class="rank-info">
                    <div class="rank-name">${user.name}</div>
                    <div class="rank-score">${user.score} 积分</div>
                </div>
                ${user.isUser ? '<div class="user-badge">您</div>' : ''}
            </div>
        `;
    }).join('');
    
    document.getElementById('rankingList').innerHTML = rankingListHTML;
}

// 点击外部关闭模态框
window.onclick = function(event) {
    const modal = document.getElementById('searchModal');
    if (event.target === modal) {
        closeSearchModal();
    }
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .scenario-item {
        margin-bottom: 20px;
        padding: 15px;
        background: white;
        border-radius: 8px;
        border-left: 4px solid #28a745;
    }
    
    .scenario-item h4 {
        color: #2c5530;
        margin-bottom: 10px;
    }
    
    .scenario-item p {
        margin: 5px 0;
        line-height: 1.6;
    }
    
    .scenario-item strong {
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// 页面加载完成提示
console.log('🌱 垃圾分类科普网站已加载完成！');
console.log('💡 支持功能：智能搜索、语音识别、分类指南、互动游戏等');
console.log('🎯 让我们一起为环保贡献力量！');