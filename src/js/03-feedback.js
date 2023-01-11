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
        console.log(dataForm);
        Object.entries(dataForm).forEach(
          ([name, value]) => (form.elements[name].value = value)
       
        );

      } catch (err) {
        console.log(err.message);
      }
    }
  }


