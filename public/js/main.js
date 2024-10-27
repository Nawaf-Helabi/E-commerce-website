window.addEventListener("scroll",() => {
    if (window.scrollY>100) {
        hid.classList.add('scroll-down')
    } else {
         hid.classList.remove('scroll-down')
    }
  
}
)