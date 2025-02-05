function switchStylesheet() {
    var currentStyleSheet = document.getElementById("backgrounddefault");
    currentStyleSheet.disabled = true;
    var newStyleSheet = document.createElement("link");
    newStyleSheet.rel = "stylesheet";
    newStyleSheet.href = "loginpage.css";
    newStyleSheet.id = "loginStylesheet";
    document.head.appendChild(newStyleSheet);
}
