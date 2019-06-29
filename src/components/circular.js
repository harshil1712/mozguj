import styled from "styled-components"

const SemiCircle = styled.div`
  position: absolute;
  width: 100vh;
  z-index:-1;
  /* prettier stop */
  ${props => {
    if (props.left) {
      return `border-top-right-radius: 100%; border-bottom-right-radius: 100%; right:0;top: -10vh;height: 120vh;`
    } else if (props.home) {
      return `border-top-left-radius: 100%; border-bottom-left-radius: 100%; left:0;top: -5vh;height: 110vh;`
    } else {
      return `border-top-left-radius: 100%; border-bottom-left-radius: 100%; left:0;top: -10vh;height: 120vh;`
    }
  }};
  ${props => {
    const color = props.color
    return `background-color: ${color}`
  }};
}
`

const SemiCircleContainer = styled.div`
  position: absolute;
  width: 30%;
  min-height: 100vh;
  top: 0px;
  overflow: hidden;
  ${props => {
    return props.left ? `left:0;` : `right: 0;`
  }};
`
export { SemiCircle, SemiCircleContainer }
