## From Author

Running project: [http://157.230.23.221/](http://157.230.23.221/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### About API

A special API was created for the project, placed on one of my old projects (path in config.js)

Cloud MongoDB was used.

I put a sample of the API route at the root of the project so you can read it (shvabapi.js)

CORS is allowed, so you can use project temporarily from anywhere.

### Fiches

- React supports sass already, so Bootstrap theme was changed simply by specifying new values.

- React hooks and context are used.

- Filtering - at Home page

- Pagination - al List page

- Drug and Drops first steps - at Test Page (Did not have time to implement at the main page)

### Deploy

The project is already deployed. You can already look at it by address [http://157.230.23.221/](http://157.230.23.221/)
DigitalOcean developer cloud was used

Deploy as common react app.

1. Create build using `npm run build`.
2. Use serve or create simple express server
   Nice deployment description is [here](https://create-react-app.dev/docs/deployment/)

I use express server listening 80 port (default http port) with code:

```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//app.listen(80);
app.listen(80, () => console.log(`\n\nExample app listening on port 80!\n`));
```

# Next the standard description of the React project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
