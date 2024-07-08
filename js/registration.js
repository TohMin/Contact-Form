let unentered_count = [2, 3, 4];
let current_page = 1;
document.getElementById("unentered-fields-count").innerHTML =
  unentered_count.reduce((a, b) => a + b, 0);
$("#pagenumber").html(current_page);

$("button.next").on("click", function () {
  if (unentered_count[current_page - 1] == 0) {
    // if current page required field is filled
    if (current_page == 3) {
      $(this).html("この内容で送信する");
      $("form").submit();
    } else {
      $(".next").html("次へ");
      $(".back").removeClass("d-none");
      current_page++;
      $("#pagenumber").html(current_page);
      let page = current_page * 34 > 100 ? 100 : current_page * 34;
      $(".progress-bar").css("width", page + "%");
      $(".progress-bar").attr("aria-valuenow", current_page * 33);
      $(".container").addClass("d-none");
      $(".container--" + current_page).removeClass("d-none");
    }
  } else {
    if (current_page == 1) {
      if ($("#area").val() == "") {
        $("#area").addClass("danger");
      }

      if ($('input[name="commute[]"]:checked').length == 0) {
        $('input[name="commute[]"]').addClass("danger");
        $(".item-commute .form-check").addClass("danger");
      }

      if (
        $("#area").val() != "" &&
        $('input[name="commute[]"]:checked').length != 0
      ) {
        $(".warning").addClass("d-none");
      }

      $(this).html("未入力の項目があります");
      $(".warning").removeClass("d-none");
    }
    if (current_page == 2) {
      if ($('input[name="jobdate"]:checked').length == 0) {
        $(".item-jobdate .form-check").addClass("danger");
      }

      if ($('input[name="changeReason[]"]:checked').length == 0) {
        $(".item-changeReason .form-check").addClass("danger");
        $('input[name="changeReason[]"]').addClass("danger");
      }

      if ($('input[name="attractive[]"]:checked').length == 0) {
        $(".item-attractive .form-check").addClass("danger");
        $('input[name="attractive[]"]').addClass("danger");
      }

      if (
        $('input[name="jobdate"]:checked').length != 0 &&
        $$('input[name="changeReason[]"]:checked').length != 0 &&
        $('input[name="attractive[]"]:checked').length != 0
      ) {
        $(".warning").addClass("d-none");
      }

      $(this).html("未入力の項目があります");
      $(".warning").removeClass("d-none");
    }
    if (current_page == 3) {
      if ($("#age").val() == "") {
        $("#age").addClass("danger");
        $("#please_enter_age").removeClass("d-none");
      }

      if ($("#firstname").val() == "") {
        $("#firstname").addClass("danger");
        $("#please_enter_firstname").removeClass("d-none");
      }

      if ($("#lastname").val() == "") {
        $("#lastname").addClass("danger");
        $("#please_enter_lastname").removeClass("d-none");
      }

      if ($("#phonenumber").val() == "") {
        $("#phonenumber").addClass("danger");
        $("#please_enter_phonenumber").removeClass("d-none");
      }

      if ($('input[name="is_privacy"]:checked').length == 0) {
        $(".item-privacy .form-check").addClass("danger");
        $('input[name="is_privacy"]').addClass("danger");
        $("#please_enter_privacy").removeClass("d-none");
      }

      $(this).html("未入力の項目があります");
      $(".warning").removeClass("d-none");
    }
  }
});

$("button.back").on("click", function () {
  if (current_page == 1) {
    $(this).addClass("d-none");
  } else {
    console.log(current_page);
    $(this).removeClass("d-none");
    $(this).html("戻る");
    current_page--;
    $("#pagenumber").html(current_page);
    let page = current_page * 34 > 100 ? 100 : current_page * 34;
    $(".progress-bar").css("width", page + "%");
    $(".progress-bar").attr("aria-valuenow", current_page * 33);
    $(".container").addClass("d-none");
    $(".container--" + current_page).removeClass("d-none");
  }
});

//  --1-- check the first page required field is filled for current page

let previous_11 = "";

$(".container--1")
  .on("click", "#area", function () {
    previous_11 = $("#area").val();
  })
  .on("change", "#area", function () {
    if ($("#area").val() == "") {
      unentered_count[0]++;
      $("#area").addClass("danger");
    }
    if ($("#area").val() != "" && previous_11 == "") {
      $("#area").removeClass("danger");
      unentered_count[0]--;
    }
    $("#unentered-fields-count").html(
      unentered_count.reduce((a, b) => a + b, 0)
    );

    if (unentered_count[0] == 0) {
      $(".next").html("次へ");
      $(".warning").addClass("d-none");
    } else {
      $(".next").html("未入力の項目があります");
      $(".warning").removeClass("d-none");
    }
  });

