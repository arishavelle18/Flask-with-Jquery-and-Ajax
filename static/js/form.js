$(document).ready(function(){
    $('form').on('submit',function(event){
        event.preventDefault();
        name = $('#nameInput').val()
        email = $('#emailInput').val()
        
        $.ajax({
            data:{
                name:name,
                email:email
            },
            type: 'POST',
            url: '/process',
            success : function(data){
                if(data.error){
                    $('#errorAlert').html(data.error).show();
                    $("#successAlert").hide();
                }
                else{
                    console.log(data.name)
                    $('#successAlert').html(data.name).show();
                    $('#errorAlert').hide();
                }
            }
        })
    });
})