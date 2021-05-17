// In your routes configuration file
const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/modern.js`)
  },
  {
    path: '/contact',
    component: path.resolve(`src/pages/modern.js`)
  },
  {
    path: '/terms',
    component: path.resolve(`src/pages/modern.js`)
  }
];
