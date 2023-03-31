const result = sum(1)(2)(3)(4)(5)();
console.log(result)

function sum(a){
    return function(b){
        return b ? sum(a+b) : a;
    }
}

let userData = {
    name : "Sameer",
    address : {
        personal : {
            city : "KMR",
            area : "Gandhi Nagar",
            pinCode : "503111",
        },
        office : {
            city : "KMR",
            area : {
                landMark : "Masjid"
            },
            pinCode : "503111",
        }
    }
}

// user_name : Sameer
// user_address_personal_city : KMR
let finalObj={};
function transformData(user,parent){
    if (user) {
        for (const key in user) {
            if (typeof(user[key]) === "object") {
                transformData(user[key],`${parent}_${key}`)
            }else{
                // console.log(`${parent}_${key} : ${user[key]}`)
                let x = `${parent}_${key}`;
                // finalObj[x] = user[key];
                finalObj[`${parent}_${key}`] = user[key];
            }
        }
    }
}
transformData(userData,"user");
console.log(finalObj)
