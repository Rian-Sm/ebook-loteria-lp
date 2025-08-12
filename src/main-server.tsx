import { StrictMode } from 'react'
import ReactDOMServer from 'react-dom/server'
import './index.css'
import App from './App.tsx'

export function render(url) {
return ReactDOMServer.renderToString(
  <StaticRouter location={url}>
  <App />
  </StaticRouter>
  );
}
