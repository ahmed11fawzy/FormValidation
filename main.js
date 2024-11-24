const userName=document.querySelector('#userName');
const userEmail=document.querySelector('#email');
const userPassword=document.querySelector('#password');
const submitBtn=document.querySelector('#submit');
const userNameRegex=/^[a-zA-Z]+([a-zA-Z0-9]*)$/;
const userEmailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const userPasswordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;





submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(userName?.value === '' || userEmail?.value === '' || userPassword?.value === ''){
        document.querySelector('#output').style.display ='flex';
        return;
    }
    else{
        if(userNameRegex.test(userName?.value) && userEmailRegex.test(userEmail?.value) && userPasswordRegex.test(userPassword?.value)){
            alert('User created successfully');
            document.querySelector('#output').style.display ='none';
        }else{    
            alert('User creation failed');
            document.querySelector('#output').style.display ='flex';
        }
    }
})