class API{
    constructor(){}
   static exec(){
       let parts = API.parts;
       console.log("API.exec(), parts = ", API.parts);
       if(parts[0] == "api"){
           if (parts[1] == "user"){
               if(parts[2] == "get"){
                   // database.exec();
               }
           }
       }
   }
   static catchAPIrequest(v){
       v[0] == "/"? v=v.substring(1, v.length) :null;
       if(v.constructor === String)
       if(v.split("/")[0] == "api"){
           API.parts = v.split("/");
           return true;
       }
       return false;
       }
}
   API.parts = null;
   module.exports = API;