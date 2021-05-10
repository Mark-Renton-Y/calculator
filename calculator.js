function main(){

    const plus = (a, b) => a + b;
    const minus = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    const screen = document.querySelector("#screen p");
    const grid = [
        [7, 8, 9, "+"],
        [4, 5, 6, "-"],
        [1, 2, 3, "/"],
        [".", 0, "="],
        ["C"]
    ];

    let memory = null;
    let action = null;

    for(row of grid){
        for(col of row){
            const val = col;
            const btn = document.createElement("button");
            btn.innerText = val;

            let onClick = () => {};

            switch (val) {
                case "C":
                    onClick = () => {
                    memory = null;
                    screen.innerText = "";
                };
                break;
                case "+":
                case "-":
                case "*":
                case "/":
                    onClick = () => {
                        action = val;
                        memory = Number.parseFloat(screen.innerText);
                        screen.innerText = "";
                        document.querySelector("#screen span").innerText = action;
                    };
                    break;
                case "=":
                    onClick = () => {
                        if(memory){
                            const a = memory;
                            const b = Number.parseFloat(screen.innerText);
                            switch (action) {
                                case "+":
                                    screen.innerText = plus(a, b);
                                    break;
                                case "-":
                                    screen.innerText = minus(a, b);
                                    break;
                                case "*":
                                    screen.innerText = multiply(a, b);
                                    break;
                                case "/":
                                    screen.innerText = divide(a, b);
                                    break;
                            
                                default:
                                    break;
                            }
                            action = null;
                            document.querySelector("#screen span").innerText = null;
                            memory = null;
                        }
                    };
                    break;

                case ".":
                    onClick = () => {
                        if(screen.innerText.indexOf(".") < 0){
                            screen.innerText += val;
                        }
                    };
                    break;
        
                default:
                    onClick = () => {
                        screen.innerText += val;
                    };
                    break;
            }
            btn.addEventListener("click", onClick);
            document.getElementById("buttons").appendChild(btn);
            
        }
    }
}
main();