const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit (event){
    event.preventDefault();
    const {email,password} = event.currentTarget.elements;

  if (email.value.length < 1 || password.value.length < 1){
    alert ("All fields must be filled!")
  };
  
  const data = {
    email: email.value,
    password: password.value
   };
   
   console.log(data)
   formEl.reset()
 };

