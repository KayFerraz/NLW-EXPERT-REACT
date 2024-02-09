import { ChangeEvent, useState } from 'react';
import logo from './assets/logo-nlw-expert.svg';
import { NewCard } from './components/new-card';
import { NoteCardComponent } from './components/notes-card';

// created by: Kayanne Ferraz de Souza

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState<Note[]>(() => {
    const noteOnStorage = localStorage.getItem('notes');

    if (noteOnStorage) {
      return JSON.parse(noteOnStorage);
    }

    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];
    setNotes(notesArray);
    localStorage.setItem('notes', JSON.stringify(notesArray));
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearch(query);
  }

  const filteredNotes =
    search !== ''
      ? notes.filter(note =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} />
      <form action="" className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-bold tracking-tight outline-none placeholder:text-rose-300"
          onChange={handleSearch}
        />
      </form>
      <div className="h-px bg-rose-300" />
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewCard oneNoteCreated={onNoteCreated} />
        {filteredNotes.map(note => {
          return <NoteCardComponent key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
