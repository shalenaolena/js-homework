
    // --- Task 1 ----------------------------------done-------
    //open
    
    // let newWindow = window.open("/", "newWindow", "width=100,height=150,left=150,top=100");

    // function changeSize () {
    //     newWindow.resizeTo(500,500)
    // }

    // function moveTo (){
    //     newWindow.moveBy(200,200)
    // }

    // function windowClose () {
    //     newWindow.close()
    // }

    // setTimeout(changeSize, 2000);
    // setTimeout(moveTo, 4000);
    // setTimeout(windowClose, 6000);


    // --- Task 2 -----------------------------------------
    function textChange() {
        const pText = document.getElementById("text");
        pText.style.fontFamily = "Comic Sans MS";
        pText.style.color = "orange";
        pText.style.fontSize = "20px";
    }

    document.getElementById("buttonChange").addEventListener("click", textChange);

    // --- Task 3 -----------------------------------------
    
    function bgBlue(){
        document.body.style.background = "rgb(58, 171, 176)";
    }

    function bgPink(){
        document.body.style.background = "#ee2547";
    }
    function bgBroun(){
        document.body.style.background = "#ae7f47";
    }
    function bgLink(){
        document.body.style.background = "#eaf147";
    }
    function bgLink(){
        document.body.style.background = "#eaf147";
    }
    function bgWhite() {
        document.body.style.background = "white";
    }

    const elementsTask3 = document.getElementById("task3").children;
    elementsTask3[0].addEventListener("click", bgBlue);

    elementsTask3[1].addEventListener("dblclick", bgPink);

    elementsTask3[2].addEventListener("mousedown", bgBroun);
    elementsTask3[2].addEventListener("mouseup", bgWhite);

    elementsTask3[3].addEventListener("mouseover", bgLink);
    elementsTask3[3].addEventListener("mouseout", bgWhite);
    

    // --- Task 4 -----------------------------------------

    const elemSelect = document.querySelector("#listTask4");
    const btn4 = document.getElementById("deleteOptionBtn");
    console.log(elemSelect[0]);
   function removeElem () {
   

   btn4.addEventListener("click", removeElem);
    
    


    // --- Task 5 -----------------------------------------
    const btnTask5 = document.getElementById("btnTask5");
    const textPlace = document.querySelector(".task5_text");
    
    function pressedBtn() {
        textPlace.insertAdjacentHTML('afterend', '<li>I was pressed!</li>');
    }
    function mouseOnBtn() {
        textPlace.insertAdjacentHTML('afterend', '<li>Mouse on me!</li>');
    }
    function mouseOutBtn() {
        textPlace.insertAdjacentHTML('afterend', '<li>Mouse is not on me!</li>');
    }

    btnTask5.onclick = pressedBtn;
    btnTask5.onmouseover = mouseOnBtn;
    btnTask5.onmouseout = mouseOutBtn;

    // --- Task 6 -----------------------------------------
    // --- Task 7 -----------------------------------------