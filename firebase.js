
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js" 
import {getDatabase, ref, push} from "https://www.gstatics.com/firebasejs/9.15.0/firebase-database.js"
const appSetting = {
    dataBaseURL: "https://playground-5162d-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")




let inpField = document.getElementById("input-field")
let addBtn = document.querySelector("#add-button")
 
addBtn.addEventListener("click", () => {
    let valueInp = inpField.value 
    push(moviesInDB, valueInp)
    console.log(`${valueInp} add to database`)
})