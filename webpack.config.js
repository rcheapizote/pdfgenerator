var Encore = require('@symfony/webpack-encore');
var CopyWebpackPlugin = require('copy-webpack-plugin'); // this line tell to webpack to use the plugin

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
//if (!Encore.isRuntimeEnvironmentConfigured()) {
//    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
//}


 if (Encore.isProduction()) {
    Encore
        .setOutputPath('public/build/')
        //.setPublicPath('https://my-cool-app.com.global.prod.fastly.net');
        .setPublicPath('/pdfgenerator/public/build')

     // guarantee that the keys in manifest.json are *still*
        // prefixed with build/
             // (e.g. "build/dashboard.js": "https://my-cool-app.com.global.prod.fastly.net/dashboard.js")
        .setManifestKeyPrefix('build/');
 }
 else{
     Encore
     // directory where compiled assets will be stored
         .setOutputPath('public/build/')
         // public path used by the web server to access the output path
         //.setPublicPath('http://localhost/water_laboratory/public/build')
         .setPublicPath('http://localhost:8888/racami/pdfgenerator/public/build')
         // only needed for CDN's or sub-directory deploy
         //.setManifestKeyPrefix('build/')
         .setManifestKeyPrefix('build/');
 }



    Encore

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('js/app', './assets/js/app.js')
    //.addEntry('js/modernizr', './assets/css/portoadmin/vendor/modernizr/modernizr.js')
    .addEntry('js/modernizr', './assets/css/portoadmin/vendor/modernizr/modernizr-custom.js')
    //<!-- Vendor -->
    .addEntry('js/jquery', './assets/css/portoadmin/vendor/jquery/jquery.js')
    .addEntry('js/jquery.browser.mobile', './assets/css/portoadmin/vendor/jquery-browser-mobile/jquery.browser.mobile.js')
    .addEntry('js/popper.min', './assets/css/portoadmin/vendor/popper/umd/popper.min.js')
    .addEntry('js/bootstrap', './assets/css/portoadmin/vendor/bootstrap/js/bootstrap.js')
    .addEntry('js/bootstrap-datepicker', './assets/css/portoadmin/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js')
    .addEntry('js/common', './assets/css/portoadmin/vendor/common/common.js')
    .addEntry('js/nanoscroller', './assets/css/portoadmin/vendor/nanoscroller/nanoscroller.js')
    .addEntry('js/jquery.magnific-popup', './assets/css/portoadmin/vendor/magnific-popup/jquery.magnific-popup.js')
    .addEntry('js/jquery.placeholder', './assets/css/portoadmin/vendor/jquery-placeholder/jquery.placeholder.js')
    //<!-- Specific Page Vendor -->
    .addEntry('js/jquery-ui', './assets/css/portoadmin/vendor/jquery-ui/jquery-ui.js')
    .addEntry('js/jquery.ui.touch-punch', './assets/css/portoadmin/vendor/jqueryui-touch-punch/jquery.ui.touch-punch.js')
    .addEntry('js/jquery.appear', './assets/css/portoadmin/vendor/jquery-appear/jquery.appear.js')
    .addEntry('js/bootstrap-multiselect', './assets/css/portoadmin/vendor/bootstrap-multiselect/js/bootstrap-multiselect.js')
    //.addEntry('snap.svg-min', '.assets/css/portoadmin/vendor/snap.svg/snap.svg-min.js')

    //<!-- Theme Base, Components and Settings -->
    .addEntry('js/theme', './assets/js/portoadmin/theme.js')
    //<!-- Theme Custom -->
    .addEntry('js/custom', './assets/js/portoadmin/custom.js')
    .addEntry('js/theme.init', './assets/js/portoadmin/theme.init.js')
    .addEntry('js/jquery-validation', './assets/css/portoadmin/vendor/jquery-validation/jquery.validate.js')
        .addEntry('js/jquery-validation-localization', './assets/css/portoadmin/vendor/jquery-validation/localization/messages_es.js')

    //DATATABLES

    .addEntry('js/select2', './assets/css/portoadmin/vendor/select2/js/select2.js')
    .addEntry('js/dataTables.bootstrap4.min', './assets/css/portoadmin/vendor/datatables/media/js/dataTables.bootstrap4.min.js')
    .addEntry('js/dataTables.buttons.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/dataTables.buttons.min.js')
    .addEntry('js/buttons.bootstrap4', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.bootstrap4.min.js')
        .addEntry('js/buttons.colVis.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.colVis.min.js')
        .addEntry('js/buttons.flash.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.flash.min.js')
    .addEntry('js/buttons.html5.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.html5.min.js')
    .addEntry('js/buttons.print.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.print.min.js')
    .addEntry('js/jszip.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/JSZip-2.5.0/jszip.min.js')
    .addEntry('js/pdfmake.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/pdfmake-0.1.32/pdfmake.min.js')
    .addEntry('js/vfs_fonts', './assets/css/portoadmin/vendor/datatables/extras/TableTools/pdfmake-0.1.32/vfs_fonts.js')

    .addEntry('js/highcharts', './assets/js/highcharts/highcharts-8.0.4.js')
    .addEntry('js/highcharts-export-data', './assets/js/highcharts/highcharts-8.0.4-export-data.js')
    .addEntry('js/highcharts-exporting', './assets/js/highcharts/highcharts-8.0.4-exporting.js')
    .addEntry('js/highcharts-series-label', './assets/js/highcharts/highcharts-8.0.4-series-label.js')
    .addEntry('js/highcharts-accessibility', './assets/js/highcharts/highcharts-8.0.4-accessibility.js')

    .addEntry('js/morris', './assets/css/portoadmin/vendor/morris/morris.js')
    //SCHEDULE CALENDAR
    .addEntry('js/jquery-schedule', './assets/js/dws_jquery_schedule/dist/jquery.schedule.min.js')

    //SKETCHPAD
    //.addEntry('js/raphael', './assets/js/raphael-sketchpad-master/javascripts/raphael-2.0.1.min.js')
    .addEntry('js/raphael', './assets/js/raphael-sketchpad-master/javascripts/raphael.js')
    .addEntry('js/json2', './assets/js/raphael-sketchpad-master/javascripts/json2.min.js')
    .addEntry('js/sketchpad', './assets/js/raphael-sketchpad-master/src/raphael.sketchpad.js')


    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    //STYLES
    .addStyleEntry('css/app', './assets/css/app.css')
    .addStyleEntry('css/bootstrap', './assets/css/portoadmin/vendor/bootstrap/css/bootstrap.css')
    .addStyleEntry('css/animate', './assets/css/portoadmin/vendor/animate/animate.css')
    .addStyleEntry('css/all.min', './assets/css/portoadmin/vendor/font-awesome/css/all.min.css')
    .addStyleEntry('css/magnific-popup', './assets/css/portoadmin/vendor/magnific-popup/magnific-popup.css')
    .addStyleEntry('css/bootstrap-datepicker3', './assets/css/portoadmin/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css')
    .addStyleEntry('css/jquery-ui', './assets/css/portoadmin/vendor/jquery-ui/jquery-ui.css')
    .addStyleEntry('css/jquery-ui.theme', './assets/css/portoadmin/vendor/jquery-ui/jquery-ui.theme.css')
    .addStyleEntry('css/select2', './assets/css/portoadmin/vendor/select2/css/select2.css')
    .addStyleEntry('css/select2-bootstrap.min', './assets/css/portoadmin/vendor/select2-bootstrap-theme/select2-bootstrap.min.css')
    .addStyleEntry('css/bootstrap-multiselect', './assets/css/portoadmin/vendor/bootstrap-multiselect/css/bootstrap-multiselect.css')
    .addStyleEntry('css/bootstrap-tagsinput', './assets/css/portoadmin/vendor/bootstrap-tagsinput/bootstrap-tagsinput.css')
    .addStyleEntry('css/bootstrap-colorpicker', './assets/css/portoadmin/vendor/bootstrap-colorpicker/css/bootstrap-colorpicker.css')
    .addStyleEntry('css/bootstrap-timepicker', './assets/css/portoadmin/vendor/bootstrap-timepicker/css/bootstrap-timepicker.css')
    .addStyleEntry('css/basic', './assets/css/portoadmin/vendor/dropzone/basic.css')
    .addStyleEntry('css/dropzone', './assets/css/portoadmin/vendor/dropzone/dropzone.css')
    .addStyleEntry('css/bootstrap-markdown.min', './assets/css/portoadmin/vendor/bootstrap-markdown/css/bootstrap-markdown.min.css')
    .addStyleEntry('css/summernote-bs4', './assets/css/portoadmin/vendor/summernote/summernote-bs4.css')
    .addStyleEntry('css/codemirror', './assets/css/portoadmin/vendor/codemirror/lib/codemirror.css')
    .addStyleEntry('css/monokai', './assets/css/portoadmin/vendor/codemirror/theme/monokai.css')
    .addStyleEntry('css/theme', './assets/css/portoadmin/theme.css')
    .addStyleEntry('css/default', './assets/css/portoadmin/skins/default.css')
    .addStyleEntry('css/custom', './assets/css/portoadmin/custom.css')
    .addStyleEntry('css/dataTables.bootstrap4', './assets/css/portoadmin/vendor/datatables/media/css/dataTables.bootstrap4.css')
    .addStyleEntry('css/morris', './assets/css/portoadmin/vendor/morris/morris.css')
        .addStyleEntry('css/buttons.bootstrap4', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/css/buttons.bootstrap4.css')

    .addStyleEntry('css/jquery-schedule', './assets/js/dws_jquery_schedule/dist/jquery.schedule.min.css')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    })
    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')


    //IMAGES
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/images', to: 'images' }
    ]))
;


module.exports = Encore.getWebpackConfig();
