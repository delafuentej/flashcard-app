import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';


const Navbar = () =>{
    return(
        <nav className='navbar is-dark'>
          <ul className='navbar-brand'>
            <li className='navbar-item'> 
              <Link to='/'>
                <span className='icon is-small mx-2'>
                  <i className='fas fa-layer-group'/>
                </span>
                All Flashcards
              </Link>  
            </li>

            <li className='navbar-item'>
              <Link to='/add-flashcard'>
                  <span className='icon is-small mr-2'>
                    <i className='fas fa-layer-group'/>
                  </span>
                Add Flashcard
              </Link>
            </li>

            <li className='navbar-item'>
              <Link to='/edit-flashcard'>
                  <span className='icon is-small mr-2'>
                    <i className='fas fa-plus'/>
                  </span>
                Edit Flashcard
              </Link>
            </li>
          </ul>
      </nav>
        
    )
}
export default Navbar;