import styled from "styled-components"

const height = window.outerHeight * 1.5

const SemiCircle = styled.div`
  position: absolute;
  width: 30%;
  min-height: 125vh;
  top: -25px;
  z-index:-1;
  overflow-y:hidden;
  /* prettier stop */
  ${props => {
    return props.left
      ? `border-top-right-radius: 50%; border-bottom-right-radius: 50%; left:0;`
      : `border-top-left-radius: 50%; border-bottom-left-radius: 50%; right: 0;`
  }};
  ${props => {
    const color = props.color
    return `background-color: ${color}`
  }};
}
`
console.log(height)
export default SemiCircle
