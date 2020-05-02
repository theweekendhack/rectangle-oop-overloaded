const MainUI = 
{

    lengthTextField : document.querySelector("#length"),
    widthTextField :document.querySelector("#width"),
    calculateButton : document.querySelector("#calculateButton"),
    answerContainer : document.querySelector("#container"),


    populateAnswerContainer(rectangle)
    {
        this.answerContainer.innerHTML=`The area of the rectangle with the length ${rectangle.length} and width : ${rectangle.width} is ${rectangle.calArea()}`;
        this.answerContainer.innerHTML+=`<br>The permieter of the rectangle with the length ${rectangle.length} and width : ${rectangle.width} is ${rectangle.calPerimeter()}`;
    },

    validateField()
    {

    }
    

}

export default  MainUI;