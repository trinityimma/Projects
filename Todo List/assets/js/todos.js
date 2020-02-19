 
//  Check off specific Todos By Clicking
 $("ul").on("click", "li",function(){
     $(this).toggleClass("done");
 });


 // Click on X to delete todo
 $("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
   
    event.stopPropagation();
 });

 $("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grab the new todo
        var text =  $(this).val();
        $(this).val("");
        //Add the new todo
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>  "+text + "</li>");
        $(this).text() = "";
    }
})

function clearInput(){
    $("input[type='text']").val() = "";
}

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})