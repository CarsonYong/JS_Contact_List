$(document).ready(function() {
  getContacts();
  // setInterval(getContacts, 5000);

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $("#contact").on("submit", function(e) {
    e.preventDefault();

    $.ajax({
      url:"/contacts",
      method: "POST",
      data: $("#contact").serialize()
    }).done(function(contact){
      console.log(contact)
      showContact(contact);
      // $("<li class='contact' id='"+contact.id+"'>"+contact.first_name+"+</li>").appendTo("#contacts");

    });
  });


});

// function contactDetails(id) {
//   console.log("reijger")
//   (contactData).appendTo(contactDiv);
//   // $("#"+id).load('ojregjorejogjo');
// }

function showContact(contact) {
  var contactDiv =$("<div id='"+contact.id+"'></div>").appendTo("#contacts");
  var contactDelete = $("<button type='button'>Delete!</button>");
  var contactShow = $("<button type='button'>Show</button>");
  var contactData = $("<li class='contact'>"+contact.first_name+"</li>");
  contactData.appendTo(contactDiv);
  contactShow.appendTo(contactDiv);
  contactDelete.appendTo(contactDiv);

  contactDelete.click(function(){
    deleteContact(contact.id);
  });

  contactShow.click(function(){
    moreDetails(contact.id, contactDiv);
  });
}

function moreDetails(id, contactDiv){
  $.ajax({
    url:"/contacts/"+ id,
    method: "GET",
  }).done(function(contact){
    $("<li class='contact'>"+contact.last_name+"</li>").appendTo(contactDiv);
  });

}



function deleteContact(id){
      $.ajax({
      url:"/contacts/"+ id,
      method: "Delete",
    }).done(function(){
      $("#"+id).remove();
    });
}


function getContacts(){

  $.ajax({url: "/contacts",
      method: "GET" })
   .done(function(contacts){
    console.log(contacts);
    $("#contacts").empty();
    $.each(contacts, function(i, contact){
      showContact(contact);
    })
  });

 }
