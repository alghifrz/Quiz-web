// Get modal elements
const modal = document.getElementById("myModal");
const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close");

// Open modal when the "Mulai Kuis" button is clicked
openBtn.addEventListener("click", () => {
    modal.style.display = "flex"; // Show the modal
});

// Close modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Hide the modal
});

// Close modal if user clicks outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function login() {
    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();

    // Check if either field is empty
    if (!nama || !nim) {
        showPopup(); // Show validation popup if fields are empty
        return;
    }

    // Show login success popup if fields are filled
    showLoginPopup();
}

function showPopup() {
    document.getElementById("popup").style.display = "flex"; // Show the validation popup
}

function closePopup() {
    document.getElementById("popup").style.display = "none"; // Close the validation popup
}

function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "flex"; // Show login success popup
}

function startQuiz() {
    // You can redirect to the quiz page or load the quiz content
    alert("Lanjut ke Quiz Soal 1");
    // For example, you can redirect to another HTML page for the quiz
    // window.location.href = "quiz.html"; 
}


