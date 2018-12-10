//const LinkedList = require('./LinkedList');
//const mergeSort = require('./merge-sort');


//linkedbag1.add(1);

//linkedbag1.display();
// const dataArr = [];
let linkedbag1;
// let linkedbag2;
// let linkedbag3;

window.onload = function () {
    linkedbag1 = new LinkedList();
}
// window.onload = function () {
//     linkedbag2 = new LinkedList();
// }
// window.onload = function () {
//     linkedbag3 = new LinkedList();
// }

function showTasks(){
    // If there are no activitities
    document.getElementById("tasksFieldWrapper").style.display = "block";
    
    document.getElementById("addingTasksFieldWrapper").style.display = "none";

    const result = linkedbag1.toArray();
    console.log(result);

    if (result.length > 0){
        document.getElementById("showingtasks").style.display = "none";

        $('#list').empty();
        $.each(result, function(key, value) {
          $('#list').append('<li>' + value.taskName + '</li>');
        });

        // const thelist = document.getElementById("list");
        // const initItems = [];
        // const elementsLI = document.getElementsByTagName("li");
        // // elementsLI.forEach(e => initItems.push(e.innerHTML));
        // for (let index = 0; index < elementsLI.length; index++) {
        //     initItems.push({ taskName: elementsLI[index].innerText, priorityLevel: 1});
            
        // }
        // // console.log(elementsLI[0].innerHTML);

        // console.log('initial items', initItems);

        // console.log(JSON.stringify(initItems) !== JSON.stringify(result));

        // if (JSON.stringify(initItems) !== JSON.stringify(result)) {
        //     result.forEach(element => {
        //         console.log('in foreach', element);
        //         console.log('inforeah', result.filter(e => e.taskName === element.taskName).length > 0);
        //         if (result.filter(e => e.taskName === element.taskName).length > 0) {
        //             const li = document.createElement("li");
        //             li.innerHTML = element.taskName;
        //             thelist.appendChild(li);
        //         }
        //     });
        // }
        // else {
        // }



        // for (let index = 0; index < result.length; index++) {
           
            // console.log(thelist.childNodes[3].innerText);            
        // }
        // //for (let index = 0; index < result.length; index++) {
        //     const task = document.getElementById("tname").value;
        //     const text = document.createTextNode(task);
        //     const newTask = document.createElement("li");
        //     newTask.appendChild(text);
        //     document.getElementById("list").appendChild(newTask);
        //}
        //console.log(thelist.childNodes);
       

        
    }
    else{
        document.getElementById("showingtasks").innerHTML = "You have no activities.";
    }
}

function addTasks(){
    // Add activities
    document.getElementById("tasksFieldWrapper").style.display = "none";
    
    document.getElementById("addingTasksFieldWrapper").style.display = "block";
}

function submit() {
   //let linkedbag1 = initLinkedList();
    const tname = document.getElementById("tname").value;
    const plevel = document.getElementById("plevel").value;
    const data = {
        taskName: tname,
        priorityLevel: parseInt(plevel)
    }

    linkedbag1.add(data);

    linkedbag1.display();
    // dataArr.push(data);
//    console.log(dataArr);
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
