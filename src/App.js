import "./App.css";
import styled from "styled-components";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

const Container = styled.div`
  background-color: #ffffff;
`;

export default App;
