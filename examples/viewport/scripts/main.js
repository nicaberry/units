"use strict";
window.onload = (e) => {
    let oneDuck = document.querySelector(".oneDuck");
    let twoDucks = document.querySelector(".twoDucks");
    let threeDucks = document.querySelector(".threeDucks");
    let ducksArray = [oneDuck, twoDucks, threeDucks];

    let vwOneDuck = document.querySelector("#vwOneDuck");
    let vwTwoDucks = document.querySelector("#vwTwoDucks");
    let vwThreeDucks = document.querySelector("#vwThreeDucks");
    let vwAllDucks = document.querySelector("#vwAllDucks");
    let inputDucksArray = [vwOneDuck,vwTwoDucks, vwThreeDucks, vwAllDucks];

    // origin size
    function clickBtnOriginSize(btnId, ducksArray, inputDucksArray) {
        let btn = document.querySelector(btnId);
        btn.onclick = (e) => {
            ducksArray.forEach(item => {
                item.style.fontSize = "1vw";
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
                        item.style.fontSize = value +"vw";
                    })
                } else {
                    duck.style.fontSize = value +"vw";
                }
            }
        }
    }

    clickBtnOriginSize("#btnOriginSize", ducksArray, inputDucksArray);
    clickBtnForSetSizeDucks("#btnVwOneDuck", vwOneDuck, oneDuck);
    clickBtnForSetSizeDucks("#btnVwTwoDucks", vwTwoDucks, twoDucks);
    clickBtnForSetSizeDucks("#btnVwThreeDucks", vwThreeDucks, threeDucks);
    clickBtnForSetSizeDucks("#btnVwAllDucks", vwAllDucks, ducksArray);
}