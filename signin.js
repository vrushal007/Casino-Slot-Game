let userArray = [
    {
        email:"vrushalkpatel007@gmail.com",
        password:"123",
    },
    {
        email:"iamjay2021@gmail.com",
        password:"123",
    },
    {
        email:"patelbiren247@gmail.com",
        password:"123",
    },
]
$(()=>{
    const email = $('#email')
    const password = $('#password')
    const btnLogin = $('#btnLogin')
    console.log(userArray)
    btnLogin.click((event)=>{
        event.preventDefault()
        let find = userArray.find(value=>({email:email.val()}))
        if(find.password === password.val()){
            window.location.replace('index.html')
        }
    })
})


