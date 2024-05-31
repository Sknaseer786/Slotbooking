let x = ["Name","Age","Mobile","Slot"]
let x1 = ["Slot Available","Slot Available","Slot available","10am - 11am"]
let x2 = ["Slot Available","Slot Available","Slot available","11am - 12pm"]
let x3 = ["Slot Available","Slot Available","Slot available","1pm - 2pm"]
let x4 = ["Slot Available","Slot Available","Slot available","2pm - 3pm"]
let x5 = ["Slot Available","Slot Available","Slot available","3pm - 4pm"]

function createrow(data){
    var row = document.createElement("tr");
    data.forEach(function(value){
        var col = document.createElement("td");
        col.textContent = value;
        row.appendChild(col);
    });
    return row;
}
function setvalues(){
    var name = document.getElementById("name");
    var name1 = name.value; 

    var age = document.getElementById("age");
    var age1 = age.value ;

    var mobile = document.getElementById("mobile");
    var mobile1 = mobile.value ;

    var option = document.querySelector('input[name="option"]:checked');
    var op = option ? option.value:null;

    console.log(name1);
    console.log(age1);
    console.log(mobile1);
    console.log(op);

    if (op == "10am - 11am"){
        if (x1[0] == "Slot Available"){
            x1[0] = name1;
            x1[1] = age1;
            x1[2] = mobile1;
            alert("Slot Booked sucessfully");
         }
        else{
            alert("Slot already Booked");
        }
    }
    else if (op == "11am - 12pm"){
        if (x2[0] == "Slot Available"){
            x2[0] = name1;
            x2[1] = age1;
            x2[2] = mobile1;
            alert("Slot Booked sucessfully");
         }
        else{
            alert("Slot already Booked");
        }
    }
    else if (op == "1pm - 2pm"){
        if (x3[0] == "Slot Available"){
            x3[0] = name1;
            x3[1] = age1;
            x3[2] = mobile1;
            alert("Slot Booked sucessfully");
         }
        else{
            alert("Slot already Booked");
        }
    }
    else if (op == "2pm - 3pm"){
        if (x4[0] == "Slot Available"){
            x4[0] = name1;
            x4[1] = age1;
            x4[2] = mobile1;
            alert("Slot Booked sucessfully");
         }
        else{
            alert("Slot already Booked");
        }
    }
    else{
        if (x5[0] == "Slot Available"){
            x5[0] = name1;
            x5[1] = age1;
            x5[2] = mobile1;
            alert("Slot Booked sucessfully");
         }
        else{
            alert("Slot already Booked");
        }
    }
}

function getvalues(){
    var tbody = document.querySelector("#myTable tbody");
    tbody.appendChild(createrow(x));
    tbody.appendChild(createrow(x1));
    tbody.appendChild(createrow(x2));
    tbody.appendChild(createrow(x3));
    tbody.appendChild(createrow(x4));
    tbody.appendChild(createrow(x5));
}