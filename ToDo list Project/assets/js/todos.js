
//another way -pass css through an object to change more than one style
$("ul").on("click", "li", function() {
    //if li is gray turn it black else turn it back
    //better with toggleClass - this is more vanila js
    if($(this).css("color") === "rgb(132, 132, 99)") {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else {
        $(this).css({
            color: "#848463",
            textDecoration: "line-through"
        });
    }
    
});
// easy line of code for ticking off todos
// $("li").click(function(){
//     $(this).toggleClass("completed");
// });

//click on trashcan to delete todos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        //call back to finish fadeOut first before deleting element
        $(this).remove();   
    });
    //to stop event just until parent element
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //for hitting enter when adding to do
    if(event.which === 13){
        //val = value of input
        var todoText = $(this).val();
        $(this).val(" ");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +  todoText + "</li>");
    };
});

$("#add").click(function(){
    $("input[type='text']").fadeToggle();
});