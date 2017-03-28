# 06-pug_templating


## Requirements

1. Set up a simple Express server with three routes; `/`, `/about` and `/inventory`. Each route should render the corresponding pug file.

1. Be sure to set Express' view engine to use Pug.

1. Using the `include` keyword, insert the nav.pug partial into each of the pug files.

1. In `about.pug`, create a variable to store the current date and time using the JavaScript `Date()` method. Using Pug's string interpolation, insert the date variable into a paragraph tag which should read: `Today's date is Sun Feb 19 2017 14:36:06 GMT-0600 (CST).`;

1. In `server.js`, create a variable that stores an array of at least 5 objects. Each object should contain a name and a price for a pastry. Using the `res.render()` method, send the array to the template. Using Pug's iteration methods, display each pastry as a single paragraph tag, e.g: `Blueberry Muffin: 1.59 each`

1. Using Pug's conditional syntax in `nav.pug`, write logic to determine which page is currently being displayed and only render the pages which are not being viewed.


## Bonus

1. Create a `layout.pug` in the `views` directory. By using the `extends` and `block` keywords, we can create a single pug file that will act as a parent template and can be inherited, or `extended` in a child template. The `layout.pug` should contain the `html`, `head`, and `body` tags. It can also `include` the `nav.pug` since `layout.pug` can be extended in each of our files.

  - Restructure `index.pug`, `about.pug` and `inventory.pug` to inherit `layout.pug`.

  HINT: Be sure to use the `block content` keywords in `layout.pug` where each child pug file will be shown.
