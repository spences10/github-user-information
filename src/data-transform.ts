/** Credit Leigh Halliday
 * Great resources:
 * https://www.youtube.com/watch?v=28StAxSjyIU&t=2116s
 * https://www.youtube.com/watch?v=AUiUZ29pae4&t=369s
 */

// map == transform array elements one by one to produce new array
// reduce == transform array elements one by one to produce some new value
// filter == pick certain elements to exist in new array
// slice == build a new array with certain elements selected by index

/*
data should come back formatted like:
[
  ['Languages', 'Languages Count'],
  ['JavaScript', 37],
  ['TypeScript', 13],
  ['CSS', 12],
  ['HTML', 7],
]
*/

export const topLanguages = data => {
  const { repositories } = data.user
  const langObject = repositories.nodes.reduce(
    (langs, { languages }) => {
      return languages.nodes.reduce((repoLangs, { name, color }) => {
        if (!repoLangs[name]) {
          repoLangs[name] = { count: 0, color }
        }
        repoLangs[name].count += 1
        return repoLangs
      }, langs)
    },
    {}
  )

  const langaugesArray = Object.entries(langObject).map(
    ([key, value]: any) => {
      console.log('=====================')
      console.log(key, value)
      console.log('=====================')
      return [key, value.count]
    }
  )

  const chartData = langaugesArray
    .filter(lang => lang[1] > 3)
    .sort((a, b) => b[1] - a[1])

  return {
    chartData,
    chartColors: [],
  }
}
