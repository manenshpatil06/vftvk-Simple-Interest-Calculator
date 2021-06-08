function Compute(){

    var principle = document.getElementById('principle').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = (principle * years * rate) / 100;
    document.getElementById("result").innerHTML="Simple interest is :" + interest ;
}

function valid(){
  var principle = document.getElementById('principle');
  if (principle.value<=0) {
    alert("Please Enter a Positive number");
    principle.focus();
    return false;
  }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

