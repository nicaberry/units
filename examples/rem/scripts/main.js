"use strict";
window.onload = (e) => {
    let containerForDucks = document.querySelector(".containerForDucks");
    let oneDuck = document.querySelector(".oneDuck");
    let twoDucks = document.querySelector(".twoDucks");
    let threeDucks = document.querySelector(".threeDucks");
    let ducksArray = [oneDuck, twoDucks, threeDucks];

    let root = document.querySelector(":root");
    let pxRoot = document.querySelector("#pxRoot");
    let remOneDuck = document.querySelector("#remOneDuck");
    let remTwoDucks = document.querySelector("#remTwoDucks");
    let remThreeDucks = document.querySelector("#remThreeDucks");
    let remAllDucks = document.querySelector("#remAllDucks");
    let inputDucksArray = [pxRoot, remOneDuck, remTwoDucks, remThreeDucks, remAllDucks];

     // html size
     function clickBtnHTMLSize() {
        let btn = document.querySelector("#btnPxRoot");
        btn.onclick = (e) => {
            let value = pxRoot.value;
            if (isNaN(value)) {
                pxRoot.value = "";
                pxRoot.placeholder = "необходимо ввести число!";
            } else {
                root.style.fontSize = value + "px";
            }
        }
    }

    // origin size
    function clickBtnOriginSize(btnId, container, ducksArray, inputDucksArray) {
        let btn = document.querySelector(btnId);
        btn.onclick = (e) => {
            root.style.fontSize = "16px";

            ducksArray.forEach(item => {
                item.style.fontSize = "1rem";
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
                        item.style.fontSize = value +"rem";
                    })
                } else {
                    duck.style.fontSize = value +"rem";
                }
            }
        }
    }

    clickBtnHTMLSize()
    clickBtnOriginSize("#btnOriginSize", containerForDucks, ducksArray, inputDucksArray);
    clickBtnForSetSizeDucks("#btnRemOneDuck", remOneDuck, oneDuck);
    clickBtnForSetSizeDucks("#btnRemTwoDucks", remTwoDucks, twoDucks);
    clickBtnForSetSizeDucks("#btnRemThreeDucks", remThreeDucks, threeDucks);
    clickBtnForSetSizeDucks("#btnRemAllDucks", remAllDucks, ducksArray);
}