// import axios from "axios";
import { Header } from "./Header";
import { LandmarksPage } from "./LandmarksPage";
import { Footer } from "./Footer";

// Sets the default URL so we don't have to type http://localhost:3000 every time
// axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <LandmarksPage />
      <Footer />
    </div>
  )
}

export default App;