# leaflet-challenge: Create the Earthquake Visualization

## Overview
!(images/logo.png)
The United States Geological Survey (https://www.usgs.gov/), or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, we have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

# Methodology

* Used the D3 library to read in the dataset (All Earthquakes from the Past 7 Days") from the URL: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

* Imported and visualized the data by doing the following:

    * Using Leaflet, created a map that plots all the earthquakes from the dataset based on their longitude and latitude.

    * Created data markers that reflects the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color.

    * Included popups that provides location, magnitude and depth of the earthquake when its associated marker is clicked.

    * Created a legend that provides context for the map data.

!(images/map.png)


### References
Dataset created by the United States Geological Survey (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).    