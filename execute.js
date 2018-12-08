function showTasks(){
    // If there are no activitities
    document.getElementById("showingtasks").style.display = "block";
    document.getElementById("showingtasks").innerHTML = "You have no activities.";
    document.getElementById("myDIV").style.display = "none";

}

function addTasks(){
    document.getElementById("showingtasks").style.display = "none";
    document.getElementById("myDIV").style.display = "block";
    // Add activities
    // document.getElementById("addTasks").innerHTML = "Please input your Task's name and Priority Level.";
}


// function myFunction(){
//     let x = document.getElementById("myDIV");
//     if (x.style.display === "none"){
//         x.style.display = "block";
//     }
//     else {
//         x.style.display = "none";
//     }
// }


// function unhide(divID, otherDivId) {
//     var item = document.getElementById(divID);
//     if (item) {
//         item.className=(item.className=='hidden')?'unhidden':'hidden';
//     }
//     // document.getElementById(otherDivId).className = 'hidden';
// }
