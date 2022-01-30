import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route
        path="/"
        element={(
          <Books />
        )}
      />
      <Route
        path="/Categories"
        element={(
          <Categories />
        )}
      />
    </Routes>
  </>
);

export default App;
