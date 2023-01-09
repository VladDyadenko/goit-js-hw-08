import throttle from 'lodash.throttle';

const form = document.querySelector("form");

const STORAGE_KAY = "feedback-form-state";
const dataForm = {};
openFormValue ();



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


function openFormValue () {

    const saveDataValue = JSON.parse(localStorage.getItem(STORAGE_KAY));
       
    if( !saveDataValue  ){
        
        return
       
    }
   for(let key in saveDataValue){
    form.elements[key].value = saveDataValue[key];
   }
    
    

}
