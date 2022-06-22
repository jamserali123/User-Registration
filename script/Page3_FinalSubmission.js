
        let validate_ext=['jpeg','png','jpg'];
        


          function Photo_Upload(){
            let photo =document.forms['form_Submit']["photo_upload_name"];
              if(photo.value !=""){
              //alert("Success");
                let pos_of_Dot=photo.value.lastIndexOf(".")+1;
                let img_ext=photo.value.substring(pos_of_Dot);
                let result=validate_ext.includes(img_ext);
                if(result == false){
                  alert("Please select correct image format");
                }else{
                  alert("image Upload Successful");
                  if(parseFloat(photo.files[0] .size/(1024*1024)) >=4 ){
                    //perform some operation
                    alert("image size Should be less than 4MB is Allowed .\nThe Current File size is :"+photo.files[0] .size/(1024*1024));
                  }
                }
            
                return false;
          }
          else{
              alert("please select any photo");
              return false;
          }
          return true;
          }

          //<!--------------HSC Marksheet Upload Function-------------------->

         function Hsc_Marksheet(){
          let hsc_marksheet =document.forms['form_Submit']["HSC_Marksheet_name"];
              if(hsc_marksheet.value !=""){
              //alert("Success");
                let pos_of_Dot=hsc_marksheet.value.lastIndexOf(".")+1;
                let img_ext=hsc_marksheet.value.substring(pos_of_Dot);
                let result=validate_ext.includes(img_ext);
                if(result == false){
                  alert("Please select correct image format");
                }else{
                  alert("HSC Marksheet Upload Successful");
                  if(parseFloat(hsc_marksheet.files[0] .size/(1024*1024)) >=4 ){
                    //perform some operation
                    alert("image size Should be less than 4MB is Allowed .\nThe Current File size is :"+hsc_marksheet.files[0] .size/(1024*1024));
                  }
                }
            
                return false;
          }
          else{
              alert("Please select HSC Marksheet to upload.");
              return false;
          }
          return true;
          
         }
       
         //<!--------------HSC Marksheet Upload Function-------------------->

         function SSC_Marksheet(){
          let ssc_marksheet =document.forms['form_Submit']["SSC_marksheet_name"];
              if(ssc_marksheet.value !=""){
              //alert("Success");
                let pos_of_Dot=ssc_marksheet.value.lastIndexOf(".")+1;
                let img_ext=ssc_marksheet.value.substring(pos_of_Dot);
                let result=validate_ext.includes(img_ext);
                if(result == false){
                  alert("Please select correct image format");
                }else{
                  alert("SSC Marksheet Upload Successful");
                  if(parseFloat(ssc_marksheet.files[0] .size/(1024*1024)) >=4 ){
                    //perform some operation
                    alert("Image size Should be less than 4MB is Allowed .\nThe Current File size is :"+ssc_marksheet.files[0] .size/(1024*1024));
                  }
                }
            
                return false;
          }
          else{
              alert("Please select SSC Marksheet to upload.");
              return false;
          }
          return true;

         }
//<!--------------ALL Semester Marksheet Upload Function-------------------->
      function ALL_Semester(){
            let all_Semister_MS =document.forms['form_Submit']["all_Semister_MS"];
                if(all_Semister_MS.value !=""){
                //alert("Success");
                  let pos_of_Dot=all_Semister_MS.value.lastIndexOf(".")+1;
                  let img_ext=all_Semister_MS.value.substring(pos_of_Dot);
                  let result=validate_ext.includes(img_ext);
                  if(result == false){
                    alert("Please select correct image format");
                  }else{
                    alert("all_Semister_Marksheet Upload Successful");
                    if(parseFloat(ssc_marksheet.files[0] .size/(1024*1024)) >=4 ){
                      //perform some operation
                      alert("Image size Should be less than 4MB is Allowed .\nThe Current File size is :"+all_Semister_MS.files[0] .size/(1024*1024));
                    }
                  }
            
                return false;
          }
          else{
                    alert("Please select All Semister Marksheet to upload.");
                    return false;
                }
                return true;
         }

//---------------Final Submission code goes here-------

    function  Final_Submit(){
   window.location.href = "../html/index.html";
     //document.getElementById("success_msg").className="success-banner-show";
      alert("Form Submitted...");
  
 }
