# restaurant-page

Now live at: https://thoriqfarras.github.io/restaurant-page/

## Reflection

### New Things I've Applied

- Module bundling with Webpack, which allows you to minify your files for deployment. Useful if a lot of packages are involved.

### Wins

- I think I did quite good splitting of the different components of the page into multiple JS modules.

### Hurdles

- Highlighting the correct button on the navbar -- tried doing it with JS but lost the hover effect because of it; managed to use pure CSS via the `:has()` pseudo selector.
- Adding & Updating the event listener for the view menu button on the home page -- spent quite some time thinking before realizing a simple event listener to the `main` tag as a whole that listens for event directed at the button was all I needed.

### Takeaway

- Splitting your codes into module can help organize your project better.

### Questions

- At which point should you bundle your files into multiple minified outputs? Say, my app is made up of 4 JS files. Should I bundle those into several output files?
- If you load the page for the first time and go to the menu section you'll notice a slight lag in the switch. I wonder why that is? (My guess is one of the image files is too big which adds extra loading time).
- How to best separate the development side with the production side of the project? I've made a branch called `production` where the code in it is used to deploy the app via GitHub Pages, but I don't know if that's the best way of doing things.