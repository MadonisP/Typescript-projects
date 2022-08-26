import React, { useCallback, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesPage from './features/games/GamesPage';
import { getGames } from './features/games/gameSlice';
import { useAppDispatch } from './store/store';
import Navbar from './components/Navbar';
import CreateGame from './features/games/CreateGame';
function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [])

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamesPage />} />
          <Route path="/create" element={<CreateGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;