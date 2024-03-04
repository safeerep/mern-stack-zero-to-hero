import { Route, Routes } from "react-router"
import { Home,
  ProfileCards,
  Count
} from "./pages"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile-cards" element={<ProfileCards />}/>
      <Route path="/count" element={<Count />}/>
    </Routes>
    </>
  )
}

export default App
