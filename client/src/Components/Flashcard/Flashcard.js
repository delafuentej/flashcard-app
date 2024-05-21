
import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';

const Flashcard=()=>{
    //state flashcard:
    const[showAnswer, setShowAnswer] = useState(false);
    return (
        // card-header structure with four buttons
        <div className='card'>
            <div className='card-header'>
                <div className='level'>
                    <div className='level-left'>
                        <div classNamew='level-item p-2'>
                            <div className='buttons'>
                                <button className='button'> 
                                    <span className='icon is-small'>
                                        <i className='fas fa-sync-alt' />
                                    </span>

                                </button>

                                <button className='button'>
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
                                    <button className='button'> 
                                        <span className='icon is-small has-text-dark'>
                                            <i className='fas fa-pen' />
                                        </span>

                                    </button>

                                    <button className='button'>
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