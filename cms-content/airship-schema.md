# Airship Schema
Before you can do the React Tutorial, complete this tutorial for recreating the Airship Schema for this project.

## Login to Airship CMS
In your browser, navigate to `yourdomain.airshipcms.io/admin` and login with your credentials.

<img width="916" alt="airship-admin-login" src="https://user-images.githubusercontent.com/1865400/28551593-a1a45e82-7084-11e7-9272-c10b25aedae3.png">  

## Modify the `_root_` page
Click the <img width="26" alt="wrench" src="https://user-images.githubusercontent.com/1865400/28548077-afe52966-706d-11e7-93f0-ce9e958ec070.png"> Modify Link for the "Landing Page".

<img width="236" alt="homepage" src="https://user-images.githubusercontent.com/1865400/28551369-461a3f38-7083-11e7-9a81-f11bd7cd80f1.png">

Check that the layout for the page is set to `application.html` and the template for the page is set to `root.html`.

<img width="683" alt="Page Rendering" src="https://airshipcms.io/assets/media/oss-elements/page-rendering.jpg">

Modify the Page Fields:
- Remove the initial page fields from the `Page Fields` section.
- Add a textarea field titled "Description".
- Add a link field titled "Github". 
- Add a textarea field titled "Body". 

<img width="757" alt="Collection Rendering Set Layout" src="https://airshipcms.io/assets/media/oss-elements/page-fields-classically-rendered.jpg">

Click the Modify Page button.

## Create the `Airship Schema`, `React Tutorial`, and `Styling` Pages
- Navigate to `Pages` and click the `New Page` button.
- Enter "Airship Schema" into the Title field.
- The permalink "airship-schema" will generate.

<img width="683" alt="Airship Schema Permalink" src="https://airshipcms.io/assets/media/oss-elements/page-setup.jpg"> 

You don't need to set anything in the `Template Rendering` section, since the contents of the project are all rendered in the single-page application on the root page.

In the `Page Fields` section, add a textarea field titled "Body".

<img width="625" alt="Body Field" src="https://airshipcms.io/assets/media/oss-elements/page-fields-body.jpg">

Click `Create Page`.

Repeat for the "React Tutorial" page. Be sure to set the page template to `airship-templating.html`.

Repeat for the "Styling" page. Be sure to set the page template to `styling.html`.

<img width="928" alt="Pages" src="https://airshipcms.io/assets/media/oss-elements/pages-all-react.png"> 

## Create the `Elements` Collection
- Navigate to `Collections` and click the `New Collection` button.
- Enter "Elements" in the Title field.
- Refer to a single item in this collection as a(n)... "element".
- The public path "elements" will generate.

<img width="653" alt="Collection Setup" src="https://airshipcms.io/assets/media/oss-elements/collection-setup.jpg">

In the `Collection Rendering` section, you'll see `Layout`, `Template Directory`, `Items Per Page`, `Sort Property`, and `Sort Order`.

<img width="727" alt="Initial Collection Rendering" src="https://airshipcms.io/assets/media/oss-elements/collection-rendering-no-layout-or-templates.jpg">

Since this project uses classic rendering, you will need to set a layout and template directory. Select `application.html` from the `Layout` dropdown then click `Set Layout`.

<img width="335" alt="Collection Rendering Layout" src="https://airshipcms.io/assets/media/oss-elements/collection-rendering-layout.jpg">

Select `Create New Directory` from the `Template Directory` dropdown, and set the directory to `elements` and click `Add Directory`.

<img width="337" alt="Collection Rendering Set Template Directory" src="https://airshipcms.io/assets/media/oss-elements/collection-rendering-template-directory.jpg">

`Items Per Page` determines the number of items rendered on the page and must be a number. Change the value to `1000`.

<img width="237" alt="Collection Items per Page" src="https://airshipcms.io/assets/media/oss-elements/collection-rendering-items-per-page.jpg">

`Sort Property` determines what property the items will be sorted by. The avaliable options are `permalink`, `created at`, `published on` and `sorting position`. For this project select `sorting position`.

<img width="234" alt="Collection Sort By" src="https://airshipcms.io/assets/media/oss-elements/collection-rendering-sort-property.jpg">

`Sort Order` determines the order the items will be sorted. The options are `ascending` and `descending`. Leave the value as `ascending`.

<img width="239" alt="Collection Sort By" src="https://airshipcms.io/assets/media/oss-elements/collection-rendering-sort-order.jpg">

In the `Collection Settings` section, make sure "Show Permalink" is checked.

<img width="720" alt="Collection Settings" src="https://airshipcms.io/assets/media/oss-elements/collection-settings.jpg">

In the `Post Fields` section, add a text field titled "Name", an image field titled "Image", and a textarea field titled "Description".

<img width="697" alt="Collection Post Fields" src="https://airshipcms.io/assets/media/oss-elements/collection-post-fields.jpg">

Set the Primary Label to "Name".

<img width="359" alt="elements-collection-primary-label" src="https://user-images.githubusercontent.com/1865400/28551566-70836c26-7084-11e7-979e-09429ea071b9.png">  

Click the `Create Collection` button.

## Add some Elements
- In the list view of the Elements Collection, click the `New Item` button.
- Enter the element "Name", "Image" and "Description".
- Click the `Save & Close` button.
- Create a few more elements.

_If you have a local copy of this repository, the graphics for all the elements in this demo are included in a directory outside of compartments._

## Local Development
Return to the Setup Instructions Step #3 for instructions on developing locally, setting up the React project, and deployment.

---

# Site Settings
You will need to set up a SPA Route so that your React Application can load on the _root_ page.

In the Airship admin panel, click the `Settings` located in the sidebar.
<img src="https://cdn.rawgit.com/AirshipCMS/angular-1.airshipcms.io/e4bf7769/assets/settings-link.png">

Click the `Developer` tab.
<img src="https://cdn.rawgit.com/AirshipCMS/angular-1.airshipcms.io/e4bf7769/assets/developer-tab.png">

Click the `Add Route` button in the `Single-Page Application Routes` section.
<img src="https://cdn.rawgit.com/AirshipCMS/angular-1.airshipcms.io/d074f23a/assets/Single-Page-Application-Routes.png">

Leave `/.*` as the value for the `Pattern` field and `/` as the value for the `Destination` field then click `Add`.
<img src="https://cdn.rawgit.com/AirshipCMS/angular-1.airshipcms.io/d074f23a/assets/Add-SPA-Route.png">

<img src="https://cdn.rawgit.com/AirshipCMS/angular-1.airshipcms.io/d074f23a/assets/Added-SPA-Route.png">

---

# Deployment
Finish the React Tutorial first to set up and build all React components. When you have completed the React Tutorial and the site is running locally, follow these steps to publish your project:
- Open your terminal.
- In the root of your project, run `airship launch`
- Enter `y` when prompted. This will deploy your app to `yoursite.airshipcms.io`.
