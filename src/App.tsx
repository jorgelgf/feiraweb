import Layout from "./pages/Layout/Layout";
import styled from "styled-components";
import Routs from "./pages/Routs";
function App() {
  return (
    <Container>
      <Layout>
        <Routs />
      </Layout>
    </Container>
  );
}

export default App;

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #061727;
`;
