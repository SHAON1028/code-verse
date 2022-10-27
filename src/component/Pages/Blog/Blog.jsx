import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (

       <div>
        <h1 className='text-center text-4xl font-bold m-10'>Welcome to Blogs</h1>
             <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>
          What is cors?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 dark:text-gray-400">
            Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
            </p>

          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          Why are you using firebase? What other options do you have to implement authentication?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2  dark:text-gray-400">
            Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.Thats why i am using firebase authentication.
            <br/>
           <strong> Firebase alternative</strong> authentication systems are:Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
            </p>

          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          How does the private route work?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2  dark:text-gray-400">
            Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
            </p>


          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          What is Node? How does Node work?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2  dark:text-gray-400">
            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
            <br/>
            <strong>Working of Node.js:</strong> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
            </p>


          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
       </div>
       
    );
};

export default Blog;