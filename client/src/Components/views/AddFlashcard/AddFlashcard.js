import React, {useState} from 'react';
//import apollo client
import {gql, useMutation} from '@apollo/client';
import styles from './AddFlasscard.module.css';
import AllFlashcardsComponent from '../AllFlashcards/AllFlashcards.js';

// to provide the "question" and "answer" properties
const ADD_FLASHCARD = gql`
    mutation createFlashcard($question: String!, $answer: String!){
        createFlashcard(input: {question: $question, answer: $answer}){
            _id
            question
            answer
        }
    }

`;

const FLASHCARDS_QUERY = gql`
{
    allFlashcards {
        _id
        question
        answer
    }
}
`;


const AddFlashcard =()=>{
    // state component:
    const [ question, setQuestion ] = useState('');
    const [ answer, setAnswer] = useState('');

    // to create a flashcard mutation and to update the cache.
    // when the card is created the user are redirected to homepage with history.push('/)
    const [createFlashcard] = useMutation(ADD_FLASHCARD, {
        update(
            cache,
            {
                data : {createFlashcard},
            },
        ){
            const { allFlashcards } = cache.readQuery({ query: FLASHCARDS_QUERY});
            
            cache.writeQuery({
                query: FLASHCARDS_QUERY,
                data: { allFlashcards: [...allFlashcards, createFlashcard]},
            });
        },
        //onCompleted(){history.push('/);},
    });

    return(
        <div className='container'>
             <h1 className='title'>Add Flashcard</h1>

             <div className='box'>
                <form
                    onSubmit={(e) =>{
                        e.preventDefault();
                        createFlashcard({
                            variables: {
                                question,
                                answer,
                            },
                        });


                    }}
                >
                    <div className='field'>
                        <label className='label' htmlFor='question'>Question</label>
                        <div className='control'>
                            <input
                                className='input'
                                type='text'
                                name='question'
                                id='question'
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                required
                            
                            />

                        </div>

                    </div>

                    <div className='field'>
                        <label className='label' htmlFor='answer'>Answer</label>
                        <div className='control'>
                            <textarea
                                className='textarea'
                                name='answer'
                                id='answer'
                                rows='4'
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />

                        </div>

                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button is-link" type="submit">
                                Add Flashcard
                            </button>
                        </div>
                    </div>

                </form>

             </div>
        </div>
       
    )
}

export default AddFlashcard;

