

//This is a UI object
const MainUI = 
{

    lengthTextField : document.querySelector("#length"),
    widthTextField :document.querySelector("#width"),
    calculateButton : document.querySelector("#calculateButton"),
    answerContainer : document.querySelector("#container"),
    formControlWrapper : document.querySelectorAll(".form-control"),

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

    //DRY
    validateFields()
    {

        let hasError = false; //local (Function scope)// flag!!!! (Two possible values)

        for(let i=0; i<this.formControlWrapper.length; i++)
        {
            const textBox=this.formControlWrapper[i].querySelector("input");
            const label=this.formControlWrapper[i].querySelector("label");
            const errorMessage=this.formControlWrapper[i].querySelector("div");
            

            if(textBox.value=="")
            {
                    
                hasError=true;
                errorMessage.innerHTML=`You must enter a ${label.innerHTML}` 
                this.errorAnimateElements(textBox,errorMessage)
            }

            //This else user entered something
            else
            {

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

        this.answerContainer.innerHTML="";

    

        return hasError ;
    }




    

}

export default  MainUI;