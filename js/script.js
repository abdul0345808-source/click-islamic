// جیسے ہی پیج لوڈ ہو، اسپلش اسکرین کا بگ فکس اور گیم کا آغاز
window.addEventListener('DOMContentLoaded', () => {
    // 2 سیکنڈ بعد اسپلش اسکرین کو مکمل ہٹا کر گیم اسکرین ظاہر کرنا
    setTimeout(() => {
        const splashScreen = document.getElementById('splash-screen');
        const gameContainer = document.getElementById('game-container');
        
        if (splashScreen && gameContainer) {
            splashScreen.style.display = 'none';
            gameContainer.style.display = 'block';
        }
    }, 2000);
});

// 100 لیولز اور کوئز کی بنیادی لاجک یہاں لکھی جائے گی
const quizData = {
    totalLevels: 100,
    currentLevel: 1
};

console.log("Islamic Quiz 100 Levels Loaded Successfully!");
