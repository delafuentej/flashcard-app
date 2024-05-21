import styles from './AllFlashcards.module.css';
import Flashcard from '../../Flashcard/Flashcard';

const AllFlashcards =()=>{
    return(
        <div className='container'>
            <h1> All Flashcards
                {/* button to reset flashcards */}
                <button className='button is-info' type='button'>
                    Reset Flashcards
                </button>
            </h1>
            <div className='box has-background-info'>
                <div className='columns is-multiline'>
                        {/* Flashcards */}

                </div>

            </div>

        </div>
    )
}

export default AllFlashcards;

