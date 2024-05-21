import React, {useState} from 'react';
import styles from './EditFlashcard.module.css';

const EditFlashcard =()=>{
    // state component
    const [question,  setQuestion] = useState('');
    const[answer, setAnswer] = useState('');

    return(
        <div className='container'> 
            <h1 className='title'>Edit Flashcard</h1>

            <div className='box'>
                <form>
                    <div className='field'>
                        <label className='label' htmlFor='question'>Question</label>
                        <div className='control'>
                            <input
                                className='input'
                                type='text'
                                name='question'
                                id='question'
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
                                required
                            />

                        </div>

                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button is-link" type="submit">
                                Save
                            </button>
                        </div>
                    </div>

                </form>

             </div>
        </div>
    )
}

export default EditFlashcard;

