import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { TbDeviceMobile } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function ContactLocationDetails() {
    return (
        <section className="contactLocation">
            <div className="details">
                <FaMapMarkerAlt className="icons" />
                <p>Riyadh, Saudi Arabia</p>
            </div>
            <div className="details">
                <FaRegEnvelope className="icons" />
                <p>info@emkaan.sa</p>
            </div>
            <div className="details">
                <TbDeviceMobile className="icons" />
                <p>+966 500487676</p>
            </div>

            <div className="details socials">
                <FaLinkedinIn className="icons" />
                <FaXTwitter className="icons"/>
            </div>
        </section>
    )
}

export default ContactLocationDetails