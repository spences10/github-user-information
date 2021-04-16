export default function css() {
  return `
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,600,700');

  body {
    font-family: Lato;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
  }
  html {
    background: transparent;
  }
  `
}
