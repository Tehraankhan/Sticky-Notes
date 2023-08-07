import React from "react"

function Notes(props) {




    return (

        <>


            <div className='container1'>
                <div className="content">
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>


                </div>

                <button onClick={() => props.onDelete(props.id)} className="Delete-btn">Delete</button>


            </div>






        </>
    );

}
export default Notes;