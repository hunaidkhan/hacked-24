
<img width="1470" alt="original" src="https://github.com/hunaidkhan/hacked-24/assets/77839662/09aeb30a-48c0-4801-9ef2-6be80c0b470c">

# Inspiration
Due to the high crime regions surrounding the university, there were a lot of safety hazards for students living near the university area. There was a gap of a good service that can alert you of the exact hot spots of crime as well as ensure your safety.

# What it does
Walking Buddy lets your plan your trip avoiding high crime areas. Our large dataset spans across the entire City of Edmonton giving you information on every category of crime that has occurred at a specific intersection.

You can click anywhere on the map for your journey to being and if the route passes through a high-crime area, you can quickly change it with just a click.

# How we built it
Technologies: React/React Native, Javascript, Mapbox API, python We used Mapbox API for our map setup and used data from the City of Edmonton Police services. We had to accurately generate heatmaps using the data and display it on our map as well as adding draw tools for trip navigation.

We had to fetch a large dataset for trip navigation and for obtaining the exact steps of each trip.

# Challenges we ran into
Since we had never worked with such a vast API, it was a big challenge setting up the project. We had to code out the entire layout of the map and how the user interacts with it. Generating heatmaps was the biggest challenge so far since we had no experience with it and our dataset vastly differed from the specification required by the MapBox API. We had to use python to transform our data into the desired form which took a lot of time.

We wanted to implement SOS messaging for which we initially converted the entire project to React Native which then failed.

# Accomplishments that we're proud of
Visually-pleasing representation of high-crime areas in Edmonton.

Completely implement trip navigation and set up Map component

Fetch user location and add animations for transitions between locations.

# What we learned
We learned how to deal with different technologies working together and how important data visualization is. We learned how to deal with complex apis and user interaction.

The hardest part was customizing the API output to our liking so we could present it visually to the user but it also taught us a lot.

# What's next for Walking Buddy
We aim to complete the implementation of SOS messaging as well as in-trip directions and voice guidance. We also aim to incorporate a voice matching algorithm that can detect unusual sounds using the phone's microphone and send out an appropriate SOS response potentially saving the life of a student far from home.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
