$(document).ready(init);
var errorElement= $("#errorElId");


function init(){
    formValidations()
    $("#loginBtn").click(function (){
        errorElement.html("")
        let props= {
            email: $("#inputEmail").val(),
            password: $("#inputPassword").val(),
        }
        if(props.email && props.password.trim()){
                processLogin(props);
            
        } else{
            errorElement.html("All fields are required")
            setTimeout(function(){
                errorElement.html("")
            },2000)

        }
        
    })
}

function formValidations(){
    
    $("#inputEmail").on('keyup', function(evt){
        //let fullName = $(this).val()
        let email = evt.target.value;
        const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email){
            $("#inputEmailError").html("Email is required");
        }else if(email && re.test(email)){
            $("#inputEmailError").html(null);
            doesEmailExist({email},function (emailExist){
                if(emailExist){
                    $("#inputEmailError").html(null);

                }else{
                    $("#inputEmailError").html("Email not found Please Signup");

                }
            })
        }else{
            $("#inputEmailError").html("Please add Current Email Id");
        }
    })
}

function processLogin(props){
    
    console.log(props)
    $.ajax({
        method: 'POST',
            url: 'http://localhost:1000/users/login',
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            async: false,
            data: props,
            success: function(res){
                
                if (res.status== 200) {
                    
                    console.log(res.response);
                    localStorage.setItem("access_token",res.response)
                    let userPayload = jwt_decode(localStorage.getItem("access_token"));
                    let stringifyPayload = JSON.stringify(userPayload)

                    localStorage.setItem("user" ,stringifyPayload)
                    window.location = 'products.html'
                //    alert("Login Successful")                    
                }else{
                    errorElement.html("Invalid Credentials")
                }
            },
            error: function(options){
                throw new Error(options)
            }
            
    })
}

function doesEmailExist(props, callback){
    $.ajax({
        method: 'POST',
            url: 'http://localhost:1000/users/email/exist',
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            async: false,
            data: props,
            success: function(res){
                
                if (res.status== 200) {
                    // alert("User Register Successfully");
                    // window.location = "login.html"   =>By using this it will move from current page to new page...
                    return callback(false)
                    
                } else if(res.status == 403){
                    console.log(res)
                    return callback(true)
                    // alert("There is something went wrong!");
                }else{
                    alert("There is something went wrong!");
                    window.location.reload()
                }
            },
            error: function(options){
                throw new Error(options)
            }
            
    })
}

