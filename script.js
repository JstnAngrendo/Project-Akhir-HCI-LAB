// const firstName = document.getElementById('fname')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// // form.addEventListener('submit',(e) =>{
// //     let message = []
// //     if(firstName.value === '' || firstname.value == null){
// //         message.push('Name must not be empty')
// //     }


// //     if(message.length >0){
// //         e.preventDefault();
// //         errorElement.innerText = message.join(',')
// //     }

   
// // })



// form.addEventListener('submit',(e) => {
//     e.preventDefault()
// })



// function checkForm(){  
//     const form = document.forms['memberForm'];
//     const errorElement = document.getElementById("error")

//     let errorLname = ''
//     let messages = []
//     var fname = document.getElementById("fname").value;
//     if(fname == "" ){
//         messages.push("Name must not be empty")
//     }
//     if(messages.length >0){
//         errorElement.innerText = messages.join(',')
//     }
// }

function checkForm(){  
    const form = document.forms['memberForm'];
    const fname = form['fname'].value;
    const Lname = form['Lname'].value;
    const date = form['dot'].value;
    const gender = form['gender'].value;
    const email = form['emails'].value;
    const password1 = form['pass'].value;
    const password2 = form['passvalidate'].value;
    const phoneNumber = form['phone'].value;
    const address = form['address'].value;
    const checkbox1 = form['checkbox1'].checked;
    const checkbox2 = form['checkbox2'].checked;

    document.getElementById('errorFname').innerHTML="";
    document.getElementById('errorLname').innerHTML="";
    document.getElementById('errorDate').innerHTML="";
    document.getElementById('errorGender').innerHTML="";
    document.getElementById('errorEmail').innerHTML="";
    document.getElementById('errorPass').innerHTML="";
    document.getElementById('errorPhone').innerHTML = "";
    document.getElementById('errorAddress').innerHTML ="";
    document.getElementById('errorCheck').innerHTML = "";

    let isValid =  true
    let errorLname = ''
    let errorFname = ''
    let errorDate = ''
    let errorGender = ''
    let errorEmail =''
    let errorPass =''
    let errorPhone = ''
    let errorAddress =''
    let errorCheck = ''
    
    if(!fname ){
        errorFname = "Name must not be empty"
    }
    if(!Lname){
        errorLname = "Name must not be empty"
    }
    if(!date){
        errorDate = "Field Required"
    }
    if(!gender){
        errorGender = "Field Required"
    }
    if(!email){
        errorEmail = "Invalid Email Address"
    }
    if(!password1 || !password2){
        errorPass = "Field Required"
    }else if(password1 != password2){
        errorPass = "Password doesn’t match"
    }

    if(!phoneNumber){
        errorPhone = "Field Required"
    }else if(isNaN(phoneNumber)){
        errorPhone = "Invalid Phone Number"
    }
    if(!address){
        errorAddress = "Field Required"
    }
    if(!checkbox1|| !checkbox2){
        errorCheck = "Field Required"
    }
    

    if(errorFname){
        document.getElementById('errorFname').innerHTML = errorFname
        isValid = false
    }
    if(errorLname){
        document.getElementById('errorLname').innerHTML = errorLname
        isValid = false
    }
    if(errorDate){
        document.getElementById('errorDate').innerHTML = errorDate
        isValid = false
    }
    if(errorGender){
        document.getElementById('errorGender').innerHTML = errorGender
        isValid = false
    }
    if(errorEmail){
        document.getElementById('errorEmail').innerHTML = errorEmail
        isValid = false
    }
    if(errorPass){
        document.getElementById('errorPass').innerHTML = errorPass
        isValid = false
    }
    if(errorPhone){
        document.getElementById('errorPhone').innerHTML = errorPhone
        isValid = false
    }
    if(errorAddress){
        document.getElementById('errorAddress').innerHTML = errorAddress
        isValid = false
    }
    if(errorCheck){
        document.getElementById('errorCheck').innerHTML = errorCheck
        isValid = false
    }
    
    return isValid;
}



