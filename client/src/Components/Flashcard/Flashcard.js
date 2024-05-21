
import React, {useState} from 'react';

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

        </div>

         
        
    )

};


export default Flashcard;