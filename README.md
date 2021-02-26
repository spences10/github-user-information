# GitHub User Information

Uses [OneGraph persisted query] to pull GitHub GraphQL API user
information

Displays langauge split in a pie chart via the `/pie.png` endpoint by
passing a GitHub username.

Example:
`github-user-information.vercel.app/pie.png?username=spences10`

Result:

<img src="https://github-user-information.vercel.app/pie.png?username=spences10" alt="a github users language split in a pie chart"/>

## Charts

- [Google Heatmat/Calender Chart]
- [Google Piechart]

- [ECharts Pie]

- [Apex Charts Pie Chart]
- [Apex Charts Heatmap]

Great resource with suggestions here:
https://www.monterail.com/blog/javascript-libraries-data-visualization

This helped when I installed Puppeteer ans Vercel didn't recognise the
dependency: https://github.com/alixaxel/chrome-aws-lambda/issues/172

<!-- Links -->

[google heatmat/calender chart]:
  https://developers.google.com/chart/interactive/docs/gallery/calendar
[google piechart]:
  https://developers.google.com/chart/interactive/docs/gallery/piechart#donut
[echarts pie]:
  https://echarts.apache.org/examples/en/editor.html?c=pie-doughnut
[apex charts pie chart]:
  https://apexcharts.com/docs/chart-types/pie-donut/
[apex charts heatmap]:
  https://apexcharts.com/docs/chart-types/heatmap-chart/
[onegraph persisted query]:
  https://www.onegraph.com/docs/persisted_queries.html
