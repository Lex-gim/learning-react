import { useState } from "react";

export const Form = () => {
    let ID_COUNTER = 0;
    const initialQuestions = [
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
        },
        {
            id:++ID_COUNTER,
            question:"How close are you to god?"
        },
        {
            id:++ID_COUNTER,
            question:"May God bless your hustle."
        }
    ];

    const [questions, setQuestions] = useState(initialQuestions)
    const [newQuestionText, setNewQuestionText] = useState('');

    const addQuestion = () => {
        if (newQuestionText.trim() === '') return; // Prevent adding empty questions
        const newQuestion = {
            id: ++ID_COUNTER,
            question: newQuestionText
        };
        setQuestions([...questions, newQuestion]);
        setNewQuestionText(''); // Clear the input field after adding the question
    };

    const questionList = questions.map(question => <span key={question.id} className="question">{question.question}</span>)

    return (
        <>
            <section className="question-list">
                {questionList}
            </section>
            <input
                type="text"
                id="newQuestionText"
                value={newQuestionText}
                onChange={(e) => setNewQuestionText(e.target.value)}
                placeholder="Enter a new question"
            />
            <button onClick={addQuestion}>Add</button>
        </>
    )
}