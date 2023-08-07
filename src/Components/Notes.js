import React, { useState } from "react"
import "./C.css"

function Notes(props) {
    const [showupdate, setshowupadte] = useState(false);


    function UpdateForm() {
        return (
            <>
                <div className="wrappaer"></div>
                <div className="container2">
                    <h1>Update The Note</h1>
                    <input type="text" className="Ipt1"></input>
                    <input type="text" className="Ipt2"></input>
                    <button onClick={() => setshowupadte(false)}>Enter</button>

                </div>

            </>


        );
    }

    return (

        <>


            <div className='container1'>
                <div className="content">
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>


                </div>

                <button onClick={() => props.onDelete(props.id)} className="Delete-btn">Delete</button>
                <button onClick={() => setshowupadte(true)} className="Update-btn">Update</button>



            </div>
            {showupdate && <UpdateForm />}





        </>
    );

}
export default Notes;