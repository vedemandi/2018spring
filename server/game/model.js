var axios = require("axios");

const Activity=["Jogging","weights","fitcycle","legpress"];

//var iCurrent=0;

function Game(){
    this.User=[];
    this.Work=[];

    this.IsLoggedIn=(name)=>{
        if(this.Users.some(x=>x.NameId==nameId)){
            return true;
        }
        else{
            this.Users.push({UserId:userId,Name:"A"})
            return false;
        }
    }

    this.GetLog=(names)=>{
        if(this.Users.some(x=>x.Name==name)){
            return Activity;
        }
    }

    this.SubmitLog = (text, userId) => {
        this.SharedLog.push({ Text: text, User: name });
    } 
    
    //this.DoneActivities=[];

    /*this.GetTips=(userId)=>{
        if(this.Users.some(x=>x.UserId==userId)){
        }
        else{
            this.Users.push({UserId:userId});
        }
        return Tips.slice(iCurrentTip,iCurrentTip=(iCurrentTip+3)%iCurrentTip.length);
    }*/
}
module.exports = Exercise;
