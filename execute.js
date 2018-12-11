let linkedbag1;


window.onload = function () {
    linkedbag1 = new LinkedList();
}

function showTasks(){
    document.getElementById("tasksFieldWrapper").style.display = "block";
    
    document.getElementById("addingTasksFieldWrapper").style.display = "none";

    const result = linkedbag1.toArray();
    console.log(result);

    if (result.length > 0){
        document.getElementById("showingtasks").style.display = "none";
        const sorted = mergeSort(result);
        $('#list').empty();
        $.each(sorted, function(key, value) {
          $('#list').append('<li>' + value.taskName + " -- " + value.priorityLevel + '</li>');
        });
    }
    else{
        document.getElementById("showingtasks").innerHTML = "You have no activities.";
    }
}

function deleteAll(){
    console.log("BEFORE DELETING");
    console.log(linkedbag1);
    linkedbag1.clear();
    console.log("AFTER DELETING");
    console.log(linkedbag1);

    const result = linkedbag1.toArray();
    $('#list').empty();
    $.each(result, function(key,value){
        $('#list').append('<li>' + value.taskName + '</li>');
    });

    if (result.length === 0 ){
        document.getElementById("showingtasks").style.display = "block";  document.getElementById("showingtasks").innerHTML = "You have no activities.";
    }
}

function addTasks(){
    document.getElementById("tasksFieldWrapper").style.display = "none";
    
    document.getElementById("addingTasksFieldWrapper").style.display = "block";
}

function submit() {
    const tname = document.getElementById("tname").value;
    const plevel = document.getElementById("plevel").value;
    const data = {
        taskName: tname,
        priorityLevel: parseInt(plevel)
    }

    linkedbag1.add(data);
    linkedbag1.display();
}