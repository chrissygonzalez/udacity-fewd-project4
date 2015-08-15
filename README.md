# Project 4
###Part 1: PageSpeed Insights
####Still to do
- use a build tool to minify CSS, JS, and optimize images

###Part 2: Pizza.html
####How to Use
- Download the frontend-nanodegree-mobile-portfolio if you haven't already. 
- Open the frontend-nanodegree-mobile-portfolio folder. 
- Within the views folder, find pizza.html and open it in a browser.
- Wait for the page to load, then scroll up and down to see the improved frame rate.
- Compare to the original (in _original > views > pizza.html) to see the exact effect the optimizations have had.

####Optimizations Used

  ![Original](_optimization_results/pizza_00_original.png "The original version without any improvements")
  ![Optimization 1](_optimization_results/pizza_01_getElementsByClassName.png "Changed querySelectorAll to getElementsByClass in updatePositions")
  ![Optimization 2](_optimization_results/pizza_02_saveScrollTop.png "Pulled scrollTop out of loop and saved to a variable")
  ![Optimization 3](_optimization_results/pizza_03_translateX.png "Tried translateX instead of changing the left property of the pizzas")
  ![Optimization 4](_optimization_results/pizza_04_translateZ.png "Added a null transform to get the pizzas onto their own composite layers")
  ![Optimization 5](_optimization_results/pizza_05_throttleScroll.png "Had seen advice against attaching page changes to scroll event, so gave throttling a try")
  ![Optimization 6](_optimization_results/pizza_06_reduce_pizzas.png "Reduced number of pizzas significantly")
  ![Optimization 7](_optimization_results/pizza_07_smallerPizza.png "Made small pizzas instead of scaling with CSS")
  - Pulling variables out of loops
  - Reducing number of pizzas
  - getElementsByClass instead of querySelectorAll
  - Saving scroll position as variable instead of in loop
  - Transform: translateX for pizza movement
  - Transform: translateZ(0) for composite layers
  - Throttling or debouncing scrolling
  - Smaller, unscaled pizza image with better compression


####Resources Used
[The Read Me provided in the original files](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)
[Discussion forum post](https://discussions.udacity.com/t/stuck-with-painting-and-composition-optimizations/19427/7)
[Office hours suggestions](https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Effective%20Optimizations%20for%2060%20FPS)
[MDN scroll event](https://developer.mozilla.org/en-US/docs/Web/Events/scroll)
[Transform article on CSS Tricks](https://css-tricks.com/almanac/properties/t/transform/)
[Null transform hack](http://addyosmani.com/blog/be-careful-when-using-null-transform-hacks-to-force-gpu-acceleration/)