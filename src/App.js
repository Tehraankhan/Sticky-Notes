
import { useState } from 'react';
import './App.css';
import CreateNote from './Components/CreateNote';
import Notes from './Components/Notes';

function App() {
  const [addItem, setaddItem] = useState([]);
  const addNote = (note) => {

    setaddItem((prevData) => {
      return [...prevData, note]
    }



    )



  }
  const DeleteNotes = (id) => {
    setaddItem(prevData => {
      return [...prevData.filter((val, index) =>
        index !== id)]
    })
  }
  return (
    <>
      <h1 >Sticky Notes</h1>


      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {

        return <Notes
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          onDelete={DeleteNotes} />
      })}


    </>
  );
}

export default App;
