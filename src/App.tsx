import './App.css';
import { Layout } from './Layout';
import NewNote from './notes/NewNote';
import NotesProvider from './notes/NotesProvider';

const App = () => {
  return (
    <div className="App">
      <NotesProvider>
        <Layout>
          <NewNote />
        </Layout>
      </NotesProvider>
    </div>
  );
}

export default App;
