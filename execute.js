let stack;


window.onload = function () {
  stack = new Stack();
}

function showTasks(){
    document.getElementById("tasksFieldWrapper").style.display = "block";
    
    document.getElementById("addingTasksFieldWrapper").style.display = "none";

    const result = stack.toArray(); // O(n)
    console.log(result);

    if (result.length > 0){
        document.getElementById("showingtasks").style.display = "none";
        const sorted = mergeSort(result); // O(nlogn)
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
    console.log(stack);
    stack.clear(); // O(1)
    console.log("AFTER DELETING");
    console.log(stack);

    const result = stack.toArray(); // O(n)
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

    if (data.taskName === ''){
        console.log("Task's name is needed.");
        document.getElementById("warning").innerHTML = "Please type in the task's name."
    }
    else{
        stack.push(data); // O(1)
        stack.display(); // O(n)
    }
}