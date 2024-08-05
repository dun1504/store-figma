function startCountdown(duration) {
    let endTime = Date.now() + duration;
    let interval = setInterval(() => {
        let now = Date.now();
        let remainingTime = endTime - now;
        
        if (remainingTime <= 0) {
            clearInterval(interval);
            remainingTime = 0;
        }
        
        let milliseconds = Math.floor((remainingTime % 1000) / 10);
        let seconds = Math.floor((remainingTime / 1000) % 60);
        let minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        document.getElementById('milliseconds').textContent = String(milliseconds).padStart(2, '0');
    }, 10);
}

// Đặt thời gian đếm ngược ở đây (ví dụ: 1 giờ, 30 phút, 45 giây, 500 mili giây)
const duration = (100 * 60 * 60 * 1000) + (30 * 60 * 1000) + (45 * 1000) + 500; // Thời gian đếm ngược bằng mili giây
startCountdown(duration);