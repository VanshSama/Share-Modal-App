const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Modal Open Function
const openModal = function(){
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// Modal Close Function
const closeModal = function(){
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}