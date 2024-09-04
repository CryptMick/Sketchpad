const mainContainer = document.querySelector("#main-contaner");
const container = document.createElement("div");
container.setAttribute("id", "container");
mainContainer.appendChild(container);

// grid() creates grid factored by user input
function grid(input) {
    if (input > 100) {
        alert("Number of grid cannot be greater than 100");
        input = 0;
    }

    let i = 1;
    while (i <= input) {
        let sketchContainer = document.createElement("div");
        sketchContainer.setAttribute("id", "sub-container");

        for (let i = 1; i <= input; i++) {
            let grid = document.createElement("div");
            grid.classList.add("grid"); 
            sketchContainer.appendChild(grid);
            console.log("couple wt")
    };
    console.log("It ran");
    container.appendChild(sketchContainer);
    i++;
    }

    // Grids background colour change on hover
    let allGrid = document.querySelectorAll(".grid");
    allGrid.forEach((item) => {
        let i = Math.floor(Math.random()) * 255;
        let j = Math.floor(Math.random()) * 255;
        let k = Math.floor(Math.random()) * 255;
        item.style.backgroundColor = `RGB(${i}, ${j}, ${k})`;
        if (i === 0 && j === 0 && k === 0) {
            item.onmouseover = () => {
                let i = 255;
                let j = 255;
                let k = 255;
                item.style.backgroundColor = `RGB(${i}, ${j}, ${k})`;  
                if (i === 255 && j === 255 && k === 255) {
                    item.onmouseover = () => {
                        let i = Math.floor(Math.random() * 255);
                        let j = Math.floor(Math.random() * 255);
                        let k = Math.floor(Math.random() * 255);
                        console.log(i);
                        console.log(j);
                        console.log(k);
                        item.style.backgroundColor = `RGB(${i}, ${j}, ${k})`;
                    }
                }
            } 
        }
});


}

const createGrid = mainContainer.querySelector("#choose");
createGrid.onclick = () => {input = parseInt(prompt("What is the number of grid you want?")); grid(input)};
const reset = mainContainer.querySelector("#reset");
reset.onclick = () => {
    location.reload();
}