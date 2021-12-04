import './sass/App.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as NavRouter, Routes, Route } from 'react-router-dom';
import { Landing, Profile, TierListPage} from './pages';
import Navbar from './components/NavBar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <nav className="nav">
            <Navbar />
          </nav>
          <NavRouter>
              <section className="main-content">
                <Routes>
                  <Route exact path="/" element={<Landing />} />
                  <Route exact path="/tierlist" element={<TierListPage />} />
                  <Route exact path="/profile" element={<Profile />} />
                </Routes>
              </section>
          </NavRouter>
        </header>
      </div>
    </ApolloProvider>
  );
}
