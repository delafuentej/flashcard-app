import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';


const Navbar = () =>{
    return(
        <nav>
        <ul>
          <li>
            <Link to='/'>AllFlashcards</Link>
          </li>

          <li>
            <Link to='/addFlashcard'>Add Flashcard</Link>
          </li>
          <li>
            <Link to='/editFlashcard'>Edit Flashcard</Link>
          </li>
        </ul>
      </nav>
        
    )
}
export default Navbar;