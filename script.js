// Initiala inställningar
let currentLesson = 1;
const totalLessons = 5; // Antalet lektioner

// Hämtar elementen
const startButton = document.getElementById("startButton");
const lessonPopup = document.getElementById("lessonPopup");
const hashtag = document.getElementById("hashtag");
const lessonText = document.getElementById("lessonText");
const nextButton = document.getElementById("nextButton");

// Startar popup-lektioner
startButton.addEventListener("click", () => {
    lessonPopup.style.display = "flex";
    updateLessonContent();
});

// Visar nästa lektion
nextButton.addEventListener("click", () => {
    currentLesson++;
    if (currentLesson > totalLessons) {
        lessonPopup.style.display = "none"; // Stänger popup när lektionerna är klara
    } else {
        updateLessonContent();
    }
});

// Uppdaterar innehållet i pop-upen
function updateLessonContent() {
    hashtag.textContent = `#${currentLesson}`;
    lessonText.textContent = `Innehåll för lektion ${currentLesson}`;
}
