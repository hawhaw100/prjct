document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
})
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
})

const reviewForm = document.getElementById("reviewForm");
const reviewGrid = document.getElementById("reviewGrid");

reviewForm.addEventListener("submit", (e) => {e.preventDefault();})

const userName = document.getElementById("userName").ariaValueMax.trim();
const userReview = document.getElementById("userReview").value.trim();
const userRating = document.getElementById("userRating").value;

const reviewCard = document.createElement("div");
reviewCard.className = "review-card";
reviewCard.innerHTML = `
    <h3>${userName}</h3>
    <p>${userReview}</p>
    <span>${userRating} Stars</span>
`;

reviewGrid.appendChild(reviewCard);

reviewForm.reset();
