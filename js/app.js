
window.onload=function()
{
  var storedValue = localStorage.getItem(question);

    if(question == "question3")
    {

    }
    else
    {
        $("#"+storedValue).prop('checked', true).toggleClass("checked");
    }

}

function tmp(e){
 if (!e)
        e = window.event;
    var _this = e.srcElement || e.target;

<<<<<<< Updated upstream
    if(question !== "question3")
    {
        localStorage.setItem(question, _this.id );
        localStorage.setItem(value, _this.value);
    }
    else {

    }
=======
    localStorage.setItem(question, _this.id);
	localStorage.setItem(question, _this.value);
>>>>>>> Stashed changes
}


function back() {
    history.back();
}

$('#name').keydown(function (e) {
    if(e.keyCode==13)
    {
      this.blur();
      e.preventDefault();
      e.stopPropagation();
    }
});

$('.inp').on('input',function(e){
    //text to localstorage
});


$('#ajax').submit(function() {

    var that = $(this),
        url = that.attr('action'),
        method= that.attr('method'),
        data={};


    that.find('[name]').each(function(index,value){
        var that = $(this),
            name=that.attr('name'),
            value=that.val();
        data[name]= value;
        data["answers"] = JSON.stringify(localStorage);
    });

    $.ajax({
        url: url,
        type: method,
        data: data,
        success: function(response){
            console.log(response);
        },
        error: function () {
            console.log("Error");
        }
    });

    return false;

});


