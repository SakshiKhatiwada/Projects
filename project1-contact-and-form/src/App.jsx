import './App.css'
import Contact from './components/contact'
import FormFilling from './components/formfilling'
import ContactLocationDetails from './components/location'
function App() {
  return (
    <main className='mainContainer'>
     <section className='left'>
     <Contact/>
     <ContactLocationDetails/>
     </section>

     <section className='right'>
      <FormFilling/>
     </section>
    </main>
  )
}

export default App
