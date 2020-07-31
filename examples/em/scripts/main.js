"use strict";
window.onload = (e) => {
    let containerForDucks = document.querySelector(".containerForDucks");
    let oneDuck = document.querySelector(".oneDuck");
    let twoDucks = document.querySelector(".twoDucks");
    let threeDucks = document.querySelector(".threeDucks");
    let ducksArray = [oneDuck, twoDucks, threeDucks];

    let pxContainerForDucks = document.querySelector("#pxContainerForDucks");
    let emOneDuck = document.querySelector("#emOneDuck");
    let emTwoDucks = document.querySelector("#emTwoDucks");
    let emThreeDucks = document.querySelector("#emThreeDucks");
    let emAllDucks = document.querySelector("#emAllDucks");
    let inputDucksArray = [pxContainerForDucks, emOneDuck, emTwoDucks, emThreeDucks, emAllDucks];

     // html size
     function clickBtnHTMLSize() {
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
                item.style.fontSize = "1em";
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
                        item.style.fontSize = value +"em";
                    })
                } else {
                    duck.style.fontSize = value +"em";
                }
            }
        }
    }

    clickBtnHTMLSize()
    clickBtnOriginSize("#btnOriginSize", containerForDucks, ducksArray, inputDucksArray);
    clickBtnForSetSizeDucks("#btnEmOneDuck", emOneDuck, oneDuck);
    clickBtnForSetSizeDucks("#btnEmTwoDucks", emTwoDucks, twoDucks);
    clickBtnForSetSizeDucks("#btnEmThreeDucks", emThreeDucks, threeDucks);
    clickBtnForSetSizeDucks("#btnEmAllDucks", emAllDucks, ducksArray);
}