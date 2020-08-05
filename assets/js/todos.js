// Check off todos on click

$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

// click on x to delete todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); // makes the fadeOut method wait 500ms and then calls remove(), otherwise fadeOut only hides the object
	}); // gets the parent element & removes it - in that case LI 
	event.stopPropagation(); // stops the event bubbling phenomenon	
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ // check if the keypress WHICH triggered keypress event is with keycode 13 //Enter

		var todoText = $(this).val();
		$(this).val("");

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
