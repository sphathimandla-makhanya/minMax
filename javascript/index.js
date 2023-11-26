let arrayNum =[5, 8,6,12,3,1,0.2,-1]
function minMax(array) {
    // declearing first position values of minimum and maximum array values
    let min = array[0];
    let max = array[0];

    //for loop to look for minimum and maximum values in th array
    for (let i = 0; i < array.length; i++) {
        //if statements to check for minimum and maximum numbers in the array
        if (array[i]<min) {
            min=array[i];
        }
        if (array[i]>max) {
            max=array[i];
        }
    }

    return {min, max};
}

let x = minMax(arrayNum)

//adding buttons and event listners
let viewer = document.querySelector('[data-Max]')
let viewer1 = document.querySelector('[data-Min]')

let btn = document.querySelector('[data-btn1]')
btn.addEventListener('click', function minMax() {
    viewer.value=x.max;
    viewer1.value=x.min;
})

let btn1 = document.querySelector('[data-btn2]')
btn1.addEventListener('click', function minMax() {
    viewer.value="";
    viewer1.value="";
})
























