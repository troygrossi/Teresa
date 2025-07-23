import { Home, Contact, Calendar } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Layout } from "./Pages/_Layout_/Layout.tsx";
import { useWindowQuery } from "./hooks/window.hooks.ts";
import { useImagePreloader } from "./hooks/useImagePreloader";
import { LoadingScreen } from "./Components/UI/LoadingScreen";
import { Section } from "./Components/UI/Section";
import photo2 from "./assets/photos/imageT2.2.jpg";
import photo1 from "./assets/photos/image5hs.png";

function App() {
  useWindowQuery();
  
  // Global image preloading with minimum load time
  const { isLoading, progress, error } = useImagePreloader(
    [photo2, photo1],
    { minLoadTime: 3000 }
  );

  // Show loading screen while images preload
  if (isLoading) {
    return <LoadingScreen progress={progress} error={error} />;
  }

  return (
    <Section 
      className="app-container" 
      column 
      width="100%" 
      height="auto"
      padding={0}
      margin={0}
    >
      <Header />
      <Layout>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Layout>
    </Section>
  );
}

export default App;
