// Check off Specific Todos by Clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

//Click on X to delete Todo

$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
      // grab new todo text from input
      let todoText = $(this).val();
      $(this).val('');
      //create new li and add to ul
      $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`)
    }
});


// select icon

$('.fa-plus').click(function(){
  $("input[type='text']").fadeToggle();
});