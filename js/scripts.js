$(document).ready(function () {
  $("#contact-form").submit(function (event) {

    event.preventDefault();
    var firstName = ($("#form_name").val());
    var lastName = ($("#form_lastname").val());
    var perfume = ($("#form_perfume").val());
    var animal = ($("#form_animal").val());
    var car = ($("#form_car").val());

    var groceries = [firstName, lastName, perfume, animal, car];
    var sorted = groceries.sort();

    console.log(sorted);

    // /var second = favorites[1];
    // var first = favorites[0];
    // var third = favorites[2];
    //
    // var newArray = [];
    //
    // newArray.push(second, first, third);
    //
    // console.log("New array: " + newArray);
    // //
  // $("#output").text(newArray);
  var form = $("#contact-form");
  form.hide();
  sorted.forEach(function (sort) {
    $("#output").append("<li>" + sort.toUpperCase() + "</li>");
      console.log(sort);
  });

  });

});
