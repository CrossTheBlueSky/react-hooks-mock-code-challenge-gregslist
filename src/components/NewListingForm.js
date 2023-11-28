import React from "react"

function NewListingForm({onAdd, visible}){


    function submitHandler(e){
        e.preventDefault()
        const newItem = {
            description : e.target["desc"].value,
            location : e.target["loc"].value,
            image : e.target["img"].value
        }

        onAdd(newItem)
        visible(false)
    }

    return(
        <dialog style={{transform: "scale(4)", marginTop:"50%", marginLeft:"50%", zIndex:"1"}} open>
        <form  onSubmit={submitHandler}>
            <input type="text" name="desc" placeholder="Description"></input>
            <br></br>
            <input type="text" name="loc" placeholder="Location"></input>
            <br></br>
            <input type="text" name="img" placeholder="Image URL"></input>
            <br></br>
            <button type="submit">Add Listing</button>
            <button onClick={()=>visible(false)}>Close</button>
        </form>
        </dialog>
    )
}

export default NewListingForm