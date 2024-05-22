
import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
// apollo client
import {gql, useMutation} from '@apollo/client';
// import Link
import { Link } from 'react-router-dom';



// EDIT_FLASHCARD returns the _id and the isAnswered properties 
//  to obtein a specific flashcard and change its state
const EDIT_FLASHCARD = gql`
    mutation updateFlashcard($_id: ID!, $isAnswered: Boolean){
        updateFlashcard(_id: $_id, input: { isAnswered: $isAnswered}){
            _id
            isAnswered
        }
    }

`;

const Flashcard=()=>{
    //state flashcard:
    const[showAnswer, setShowAnswer] = useState(false);
    const [updateFlashcard] = useMutation(EDIT_FLASHCARD);


    return (
        // card-header structure with four buttons
        <div className='card'>
            <div className='card-header'>
                <div className='level'>
                    <div className='level-left'>
                        <div classNamew='level-item p-2'>
                            <div className='buttons'>
                                <button 
                                    className='button'
                                    type='button'
                                    // to show the answer flipping the card
                                    onClick={()=> setShowAnswer(!showAnswer)}
                                    > 
                                        <span className='icon is-small'>
                                            <i className='fas fa-sync-alt' />
                                        </span>

                                </button>

                                <button 
                                    className='button'
                                    type='button'
                                    // onClick= {() =>{
                                    //     updateFlashcard({
                                    //         variables: {
                                    //             _id: flashcard._id,
                                    //             isAnswered: true,
                                    //         }
                                    //     })
                                    // }}
                                    
                                    >
                                        <span className='icon is-small'>
                                                <i className='fas fa-check' />
                                        </span>
                                    
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className='level-right'>               
                        <div classNamew='level-item p-2'>
                                <div className='buttons'>
                                    <button 
                                        className='button'
                                        type='button'
                                        > 
                                        {/* links to "edit-flash" to edit the selected card */}
                                        <Link>
                                            <span className='icon is-small has-text-dark'>
                                                    <i className='fas fa-pen' />
                                            </span>
                                            
                                        
                                        </Link>
                                            

                                    </button>

                                    <button 
                                        className='button'
                                        type='button'
                                        // to delete the selected card using the deleteFlashcard mutation
                                        // onClick={(e)=>{
                                        //     e.preventDefault();
                                        //     deleteFlashcard({ variables: {_id: flashcard._id}});

                                        // }}
                                        
                                        >
                                        <span className='icon is-small'>
                                                <i className='fas fa-trash' />
                                        </span>
                                        
                                    </button>

                                </div>

                            </div>

                    </div>

                </div>

            </div>
            {/* ReactCardFlip from 'react-card-flip' npm package */}
            <ReactCardFlip>
                <div className='card-content has-background-warning'>
                    <div className='content'>
                        {/* question */}
                    </div>
                </div>

                <div className='card-content has-background-success has-text-white'>
                    <div className='content'>
                        {/* answer */}
                    </div>
                </div>

            </ReactCardFlip>






        </div>

         
        
    )

};


export default Flashcard;