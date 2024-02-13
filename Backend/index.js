import express from 'express';
const app = express();
app.use(express.static('dist'));
// app.get('/', (request, response) => {
//     response.send('Server is ready');
//});
app.get('/api/student', (request, response) => {
    const student = [{
        id: 1,
        title: 'About This Page 1',
        content: "his is a JavaScript code written in Node.js using the Express.js framework. It sets up a simple server that listens on port 3000 (or the value of the PORT environment variable) and serves static files from the dist directory.The code imports the Express.js module and creates an instance of the Express.js application using express(). It then sets up a static middleware using express.static('dist') to serve the static files from the dist directory."
    },
    {
        id: 2,

        title: 'About This Page 2',
        content: "If the server receives a GET request to the root endpoint (/), it will respond with the string 'Server is ready'. However, this route handler is currently commented out."
    },
    {
        id: 3,

        title: 'About This Page 3',
        content: "Finally, the code starts the server using app.listen(port, ...), which listens on the specified port and logs a message to the console when the server is ready.Overall,this code sets up a simple server that serves static files and provides a JSON API endpoint for retrieving student data."
    },
    {
        id: 4,

        title: 'About This Page 4',
        content: "This is an HTML document that sets up a basic web page using the React JavaScript library and Vite, a build tool and development server.The document starts with the <!doctype html> declaration, which specifies the document type as HTML5. The lang attribute in the html tag is set to 'en', indicating that the document is written in English.The head section of the document includes several meta tags, such as the character encoding (UTF-8), viewport settings (width=device-width, initial-scale=1.0), and a title for the page (Vite + React). It also includes a link to an SVG icon (/vite.svg) and two external resources: a JavaScript file (/assets/index-P5zqqFr8.js) and a CSS file (/assets/index-4sK4E3Wk.css). The type='module' attribute in the script tag indicates that the JavaScript file is a module, which allows for more modular and efficient code organization.The body section of the document includes a single div element with an id attribute of ;root' . This is where the React application will be rendered.Overall, this HTML document sets up a basic web page that includes the necessary resources for a React application built with Vite."
    },
    {
        id: 5,
         
        title: 'About This Page 5',
        content:"The code you provided is a React application that fetches student data from an API and displays it on the page. Here's a breakdown of the code.We create a state variable called student using the useState hook. This variable will hold the student data fetched from the API:,We use the useEffect hook to fetch the student data from the API when the component mounts. Inside the useEffect function, we use the axios.get method to make a GET request to the ('/api/student') endpoint. If the request is successful, we update the student state variable with the fetched data:In the JSX part of the component, we display the total number of students fetched from the API:,We use the map method on the student array to iterate over each student and create a new <div> element containing the student's id, title, and content. We also provide a unique key prop to each <div> element to help React optimize the rendering process:,Finally, we export the App component as the default export:,This is a basic example of how to fetch data from an API and display it in a React application using the useEffect and useState hooks."},
    {
        id: 6,
         
        title: 'About This Page 6',
        content: "These are lines of code that set up and render a React application. Here's a breakdown of each line:"
    },
    {
        id: 7,
         
        title: 'About This Page 7',
        content:"This is an HTML document that sets up a basic web page structure and includes the necessary elements to run a React application built with Vite. Here's a breakdown of each part of the code:"
    }
    ]; response.send(student);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});