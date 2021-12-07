import './sass/App.scss';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { BrowserRouter as NavRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, ProfilePage, TierListPage, LoginPage, RegisterPage } from './pages';
import { setContext } from '@apollo/client/link/context';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <nav className="nav">
            <NavBar />
          </nav>
          <NavRouter>
            <section className="main-content">
              <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/tierlist" element={<TierListPage />} />
                <Route exact path="/profile" element={<ProfilePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
              </Routes>
            </section>
          </NavRouter>
        </header>
        <Footer />
      </div>
    </ApolloProvider>
  

  );
}
