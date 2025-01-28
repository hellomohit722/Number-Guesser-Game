const form = document.getElementById('form');
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const start = document.getElementById("start");
const result = document.querySelector(".result");
const hint = document.querySelector(".hint");

// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     console.log("Submitted");
// })

(function a() {

    let random;

    function randomNumber() {
        random = Math.floor(Math.random() * 100) + 1;
    }

    randomNumber();

    let count = 0;

    let arr = [];

    let str = '';

    submit.addEventListener("click", () => {
        let inputVal = parseInt(input.value);
        if (count === 7) {
            result.textContent = "You lose";
            alert("Game Over" + " number was " + random);
            return;
        }
        if (inputVal) {
            if (inputVal == random) {
                result.textContent = "You won!";
                arr.push(inputVal);
                hint.innerHTML = "Your Gusess : " + str + " " + inputVal.toString() + "  and you took " + ++count + " guesses";
                start.disabled = false;;
                submit.disabled = true;
                return;
            }
            else if (random - inputVal < 0) {
                count++;
                arr.push(inputVal);
                // str = str + " " + inputVal.toString();
                result.innerHTML = "Too High!"
                hint.innerHTML = "Your Gusess : " + arr.join(', ');
            }
            else {
                count++;
                arr.push(inputVal);
                // str = str + " " + inputVal.toString();
                result.innerHTML = "Too Low!"
                hint.innerHTML = "Your Gusess : " + arr.join(', ');
            }
            input.value = '';
        }
    });

    start.addEventListener("click", () => {
        result.textContent = "";
        hint.innerHTML = "";
        count = 0;
        str = '';
        randomNumber();
        start.disabled = true;
        submit.disabled = false;
    });
})();
