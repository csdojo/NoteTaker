var $submitBtn = $(".submit");

var handleSubmitClick = function(event) {
  event.preventDefault();

  // Get reservation info from the form
  var newNote = {
    name: $("#title").val().trim(),
    phone: $("#content").val().trim(),
  };

  // POST the reservation to "/api.tables"
  $.ajax({
    url: "/api/notes",
    method: "POST",
    data: newNote
  }).then(function(data) {
    // If a table is available... tell user they are booked.
    if (data) {
      alert("Yay! Your note has been added!");
    }

    // If a table is available... tell user they on the waiting list.
    else {
      alert("Be an organized person!");
    }

    // Clear the form after submitting
    $("#title").val("");
    $("#content").val("");
    }
  );
};

// Run handleSubmitClick whenever the form is submitted
$submitBtn.on("click", handleSubmitClick);
