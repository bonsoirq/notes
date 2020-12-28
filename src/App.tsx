import 'normalize.css'
import './App.css';
import { Layout } from './Layout';
import NewNote from './notes/NewNote';
import NotesList from './notes/NotesList';
import NotesProvider from './notes/NotesProvider';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import NoteContainer from './notes/NoteContainer';

const App = () => {
  return (
    <div className="App">
      <NotesProvider>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/">
                <NewNote />
                <NotesList />
              </Route>
              <Route exact path="/:id">
                <NoteContainer />
              </Route>
              <Route path="*" >
                <Redirect to="/" />
              </Route>
            </Switch>
          </Router>
        </Layout>
      </NotesProvider>
    </div>
  );
}

export default App;
