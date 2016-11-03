
window.onload=function()
{
  var storedValue = localStorage.getItem(question);



    if(question == "question3")
    {
        var quest3 = JSON.parse(localStorage.getItem("guest3"))
        var i=0;

        quest3.forEach(function (entry) {
            if(entry==1)
            {
                $("#"+i).prop('checked', true);
                $('#'+i).parent().toggleClass("checked")
            }
                    i++;
        })
    }
    else
    {
        $("#"+storedValue).prop('checked', true).toggleClass("checked");
        $('#'+storedValue).parent().toggleClass("checked")
    }

}

function tmp(e){
 if (!e)
        e = window.event;
    console.log(e);
    var _this = e.srcElement || e.target;


    $('#'+_this.id).parent().toggleClass("checked")
    if(question !== "question3")
    {
        var storedValue = localStorage.getItem(question);
        $('#'+storedValue).parent().toggleClass("checked")



        localStorage.setItem(question, _this.id );
        localStorage.setItem(value, _this.value);
    }
    else {

        quest3 = JSON.parse(localStorage.getItem("guest3"));

		if(guest3[_this.id] == "1"){
		guest3[_this.id] = "0";}
		else{
		guest3[_this.id] = "1";}
		localStorage.setItem("guest3",JSON.stringify(guest3))
    }

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
    window.location.href = "../index.html";
    return false;

});


