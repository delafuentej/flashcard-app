import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import AllFlashcards from '../src/Components/views/AllFlashcards/AllFlashcards.js';
import AddFlashcard from '../src/Components/views/AddFlashcard/AddFlashcard.js';
import EditFlashcard from '../src/Components/views/EditFlashcard/EditFlashcard.js';
import Layout from './Components/Layout/Layout.js';

import './App.css';



const appRouter= createBrowserRouter(createRoutesFromElements(
          <Route path="/" element={<Layout />}>
                <Route index  element={<AllFlashcards />} />
                <Route path='add-flashcard' element={<AddFlashcard />} />
                <Route path= 'edit-flashcard/:id' element={<EditFlashcard />} />
          </Route>          
              
));


function App() {
  return (
    <>
  
    <RouterProvider router={appRouter}>
     
    </RouterProvider>
  
  
  
  </>
  

  
   

    

      
);
}

export default App;
