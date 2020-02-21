$("ul").on("click", "li", function(event){
    
    $("ol").append($(this).toggleClass("complited"));
    event.stopPropagation();
});

$("ul").on("click", "span", function(event){
   $(this).parent().remove();
   event.stopPropagation();
   
});

$("input[type = 'text']").on("keypress",function(event){
    if (event.which === 13 ){
        var value = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + value + "</li>");
    }  
});
