/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
//import '../css/app.css';

/*
import '../css/portoadmin/vendor/bootstrap/css/bootstrap.css';
import '../css/portoadmin/vendor/animate/animate.css';
import '../css/portoadmin/vendor/font-awesome/css/all.min.css';
import '../css/portoadmin/vendor/magnific-popup/magnific-popup.css';
import '../css/portoadmin/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css';

//<!-- Specific Page Vendor CSS -->
import '../css/portoadmin/vendor/jquery-ui/jquery-ui.css';
import '../css/portoadmin/vendor/jquery-ui/jquery-ui.theme.css';
import '../css/portoadmin/vendor/select2/css/select2.css';
import '../css/portoadmin/vendor/select2-bootstrap-theme/select2-bootstrap.min.css';
import '../css/portoadmin/vendor/bootstrap-multiselect/css/bootstrap-multiselect.css';
import '../css/portoadmin/vendor/bootstrap-tagsinput/bootstrap-tagsinput.css';
import '../css/portoadmin/vendor/bootstrap-colorpicker/css/bootstrap-colorpicker.css';
import '../css/portoadmin/vendor/bootstrap-timepicker/css/bootstrap-timepicker.css';
import '../css/portoadmin/vendor/dropzone/basic.css';
import '../css/portoadmin/vendor/dropzone/dropzone.css';
import '../css/portoadmin/vendor/bootstrap-markdown/css/bootstrap-markdown.min.css';
import '../css/portoadmin/vendor/summernote/summernote-bs4.css';
import '../css/portoadmin/vendor/codemirror/lib/codemirror.css';
import '../css/portoadmin/vendor/codemirror/theme/monokai.css';
//Theme CSS -->
import '../css/portoadmin/theme.css';
//Skin CSS -->
import '../css/portoadmin/skins/default.css';
// Theme Custom CSS -->
import '../css/portoadmin/custom.css';
 */


// require jQuery normally
const $ = require('jquery');
// create global $ and jQuery variables
global.$ = global.jQuery = $;

const Highcharts = require('highcharts/highcharts');  // or require('highcharts/highstock');
window.Highcharts = Highcharts;

const JSZip = require("jszip");
window.JSZip = JSZip;

const Raphael = require("raphael");
window.Raphael = Raphael;


// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore!');
