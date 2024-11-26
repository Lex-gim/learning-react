import { Form } from "./Form"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { Card } from "./Card"

function App() {
  return (
    <>
      <Navbar />
      <Form />
      <div className="carousel-container">
        <section className="carousel">
          <Card
            imgSrc="https://via.placeholder.com/150"
            title="Migue"
            desc="Erase una vez en la q tin"
          />
          <Card
            imgSrc="https://via.placeholder.com/180"
            title="Malia"
            desc="La mujer más preciosa"
          />
          <Card
            imgSrc="https://via.placeholder.com/180"
            title="Mei"
            desc="Gato gei"
          />
          <Card />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
