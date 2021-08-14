
    let nav = document.querySelector(".nav");
    
    let btn = document.querySelector('.menu-btn');
    btn.addEventListener('click', ()=>{
        if(nav.style.display == 'none')
    {
        nav.style.display = 'flex';
    }
    else{
        nav.style.display = 'none';
    }
    })
    

