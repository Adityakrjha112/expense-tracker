import styled from "styled-components";
import Home from "./modules/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
 `
 const Header = styled.span`
  font-size: 25px;
  font-weight: bold;
  font-family: Montserrat;
 `
function App() {
  return (
    <>
      <Container>
        <Header>Expense Tracker</Header>
        <Home/>
      </Container>
    </>
  );
}

export default App;
