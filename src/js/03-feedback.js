import throttle from 'lodash.throttle';

const form = document.querySelector("form");

const STORAGE_KAY = "feedback-form-state";

let  dataForm = {};
saveFromData()

form.addEventListener('input', function (e) {
        
    dataForm[e.target.name]  = e.target.value;
    localStorage.setItem(STORAGE_KAY, JSON.stringify(dataForm))
    

});



form.addEventListener('submit', throttle(onFormSubmit,500));

function onFormSubmit(e) {
    
    e.preventDefault();
    e.currentTarget.reset();
    console.log(dataForm);
   localStorage.removeItem(STORAGE_KAY);
  
}


function saveFromData() {

    let saveData = JSON.parse(localStorage.getItem(STORAGE_KAY));

    if (saveData) {
      try {
        dataForm = saveData;

        Object.entries(dataForm).forEach(
          ([name, value]) => (form.elements[name].value = value)
        );
        
      } catch (err) {
        console.log(err.message);
      }
    }
  }


// import throttle from "lodash.throttle";

// const refForm = document.querySelector(".feedback-form");

// let dataForm = {};
// const FORM_CURRENT_VALUE = "feedback-form-state";

// refForm.addEventListener("submit", handleFormSubmit);
// refForm.addEventListener("input", throttle(handleFormInputValue, 500));
// getFormDataFromStorage();

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const formLength = event.currentTarget.elements.length - 1;
//   if (Object.keys(dataForm).length !== formLength) {
//     alert("Fill all fields");
//     return;
//   }
//   event.currentTarget.reset();
//   localStorage.removeItem(FORM_CURRENT_VALUE);
//   console.log(dataForm);
//   dataForm = {};
// }
// function handleFormInputValue(event) {
//   dataForm[event.target.name] = event.target.value.trim();
//   const stringifyFormData = JSON.stringify(dataForm);
//   localStorage.setItem(FORM_CURRENT_VALUE, stringifyFormData);
// }

// function getFormDataFromStorage() {
//   const savedMessage = localStorage.getItem(FORM_CURRENT_VALUE);
//   if (savedMessage) {
//     try {
//       dataForm = JSON.parse(savedMessage);
//       Object.entries(dataForm).forEach(
//         ([name, value]) => (refForm.elements[name].value = value)
//       );
//     } catch (err) {
//       console.log(err.message);
//     }
//   }
// }