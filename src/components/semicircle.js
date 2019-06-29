import styled from "styled-components"

const height = window.outerHeight * 1.5

const SemiCircle = styled.div`
  position: absolute;
  width: 35%;
  height: 115%;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  background-color: #049ea8;
  right: 0;
  top: -30px;
  // z-index:-1;
`
console.log(height)
export default SemiCircle
