
document.body.style.height = 100000

let square = document.createElement('div');
document.body.appendChild(square);
let size = 100;
square.document.width = 100 + '%';
square.document.position = fixed;
square.document.left = 0;
square.document.top = 0;
square.document.backgroundColor = green;
square.document.height = size + 'px';
window.addEventListener('scroll', function(changeHeight){
    size += 10
    if (grow == true){
        size +=5
        square.style.height = size + 'px';
    }
    else {
        size -= 5
        square.style.height = size + 'px';
    }
    if (size >= this.window.innerWidth/2){
         grow = false
         square.document.backgroundColor = red;
     }   
    else if(size == 0) {
        grow = true;
    }
    
})
