## Week 3 Journal

I chose doing Option 2, where I built a text interpreter for processing input of the map in certain range. I explored the boundaries of longitude and latitude of Google Maps, and found out that the former ranges from -180 to 180 and the latter ranges from -85 to 85. The way I setup currently was that if the user entered a number outside of this range, the map would show the point correlating to the boundary. For example, if the input for latitude is -93, the map shows point with the latitude of -85.

The code is demonstrated in the GUI_sampler.html file.