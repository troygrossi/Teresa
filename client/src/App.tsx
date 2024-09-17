import { Home, Contact, Calendar } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Wrapper } from "./Pages/_Wrapper_/Wrapper";
import { useWindowQuery } from "./hooks/window.hooks.ts";

function App() {
  //
  useWindowQuery();
  //

  return (
    <div>
      <Header></Header>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
