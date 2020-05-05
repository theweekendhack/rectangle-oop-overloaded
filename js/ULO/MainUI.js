//This is a UI object
const MainUI = 
{

    lengthTextField : document.querySelector("#length"),
    widthTextField :document.querySelector("#width"),
    calculateButton : document.querySelector("#calculateButton"),
    answerContainer : document.querySelector("#container"),
    formControlWrapper : document.querySelectorAll(".form-control"),


    //This method is to populate the answer container
    populateAnswerContainer(rectangle)
    {
        this.answerContainer.innerHTML=`The area of the rectangle with the length ${rectangle.length} and width : ${rectangle.width} is ${rectangle.calArea()}`;
        this.answerContainer.innerHTML+=`<br>The permieter of the rectangle with the length ${rectangle.length} and width : ${rectangle.width} is ${rectangle.calPerimeter()}`;
    },
    


    errorAnimateElements(txtBox,erroDiv)
    {
        txtBox.style.border="1 solid red";
        erroDiv.style.color="red";
    
    },

    //Method will validatefields
    validateFields()
    {

        let hasError = false; //local (Function scope)// flag!!!! (Two possible values)

        for(let i=0; i<this.formControlWrapper.length; i++)
        {

            const textBox=this.formControlWrapper[i].querySelector("input");
            const label=this.formControlWrapper[i].querySelector("label");
            const errorMessage=this.formControlWrapper[i].querySelector("div");

            /*
                Another way you could have done the above is :

                const textBox=this.formControlWrapper.children[0];
                const label=this.formControlWrapper.children[1];
                const errorMessage=this.formControlWrapper[i].children[2];
            */

            //Test text box to see if the value is empty
            if(textBox.value=="")
            {
                    
                hasError=true;
                errorMessage.innerHTML=`You must enter a ${label.innerHTML}` 
                this.errorAnimateElements(textBox,errorMessage)
            }

            //This else  means user entered something
            else
            {

                //Test to see if the value entered is not a number
                if(isNaN(textBox.value))
                {
                    hasError=true;
                    errorMessage.innerHTML=`${label.innerHTML} must be a number`
                    this.errorAnimateElements(textBox,errorMessage) 
                }

                //else HAS to mean that your number valid
                else
                {
                    errorMessage.innerHTML="";
                }
            }
        }

        //This is to clear the previous generated answer container
        this.answerContainer.innerHTML="";

        return hasError ;
    }
    
}

export default  MainUI;