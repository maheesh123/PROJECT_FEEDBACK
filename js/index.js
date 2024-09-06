// const ratingEls = document.querySelectorAll(".rating");
// const btnEl = document.getElementById("btn");

// const containerEl = document.getElementById("container");

// let selectedRating = "";

// ratingEls.forEach((ratingEl) => {
//   ratingEl.addEventListener("click", (event) => {
//     removeActive();
//     selectedRating =
//       event.target.innerText || event.target.parentNode.innerText;
//     event.target.classList.add("active");
//     event.target.parentNode.classList.add("active");
//   });
// });

// btnEl.addEventListener("click", () => {
//   if (selectedRating !== "") {
//     containerEl.innerHTML = `
//         <strong>Thank you!</strong>
//         <br>
//         <br>
//         <strong>Feedback: ${selectedRating}</strong>
//         <p>We'll use your feedback to improve our customer support.</p>
//         `;
//   }
// });

// function removeActive() {
//   ratingEls.forEach((ratingEl) => {
//     ratingEl.classList.remove("active");
//   });
// }







const ratingEls = document.querySelectorAll(".rating");
const btnE1 = document.getElementById("btn")
const containerEl =document.getElementById("container")
let selectedRating ="";


ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",  (event)=>{
        removeActive()
        selectedRating = event.target.innerText || event.target.parentNode.innerText
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
})


btnE1.addEventListener("click", ()=>{
    if(selectedRating!==""){
      containerEl.innerHTML = `<strong>ThankYou<strong>
      <br>
      <br>
      <strong>Feedback : ${selectedRating}<strong>
      <p> We use your feedback to improve our customer support </p>
      `
    }
})



function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active")
    })
}
 