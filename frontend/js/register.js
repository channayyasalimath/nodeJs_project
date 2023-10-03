$(document).ready(init);

function init() {
  formValidations();

  $("#registerBtn").click(function () {
    var errorElement = $("#errorElId");
    errorElement.html("");
    let props = {
      fullName: $("#inputFullName").val(),
      email: $("#inputEmail").val(),
      phone: $("#inputPhone").val(),
      password: $("#inputPassword").val(),
    };
    if (
      props.fullName.trim() &&
      props.email &&
      props.phone &&
      props.password.trim()
    ) {
      if (props.password != $("#inputCPassword").val()) {
        errorElement.html("Passwords are not matching!!");
        setTimeout(function () {
          errorElement.html("");
        }, 2000);
      } else {
        //save to backend mode
        // alert("No errors")
        saveUser(props);
      }
    } else {
      errorElement.html("All fields are required");
      setTimeout(function () {
        errorElement.html("");
      }, 2000);
    }
  });
}

function formValidations() {
  $("#inputFullName").on("keyup", function (evt) {
    //let fullName = $(this).val()
    let fullName = evt.target.value;
    if (!fullName.trim()) {
      $("#inputFullNameError").html("Full name is required");
    } else if (fullName.trim() && fullName.trim().length <= 3) {
      $("#inputFullNameError").html("Minimum 4 length is required");
    } else {
      $("#inputFullNameError").html(null);
    }
  });

  $("#inputPhone").on("keyup", function (evt) {
    //let fullName = $(this).val()
    let phone = evt.target.value;
    if (!phone) {
      $("#inputPhoneError").html("Phone number is required");
    } else if (phone && phone.length == 10) {
      $("#inputPhoneError").html(null);
    } else {
      $("#inputPhoneError").html("Maximum  or Minimum 10 numbers are required");
    }
  });

  $("#inputEmail").on("keyup", function (evt) {
    //let fullName = $(this).val()
    let email = evt.target.value;
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {
      $("#inputEmailError").html("Email is required");
    } else if (email && re.test(email)) {
      $("#inputEmailError").html(null);
      doesEmailExist({ email }, function (emailExist) {
        if (emailExist) {
          $("#inputEmailError").html("Email Already Exist");
        } else {
          $("#inputEmailError").html(null);
        }
      });
    } else {
      $("#inputEmailError").html("Please add currentt Email Id");
    }
  });
}

function saveUser(props) {
  console.log(props);
  $.ajax({
    method: "POST",
    url: "http://localhost:1000/users/save",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    dataType: "json",
    async: false,
    data: props,
    success: function (res) {
      if (res.status == 200) {
        callback(true);
      } else {
        console.log(res);
        alert("There is something went wrong!");
      }
    },
    error: function (options) {
      throw new Error(options);
    },
  });
}

function doesEmailExist(props, callback) {
  $.ajax({
    method: "POST",
    url: "http://localhost:1000/users/email/exist",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    dataType: "json",
    async: false,
    data: props,
    success: function (res) {
      if (res.status == 200) {
        // alert("User Register Successfully");
        // window.location = "login.html"   =>By using this it will move from current page to new page...
        return callback(false);
      } else if (res.status == 403) {
        console.log(res);
        return callback(true);
        // alert("There is something went wrong!");
      } else {
        alert("There is something went wrong!");
        window.location.reload();
      }
    },
    error: function (options) {
      throw new Error(options);
    },
  });
}
