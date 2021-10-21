const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    displayBody: document.querySelector('.body'),
    startClick: document.querySelector('.start_button'),
    stopClick: document.querySelector('.stop_button'),
}

refs.startClick.addEventListener('click', onStartButtonClick);
// refs.stopClick.addEventListener('click', onStopButtonClick);

// const bodyColor = colors.map((color)=>color);

// console.log(bodyColor);

function onStartButtonClick() {
    colors.map((color) =>
    refs.displayBody.style.backgroundColor = color);
    
}

// console.log(onStartButtonClick);

// setInterval(function () { 
//     const bodyBgChange = Math.floor(Math.random() * colors.length);
//     const selectedcolor = colors[bodyBgChange];
//     refs.displayBody.style.backgroundColor=selectedcolor);
// }, 1000);


// function onStopButtonClick() {
    
// }

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// setInterval(bodyColor, 1000);
   

