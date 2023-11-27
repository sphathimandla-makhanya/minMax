
function min(a, b) {
    return Math.min(a, b);
}


function max(a, b) {
    return Math.max(a, b)
}


let btn = document.querySelector('[data-btn1]')
btn.addEventListener('click', function() {
    let viewer = document.querySelector('[data-Max]').value
    let viewer1 = document.querySelector('[data-Min]').value  
    let viewer2 = document.querySelector('[data-answer]')
   viewer2.value= min(viewer, viewer1)
})

let btn1 = document.querySelector('[data-btn2]')
btn1.addEventListener('click', function () {
    let viewer = document.querySelector('[data-Max]').value
    let viewer1 = document.querySelector('[data-Min]').value  
    let viewer2 = document.querySelector('[data-answer]')
   viewer2.value= max(viewer, viewer1)
})

