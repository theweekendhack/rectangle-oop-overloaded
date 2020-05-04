const DAO = 
{

    
        storeDataToWebStorage(name,obj)
        {
            sessionStorage.setItem(name,JSON.stringify(obj));

        },


        getDataFromWebStorage(name)
        
        {
            return JSON.parse(sessionStorage.getItem(name))
        },


        storeDataToWebStorageLocal(name,obj)
        {
            localStorage.setItem(name,JSON.stringify(obj));

        },


        getDataFromWebStorageLocal(name)
        
        {
            return JSON.parse(localStorage.getItem(name))
        }


}

export default DAO;