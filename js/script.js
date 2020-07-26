const cardModel = document.getElementById("card");
const closeElement = document.getElementById("close");
const cards = document.querySelectorAll(".card");
const vitamin_A =  document.getElementById("vitaminA");
const vitamin_C =  document.getElementById("vitaminC");





closeElement.onclick = () => cardModel.style.display = "none";
cards.forEach(ele => {
      ele.onclick = () => cardModel.style.display = "block";
});

function fruits(vitaminA,vitaminC,calcium,iron,card_title){
   
      document.getElementById("calcium").innerHTML = `${calcium} <span>%</span>`;
     vitamin_C.innerHTML = `${vitaminC} <span>%</span>`;
     vitamin_A.innerHTML = `${vitaminA} <span>%</span>`; 
     document.getElementById("iron").innerHTML = `${iron} <span>%</span>`;
      document.getElementById("card-title").textContent = `${card_title}`;
}