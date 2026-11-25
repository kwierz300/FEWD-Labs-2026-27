function showPerson(fname,lname,age){
 const person={firstName:fname,lastName:lname,age};
 document.getElementById("result").textContent=`${person.firstName} ${person.lastName} is ${person.age} years old.`;
}
