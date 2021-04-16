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
import { Generator } from 'contrast-color-generator'

const generator = new Generator(180)

export const topLanguages = data => {
  const { repositories } = data.gitHub.user
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
      return {
        id: key,
        label: key,
        value: value.count,
        color: value.color,
        textColor:
          value.color !== null
            ? generator.generate(value.color).hexStr
            : '#000000',
      }
    }
  )

  const chartData = langaugesArray
    .filter(lang => lang.value > 3 && lang.color)
    .sort((a, b) => b.value - a.value)

  return { chartData }
}

/*
data should come back formatted like:
[
  { day: '2018-12-09', value: 11 },
  { day: '2018-12-10', value: 6 },
  { day: '2018-12-11', value: 11 },
  { day: '2018-12-12', value: 25 },
]
*/

/**
  contributionDays: [
  {
    color: "#7bc96f"
    contributionCount: 43
    date: "2019-12-01"
    weekday: 0
  },
  ...
]
*/

export const contributions = gqlData => {
  const arrayOfDays = []

  const {
    weeks,
  } = gqlData.gitHub.user.contributionsCollection.contributionCalendar

  for (const { contributionDays } of weeks) {
    const days = contributionDays.map(
      ({ contributionCount, date }) => {
        return {
          day: date,
          value: contributionCount,
        }
      }
    )
    // @ts-ignore
    arrayOfDays.push(days)
  }

  const smoosh = [].concat.apply([], arrayOfDays)

  const contributionsData = smoosh
    .map(({ day, value }) => {
      // @ts-ignore
      return `[new Date(${day.split('-')[0]},${
        // @ts-ignore
        day.split('-')[1] - 1 // because JavaScript!
      },${
        // @ts-ignore
        day.split('-')[2]
      }),${value}]`
    })
    .slice(0, smoosh.length - 1)

  return { contributionsData }
}
