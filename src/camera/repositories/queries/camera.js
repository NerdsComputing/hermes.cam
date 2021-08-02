import { gql } from '@apollo/client'

export const byParameter = gql`
    query {
        cameras(parameter: {pagination: {pageIndex: 0, pageSize: 999}}) {
            pageIndex
            pageSize
            totalCount
            items {
                id
            }
        }
    }
`
