(function(){
  document.querySelectorAll('[data-image-dialog]').forEach(function(button){
    const dialog=document.getElementById(button.dataset.imageDialog);if(!dialog)return;
    button.addEventListener('click',function(){dialog.showModal();});
    dialog.querySelector('[data-close-image]').addEventListener('click',function(){dialog.close();});
    dialog.addEventListener('click',function(event){if(event.target===dialog)dialog.close();});
  });
})();
