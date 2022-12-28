const colors = [
  '#4CAF50',
  '#FF9800',
];

const CHANGE_COLOR = 100;

const refs = {
    displayBody: document.querySelector('.body'),
    startClick: document.querySelector('.start_button'),
    stopClick: document.querySelector('.stop_button'),
}

refs.startClick.addEventListener('click', onStartButtonClick);


function onStartButtonClick() {
  const intervalId = setInterval(() => {
    
    const bodyBgChange = Math.floor(Math.random() * colors.length);
    const selectedcolor = colors[bodyBgChange];
    refs.displayBody.style.backgroundColor = selectedcolor;
    console.log("set interval")

    
    refs.startClick.disabled=true;
    
  }, CHANGE_COLOR);

  refs.stopClick.addEventListener('click', () => {
    clearInterval(intervalId);
    refs.startClick.disabled=false;
  });
}



   

