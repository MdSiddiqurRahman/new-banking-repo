// submite button activate///////////////

document.getElementById('submit-btn').addEventListener('click', function(){
    // get user email setup option ////////////////


    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    

    // get user password section setup ////////////


    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;


    // let's do action on the email and password by submit button //////

    if (userEmail == 'alba@gmail.com' && userPassword == 'albasid'){
        window.location.href = 'bank.html';
    }

})