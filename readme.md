this project is about geting location and weather and photo from the api.

folder structure

- Root:
  - `package.json`
  - `readme.md`
  - `webpack.config.js`
  - src folder
    - server folder
      - `server.js` (name will vary)
    - client folder
      - `index.js`
      - html/views folder
        - `index.html`
      - js folder
        - `app.js` (name will vary)
      - styles folder
        - `style.scss` (name will vary - may be broke into partials)

package.json dependencies and devdependencies

"dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "node-fetch": "^2.6.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
  },
  "devDependencies": {
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.5",
    "babel-loader": "^8.1.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.5.3",
    "html-loader": "^1.1.0",
    "html-webpack-plugin": "^4.2.1",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.14.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "sass-loader": "^8.0.2",
    "style-loader": "^1.2.1",
    "webpack-dev-server": "^3.10.3",
    "workbox-webpack-plugin": "^5.1.3"
  }