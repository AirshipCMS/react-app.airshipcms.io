# React + Airship CMS
<img src="https://cdn.rawgit.com/AirshipCMS/react-app.airshipcms.io/development/assets/react-airship-blue.svg">

This is a demo of an Airship CMS project that uses an React to render all pages.
You can view the demo at [http://react-app.airshipcms.io](http://react-app.airshipcms.io/).

# Tools
- [Airship CMS](https://airshipcms.io): a web development & deployment platform.
- [React](https://facebook.github.io/react/): a JavaScript library for building user interfaces.
- [Bulma](http://bulma.io/): a modern CSS framework.

# Project Setup

Before you can run this project locally, you need a Free Airship CMS developer account. Get a Free Account at [https://skyport.airshipcms.io](https://skyport.airshipcms.io).

## 1. Clone this Repository
Clone this repository.

## 2. Install Airship Launcher CLI Tools
If you don't yet have the Airship Launcher command line tools, install the toolset at [https://install.airshipcms.io](https://install.airshipcms.io). 
With the Airship Launcher command line tools, you will be able to `airship login` and `airship serve` the project locally. However, you won't have permission to `airship land` or `airship launch` any files.

## 3. Login to Airship CMS
In your terminal, navigate to the root of your directory and run:
```
airship login react-app
```
or more verbosely:
```
airship login react-app.airshipcms.io
```

## 4. Start the local Airship Server
In the root of your directory, run:
```
airship serve
```

## 5. View the site in a browser
Open a web browser and navigate to `localhost:9001`.

Review the Styling, Airship Schema, and Angular Tutorial pages for how the project was set up. If you want to see how the Airship CMS setup for this project, you will need to set up your own project and follow the settings on the Airship Schema page for replicating the pages, collections, and fields for this site.

You will also need to create your own project if you want to test `airship land` and `airship launch` functionality for publishing projects.
