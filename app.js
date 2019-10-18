//konstanter
const innhold = document.getElementById('innhold');
const resetKnapp = document.createElement('button');
const elementer = document.getElementsByClassName("smadiv");

//container
const container = document.createElement('div');
container.id = 'container';
innhold.appendChild(container);
createGrids(16);

function createGrids(antall) {
    let i = 0;
    while (i <= antall*antall-1){
        let element = document.createElement('div');
        element.id = i;
        element.classList.add("smadiv");
        element.addEventListener("mouseover", function (event) {
            element.style.backgroundColor = getRandomColor();
        });
        container.appendChild(element);
        i++;
    }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

//resetknapp
resetKnapp.style.height = '20px';
resetKnapp.textContent = "Reset";
const reset = () => {
    for (let i = 0; i < elementer.length; i++){
        elementer[i].style.backgroundColor = null;
    }
};
resetKnapp.addEventListener('click', reset);


innhold.appendChild(resetKnapp);