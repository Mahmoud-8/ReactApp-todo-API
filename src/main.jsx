import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import.meta.env.VITE_NODE_ENV


async function enableMocking() {
    if (import.meta.env.VITE_NODE_ENV  !== 'development') {
      return
    }
    const { worker } = await import('./mocks/browser')

    return worker.start()
}

const rootElement = document.getElementById('root');

enableMocking().then(() => {

ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
        <App />

    </BrowserRouter>
);
  })
  