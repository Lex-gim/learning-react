import { Form } from "./Form"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Card } from "./Card"

function App() {
  return (
    <>
      <Header />
      <Form />
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
      <Footer />
    </>
  )
}

export default App
