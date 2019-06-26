import styled from "styled-components"

// const height = window.outerHeight * 1.5

const SemiCircle = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  z-index:-1;
  /* prettier stop */
  ${props => {
    return props.left ? `left:0;` : `right: 0;`
  }};
  ${props => {
    const color = props.color
    return `background-color: ${color}`
  }};
}
`

const SemiCircleContainer = styled.div`
  position: absolute;
  width: 40%;
  min-height: 100vh;
  top: 0px;
  overflow: hidden;
  ${props => {
    return props.left
      ? `border-top-right-radius: 100%; border-bottom-right-radius: 100%; left:0;`
      : `border-top-left-radius: 100%; border-bottom-left-radius: 100%; right: 0;`
  }};
`
// console.log(height)
export { SemiCircle, SemiCircleContainer }
