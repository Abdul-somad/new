// let i = 0
// while (i < 13){
//     console.log("this is no " + i)
// i++
// }
//     for (j = 0; j < 10; j++){
//         console.log(j)
//     }
//     function addnum(num2, num4){
//         console.log(num2 / num4)
//     }
//     addnum()
//     function Person(firstName, lastName, dob){
//        this.firstName =firstName
//        this.lastName = lastName
//        this.dob = new Date(dob)
//     }
//     const person1 = new Person("shakur", "Alaro", "19-12-1991")
//     const person2 = new Person("fatimoh", "abdullahi", "12-3-2023")
//     console.log(person2.dob.getFullYear)
    const form = document.querySelector("#my-form")
    const firstName = document.querySelector("#text-fname")
    const lastName = document.querySelector("#text-lname")
    form.addEventListener("submit", onsubmit)
        function onsubmit(e){
            e.preventDefault();
            if (firstName.value === "" || lastName.value === ""){
                alert("Enter the field")
            }else{
                alert("Successful")
            }
            }
        

