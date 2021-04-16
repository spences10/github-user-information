import css from './css-heat'
import reset from './css-reset'

export function getHtml(chartData) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Simple Heatmap</title>
    <style>
      ${reset()}
      ${css()}
    </style>
    <script
      type="text/javascript"
      src="https://www.gstatic.com/charts/loader.js"
    ></script>
    <script type="text/javascript">
      google.charts.load('current', { packages: ['calendar'] })
      google.charts.setOnLoadCallback(drawChart)

      function drawChart() {
        var dataTable = new google.visualization.DataTable()
        dataTable.addColumn({ type: 'date', id: 'Date' })
        dataTable.addColumn({ type: 'number', id: 'Contributions' })
        dataTable.addRows([
          ${chartData}
        ])

        var chart = new google.visualization.Calendar(
          document.getElementById('heatmap')
        )

        var options = {
          title: 'GitHub Contributions',
          height: '100%',
          with: '100%',
          calendar: {
            cellSize: 20,
            monthLabel: {
              fontFamily: 'Space Mono',
              fontSize: 12,
              bold: true,
            },
            cellColor: {
              stroke: '#fafafa',
              strokeOpacity: 1,
              strokeWidth: 1,
            },
            underYearSpace: 10, // Bottom padding for the year labels.
            yearLabel: {
              fontName: 'Space Mono',
              fontSize: 42,
              bold: true,
            },
            dayOfWeekLabel: {
              fontName: 'Lato',
              fontSize: 12,
              color: 'white',
              bold: false,
              italic: false,
            },
            dayOfWeekRightSpace: 10,
            daysOfWeek: 'SMTWTFS',
            monthOutlineColor: {
              stroke: '#663399',
              strokeOpacity: 0.8,
              strokeWidth: 2,
            },
          },
          noDataPattern: {
            backgroundColor: '',
            color: '',
          },
        }

        chart.draw(dataTable, options)
      }
    </script>
  </head>

  <body>
    <div id="heatmap" style="width: 1150px; height: 210px" />
  </body>
</html>`
}
