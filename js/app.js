
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
    });

    $.ajax({
        url: url,
        type: method,
        data: data,
        success: function(response){
            console.log(response);
        }
    });

    return false;

});


