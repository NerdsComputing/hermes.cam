import { gql } from '@apollo/client'

export const byParameter = gql`
    query ($parameter: CameraParameter!) {
        cameras(parameter: $parameter) {
            pageIndex
            pageSize
            totalCount
            items {
                id
            }
        }
    }
`

export const register = gql`
    mutation ($input: [TRegisterCamera!]!) {
        registerCamera(input: $input) {
            id
            longitude
            latitude
        }
    }
`
