
const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  console.log(isSeatAvailable,isAgeAbove50,hasAadharCard);


  let feedback;
  if(isSeatAvailable)
{
    console.log("seat is available");
    feedback="seat is available";
if(isAgeAbove50)
{
    console.log("Aged above 50");
    feedback=feedback+ " ,Aged above 50";
    if(hasAadharCard)
{
    console.log("Has Aadhar card");
    feedback=feedback+ " ,Has Aadhar card";
    let confirmMsg=confirm("Are you sure,do you want to get inside the bus?");
    console.log("confirmMsg",confirmMsg);
    if(confirmMsg)
    {
        console.log("please open the door");
    }
}
else{
    console.log("but you don't have aadhar card");
    feedback=feedback+ ",but you don't have aadhar card";
}
}
else{
    console.log("but your age is below 50 years");
    feedback=feedback+ ",but your age is below 50 years";
}
}
else{
    console.log("seat is not available");
    feedback="seat is not available"
}
     passengerStatus.textContent=feedback;

});