import './App.css'
import { AppWrapper } from './Components/common/PageMeta'
import { ScrollToTop } from './Components/common/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

    return (
        <AppWrapper>
            <Router>

                <ScrollToTop />
                <Routes>
                    {/* Landing Page Logic */}
                    <Route path="/portfolio" element={<Home />} />

                    {/* Fallback */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Router>

        </AppWrapper>
    )
}

export default App
