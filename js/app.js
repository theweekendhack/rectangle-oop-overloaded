import Rectangle from "./BLO/Rectangle.js";
import MainUI from "./ULO/MainUI.js";
import ReportUI from "./ULO/ReportUI.js";
import DOA  from "./DAO/DOA.js";


/*
  This is my app object
*/
const app=
{

    mainUIBodyID : document.querySelector("#main-body"),
    secondUIBodyID :document.querySelector("#second-body"),

    //The purpose of is to determine which features(even listeners in the app to load. This will be determined by
    //which UI is loaded)
    init()
    {
        //Logic that will detemrine which ui to initialize
        if(this.mainUIBodyID!=null)
        {
            this.mainUInit();
        }   
        else if(this.secondUIBodyID!=null)
        {
            this.secondUIInt();
        }
    
    },

    mainUInit()
    {


        document.addEventListener("DOMContentLoaded",function(){

        
        })

        
        MainUI.calculateButton.addEventListener("click",function(){       

    
        const hasErrors =  MainUI.validateFields(); // validate

       if(hasErrors==false)
       {
            const rec = new Rpaectangle(rseFloat(MainUI.lengthTextField.value),parseFloat(MainUI.widthTextField.value));
        
            DOA.storeDataToWebStorage("rectangleData",rec);
        
            location.href="html/report.html";
       }

        });    

    },

    secondUIInt()
    {

        document.addEventListener("DOMContentLoaded",function(){
 
            const rect =DOA.getDataFromWebStorage("rectangleData");

            ReportUI.populateAnswerContainer(new Rectangle(rect.length,rect.width));
    
        })


    }

}

app.init();