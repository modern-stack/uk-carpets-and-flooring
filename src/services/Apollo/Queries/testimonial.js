import gql from 'graphql-tag'

const GET_TESTIMONIALS = gql`
  {
    Testimonials_aggregate {
      nodes {
        Review
        CreatedAt
        User {
          Given_Name
          Family_Name
          Picture
        }
      }
    }
  }
`

export { GET_TESTIMONIALS }
