# Restaurant Reviews App (v1)
---
## Project Summary:

In this **Restaurant Reviews** project, I converted a static webpage to a mobile-ready web application, implemented accessibility and added a service worker to make sure users can see visited page when offline.

## Run the application

1. Clone this repo. In a terminal, change the current working directory to this local project. 
2. Check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`.  If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software. For windows user, open git bash and use `python -m http.server 8000`.

3. With your server running, open Chrome, visit the site: `http://localhost:8000`.
4. Resize your browser to check the responsiveness.
5. To change your connection, right click "inspect" > "network" > check "Offline".
![run the app offline](img/changeOffline.png)
Visited pages are rendered when there is no network access.

## Created with: 
- Javascript ES6
- HTML
- CSS

#### Source
* [Starter code](https://github.com/udacity/mws-restaurant-stage-1)


