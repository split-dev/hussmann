// Polyfills if needed
import './_polyfills';

// Import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Detection from './util/Detection';
import Router from './Router';
import common from './routes/common';
import PageSampleSlider from './routes/page-sample-slider';
import home from './routes/home';
import shop from './routes/shop';
import singleProduct from './routes/single-product';
import warranty from './routes/warranty';
import solution from './routes/individual-solution';
import videos from './routes/training-videos';
import contact from './routes/contact';
import team from './routes/team';

// Detect browser supports
window._detect = new Detection({ detect: ['ie11', 'edge']});
window._detect.init()

// /** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // The following class on gets fired when
  // there is a matching `.sample-slider` class in <body>
  'sampleSlider': PageSampleSlider,
  'home': home,
  'shop': shop,
  'singleProduct': singleProduct,
  'warranty': warranty,
  'individualSolution': solution,
  'trainingVideos': videos,
  'contact': contact,
  'career': contact,
  'team': team,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());
