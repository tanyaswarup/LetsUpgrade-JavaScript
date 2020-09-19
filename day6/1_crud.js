//creating array containing 5 objects
function loading() {
    let initialPerson=[
    {   
        name:"Tanya Swarup",
        city:"Patna",
        age:20,
        salary:15000,
    },
    {
        name:"Priyanka Gupta",
        city:"Udaipur",
        age:21,
        salary:20000,
    },
    {
        name:"Sanya Singh",
        city:"Vadodra",
        age:20,
        salary:20000,
    },
    {
        name:"Aastha Gautam",
        city:"patna",
        age:22,
        salary:25000,
    },
    {
        name:"Khushi Gautam",
        city:"kota",
        age:19,
        salary:30000,
    },
]
    if(sessionStorage.getItem("people")==null)
    {
        sessionStorage.setItem("people",JSON.stringify(initialPerson));
    }
}
loading();
//  Display all objects in table
function display(temp=undefined){
    let temporaryPerson;
    let tabledata= ""; //if won't declare as string will show undefined
    if(temp==undefined)
        temporaryPerson= JSON.parse(sessionStorage.getItem("people"));
    else
        temporaryPerson=temp;
    temporaryPerson.forEach(function(person,index){
        let currentdata=`<tr>
        <td>${index+1}</td>
        <td>${person.name}</td>
        <td>${person.city}</td>
        <td>${person.age}</td>
        <td>${person.salary}</td>
        <td><button onclick="deleterow(${index})">Delete</button></td>
        </tr>`; //the current index is passed
        //using currentdata because only using temporarydata will cause overridding and not appending. Here + is appending
        tabledata += currentdata; 
    });
    document.getElementById("data-row").innerHTML=tabledata;
}
display();

//Search By Name
function searchByName(){
    let sname= document.getElementById("searchName").value;
    let temporaryPerson=JSON.parse(sessionStorage.getItem("people"));
    let newname= temporaryPerson.filter(function(person){
        return (person.name.toLowerCase().indexOf(sname.toLowerCase())!=-1); 
        //not equal to -1 means searched value exists and the value is returned to newname 
    });
    display(newname);
}
//Search By City
function searchByCity(){
    let cname= document.getElementById("searchCity").value;
    let temporaryPerson = JSON.parse(sessionStorage.getItem("people"));
    let newcity= temporaryPerson.filter(function(person){
        return (person.name.toLowerCase().indexOf(cname.toLowerCase())!=-1); 
        //not equal to -1 means searched value exists and the value is returned to newname 
    });
    display(newcity);
}
//Delete row
//if session storage was not used here then on refreshing the deleted data would return but since we have used sessionstorage the deleted data wont return even on refreshing untill we reopen the tab
function deleterow(index){
    let temporaryPerson=JSON.parse(sessionStorage.getItem("people"));
    temporaryPerson.splice(index,1);
    sessionStorage.setItem("people",JSON.stringify(temporaryPerson));
    display();
}