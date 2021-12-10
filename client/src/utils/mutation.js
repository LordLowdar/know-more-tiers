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

export const ADD_TIERLIST = gql`
  mutation addTierList($rank: String!, $interests: [interestInput]) {
    addTierList(rank: $rank, interests: $interests) {
      user {
        _id
        username
      }
    }
  }
`;

// export const REMOVE_TIERLIST = gql`
//   mutation removeTierlist() {
//   removeTierlist() {
//     user {
//       _id
//       username
//       }
//     }
//   }
// `;
