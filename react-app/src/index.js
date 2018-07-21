import ReactDOM from 'react-dom';
import createRoutes from './elements/router/routes.js';
import './css/main.css';

const routes = createRoutes();

ReactDOM.render(
     routes, document.getElementById('root')
);
