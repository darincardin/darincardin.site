import 'jquery/dist/jquery.js'

//import jQuery from 'jquery/dist/jquery.js'; 


import jquery from 'jquery/dist/jquery.js';
window.$ = window.jQuery = jquery;

import ('bootstrap/dist/js/bootstrap.js');
import ('bootstrap/dist/css/bootstrap.css');

import './style';
import './style/header.scss';



import App from './components/app';

export default App;
