"use strict";
window.onload = (e) => {
    let containerForDucks = document.querySelector(".containerForDucks");
    let oneDuck = document.querySelector(".oneDuck");
    let twoDucks = document.querySelector(".twoDucks");
    let threeDucks = document.querySelector(".threeDucks");
    let ducksArray = [oneDuck, twoDucks, threeDucks];

    let pxContainerForDucks = document.querySelector("#pxContainerForDucks");
    let pxOneDuck = document.querySelector("#pxOneDuck");
    let pxTwoDucks = document.querySelector("#pxTwoDucks");
    let pxThreeDucks = document.querySelector("#pxThreeDucks");
    let pxAllDucks = document.querySelector("#pxAllDucks");
    let inputDucksArray = [pxContainerForDucks, pxOneDuck, pxTwoDucks, pxThreeDucks, pxAllDucks];

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
        container.style.fontSize = "16px";
        btn.onclick = (e) => {
            ducksArray.forEach(item => {
                item.style.fontSize = "16px";
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
                        item.style.fontSize = value +"px";
                    })
                } else {
                    duck.style.fontSize = value +"px";
                }
            }
        }
    }

    clickBtnContainerSize();
    clickBtnOriginSize("#btnOriginSize", containerForDucks, ducksArray, inputDucksArray);
    clickBtnForSetSizeDucks("#btnPxOneDuck", pxOneDuck, oneDuck);
    clickBtnForSetSizeDucks("#btnPxTwoDucks", pxTwoDucks, twoDucks);
    clickBtnForSetSizeDucks("#btnPxThreeDucks", pxThreeDucks, threeDucks);
    clickBtnForSetSizeDucks("#btnPxAllDucks", pxAllDucks, ducksArray);
}