let previous12 = 0;
$(".container--1").on("click", 'input[type="checkbox"]', function () {
  if ($('input[name="commute[]"]:checked').length == 0) {
    $('input[name="commute[]"]').addClass("danger");
    $(".item-commute .form-check").addClass("danger");
    unentered_count[0]++;
  }
  if ($('input[name="commute[]"]:checked').length != 0 && previous12 == 0) {
    $('input[name="commute[]"]').removeClass("danger");
    $(".item-commute .form-check").removeClass("danger");
    unentered_count[0]--;
  }
  previous12 = $('input[name="commute[]"]:checked').length;
  document.getElementById("unentered-fields-count").innerHTML =
    unentered_count.reduce((a, b) => a + b, 0);

  if (unentered_count[0] == 0) {
    $(".next").html("次へ");
    $(".warning").addClass("d-none");
  } else {
    $(".next").html("未入力の項目があります");
    $(".warning").removeClass("d-none");
  }
});

//  --2-- check the second page required field is filled for current page

let previous21 = 0;
$(".container--2").on("click", 'input[name="jobdate"]', function () {
  if ($('input[name="jobdate"]:checked').length == 0) {
    $(".item-jobdate .form-check").addClass("danger");
    unentered_count[1]++;
  }
  if ($('input[name="jobdate"]:checked').length != 0 && previous21 == 0) {
    $(".item-jobdate .form-check").removeClass("danger");
    unentered_count[1]--;
  }
  previous21 = $('input[name="jobdate"]:checked').length;
  document.getElementById("unentered-fields-count").innerHTML =
    unentered_count.reduce((a, b) => a + b, 0);

  if (unentered_count[1] == 0) {
    $(".next").html("次へ");
    $(".warning").addClass("d-none");
  } else {
    $(".next").html("未入力の項目があります");
    $(".warning").removeClass("d-none");
  }
});

let previous22 = 0;
$(".container--2").on("click", 'input[name="changeReason[]"]', function () {
  if ($('input[name="changeReason[]"]:checked').length == 0) {
    $(".item-changeReason .form-check").addClass("danger");
    $('input[name="changeReason[]"]').addClass("danger");
    unentered_count[1]++;
  }
  if ($('input[name="changeReason[]"]:checked').length != 0 && previous22 == 0) {
    $(".item-changeReason .form-check").removeClass("danger");
    $('input[name="changeReason[]"]').removeClass("danger");
    unentered_count[1]--;
  }
  previous22 = $('input[name="changeReason[]"]:checked').length;
  document.getElementById("unentered-fields-count").innerHTML =
    unentered_count.reduce((a, b) => a + b, 0);

  if (unentered_count[1] == 0) {
    $(".next").html("次へ");
    $(".warning").addClass("d-none");
  } else {
    $(".next").html("未入力の項目があります");
    $(".warning").removeClass("d-none");
  }
});

let previous23 = 0;
$(".container--2").on("click", 'input[name="attractive[]"]', function () {
  if ($('input[name="attractive[]"]:checked').length == 0) {
    $(".item-attractive .form-check").addClass("danger");
    $('input[name="attractive[]"]').addClass("danger");
    unentered_count[1]++;
  }
  if ($('input[name="attractive[]"]:checked').length != 0 && previous23 == 0) {
    $(".item-attractive .form-check").removeClass("danger");
    $('input[name="attractive[]"]').removeClass("danger");
    unentered_count[1]--;
  }
  previous23 = $('input[name="attractive[]"]:checked').length;
  document.getElementById("unentered-fields-count").innerHTML =
    unentered_count.reduce((a, b) => a + b, 0);

  if (unentered_count[1] == 0) {
    $(".next").html("次へ");
    $(".warning").addClass("d-none");

    $("#firstname").keyup(function () {
      if ($("#firstname").val() === "") {
        $("#firstname").addClass("danger");
        $("#please_enter_firstname").removeClass("d-none");
      } else {
        $("#firstname").removeClass("danger");
        $("#please_enter_firstname").addClass("d-none");
      }
    });

    $("#phonenumber").keyup(function () {
      var regex = /^[0-9\-\+]+$/i;
      if ($("#phonenumber").val() != "" && regex.test($("#phonenumber").val()) == true) {
        $("#phonenumber").removeClass("danger");
        $("#regex").addClass("d-none");
        $("#please_enter_phonenumber").addClass("d-none");
      } else if($("#phonenumber").val() != "" && regex.test($("#phonenumber").val()) == false){
        $("#phonenumber").addClass("danger");
        $("#regex").removeClass("d-none");
      } else if($("#phonenumber").val() == "") {
        $("#please_enter_phonenumber").removeClass("d-none");
        $("#phonenumber").addClass("danger");
        $("#regex").addClass("d-none");
      }
    });

  } else {
    $(".next").html("未入力の項目があります");
    $(".warning").removeClass("d-none");
  }
});

