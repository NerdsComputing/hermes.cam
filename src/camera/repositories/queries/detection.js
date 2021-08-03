import { gql } from '@apollo/client'

export const detection = gql`
  mutation ($input: [TCreateDetection!]!) {
      createDetection (input: $input) {
          id
      }
  }
`
