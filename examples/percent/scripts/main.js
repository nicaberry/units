"use strict";
window.onload = (e) => {
    let containerForDucks = document.querySelector(".containerForDucks");
    let oneDuck = document.querySelector(".oneDuck");
    let twoDucks = document.querySelector(".twoDucks");
    let threeDucks = document.querySelector(".threeDucks");
    let ducksArray = [oneDuck, twoDucks, threeDucks];

    let pxContainerForDucks = document.querySelector("#pxContainerForDucks");
    let percentOneDuck = document.querySelector("#percentOneDuck");
    let percentTwoDucks = document.querySelector("#percentTwoDucks");
    let percentThreeDucks = document.querySelector("#percentThreeDucks");
    let percentAllDucks = document.querySelector("#percentAllDucks");
    let inputDucksArray = [pxContainerForDucks, percentOneDuck, percentTwoDucks, percentThreeDucks, percentAllDucks];

     // Container size
     function clickBtnContainerSize() {
        let btn = document.querySelector("#btnPxContainerForDucks");
        btn.onclick = (e) => {
            let value = pxContainerForDucks.value;
            if (isNaN(value)) {
                pxContainerForDucks.value = "";
                pxContainerForDucks.placeholder = "необходимо ввести число!";
            } else {
                containerForDucks.style.fontSize = value + "px";
            }
        }
    }

    // origin size
    function clickBtnOriginSize(btnId, container, ducksArray, inputDucksArray) {
        let btn = document.querySelector(btnId);
        btn.onclick = (e) => {
            container.style.fontSize = "16px";

            ducksArray.forEach(item => {
                item.style.fontSize = "100%";
            });

            inputDucksArray.forEach(item => {
                item.value = "";
            });
        }
    }
   
    // size every ducks
    function clickBtnForSetSizeDucks(btnId, inputDuck, duck) {
        let btnClick = document.querySelector(btnId);
        btnClick.onclick = (e) => {
            let value = inputDuck.value;
            if (isNaN(value)) {
                inputDuck.value = "";
                inputDuck.placeholder = "необходимо ввести число!";
            } else {
                if(Array.isArray(duck)) {
                    duck.forEach(item => {
                        item.style.fontSize = value +"%";
                    })
                } else {
                    duck.style.fontSize = value +"%";
                }
            }
        }
    }

    clickBtnContainerSize()
    clickBtnOriginSize("#btnOriginSize", containerForDucks, ducksArray, inputDucksArray);
    clickBtnForSetSizeDucks("#btnPercentOneDuck", percentOneDuck, oneDuck);
    clickBtnForSetSizeDucks("#btnPercentTwoDucks", percentTwoDucks, twoDucks);
    clickBtnForSetSizeDucks("#btnPercentThreeDucks", percentThreeDucks, threeDucks);
    clickBtnForSetSizeDucks("#btnPercentAllDucks", percentAllDucks, ducksArray);
}