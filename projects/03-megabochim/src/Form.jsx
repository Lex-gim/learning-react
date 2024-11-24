import { useState } from "react"

export const Form = () => {
    let ID_COUNTER = 0;
    const [questions] = useState([
        {
            id:++ID_COUNTER,
            question:"Are you okay?"
        },
        {
            id:++ID_COUNTER,
            question:"How are you doing?"
        },
        {
            id:++ID_COUNTER,
            question:"And how's your mom?"
        }
    ])
    return (
        questions.map(question => {
            return <h1 key={question.id}>{question.question}</h1>
        })
    )
}