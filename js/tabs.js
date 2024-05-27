function openTab(evt, tabName) {
    var tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active-tab-button", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-tab-button";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});