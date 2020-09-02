# About
This repository allows the user to see a heatmap of paticle data (PM2.5) collected by Sawatch Labs on March 14th, 2020 around Denver, Colorado. The heatmap.js plugin was used to make this data visual: https://www.patrick-wied.at/static/heatmapjs/example-heatmap-leaflet.html

# Frontend Repository
Clone down the following repo: https://github.com/Sc0tticus/AQ-Heatmaps/blob/master/README.md and run lite-server to get the frontend running locally.

# Backend Repository
Make sure you have PostgreSQL installed locally before working with this repository.
Clone down the following repository: https://github.com/Sc0tticus/RoR-Air-Quality-Backend and run 'bundle install'.
Then run 'rails db:migrate' followed by 'rails db:seed'. Lastly run 'rails s -p4000' to get the backend server running locally.


# heatmap.js
Dynamic Heatmaps for the Web. 

[<img src="http://www.patrick-wied.at/static/heatmapjs/assets/img/heatmapjs-examples-docs-banner.jpg" width="100%">](http://www.patrick-wied.at/static/heatmapjs/?utm_source=gh "View the heatmap.js website with usage examples, showcases, best practises, plugins ( googlemaps heatmap, leaflet) and more.")