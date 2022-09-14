document.querySelector('.cr').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.aside').classList.toggle('sidebargo');
    if( document.querySelector('.aside').classList.contains('sidebargo'))
    {
        document.querySelector('.hm').style.display='inline';
        document.querySelector('.cr').style.display='none';
    }
    else
    {
        document.querySelector('.hm').style.display='none';
        setTimeout(() => {
            document.querySelector('.cr').style.display='inline';
            
        }, 400);
        

    }
})