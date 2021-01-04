export default `
query GITHUB_USER_DATA_QUERY($username: String!) {
  user(login: $username) {
    repositories(last: 100, isFork: false, orderBy: {field: UPDATED_AT, direction: ASC}) {
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
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            color
            contributionCount
            date
            weekday
          }
        }
      }
    }
  }
}
`
