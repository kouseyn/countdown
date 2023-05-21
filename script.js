// 計算する日付を設定（2024年1月1日）
var countDownDate = new Date("January 1, 2024 00:00:00").getTime();

// カウントダウンを更新する関数
function updateCountdown() {

// 現在の日時を取得
var now = new Date().getTime();

// カウントダウンまでの時間を計算
var distance = countDownDate - now;

// 日、時、分、秒を計算
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// カウントダウンを更新
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

// カウントダウンが終了した場合、メッセージを表示してカウントダウンを停止
if (distance < 0) {
clearInterval(countdown);
document.getElementById("countdown-container").innerHTML = "Happy New Year!";
}
}

