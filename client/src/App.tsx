
import { Home, Contact, Calendar } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Wrapper } from "./Pages/_Wrapper_/Wrapper";

function App() {
  return (
    <div>
      <Header></Header>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Calendar" element={<Calendar />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
