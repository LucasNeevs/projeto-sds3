import App from 'App';
import ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals';

export const rootElement: HTMLElement | null = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElement
);

reportWebVitals(console.log);