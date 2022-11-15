let userArray = []
$(()=>{
    let btnSignup = $('#btnSignup')
    const email = $('#email')
    const password = $('#password')
    const name = $('#name')

    btnSignup.click((event)=>{
        event.preventDefault()
        userArray =[
            ...userArray,
            {
                name:name.val(),
                email:email.val(),
                password:password.val()
            }
        ]
        window.location.replace('index.html')
    })
})
