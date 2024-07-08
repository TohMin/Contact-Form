$(".form").on("click", 'input[name="is_privacy"]', function () {
 if ($('input[name="is_privacy"]:checked').length == 0) {
        $("#please_enter_privacy").removeClass("d-none");
    } else {
        $("#please_enter_privacy").addClass("d-none");
    }
})

$("#name").on("blur", function () {
    if($('#name').val() != "") {
      $("#please_enter_name").addClass("d-none");
    } else {
      $("#please_enter_name").removeClass("d-none");
    }
})

$("#address").on("blur", function () {
    if($('#address').val() != "") {
      $("#please_enter_address").addClass("d-none");
    } else {
      $("#please_enter_address").removeClass("d-none");
    }
})

$("#birth_year").on("blur", function () {
    if($('#birth_year').val() != "") {
      $("#please_enter_birth_year").addClass("d-none");
    } else {
      $("#please_enter_birth_year").removeClass("d-none");
    }
})

$("#phonenumber").on("blur", function () {
    var regex = /^[0-9\-\+]+$/i;
    if ($("#phonenumber").val() != "" && regex.test($("#phonenumber").val()) == true) {
        $("#regex").addClass("d-none");
        $("#please_enter_phone").addClass("d-none");
    } else if ($("#phonenumber").val() == "") {
        $("#regex").addClass("d-none");
        $("#please_enter_phone").removeClass("d-none");
    } else if ($("#phonenumber").val() != "" && regex.test($("#phonenumber").val()) == false) {
        $("#regex").removeClass("d-none");
        $("#please_enter_phone").addClass("d-none");
    }
})

$("#email").on("blur", function () {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test($("#email").val()) == false && $("#email").val() != "") {
      $("#valid_email").removeClass("d-none");
      $("#please_enter_email").addClass("d-none");
    } else if ($("#email").val() == "") {
      $("#valid_email").addClass("d-none");
      $("#please_enter_email").removeClass("d-none");
    } else if ($("#email").val() != "" && regex.test($("#email").val()) == true) {
      $("#valid_email").addClass("d-none");
      $("#please_enter_email").addClass("d-none");
    }
});

$('.sending').on('click', function () {
    var regex_phonenumber = /^[0-9\-\+]+$/i;
    var regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if ($("#name").val() != "" && $("#address").val() != "" && $("#birth_year").val() != "" && regex_phonenumber.test($("#phonenumber").val()) == true && regex_email.test($("#email").val()) == true && $('input[name="is_privacy"]:checked').length != 0) {
      $("form").submit();
    }

    if($("#name").val() == "") {
      $("#please_enter_name").removeClass("d-none");
    }

    if($("#name").val() != "") {
        $("#please_enter_name").addClass("d-none");
    }

    if($("#address").val() == "") {
      $("#please_enter_address").removeClass("d-none");
    }

    if($("#address").val() != "") {
        $("#please_enter_address").addClass("d-none");
    }
  

    if($("#birth_year").val() == "") {
      $("#please_enter_birth_year").removeClass("d-none");
    }

    if($("#birth_year").val() != "") {
        $("#please_enter_birth_year").addClass("d-none");
    }

    if($("#phonenumber").val() == "") {
        $("#please_enter_phone").removeClass("d-none");
    }

    if($("#phonenumber").val() != "") {
        $("#please_enter_phone").addClass("d-none");
    }

    if($("#email").val() == "") {
        $("#please_enter_email").removeClass("d-none");
    }

    if($("#email").val() != "") {
        $("#please_enter_email").addClass("d-none");
    }

    if($("#phonenumber").val() != "" && regex_phonenumber.test($("#phonenumber").val()) == false) {
      $("#regex").removeClass("d-none");
    }

    if($("#phonenumber").val() == "") {
        $("#regex").addClass("d-none");
    }

    if($("#phonenumber").val() != "" && regex_phonenumber.test($("#phonenumber").val()) == true) {
        $("#regex").addClass("d-none");
    }

    if($("#email").val() != "" && regex_email.test($("#email").val()) == false) {
      $("#valid_email").removeClass("d-none");
    }

    if($("#email").val() != "" && regex_email.test($("#email").val()) == true) {
        $("#valid_email").addClass("d-none");
    }

    if($("#email").val() == "") {
        $("#valid_email").addClass("d-none");
    }

    if ($('input[name="is_privacy"]:checked').length == 0) {
        $("#please_enter_privacy").removeClass("d-none");
    }

    if ($('input[name="is_privacy"]:checked').length != 0) {
        $("#please_enter_privacy").addClass("d-none");
    }
})
