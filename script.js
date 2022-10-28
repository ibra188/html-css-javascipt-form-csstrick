const form = document.forms[0];
      form.addEventListener('click', function(event){
        event.preventDefault;
        //prompt('Form Sumited');
        console.log('form submited');
      });

document.querySelector('.btn').addEventListener('click', function(){
  form.requestSubmit();
})      
