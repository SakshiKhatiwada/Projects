import { useRef, useState } from "react";

const FormFilling = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef();


    //for form
    const [form, setForm] = useState({
        name: "",
        email: "",
        text: ""
    })

    //to submit the form
    function handleSubmit() {
        console.log('form hidden');
        setIsSubmitted(true);
    }


    //to send another msg
    function handleNextMsg() {
        setForm({
            name:"",
            email: "",
            text:"",
        })
        console.log('form shown');
        setIsSubmitted(false);
    }


    return (
        <>
            {!isSubmitted ? (<form className="fillingForm" ref={formRef}>
                <p>Let&apos;s Talk!</p>
                {/* &apos; is for apostrophe */}

                {/* input name */}
                <input
                    type="text"
                    name="name"
                    id="fullName"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({
                        ...form,
                        [e.target.name]: e.target.value
                    }
                    )} required />
                    {/* input email */}
                <input type='email' name="email" id="email" placeholder="Email"
                    value={form.email}
                    onChange={e => setForm({
                        ...form,
                        [e.target.name]: e.target.value
                    })} required />
                    {/* input message */}
                <textarea rows={10} placeholder="Type your message..." name="text"
                    value={form.text} onChange={
                        e => setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })
                    } required></textarea>
                    {/* submit button */}
                <button type="submit" className="sendBtn" onClick={handleSubmit}>SEND &#8594; </button>
            </form>) : 
            // submitted msg
            (<div className="submitted">
                <img src="/src/assets/tick-inside-circle.png" />
                <p id="msgReceived">Message Received Successfully!</p>
                <p>Thanks for your message, we will get back to you as soon as possible</p>
                <button className="sendAnotherMsgBtn" onClick={handleNextMsg} >SEND ANOTHER MESSAGE &#8594;</button>
            </div>)
            }
        </>
    )
}

export default FormFilling;