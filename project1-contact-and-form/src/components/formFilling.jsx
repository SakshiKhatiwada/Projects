import msgReceived from "./logic"

const FormFilling = () => {
    return (
        <>
            <form className="fillingForm">
                <p>Let&apos;s Talk!</p>
                {/* &apos; is for apostrophe */}
                <input type="text" name="name" id="fullName" placeholder="Full Name" />
                <input type='email' name="email" id="email" placeholder="Email" />
                <textarea rows={10} placeholder="Type your message..."></textarea>
                <button type="submit" className="sendBtn" onClick={msgReceived}>SEND &#8594; </button>
            </form>


<div className="submitted hidden">
<img src="/src/assets/tick-inside-circle.png"/>
<p id="msgReceived">Message Received Successfully!</p>
<p>Thanks for your message, we will get back to you as soon as possible</p>
<button className="sendAnotherMsgBtn" onClick={msgReceived} >SEND ANOTHER MESSAGE &#8594;</button>
</div>

        </>
    )
}

export default FormFilling