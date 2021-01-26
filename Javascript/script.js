 function validate(){//using javscript
      var name=document.forms["myForm"]["name"].value;
      var email=document.forms["myForm"]["email"].value;
      var phone=document.forms["myForm"]["phone"].value;
      var message=document.forms["myForm"]["message"].value;
      var r1=document.forms["myForm"]["r1"].value;
      if(name=="" || email=="" || phone=="" || message=="" || r1==""){
        alert("Please fill the form");
      }
      else{
        alert("Thank you, "+name);
      }
    }