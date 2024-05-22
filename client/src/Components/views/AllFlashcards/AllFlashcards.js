import styles from './AllFlashcards.module.css';
import Flashcard from '../../Flashcard/Flashcard';
//import apollo client
import {gql, useQuery, useMutation} from '@apollo/client';


// to fetch all flashcards => FLASHCARDS_QUERY:
const FLASHCARDS_QUERY = gql`
{
    allFlashcards {
        _id
        question
        answer
        isAnswered
    }
}

`;
// to edit a specific flashcard with mutation => to update the isAnswered property
const EDIT_FLASHCARD = gql`
    mutation updateFlashcard($_id: ID!, $isAnswered: Boolean){
        updateFlashcard(_id: $id, input:{isAnswered: $isAnswered}){
            _id
            isAnswered
        }
    }
`;
// to delete a specific flashcard with mutation, based on its id
const DELETE_FLASHCARD = gql`
    mutation deleteFlashcard($_id: ID!){
        deleteFlashcard(_id: $_id){
            _id
        }
    }

`;


const AllFlashcards =()=>{
    // to deconstruct und obtain loading and error properties from fetching data
    const {data, loading, error} = useQuery(FLASHCARDS_QUERY);
    console.log('data', data)
    console.log('error', error)
    // to define updateFlashcard
    const [updateFlashcard] = useMutation(EDIT_FLASHCARD);
    // to define deleteFlashcard, setting up updating by using readQuery and writeQuery functions
    const [deleteFlashcard] = useMutation(DELETE_FLASHCARD, {
        update(
            cache,
            {
                data: {deleteFlashcard},
            },
        ){
            const {allFlashcards} = cache.readQuery({ query: FLASHCARDS_QUERY});
            const updatedFlashcards = allFlashcards.filter((flashcard)=> flashcard._id !== deleteFlashcard._id);

            //cache
            cache.writeQuery({
                query: FLASHCARDS_QUERY,
                data: { allFlashcards: updatedFlashcards},
            });
        },
    });

    return(
        <div className='container'>
            <h1> All Flashcards
                {/* button to reset flashcards */}
                <button className='button is-info ml-3' type='button'>
                    Reset Flashcards
                </button>
            </h1>
            <div className='box has-background-info'>
                <div className='columns is-multiline'>
                    {console.log('data',data)}

                </div>

            </div>

        </div>
    )
}

export default AllFlashcards;

