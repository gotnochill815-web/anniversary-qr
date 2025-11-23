const currentDir = window.location.pathname.replace(/\/[^\/]*$/, "/");
const targetUrl = window.location.origin + currentDir + "player.html";
document.getElementById("openPlayer").href = targetUrl;

document.getElementById("downloadQR").addEventListener("click", () => {
    const img = document.getElementById("qrImage");
    const a = document.createElement("a");
    a.href = img.src;
    a.download = "Anniversary-QR.png";
    a.click();
});
document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "qr.png";
    link.download = "Anniversary-QR.png";
    link.click();
});
