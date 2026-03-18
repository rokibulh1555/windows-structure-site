import * as React from "react";
import {type ChangeEvent, useState} from "react";
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
            <div className={'w-64 bg-gray-100 border-r border-gray-200 p-4 space-y-2'}>
                <button onClick={addNote} className={'w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'}>
                    New Note
                </button>
                {notes.map(note => (
                    <div
                        key={note.id}
                        onClick={()=> setCurrentNote(note)}
                        className={`p-3 rounded-lg cursor-pointer ${currentNote.id === note.id ? 'bg-blue-100': 'bg-white hover:bg-gray-50'}`}
                    >
                        <div className={'font-semibold truncate'}>{note.title}</div>
                        <div className={'text-sm text-gray-600 truncate'}>{note.content}</div>
                    </div>
                ))}
            </div>

            <div className={'flex-1 p-6 space-y-4'}>
                <input
                    type={'text'}
                    value={currentNote.title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateNote('title', e.target.value)}
                    className={'w-full text-2xl font-bold border-none outline-none'}
                    placeholder={'Note title'}
                />
                <textarea
                    value={currentNote.content}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>)=> updateNote('content', e.target.value)}
                    className={'w-full h-96 border border-blue-400 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500'}
                    placeholder={'Start Writing...'}
                />
            </div>

        </div>
    )
}

export default NotesApp;