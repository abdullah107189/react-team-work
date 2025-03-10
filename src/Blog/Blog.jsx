import React from "react";

const Blog = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100  text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Welcome to My Blog
      </h1>
      <p className="text-lg text-center mb-6">
        This is a blog page where you can find various articles and posts.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Latest Posts
        </h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li className="mb-2">Post 1: Introduction to React</li>
          <li className="mb-2">Post 2: Understanding JavaScript Closures</li>
          <li className="mb-2">Post 3: A Guide to Modern CSS</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Categories
        </h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li className="mb-2">React</li>
          <li className="mb-2">JavaScript</li>
          <li className="mb-2">CSS</li>
          <li className="mb-2">Web Development</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Me</h2>
        <p className="text-gray-600">
          Hi, I'm a web developer passionate about creating interactive and
          dynamic web applications. Follow my blog for more updates!
        </p>
      </div>
    </div>
  );
};

export default Blog;
