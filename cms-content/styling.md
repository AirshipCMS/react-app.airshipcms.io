# Styling
This project was styled with CSS and Bulma.

The stylesheet for this app can be found in `/src/App.css`. This file is imported in all of the React app's components:
```
import './App.css';
```

Bulma was included in the head of `/public/root.html`:
```
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="%PUBLIC_URL%/assets/media/favicon.ico">
  <title>{{ header }}</title>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.css">
</head>
```