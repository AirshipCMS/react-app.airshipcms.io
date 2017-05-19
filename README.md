# React App on Airship CMS

This is a demo SPA app created with react to be deployed on Airship CMS

View the demo here: https://react-app.airshipcms.io

### Requirements

1. Create an airship site at https://skyport.airshipcms.io
    - You will need to know your airship site **subdomain**
1. Install [Airship Launcher](https://install.airshipcms.io)
1. Install the latest stable version of [nodejs](https://nodejs.org/en/download/)
1. Install the npm package [create-react-app](https://www.npmjs.com/package/create-react-app) globally `npm install -g create-react-app`

## Tutorial

1. Create your own, or fork, then clone this repo (ex: `git clone https://github.com/AirshipCMS/react-app.airshipcms.io.git`)
1. Go into your local repo (ex: `cd react-app.airshipcms.io`)
1. Login to Airship using your Airship site **subdomain** (ex: `airship login react-app`)
1. Land your Airship site `airship land`
1. Create a react app in this directory `create-react-app .`
    - note: create-react-app may overwrite this README.md file, you may restore it with `mv README.old.md README.md`
1. Eject the react app with `npm run eject`
    - so that we can update the [webpack](https://webpack.js.org/) config file
1. Update the `config/paths.js` file
