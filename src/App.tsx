import './App.css';
import { Layout } from './Layout';
import NewNote from './notes/NewNote';
import NotesList from './notes/NotesList';
import NotesProvider from './notes/NotesProvider';

const App = () => {
  return (
    <div className="App">
      <NotesProvider>
        <Layout>
          <NewNote />
          <NotesList />
        </Layout>
      </NotesProvider>
    </div>
  );
}

export default App;
