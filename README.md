# ck5-mathtype

This repo shows a simple installation demo of MathType NODE packege for CKEditor 5.
It also explains some basic concepts of how npm packages and the different tools you need to run the demo work.

## **What are NODE packages and why they are useful? What's NPM?**

Node or Node.js is a runtime environment that can run JavaScript code. Before Node JavaScript was intended to be used only in the context of web browsers. But later on some dude saw it's potentential to also be used a server-side language. Similar to PHP, Java, Python, etc.

Remeber that for running such server-side apps you need an environment in which to run them. For example, for running a PHP-based server app you would use [XAMPP](https://www.apachefriends.org/) or a similar environment to respond to requests and excecute PHP code. In the same way you'd use Node to execute Javascript, but not in the browser, but in a server. [More on Node.js here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#introducing_node).

So, Node packages are reusable code libraries made by different people that **can be addeed to node projects**. To manage those packages and install them easily we use a tool called **NPM (node package manager).**. NPM is also a cli tool that let's you run commands to execute your node application (but we won't need those commands for this demo, only the package installation). [More on NPM here](https://docs.npmjs.com/about-npm).


## **We need to use Webpack to *bundle* the JS code from MathType and CK to use it in our demo.**

As mentioned Node packages are meant to be used within the context of a Node application or in a JS web framework (Vue, React, Angular, etc...). However, we can also use some tools to **bundle** JavaScript code and to use it for a simple [static webpage](https://www.geeksforgeeks.org/difference-between-static-and-dynamic-web-pages/) that uses HTML, CSS AND JS.

The tool used to bundle the NODE module of MathType and CKEditor (and all other) in this demo is **webpack** (the most widely used probably). **A great explanation of why to use a bundler and what is webpack** [here](https://webpack.js.org/concepts/why-webpack/).

## **Explanation and steps to create and run the demo.**

To run this demo we'll use the XAMPP development environment to serve the static files of our demo (simple webpage). We'll bundle CKEditor and MathType-CK5 npm packages and we will instantiate and configure CKEditor (index.js) to use it on our app (index.html).

1. Make sure you installed node.js, npm and xampp in your computer.
2. Create a folder with the name of your demo inside **htdocs xampp folder**. Open this location using your code editor (VS code for example).
2. Create a ***package.json*** file to manage the installation of MT and CK. Use the command: `npm init` (press enter to every question on the prompt).
3. Create the files ***index.html, index.js and webpack.config.js*** (all at root level).
4. Install webpack: https://www.npmjs.com/package/webpack#install.
5. Install CK5 (check the webpack section and how you'should configure your webpack.config.js file, you can also copy the file from this repo): https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/alternative-setups/integrating-from-source-webpack.html.
6. Install Mathtype npm package for CKeditor 5: https://www.npmjs.com/package/@wiris/mathtype-ckeditor5
7. Copy the contents of the index.js file of this repo into the index.js file you created.
8. Use the command `npx webpack` to bundle all the files and npm packages.
9. Copy the contents of index.html from this repo into the file index.html you created.
10. START your Apache web server in XAMPP and go to the file location in your browser.





