// 初始化点击计数器
let clickCount = 0;
const counterElement = document
.getElementById('count');
const clickButton = document
.getElementById('clickMe');

// 按钮点击事件
clickButton.addEventListener('click', () => {
    clickCount++;
    counterElement.textContent = clickCount;
    
    // 添加视觉反馈
    clickButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        clickButton.style.transform = 'scale(1)';
    }, 100);
});

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    console.log('网站加载完成！');
    
    // 彩蛋：控制台消息
    console.log('谢谢你使用GitHub Pages!');
    console.log('%c 💡技巧：网站代码完全开源！', 
    'font-size:16px; color:#2a5caa;');
});



