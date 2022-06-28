$(document).ready(function() {
  $("input").blur(function() {
    if (this.value === "") {
     this.style.border = "red solid 2px";
    }
  });


  $(".btn").click(function() {
   debugger
   const firstName = $("#firstName").val();
   const lastName = $("#lastName").val();
   const email = $("#email").val();
   const pwd = $("#pwd").val();
   const conPwd = $("#conpwd").val();
   const gend = $("#gen").val();
   const dob = $("#dob").val();
   if (
     $("#firstName").val() == "" ||
     $("#lastName").val() == "" ||
     $("#email").val() == "" ||
     $("#pwd").val() == "" ||
     $("#conpwd").val() == ""
   ) {
    return false;
   } else if (document.forms["users"]["conpwd"].value != document.forms["users"]["pwd"].value) {
      alert("Password and Confrim Password must be similar");
      return false;
   } else {
      const userrecord = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
      userrecord.push({
       firstName: firstName,
       lastName: lastName,
       email: email,
       pwd: pwd,
       conPwd: conPwd,
       gend: gend,
       dob: dob,
    });
      localStorage.setItem("users", JSON.stringify(userrecord));
      console.log("users....", userrecord);
   }
  });

   $(".btnn").click(function() {
     console.log("login");
     debugger
     const checkEmail = $("#checkEmail").val();
     const checkPwd = $("#checkPwd").val();
     const checkuserReccord = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
     checkuserReccord.push({
      checkEmail: checkEmail,
      checkPwd: checkPwd,
     });
     var x = JSON.parse(localStorage.getItem("users"));
     console.log("users....", x);
     var user = x.filter(function(value)  {
      console.log("value..",value);
      if(checkEmail == value.email && checkPwd == value.pwd){
        alert("successfully logged in");
      } else {
       alert("invalid credentials");
      }
     });
    });
 });
