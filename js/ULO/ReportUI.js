const ReportUI=
{

    container : document.querySelector("#container"),

    populateAnswerContainer(rectangle)
    {
        this.container.innerHTML=`The area of the rectangle with the length ${rectangle.length} and width : ${rectangle.width} is ${rectangle.calArea()}`;
        this.container.innerHTML+=`<br>The permieter of the rectangle with the length ${rectangle.length} and width : ${rectangle.width} is ${rectangle.calPerimeter()}`;
    }


}


export default ReportUI;