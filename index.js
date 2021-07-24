function imgChanger(anything){
    document.querySelector('.shadImg').src = anything;
}

function colorChanger(color){
    const bg = document.querySelectorAll('.bg');
    const bgc = document.querySelectorAll('.color')
    for (var i = 0; i < bg.length; i++){
        bg[i].style.background = color;
        bgc[i].style.color = color;
    }

  
    
}