//  --3-- check the third page required field is filled for current page
let previous31 = "";
$(".container--3")
  .on("click", "#age", function () {
    previous31 = $("#age").val();
  })
  .on("change", "#age", function () {
    if ($("#age").val() == "") {
      $("#age").addClass("danger");
      $("#please_enter_age").removeClass("d-none");
      unentered_count[2]++;
    }
    if ($("#age").val() != "" && previous31 == "") {
      $("#age").removeClass("danger");
      $("#please_enter_age").addClass("d-none");
      unentered_count[2]--;
    }
    $("#unentered-fields-count").html(
      unentered_count.reduce((a, b) => a + b, 0)
    );

    if (unentered_count[2] == 0) {
      $(".next").html("次へ");
      $(".warning").addClass("d-none");
    } else {
      $(".next").html("未入力の項目があります");
      $(".warning").removeClass("d-none");
    }
  });

let previous321 = "";
let previous322 = "";
$(".container--3")
  .on("focus", "#firstname", function () {
    previous321 = $("#firstname").val();
  })
  .on("change", "#firstname", function () {
    $("#unentered-fields-count").html(
      unentered_count.reduce((a, b) => a + b, 0)
    );

    if ($("#firstname").val() === "") {
      unentered_count[2]++;
    } else {
      unentered_count[2]--;
    }

    if (unentered_count[2] == 0) {
      $(".next").html("この内容で送信する");
      $(".warning").addClass("d-none");
    } else {
      $(".next").html("未入力の項目があります");
      $(".warning").removeClass("d-none");
    }
  });

$(".container--3")
  .on("focus", "#lastname", function () {
    previous322 = $("#lastname").val();
  })
  .on("keyup", "#lastname", function () {
    if ($("#lastname").val() == "") {
      $("#lastname").addClass("danger");
      $("#please_enter_lastname").removeClass("d-none");
    } else {
      $("#lastname").removeClass("danger");
      $("#please_enter_lastname").addClass("d-none");
    }

    $("#unentered-fields-count").html(
      unentered_count.reduce((a, b) => a + b, 0)
    );

    if (unentered_count[2] == 0) {
      $(".next").html("この内容で送信する");
      $(".warning").addClass("d-none");
    } else {
      $(".next").html("未入力の項目があります");
      $(".warning").removeClass("d-none");
    }
  });

let previous33 = "";
$(".container--3")
  .on("focus", "#phonenumber", function () {
    previous33 = $("#phonenumber").val();
  })
  .on("change", "#phonenumber", function () {
    var regex = /^[0-9\-\+]+$/i;
    if ($("#phonenumber").val() == "" && previous33 != "" && regex.test(previous33) == true) {
      unentered_count[2]++;
    }
    
    if ($("#phonenumber").val() != "" && previous33 == "" && regex.test($("#phonenumber").val()) == true) {
      unentered_count[2]--;
    }

    $("#unentered-fields-count").html(
      unentered_count.reduce((a, b) => a + b, 0)
    );

    if (unentered_count[2] == 0) {
      $(".next").html("この内容で送信する");
      $(".warning").addClass("d-none");
    } else {
      $(".next").html("未入力の項目があります");
      $(".warning").removeClass("d-none");
    }

    var current_number = 0;
    if ($("#phonenumber").val().length > 0) {
      current_number = $("#phonenumber").val().length;
      $("#phonenumber_count").html(current_number);
    }
    $("#phonenumber_count").html(current_number);
  });

let previous34 = 0;
$(".container--3").on("click", 'input[name="is_privacy"]', function () {
  if ($('input[name="is_privacy"]:checked').length == 0) {
    $(".item-privacy .form-check").addClass("danger");
    $('input[name="is_privacy"]').addClass("danger");
    $("#please_enter_privacy").removeClass("d-none");
    unentered_count[2]++;
  }
  if ($('input[name="is_privacy"]:checked').length != 0 && previous34 == 0) {
    $(".item-privacy .form-check").removeClass("danger");
    $('input[name="is_privacy"]').removeClass("danger");
    $("#please_enter_privacy").addClass("d-none");
    unentered_count[2]--;
  }
  previous34 = $('input[name="is_privacy"]:checked').length;
  document.getElementById("unentered-fields-count").innerHTML =
    unentered_count.reduce((a, b) => a + b, 0);

  if (unentered_count[2] == 0) {
    $(".next").html("この内容で送信する");
    $(".warning").addClass("d-none");
  } else {
    $(".next").html("未入力の項目があります");
    $(".warning").removeClass("d-none");
  }
});

$(".container--3")
  .on("focus", "#email", function () {})
  .on("change", "#email", function () {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test($("#email").val()) == false) {
      $("#valid_email").removeClass("d-none");
    } else {
      $("#valid_email").addClass("d-none");
    }
  });
