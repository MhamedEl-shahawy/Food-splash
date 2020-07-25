const cardModel = document.getElementById("card");
const closeElement = document.getElementById("close");
const cards = document.querySelectorAll(".card");
const vitamin_A =  document.getElementById("vitaminA");
const vitamin_C =  document.getElementById("vitaminC");
const iron =  document.getElementById("iron");
const calcium =  document.getElementById("calcium");
const card_title = document.getElementById("card-title");




closeElement.onclick = () => cardModel.style.display = "none";
cards.forEach(ele => {
      ele.onclick = () => cardModel.style.display = "block";
});

function fruits(vitaminA,vitaminC,calcium,iron,card_title){
   
     calcium.innerHTML = `${calcium} <span>%</span>`;
     vitamin_C.innerHTML = `${vitaminC} <span>%</span>`;
     vitamin_A.innerHTML = `${vitaminA} <span>%</span>`; 
      iron.innerHTML = `${iron} <span>%</span>`;
      card_title.innerHTML = `${card_title}`;
}