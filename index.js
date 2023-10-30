const section = document.querySelector("section"),
overlay  = document.querySelector(".overlay"),
submitBtn = document.querySelector(".submit-btn"),
closeBtn = document.querySelector(".close-btn"); 

submitBtn.addEventListener("click", () => section.classList.add("active"))
closeBtn.addEventListener("click", () => 
section.classList.remove("active"));