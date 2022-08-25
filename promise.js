const mail = "baylarss@code.edu.az";
const pass = 1234;
beverageList=["vodka" ,"tequila", "rum", "whisky"];

// function getIdByAuth(mail, pass) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (mail === "baylarss@code.edu.az" && pass === 1234) {
//         const data = { id: 3348 };
//         return resolve(data);
//       } else {
//         return reject({ err: "auth failed" });
//       }
//     }, 1000);
//   });
// }

// function getStudentList(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id === 3348) {
//         return resolve(["Mirqubad","Tamerlan","Faiq"])
//       }
//       else{
//         return reject({err:"student list not found"})
//       }
//     }, 1000);
//   });
// }


// function getStudentDetails(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (name) {
//         return resolve({name, age:20})
//       }
//       else{
//         return reject({err:"student details not found"})
//       }
//     }, 1000);
//   });
// }


// getIdByAuth(mail,pass)
// .then
// (
//   data=>getStudentList(data.id)
//   .then
//   (
//     studentList=>getStudentDetails(studentList[0])
//    .then
//    (
//     details=>console.log(details)
//    )
//    .catch(err=>console.log(err))
//   )
//   .catch(err=>console.log(err))
// )
// .catch(err=>console.log(err))



function getIdByAuth(mail, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mail === "baylarss@code.edu.az" && pass === 1234) {
        const data = { id: 3348 };
        return resolve(data);
      } else {
        return reject({ err: "auth failed" });
      }
    }, 1000);
  });
}

function getStudentInfo(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 3348) {
          return resolve({Name:"Baylar",surname:"Sadiqov",age:20})
        }
        else{
          return reject({err:"student not found"})
        }
      }, 1000);
    });
  }

function getPermission(age) {
var drinkingAllowed=false;
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if (age>=18){
        drinkingAllowed=true;
        return resolve(drinkingAllowed);
      }
      else{
        return reject(drinkingAllowed);
      }
    }, 500);
  })
}

function getBeverageList(drinkingAllowed){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(drinkingAllowed===true){
        return resolve(beverageList)
      }
      else{
        return reject({err:"you are not allowed"})
      }
    },500)
  })
}

function getBeverageId(beverage){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      if(beverage){
        const data={id:4556};
        return resolve (data)
      }
      else{
        return reject ({err:"beverage id not found"})
      }
    }, 1000);
  })
}

function getBeverageInfo(beverageId) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(beverageId){
        return resolve({id:beverageId, Name:beverageList[0], alcohol:'45%', prodDate:'08/23/2002'})
      }
      else{
        return reject({err:"beverage info not found"})
      }
    }, 1000);
  })
}

getIdByAuth(mail,pass)
.then
(
  data=>getStudentInfo(data.id)
  .then
  (
    studentInfo=>getPermission(studentInfo.age)
    .then
    (
      permission=>getBeverageList(permission)
      .then
      (
        beverageList=>getBeverageId(beverageList[0])
        .then
        (
          beverage=>getBeverageInfo(beverage)
          .then
          (
            info=>console.log(info)
          )
        )
        .catch(err=>console.log(err))
      )
      .catch(err=>console.log(err))
    )
    .catch(err=>console.log(err))
  )
  .catch(err=>console.log(err))
)
.catch(err=>console.log(err))
