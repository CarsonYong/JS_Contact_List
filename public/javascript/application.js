$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $("#contact").on("submit", function(e) {
    e.preventDefault();

    $.ajax({
      url:"/contacts",
      method: "POST",
      data: {"contact[first_name]": $("#first_name").val(), 
             "contact[last_name]": $("#last_name").val(),
             "contact[email]": $("#email").val(),
             "contact[telephone]": $("#telephone").val()
            }
    });
  });


  $.ajax({url: "/contacts",
      method: "GET" })
  .done(function(contacts){
    console.log(contacts);
    $.each(contacts, function(i, contact){
      $("<li class='contact' id='"+contact.id+"'>"+contact.first_name+"</li>").appendTo("#contacts");
    })
  })
});

