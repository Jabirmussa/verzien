window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader-hidden");
    loader.addEventListener("trasintionend", ()=> {
      document.body.removeChild("loader");
    })
  })


const Header = document.querySelector ("header");
const menuBtn = document.querySelector(".menu-btn");
const body = document.querySelector("body");
window.addEventListener ("scroll", ()=>{
    
    if(window.scrollY>0){
        Header.classList.add("headeractive")
    }
    else {
        Header.classList.remove("headeractive")
    }
})
menuBtn.addEventListener("click", () => {
    document.body.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
    const logoMobile = document.querySelector(".logo-mobile");
    const quoteImage = document.querySelector(".quote-image");
    
    const handleVisibility = () => {
        const isMobile = window.innerWidth < 480;
        
        if (isMobile) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        logoMobile.style.display = 'block';
                    } else {
                        logoMobile.style.display = 'none';
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(quoteImage);
        } else {
            logoMobile.style.display = 'block'; 
        }
    };
    
    const resizeObserver = new ResizeObserver(handleVisibility);
    
    resizeObserver.observe(document.body); 
});

const observ = new IntersectionObserver ((entries)=>{
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
    });
})
const elements = document.querySelectorAll(".animation");
elements.forEach(element => observ.observe(element));


