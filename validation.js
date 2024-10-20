const form = document.getElementById('form')
const email_input = document.getElementById('email_input')
const error_message = document.getElementById('error-message')
const success_panel = document.getElementById('success-panel')
const email_text = document.getElementById('email-text')

form.addEventListener('submit', (e) =>{
    //e.preventDefault() prevents submit

    let errors = []

    if(email_input){
        //find email errors
        errors = getSubscribeErrors(email_input.value)
    }

    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    } else{
        success_panel.style.display = "block"

        email_text.innerText = email_input.value;
    }
})

function getSubscribeErrors(email){
    let errors = []

    if(email === '' || email == ''){
        errors.push("Valid email required")
        email_input.classList.add('incorrect')
    }
    return errors;
}
const allInputs = [email_input]

allInputs.forEach(input =>{
    input.addEventListener('input', () =>{
        if(email_input.classList.contains('incorrect')){
            email_input.classList.remove('incorrect')
        }
    })
})

