const cardModel = document.getElementById("card");
const closeElement = document.getElementById("close");
const cards = document.querySelectorAll(".card");
closeElement.onclick = () => cardModel.style.display = "none";
cards.forEach(ele => {
      ele.onclick = () => cardModel.style.display = "block";
});