export default function css() {
  return `
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,600,700');

  body {
    height: 100vh;
    font-family: Lato;
    background: transparent;
  }
  html {
    background: transparent;
  }

  .chart-box {
    display: flex;
  }

  #doughnut {
    width: 1200px;
    height: 630px;
  }
  `
}
