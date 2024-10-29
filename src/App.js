import React from "react";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/footer";
import Note from "./MyComponents/note";
import Input from "./MyComponents/input";
import LogIn from "./MyComponents/logIn";

function App() {
  const [notes, setNotes] = React.useState([]);
  function add(newNote) {
      setNotes(() => {
        return [...notes, newNote];
      });
  }

  const [loggedIn, setLoggedIn]=React.useState(true)
  function deleteNote(id) {
    setNotes(
      notes.filter((e,index) => {
        return index !== id;
      })
    );
  }
  return (
    <>
      <Header />
      {loggedIn===false?<LogIn setLoggedIn={setLoggedIn}/>:
      <Input add={add} titleValue="" contentValue="" />}
      {loggedIn===true?notes.map((note,index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
          note={note}
        />
      )):null}
      
      <Footer />
    </>
  );
}

export default App;
