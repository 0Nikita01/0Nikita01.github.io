function isVisible(elem) 
{
    let coords = elem.getBoundingClientRect();
  
    let windowHeight = document.documentElement.clientHeight;
 
    let topVisible = coords.top > 0 && coords.top + coords.top/8 < windowHeight;
  
    let bottomVisible = coords.bottom <= windowHeight && coords.bottom >= 0;
  
    return topVisible || bottomVisible;
}

