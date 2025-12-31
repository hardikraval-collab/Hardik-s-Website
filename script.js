function enableSound() {
    const video = document.getElementById("myVideo");

    video.muted = false;
    video.volume = 1.0;
    video.play();

    document.getElementById("soundBtn").innerText = "🔊 Sound Enabled";
}
