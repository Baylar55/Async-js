const mail = "baylarss@code.edu.az";
const pass = 1234;
beverageList = ["vodka", "tequila", "rum", "whisky"];


// function getIdByAuth(mail, pass, successCallback, errorCallback) {
//     setTimeout(() => {
//       if (mail === "baylarss@code.edu.az" && pass === 1234) {
//         const data = { id: 3348 };
//         return successCallback(data)
//       } else {
//         return errorCallback({ err: "auth failed" })
//       }
//     }, 1000)
// }

// function getStudentList(id, successCallback, errorCallback) {
//     setTimeout(() => {
//       if (id === 3348) {
//         return successCallback(["Mirqubad","Tamerlan","Faiq"])
//       }
//       else{
//         return errorCallback({err:"student list not found"})
//       }
//     }, 1000)
// }

// function getStudentDetails(name, successCallback, errorCallback) {

//     setTimeout(() => {
//       if (name) {
//         return successCallback({name, age:20})
//       }
//       else{
//         return errorCallback({err:"student details not found"})
//       }
//     }, 1000)
// }

// getIdByAuth(
//     mail,
//     pass,
//     (data)=>{
//         getStudentList(
//             data.id,
//             (studentList)=>{
//                 getStudentDetails(
//                     studentList[0],
//                     (details)=>{console.log("STUDENT DETAILS ARE", details)},
//                     (err)=>console.log("THIS IS ERROR FOR DETAILS",err)
//                 )
//             },
//             (err)=>console.log("THIS IS ERROR FOR STUDENT LIST",err)
//             )
//     },
//     (err)=>console.log("THIS IS ERROR",err)
// );


function getIdByAuth(mail, pass, successCallback, errorCallback) {
  setTimeout(() => {
    if (mail === "baylarss@code.edu.az" && pass === 1234) {
      const data = { id: 3348 };
      return successCallback(data);
    } else {
      return errorCallback({ err: "auth failed" });
    }
  }, 1000);
}

function getStudentInfo(id, successCallback, errorCallback) {
  setTimeout(() => {
    if (id === 3348) {
      return successCallback({ Name: "Baylar", surname: "Sadiqov", age: 20 });
    } else {
      return errorCallback({ err: "student not found" });
    }
  }, 1000);
}

function getPermission(age, successCallback, errorCallback) {
  var drinkingAllowed = false;
  setTimeout(() => {
    if (age >= 18) {
      drinkingAllowed = true;
      return successCallback(drinkingAllowed);
    } else {
      return errorCallback(drinkingAllowed);
    }
  }, 500);
}

function getBeverageList(drinkingAllowed, successCallback, errorCallback) {
  setTimeout(() => {
    if (drinkingAllowed === true) {
      return successCallback(beverageList);
    } else {
      return errorCallback({ err: "you are not allowed" });
    }
  }, 500);
}

function getBeverageId(beverage, successCallback, errorCallback) {
  setTimeout(() => {
    if (beverage) {
      const data = { id: 4556 };
      return successCallback(data);
    } else {
      return errorCallback({ err: "beverage id not found" });
    }
  }, 1000);
}

function getBeverageInfo(beverageId, successCallback, errorCallback) {
  setTimeout(() => {
    if (beverageId) {
      return successCallback({
        id: beverageId,
        Name: beverageList[0],
        alcohol: "45%",
        prodDate: "08/23/2002",
      });
    } else {
      return errorCallback({ err: "beverage info not found" });
    }
  }, 1000);
}

getIdByAuth(
  mail,
  pass,
  (data) => {
    getStudentInfo(
      data.id,
      (studentInfo) => {
        getPermission(
          studentInfo.age,
          (permission) => {
            getBeverageList(
              permission,
              (beverageList) => {
                getBeverageId(
                  beverageList[0],
                  (beverage) => {
                    getBeverageInfo(beverage, (info) => console.log(info));
                  },
                  (err) => console.log(err)
                );
              },
              (err) => console.log(err)
            );
          },
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);
