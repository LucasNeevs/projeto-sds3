import ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css';
import App from 'App';

export const rootElement: HTMLElement | null = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElement
);

reportWebVitals(console.log);