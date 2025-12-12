
const elementet = document.querySelectorAll("ul.item li");
const ngjyrat = ["red", "green", "blue", "orange"];
elementet.forEach((el, index) => {
    el.style.color = ngjyrat[index % ngjyrat.length];
});