
window.onload=function()
{
  var storedValue = localStorage.getItem(question);
  $("#"+storedValue).prop('checked', true);    
}


function tmp(e){

 if (!e)
        e = window.event;
    var _this = e.srcElement || e.target;

    localStorage.setItem(question, _this.id);
}

// $('napis').addEventListener('keydown',function(e){
//     if(e.keyCode==13) 
//     {
            
//       this.blur();
//       e.preventDefault()
//       e.stopPropagation();
//     }
//   }
//   ,true);

