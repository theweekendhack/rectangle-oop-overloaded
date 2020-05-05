
/* Import Statements */
import Rectangle from "./BLO/Rectangle.js";
import MainUI from "./ULO/MainUI.js";
import ReportUI from "./ULO/ReportUI.js";
import WebStorageDAO from "./DAO/WebStorageDOA.js";

/*
  This is my app object
*/

const app=
{

    mainUIBodyID : document.querySelector("#main-body"),
    secondUIBodyID :document.querySelector("#second-body"),

    
    /*
    The init() method purpose is to determine which UI object to initialize
    */

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

    //This will load the mainUI event Listeners
    mainUInit()
    {

        MainUI.calculateButton.addEventListener("click",function(){       
    
        const hasErrors =  MainUI.validateFields(); // validate

       if(hasErrors==false)
       {
            const rec = new Rectangle(parseFloat(MainUI.lengthTextField.value),parseFloat(MainUI.widthTextField.value));
        
            WebStorageDAO.storeDataToSessionStorage("rectangleData",rec);
        
            location.href="html/report.html";
       }

        });    

    },

    //This will load the secondUI event Listeners
    secondUIInt()
    {

        document.addEventListener("DOMContentLoaded",function(){
 
            const rect =WebStorageDAO.getDataFromSessionStorage("rectangleData");

            ReportUI.populateAnswerContainer(new Rectangle(rect.length,rect.width));
    
        })


    }

}

app.init();