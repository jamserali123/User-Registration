
  function validateForm(){
        let insName=document.forms['education_form_name']['ins_name'].value;
        let hsc_board=document.forms['education_form_name']['hsc_board'].value;
        
        let hscScore=document.forms['education_form_name']['hsc_score'].value;
        let ssc_InsName=document.forms['education_form_name']['ssc_name'].value;
        let ssc_board=document.forms['education_form_name']['ssc_board'].value;
        let sscScore=document.forms['education_form_name']['ssc_score'].value;

        let current_persue=document.forms['education_form_name']['persue'].value;
        let current_insName=document.forms['education_form_name']['c_insName'].value;
        let ovrPercent=document.forms['education_form_name']['ovr_percent'].value;
        let Backlog=document.forms['education_form_name']['backlog'].value;
 
  //validation for Institute Name

    if(insName==""){
       document.getElementById("err_InsName").innerHTML=("** please fill Institute Name");
       insName.focus();
        return false;
    
      }

      //validation for Hsc board

      if(hsc_board ==""){
       document.getElementById("err_hsc").innerHTML=("** please fill Institute Name");
       hsc_board.focus();
        return false;
    
      }
      // validation for hsc score

      if(hscScore ==""){
       document.getElementById("err_hsc").innerHTML=("** please fill hsc score");
       hscScore.focus();
        return false;
    
      }
      //validation for ssc Institute name
      if(ssc_InsName ==""){
       document.getElementById("err_ssc_Ins").innerHTML=("** please fill Ssc InsName");
       ssc_InsName.focus();
        return false;
    
      }
      // validation for SSC board 

      if(ssc_board ==""){
       document.getElementById("err_ssc").innerHTML=("** please fill ssc board");
       ssc_board.focus();
        return false;
    
      }
      // validation for ssc score

      if(sscScore==""){
       document.getElementById("err_ssc").innerHTML=("** please fill ssc score");
       
        return false;
    
      }
      //validation for currently persuing
      if(current_persue ==""){
       document.getElementById("err_current_persue").innerHTML=("** please fill current persue");
       
        return false;
    
      }

      //validation for current education institute
      if(current_insName ==""){
       document.getElementById("err_current_InsName").innerHTML=("** please fill current Institute name");
       
        return false;
    
      }
      //Validation for overal percentage
      if(ovrPercent ==""){
       document.getElementById("err_backlog").innerHTML=("** please fill overal percent");
       
        return false;
    
      }
      // validation for backlog
      if(Backlog ==""){
       document.getElementById("err_backlog").innerHTML=("** please fill backlog");
       
        return false;
    
      }




   //Adding Item to personObj object
    let personObj = JSON.parse(sessionStorage.getItem("person"));
        personObj.instituteName = insName;
        personObj.hscBoard = hsc_board;
        personObj.hsc_score=hscScore;
        personObj.sscInsName=ssc_InsName;
        personObj.sscBoard = ssc_board;
        personObj.ssc_score=sscScore;
        personObj.persue=current_persue;
        personObj.c_insName=current_insName;
        personObj.ovr_percent=ovrPercent;
        personObj.backlog=Backlog;


  UserAction(personObj);

    }


function UserAction(personObject) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      window.location.href = "../html/fileUpload3.html";
    }
  };
  xhttp.open("PATCH", "http://localhost:3300/updatePerson", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  console.log("Object from html " + JSON.stringify(personObject));
  sessionStorage.clear();
  sessionStorage.setItem("person", JSON.stringify(personObject));
  xhttp.send(JSON.stringify(personObject));
}
