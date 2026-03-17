import * as React from "react";
import {useState} from "react";
import type {Note} from "../../types";


const NotesApp: React.FC = () => {

    const [notes, setNotes ] = useState<Note[]>([
        {id: 1, title: 'Welcome', content: 'This is your note app!'},
        {id: 2, title: 'Todo', content: 'Build amazing projects'},
    ]);

    const [ currentNote, setCurrentNote ] = useState<Note>(notes[0]);

    const addNote = (): void => {
        const newNote: Note = { id: Date.now(), title: 'New Note', content: ''};
        setNotes([...notes, newNote]);
        setCurrentNote(newNote);
    };

    const updateNote = ( field: keyof Note, value: string | number): void => {
        const updated = { ...currentNote, [field]: value};
        setCurrentNote(updated);
        setNotes(notes.map (n => n.id === updated.id ? updated: n));
    };

    return (
        <div className={'flex h-full'}>
            <div className={'w-64 bg-gray-100 border-r p-4 space-y-2'}></div>
        </div>
    )
}

export default NotesApp;