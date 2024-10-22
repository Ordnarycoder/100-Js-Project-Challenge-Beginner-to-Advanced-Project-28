const result = document.getElementById("result")
const flip_button = document.getElementById("flip")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

flip_button.addEventListener("click", () => {
    let num = getRandomInt(1,2);
    if(num == 1){
        result.innerHTML = `<img src="images/heads.png">`;
    } else if (num == 2){
        result.innerHTML = `<img src="images/tails.png">`;
    }
})
