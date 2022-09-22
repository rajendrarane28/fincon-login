function showPrev(){
    if(visibleDiv == 0){
        visibleDiv = $(".steps").length-1;
    } else{
        visibleDiv--;
    }
    showDiv();
}

function ageCalculator() {
  var userinput = document.getElementById("nominee_birth_date").value;
  // alert(userinput);

  var dob = new Date(userinput);
  // alert(dob);

  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();
  // alert(month_diff);
  
  //convert the calculated difference in date format
  var age_dt = new Date(month_diff); 
  // alert(age_dt);
  
  //extract year from date    
  var year = age_dt.getUTCFullYear();
  // alert(year);
  
  //now calculate the age of the user
  var age = Math.abs(year - 1970);
  // alert(age);

  if(age < 18) {
    
    $("#agree_minor").show();

    $("#is_minor").click(function () {
      if($("#is_minor").prop('checked') == true){
        $("#guardian").show();
      } 
      else {
        $("#guardian").hide();
      }
    });
  } 
  else  
  {
    $("#agree_minor, #guardian").hide();
    $('#is_minor').prop('checked', false);
    return true;
  }
}

/* function minorFunction() {
  var minor_checkBox = document.getElementById("is_minor");
  var guardian = document.getElementById("guardian");
  if (minor_checkBox.checked == true){
      guardian.style.display = "block";
  } else {
      guardian.style.display = "none";
  } 
} */


function countdown() {
    var seconds = 59;
    function tick() {
      var counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        document.getElementById("counter").innerHTML = `<a href="">Resend</a>`;
      }
    }
    tick();
  }
  countdown();

    

  