import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Spinner  from './components/spinner'

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {


const timeout = setTimeout(() => setIsLoading(false), 10000);
    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? <Spinner /> : <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
