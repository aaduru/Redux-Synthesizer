import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {

  constructor(props){
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  onKeyDown(e){
    this.props.keyPressed(e.key);
  }

  onKeyUp(e){
    this.props.keyReleased(e.key);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.indexOf(note) !== -1) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  render(){
    this.playNotes();
    return (
      <div>Synth</div>
    );
  }

}

export default Synth;
