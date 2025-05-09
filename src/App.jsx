import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import NotFound404Page from '@/pages/NotFound404Page';
import { Toaster } from '@/components/ui/toaster';

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="*" element={<NotFound404Page />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
