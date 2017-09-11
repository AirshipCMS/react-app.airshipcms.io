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


# React + Airship CMS
<img src="https://cdn.rawgit.com/AirshipCMS/react-app.airshipcms.io/development/assets/react-airship-blue.svg">

This is a demo of an Airship CMS project that uses an React to render all pages.
You can view the demo at [http://react-app.airshipcms.io](http://react-app.airshipcms.io/).

# Tools
- [Airship CMS](https://airshipcms.io): a web development & deployment platform.
- [React](https://facebook.github.io/react/): a JavaScript library for building user interfaces.
- [Bulma](http://bulma.io/): a modern CSS framework.

# Project Setup

## 1. Provision a Site in the Airship Developer Portal
Provision a new site in the [Airship Developer Portal](https://skyport.airshipcms.io).

## 2. Set up the Site Schema in your Site Admin Portal
Follow the steps to re-create a [Site Schema](https://react-app.airshipcms.io/airship-schema) that matches this demo project.

## 3. Install Airship Launcher CLI Tools
If you don't yet have the Airship Launcher command line tools, install the [Mac & Linux](https://airshipcms.io/mac-linux-installer) or [Windows](https://airshipcms.io/windows-installer) toolset.

## 4. login to Airship CMS in your Terminal
In your terminal, navigate to the root of your directory and run the following (_be sure to replace "mysite" with your actual site subdomain_):
```
airship login mysite
```
or more verbosely:
```
airship login mysite.airshipcms.io
```

## 5. Land the initial Templates
In your terminal, run the following:
```
airship land
```
This will download the initial project templates and directories.

## 6. Run the Airship Server & View the Local Site
In the root of your directory, run the following to start the Airship Server in your local project directory.
```
airship serve
```

Open a web browser and navigate to `localhost:9001` to view your local site.

## 7. Complete the Styling Setup & React Tutorial
Follow the instructions for setting up [Styling](https://react-app.airshipcms.io/styling) & [React](https://react-app.airshipcms.io/react-tutorial) for this project.
(If you don't want to follow the instructions step-by-step, you can also copy the relevant files from the demo repo to your site directory).

## 8. Launch your Site
In the root of your directory, run:
```
airship launch
```
Enter `y` when prompted. In seconds, your demo site will be published!

#Development

While your airship server is running, run the following in another terminal window:
```
npm start
```
Open a web browser and naviagte to `localhost:3000`

# Project Structure

```
.
├── assets
│   └── react-airship-blue.svg
├── cms-content
│   ├── airship-schema.md
│   ├── react-tutorial.md
│   ├── root.md
│   └── styling.md
├── compartments
│   ├── assets
│   │   ├── media
│   │   │   ├── github-icon.svg
│   │   │   └── react-airship.svg
│   │   ├── react-app
│   │   │   ├── asset-manifest.json
│   │   │   ├── media
│   │   │   │   ├── airship-react.fad6065f.svg
│   │   │   │   └── favicon.ico
│   │   │   ├── scripts
│   │   │   │   ├── main.d848213c.js
│   │   │   │   └── main.d848213c.js.map
│   │   │   └── styles
│   │   │       ├── main.05ab7c88.css
│   │   │       └── main.05ab7c88.css.map
│   │   ├── scripts
│   │   │   └── prism.js
│   │   └── styles
│   │       └── styles.css
│   ├── layouts
│   │   ├── application.html
│   │   └── spa.html
│   └── templates
│       └── root.html
├── config
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
├── package.json
├── public
│   ├── media
│   │   └── favicon.ico
│   └── root.html
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── AirshipSchema.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── Element.js
│   ├── Elements.js
│   ├── ReactTutorial.js
│   ├── Setup.js
│   ├── Styling.js
│   ├── assets
│   │   └── airship-react.svg
│   ├── index.css
│   └── index.js
└── yarn.lock
```

# .airship
The `.airship`  directory contains a file called `name`. The `name` file identifies the subdomain of your project whenever you run `airship serve`, `airship launch`, or `airship land`.

# compartments

`compartments/` contains the directory structure for the Airship project. Any directories or files outside of `compartments` will be ignored when launched with Airship.
The `compartments` directory should contain the following subdirectories:
- `airmail`
- `assets`
- `layouts`
- `partials`
- `templates`

## assets
Standard subdirectories found in `assets` are `media` (images), `scripts` and `styles`. Additional subdirectories and files may be added to this directory. In this project, you will find a directory name `react-app`. This directory contains JavaScript and CSS files that have been compiled by webpack from `src/`.

## layouts
The `layouts` directory contains a file named `spa.html`. This file displays content from `compartments/templates/root`. `application.html` is generated by default but is not used in this project. Layout filenames shouls match those set in the Modify section for a Page or Collection.

## templates
The `templates` directory contains html templates and subdirectories containing html templates. Template filenames should match those set in the Modify sections for a Page or Collection. `root.html` is generated by default. `public/root` writes to this file.

# config
The `config` directory was generated by ejecting the React app (`npm run eject`). This directory contains webpack config files. Ejecting the app allows us to compile the app into `compartments/assets/react-app/`. Check out `config/paths` for more info.

# public
`public` contains templates that webpack will use to write the final app html to `compartments/templates/root`.
`public/media/` contains assets that will be copied over directly by webpack to `compartments/assets/react-app/media/`.

# scripts
The `scripts` directory was generated by ejecting the React app (`npm run eject`).

`build.js` compiles the React app into `compartments/assets/react-app`.
```
npm run build
```

`start.js` serves the React app on port `3000` and starts the Airship server.
```
npm start
```

Check out `scripts` in the `package.json` file.

# src
`src` contains the react source files.
The CSS files will be compiled by webpack into `compartments/assets/react-app/styles/`.
The JavaScript files will be compiled by webpack with babel into `compartments/assets/react-app/scripts/`.
`src/assets/` contains all the assets that can be required by the app and will be copied to `compartments/assets/react-app/media/`.
