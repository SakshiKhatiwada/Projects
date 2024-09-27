import Contact from "./contact"
import FormFilling from "./formFilling"
import ContactLocationDetails from "./location"



function Parent() {
    return (
        <main className='mainContainer'>
            <section className='left'>
                <Contact />
                <ContactLocationDetails />
            </section>

            <section className='right'>
                <FormFilling />
            </section>
        </main>
    )
}

export default Parent