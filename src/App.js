import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Community, Error, Home, NFT, PlaceToStay } from './pages';
import SharedLayout from './pages/SharedLayout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/placetostay" element={<PlaceToStay />} />
            <Route path="/nfts" element={<NFT />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
