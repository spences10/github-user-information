export default `
query GITHUB_TOP_LANGUAGES_QUERY {
  viewer {
    repositories(
      last: 50
      isFork: false
      orderBy: { field: UPDATED_AT, direction: ASC }
    ) {
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
