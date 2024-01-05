import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { notesCollection, db } from "../firebase"
import {
    doc,
    setDoc
} from "firebase/firestore"

export default function(props)
{
const [newContent, setNewContent] = React.useState('')

const handleChange = (event) =>{
    setNewContent(event.target.value);
};


const updateNote= async(noteId,newContent) =>{
    console.log(`Updating note ${noteId} with new body: ${newContent}`);
    console.log(`Database: ${db}`);
    console.log(`Note ID: ${noteId}`);
if (!noteId || !newContent){
    console.error('missing parameter');
    return;
}
const newDocRef = doc(db, "notes", noteId)
   await setDoc(newDocRef, {body: newContent}, {merge: true})
}
const handleUpdate = (note) =>
{
    updateNote(note.id, newContent)
};


return(
<>

{props.note.map((singlNote) =>(
    <div key= {singlNote.id}
    className = "box">
        <FontAwesomeIcon icon ={faTrash} onClick ={(e) =>props.deleteNote(singlNote)}/>
   
    <input type ="text" value = {newContent} onChange={handleChange}/>
    <button onClick ={()=> handleUpdate(singlNote)}> upDate Note</button>
    <p className= "notwrd">{singlNote.body}
    </p>
    </div>
) )}
</>
)}