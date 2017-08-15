# React Tutorial
**Complete the Airship Schema tutorial before starting this React Tutorial.** This React Tutorial explains how React was set up and used to render the pages and collections for this application.

## 1. Create React App
This app was bootstrapped with `create-react-app`.
If you don't have this installed globally, run:
```
npm i -g create-react-app
```

Once installed, run the following:
```
create-react-app react-app
```
This will create a directory called `react-app` with the initial project structure.

## 2. Airship Login and Airship Land
Go into `react-app` and login to your Airship site.
```
airship login react-app
```
Then run:
```
airship land
```
This will add the folders required to serve and deploy your Airship project.

## 3. Eject the React App
We need to eject the react app so that we can update the webpack config file.
To do so, run:
```
npm run eject
```

## 4. Update the Webpack Config
In `config/paths.js` set `appBuild` to `compartments/assets/react-app/`, `appHtml` to `public/root.html` and `outputHtml` to `compartments/templates/root.html`.
This builds our React app into the `compartments` directory so that it can be served and deployed by Airship.

## 5. Bind Page and Collection Data
To display page and collection content, you will need use the Airship API.

### Display Page Content using Airship API
Make a GET request to`https://yoursite.airshipcms.io/api/pages/page-name`. 
For the `__root__` page in this repo, the full GET request URL is: 
```
https://yourdomain.airshipcms.io/api/pages/__root__
```

`/src/Setup`:
```
componentDidMount() {
  fetch("/api/pages/__root__").then(res => res.json()).then(page => {
    page.fields.map(field => (page[field.variable_name] = field.value));
    this.setState({ page });
  });
}
```

In the response object, you will see an array name `fields`. This array contains an object for each field associated with the page.

The `__root__` page container a "Github" field, "Description" field, and a "Body" field. The `Airship Schema` page, `React Tutorial` page and `Styling` page all have a "Body" field.

Each field contains these properties:
```
num_options: int
options: []
sorting_position: int
title: string
type: string
value: string
variable_name: string
```

The `value` property is what you will bind to your templates.

Because the "Body" field's type contains HTML, to bind this field, you have to use React's `dangerouslySetInnerHTML`.

`/src/Setup`: 
```
render() {
  return (
    <div className="Setup">
      <div className="summary">
        <img src="/assets/media/react-airship.svg" alt="logo"/>
        <h1 className="title is-4">
          {this.state.page.name}
        </h1>
        <p>
          {this.state.page.description}
        </p>
      </div>
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: this.state.page.body
        }}
      />
    </div>
  );
}

```

### Display Collection Content using Airship API
Make a GET request to `/api/aerostat_collection/collection-permalink`. 
For the `elements` collection in this repo, the full GET request URL is: 
```
https://yourdomain.airshipcms.io/api/pages/__root__
``` 

This will return an array of items.

Each item contains a number of properties. The `fields` array is the only property used in this demo. The `fields` for the `elements` collection are "Name", "Image", and "Description".

The response object structure is same as Page Fields, where each field contains these properties:
```
num_options: int
options: []
sorting_position: int
title: string
type: string
value: string
variable_name: string
```

Set `this.state.elements` to the response object.

`/src/Elements.js`:
```
class Elements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: []
    };
  }
  componentDidMount() {
    fetch("/api/aerostat_collection/elements")
      .then(res => res.json())
      .then(elements => {
        elements.map(element =>
          element.fields.map(
            field => (element[field.variable_name] = field.value)
          )
        );
        this.setState({ elements });
      });
  }
  ...
```

In the render function, map over `this.state.elements` to display each element's image and name.

```
render() {
  return (
    <div className="container elements-container">
      <h2 className="has-text-centered elements-header">
        This is a demo rendering all the items of the Elements collection with
        React
      </h2>
      <div className="columns">
        {this.state.elements.map(element =>
          <div className="column is-3 element" key={element.id}>
            <Link to={"/element/" + element.id.toString()}>
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={element.image[0].thumbnail_url}
                      alt={element.image[0].file_name}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media-content">
                    <p className="title is-4">
                      {element.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
```

## 6. Run the Project

In your terminal, run:
```
yarn start
```

This command will start execute `scripts/start.js`.
The React app will be served at `localhost:3000`.


## 7. Build and Deploy

In order to launch the React app with Airship, the app needs to be built.
In your terminal, run:
```
yarn build
```
This will compile the React app into `/compartments/assets/react-app`.
`/public/root.html` compiles into `/compartments/templates/root.html`.

Now that the React app has been built into the `compartments` directory, it can be deployed.
To do so, run:
```
airship launch
```