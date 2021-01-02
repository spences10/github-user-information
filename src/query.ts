export default `
query GITHUB_TOP_LANGUAGES_QUERY($username: String!) {
  user(login: $username) {
    repositories(last: 50, isFork: false, orderBy: {field: UPDATED_AT, direction: ASC}) {
      nodes {
        name
        description
        url
        updatedAt
        languages(first: 5) {
          nodes {
            color
            name
          }
        }
      }
    }
  }
}
`
