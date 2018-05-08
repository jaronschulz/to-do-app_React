/* eslint react/prefer-stateless-function: 0 */
/* eslint no-useless-return: 0 */
import React, { Component } from 'react';
import Note from './Components/Note';
import './App.css';

class App extends Component {
  state = {
    noteText: '',
    notes: [],
  }

  updateNoteText(noteText) {
    this.setState({
      noteText: noteText.target.value,
    });
  }

  addNote = () => {
    if (this.state.noteText === '') { return; }

    const notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: '' });
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      return;
    }
  }

  deleteNote = (index) => {
    const notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr });
  }

  render() {
    const notes = this.state.notes.map((val, key) => (
      <Note
        key={key}
        text={val}
        deleteMethode={() => this.deleteNote(key)}
      />
    ));
    return (
      <div className="container">
        <div className="header" >
          React to-do App
        </div>
        {notes}
        <div className="btn" onClick={this.addNote}>
          +
        </div>

        <input
          type="text"
          ref={(
          (input) => { this.textInput = input; }
          )}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress}
        />

      </div>
    );
  }
}

export default App;
