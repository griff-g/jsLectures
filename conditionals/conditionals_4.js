// Dean = Will get full access to the system
// Tutor = Will ger access to students data.
// Student = Will get access to the assignments and notes.

// Switch case statements/ Switch statements

var role = "staff";

switch (role) {
  case "Dean":
    console.log(" Will get full access to the system");
    break;

  case "Tutor":
    console.log(" Will get access to students data.");
    break;

  case "Student":
    console.log("Will get access to the assignments and notes.");
    break;

  default:
    console.log("No roles assigned");
    break;
}

// if(role=="Dean"){
//     console.log("Will get full access to the system");
// }else if(role=="Tutor"){
//     console.log("Will get access to students data.");
// }else if(role=="Student"){
//     console.log("Will get access to the assignments and notes.");
// }else if(!role){
//     console.log("no access");
// }
