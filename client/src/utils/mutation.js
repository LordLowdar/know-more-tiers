import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_INTEREST = gql`
  mutation addInterest($input: InterestInput!) {
    addInterest(input: $input) {
      token
      interest
    }
  }
`;
