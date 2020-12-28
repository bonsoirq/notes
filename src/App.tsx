import './App.css';
import { Layout } from './Layout';
import NewNote from './notes/NewNote';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <NewNote />
      </Layout>
    </div>
  );
}

export default App;
