
function msgReceived() {
    const form = document.querySelector('.fillingForm')
    const sendBtn = document.querySelector(".sendBtn");
    const sendAnotherMsgBtn = document.querySelector(".sendAnotherMsgBtn");
    const fillingForm = document.querySelector(".fillingForm");
    const submitted = document.querySelector(".submitted");
    // const inputs = fillingForm.querySelectorAll('input, textarea');

    if(!form.checkValidity()){
    console.log('form is invalid');
    }
    else
        {
        sendBtn.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('form hidden');
            fillingForm.classList.add('hidden');
            submitted.classList.remove('hidden');
        })
        
        sendAnotherMsgBtn.addEventListener('click', 
            (e) => {
                e.preventDefault();
            console.log('form shown');
            fillingForm.classList.remove('hidden');
            submitted.classList.add('hidden');
            // window.location.reload();
    })
}
}
export default msgReceived;