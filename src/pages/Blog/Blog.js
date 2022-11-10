import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

const Blog = () => {
  useTitle("blog")
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg"
            alt=""
            className=" object-center w-full lg:h-full rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              What's the difference between SQL & NOSQL?
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <p className=" mx-auto mb-2 text-gray-700">
              The five critical differences between SQL vs NoSQL are:
              <li>
                SQL databases are relational, NoSQL databases are
                non-relational.
              </li>
              <li>
                SQL databases use structured query language and have a
                predefined schema. NoSQL databases have dynamic schemas for
                unstructured data.
              </li>
              <li>
                SQL databases are vertically scalable, while NoSQL databases are
                horizontally scalable.
              </li>
              <li>
                SQL databases are table-based, while NoSQL databases are
                document, key-value, graph, or wide-column stores.
              </li>
              <li>
                SQL databases are better for multi-row transactions, while NoSQL
                is better for unstructured data like documents or JSON.
              </li>
            </p>
          </div>
        </Link>
      </div>
      <div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://blog.miniorange.com/wp-content/uploads/sites/19/2021/12/jwt-workflow.webp"
            alt=""
            className=" object-center w-full lg:h-full rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              What is JWT, & how does it work?
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <p className=" mx-auto mb-2 text-gray-700">
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object It is compact,
              readable and digitally signed using a private key/ or a public key
              pair by the Identity Provider(IdP). So the integrity and
              authenticity of the token can be verified by other parties
              involved. The purpose of using JWT is not to hide data but to
              ensure the authenticity of the data. JWT is signed and encoded,
              not encrypted. JWT is a token based stateless authentication
              mechanism. Since it is a client-side based stateless session,
              server doesn't have to completely rely on a datastore(database) to
              save session information.
              <p>
                Basically the identity provider(IdP) generates a JWT certifying
                user identity and Resource server decodes and verifies the
                authenticity of the token using secret salt / public key.
              </p>
              <li>
                User sign-in using username and password or google/facebook.
              </li>
              <li>
                Authentication server verifies the credentials and issues a jwt
                signed using either a secret salt or a private key.
              </li>
              <li>
                User's Client uses the JWT to access protected resources by
                passing the JWT in HTTP Authorization header.
              </li>
              <li>
                Resource server then verifies the authenticity of the token
                using the secret salt/ public key.
              </li>
            </p>
          </div>
        </Link>
      </div>
      <div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-4-1024x576.jpg"
            alt=""
            className=" object-center w-full lg:h-full rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              What is the difference between javascript and NodeJS?
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <p className=" mx-auto mb-2 text-gray-700">
              The difference between node js and javascript are:
              <li>
                Javascript is a programming language that is used for writing
                scripts on the website. NodeJS is a Javascript runtime
                environment.
              </li>
              <li>
                Javascript can only be run in the browsers. Nodejs does not have
                capability to add HTML tags.
              </li>
              <li>
                Javascript can run in any browser engine as like JS core in
                safari and Spidermonkey in Firefox. V8 is the Javascript engine
                inside of node.js that parses and runs Javascript.{" "}
              </li>
              <li>
                {" "}
                Javascript is used in frontend development. Nodejs is used in
                server-side development.
              </li>
              <li>
                Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                Some of the Nodejs modules are Lodash, express etc. These
                modules are to be imported from npm.{" "}
              </li>
              <li>
                It is the upgraded version of ECMA script that uses Chrome’s V8
                engine written in C++. Nodejs is written in C, C++ and
                Javascript.
              </li>
            </p>
          </div>
        </Link>
      </div>
      <div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://static.wixstatic.com/media/1af9b8_29fb337cd2b3490996cb3be50a8892a9~mv2.jpg/v1/fit/w_730%2Ch_524%2Cal_c%2Cq_80/file.jpg"
            alt=""
            className=" object-center w-full lg:h-full rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <p className=" mx-auto mb-2 text-gray-700">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them
              <p>
                We know NodeJS application is single-threaded. Say, if
                processing involves request A that takes 10 seconds, it does not
                mean that a request which comes after this request needs to wait
                10 seconds to start processing because NodeJS event loops are
                only single-threaded. The entire NodeJS architecture is not
                single-threaded.
              </p>
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
