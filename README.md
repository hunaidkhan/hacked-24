Inspiration
Due to the high crime regions surrounding the university, there were a lot of safety hazards for students living near the university area. There was a gap of a good service that can alert you of the exact hot spots of crime as well as ensure your safety.

What it does
Walking Buddy lets your plan your trip avoiding high crime areas. Our large dataset spans across the entire City of Edmonton giving you information on every category of crime that has occurred at a specific intersection.

You can click anywhere on the map for your journey to being and if the route passes through a high-crime area, you can quickly change it with just a click.

How we built it
Technologies: React/React Native, Javascript, Mapbox API, python We used Mapbox API for our map setup and used data from the City of Edmonton Police services. We had to accurately generate heatmaps using the data and display it on our map as well as adding draw tools for trip navigation.

We had to fetch a large dataset for trip navigation and for obtaining the exact steps of each trip.

Challenges we ran into
Since we had never worked with such a vast API, it was a big challenge setting up the project. We had to code out the entire layout of the map and how the user interacts with it. Generating heatmaps was the biggest challenge so far since we had no experience with it and our dataset vastly differed from the specification required by the MapBox API. We had to use python to transform our data into the desired form which took a lot of time.

We wanted to implement SOS messaging for which we initially converted the entire project to React Native which then failed.

Accomplishments that we're proud of
Visually-pleasing representation of high-crime areas in Edmonton.

Completely implement trip navigation and set up Map component

Fetch user location and add animations for transitions between locations.

What we learned
We learned how to deal with different technologies working together and how important data visualization is. We learned how to deal with complex apis and user interaction.

The hardest part was customizing the API output to our liking so we could present it visually to the user but it also taught us a lot.

What's next for Walking Buddy
We aim to complete the implementation of SOS messaging as well as in-trip directions and voice guidance. We also aim to incorporate a voice matching algorithm that can detect unusual sounds using the phone's microphone and send out an appropriate SOS response potentially saving the life of a student far from home.
