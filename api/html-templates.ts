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
    <title>Simple Pie</title>

    <link href="style.css" rel="stylesheet" />
    <script
      type="text/javascript"
      src="https://www.gstatic.com/charts/loader.js"
    ></script>
    <script type="text/javascript">
      google.charts.load('current', { packages: ['corechart'] })
      google.charts.setOnLoadCallback(drawChart)
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Languages', 'Languages Count'],
          ${chartData.map(
            ({ label, value }) => `['${label}',${value}]`
          )}
      ])

        var options = {
          // title: 'My Languages Split',
          pieHole: 0.4,
          pieSliceText: 'label',
          legend: 'none',
          colors: [${chartData.map(({ color }) => `'${color}'`)}],
        }

        var chart = new google.visualization.PieChart(
          document.getElementById('doughnut')
        )
        chart.draw(data, options)
      }
    </script>
  </head>

  <body>
    <div class="chart-box">
      <div id="doughnut" style="width: 900px; height: 500px"></div>
    </div>
  </body>
</html>`
}
