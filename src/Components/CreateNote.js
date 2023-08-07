import React, { useState } from "react"
import "./C.css"
function CreateNote(props) {
    const [note, setNote] = useState(
        {
            title: '',
            content: ""
        }
    );
    const Input = (e) => {


        const { name, value } = e.target;

        setNote((prevData) => {

            return {
                ...prevData,
                [name]: value,


            };
        }



        );
    };
    const addEvent = () => {
        props.passNote(note);
        setNote(
            {
                title: '',
                content: ''
            }
        )

    }

    return (
        <>
            <div className='container'>
                <input type='text' name="title" className="Ipt1" value={note.title} onChange={Input} placeholder='Enter the title'></input>
                <textarea name="content" className="Ipt2" value={note.content} onChange={Input} placeholder="Take a note"></textarea>
                <button onClick={addEvent}>Create</button>
            </div>

        </>


    );

}
export default CreateNote;