//syntax of switch case

// switch(key){.   key is the value we have to check everytime
//     case value:
//         break;

//         default:
//             break;
// }



const month =3;

switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break; // here break is used because once the value is matched the it prints all the value after it except default if break is not there
    case 3:
        console.log("March");
        break;
    default:
        console.log("default case");
        break;
}