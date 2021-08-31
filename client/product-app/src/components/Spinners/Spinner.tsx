import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background: white;
`;

const Header = styled.h2`
  color: #003883;
`;

export default function Spinner() {
  return (
    <LoaderContainer className="sweet-loading">
      <Header>Avios</Header>

      <RingLoader css={override} size={150} color={"#003883"} loading={true} />
      <Header>Loading .....</Header>
    </LoaderContainer>
  );
}
