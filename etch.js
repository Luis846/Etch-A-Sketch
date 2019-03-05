const clear = document.getElementById('clear');
const ngridC = document.getElementById('newC');
const ngridB = document.getElementById('newB')
const container = document.getElementById('container');




let strgrid = 16;

clear.addEventListener('click', clearGrid);
ngridC.addEventListener('click', gridChange);
ngridB.addEventListener('click', gridChange2);


function starterGrid(dimensions){
    for(let i = 0; i < dimensions * dimensions; i++){
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mouseover', colorChangeColor);
        grid.style.width = 450/dimensions + 'px';
        grid.style.height = 450/dimensions + 'px';
        grid.style.boxShadow = '0px 0px 0px 1px #000 inset';
        grid.style.display = 'inline-block';
        grid.style.float ='left'
        container.appendChild(grid);

    }
}

function starterGrid2(dimensions){
    for(let i = 0; i < dimensions * dimensions; i++){
        let grid2 = document.createElement('div');
        grid2.classList.add('grid');
        grid2.addEventListener('mouseover', colorChangeColor2);
        grid2.style.width = 450/dimensions + 'px';
        grid2.style.height = 450/dimensions + 'px';
        grid2.style.boxShadow = '0px 0px 0px 1px #000 inset';
        grid2.style.display = 'inline-block';
        grid2.style.float ='left'
        container.appendChild(grid2);

    }
}

function colorChangeColor2(){ 
   let random = Math.floor(Math.random() * 256);
   let color = `rgb(${random}, ${random}, ${random})`;  
    this.style.backgroundColor = color;
}

function colorChangeColor(){ 
    let random = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
    (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';   
    this.style.backgroundColor = random;
}

function clearGrid(){
    let nogrid = document.querySelectorAll('.grid');
    for(let i = 0; i < nogrid.length; i++){
        nogrid[i].style.backgroundColor = 'rgba(0,0,0,0.3)';
        nogrid[i].classList.remove();
    }
}

function gridChange(){
    while(container.firstChild || container.lastChild){
        container.removeChild(container.firstChild);
        container.removeChild(container.lastChild);
    }

    let dimensions = prompt('Color Mode: Enter a Grid Size between 1 - 64');

    if(isNaN(dimensions)) {
        alert('Try again, thats not a number pal');
    }

    else if(dimensions < 1 || dimensions > 64){
        alert('No, a number BETWEEN 1 and 64');
    }else {
        starterGrid(dimensions);
    }
}

function gridChange2(){
    while(container.firstChild || container.lastChild){
        container.removeChild(container.firstChild);
        container.removeChild(container.lastChild);
    }

    let dimensions = prompt('BlackMode: Enter a Grid Size between 1 - 64');

    if(isNaN(dimensions)) {
        alert('Try again, thats not a number pal');
    }

    else if(dimensions < 1 || dimensions > 64){
        alert('No, a number BETWEEN 1 and 64');
    }else {
        starterGrid2(dimensions);
    }
}
