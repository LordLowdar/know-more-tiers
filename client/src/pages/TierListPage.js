import React from 'react';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { NewTierList } from '../components';

import { GET_ME, QUERY_USER } from '../utils/query';

import Auth from '../utils/auth';

export default function TierListPage() {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery( userParam ? QUERY_USER : GET_ME, {
    variables: { username: userParam }
  });

  console.log('data: ', data);
  

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getUser().data.username === userParam) {
    return (
      <Router>
        <>
          <Route to="/login" />
        </>
      </Router>
    )
  }

  if ( loading ) {
    return <div> Loading... </div>;
  }

  if ( !user?.username ) {
    return (
      <h4>
        You need to be logged in to create a Tierlist. Sign up or Log in!
      </h4>
    )
  }
  
  return (
    <div>
      <NewTierList />
    </div>
  )
}
