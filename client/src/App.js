import './sass/App.scss';
import TierList from './components/NewTierList';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as NavRouter, Routes, Route } from 'react-router-dom';
import { Landing, Profile, TierListPage} from './pages';

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
            <h1>HEADER AREA</h1>
            <h1>NAV PLACEHOLDER</h1>
          </nav>
          <TierList />
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
