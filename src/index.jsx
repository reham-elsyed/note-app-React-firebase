import React from "react";
import Navbar from "./newnote/Navbar"
import { notesCollection, db } from "./firebase"
import {
    onSnapshot,
    addDoc,
    doc,
    deleteDoc,
    setDoc
} from "firebase/firestore"
import Master from './newnote/Master'

export default function App(){
    const[note, setNote]= React.useState([])

React.useEffect(() =>
{
    const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
        const newNotes = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        setNote(newNotes);
    })
    return()=> unsubscribe();
}), [];
    const createNote =async () =>{
        const newNote= {
            body: "what up",
           createdAt: Date.now(),
           updatedAt: Date.now()
        }
        const newNoteRef = await addDoc(notesCollection, newNote)

       
       console.log("note created")
    }

const deleteNote = (note) => {
    if (!note){
        console.error('No Note Id')
        return;
    }
    const docRef = doc(db, "notes", note.id)
    deleteDoc(docRef)

}
/*const updateNote= async(note,newBody) =>{
    console.log(`Updating note ${noteId} with new body: ${newBody}`);
    console.log(`Database: ${db}`);
    console.log(`Note ID: ${noteId}`);
if (!note.id || !newBody){
    console.error('missing parameter');
    return;
}
const newDocRef = doc(db, "notes", note.id)
    setDoc(newDocRef, {body: newBody}, {merge: true})
}
*/

    return(

<>
<Navbar createNote ={createNote}/>
<div className = "container">
<Master note= {note}
deleteNote ={deleteNote}
//updateNote= {updateNote}

/>
        </div>

</>

    )
}