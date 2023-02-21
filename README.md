# Final Project

## Introduction

**Project** is a Single Page Application.

## Requirements:

- Design and implement a web application
- Firebase for back end.

Examples:

- Blog system
- E-commerce site
- Online gaming site
- Social network

1. Public Part (Guests)

There is a public part of the application, like **start page** where guest users (not logged in) can access.

- Start page
- Catalog or public data (blog posts, photo-sharing system etc.)
- Log in
- Register

2. Private part (Users)

- Personal area available after login.
- User profile management functionality or posts in a blog post.

## General requirements:

- Three different **dynamic pages**
- Catalog page - list of created record.
- Details - information about a specific record.
- One Collection different from User collection with all CRUD operations.
  - Logged in users - create **records** and requests to the REST API,
    interaction with the records (via Likes, Dislikes, Comments)
  - Logged in (author) - Edit or Delete their own records.
  - Guests - basic website information (catalog, details)
- Communicate with a remote service (via REST, sockets, GraphQL)
- Implement authentication.
- Implement client-side routing.
- Demonstrate programming concepts, specific to React: stateless and state full components, bound forms, synthetic events, Component styling, etc.
- Use a source control system like github

## Other requirements:

- Apply **error handling** and **data validation** to avoid crashes when invalid data is entered.
- Application should be divided in components with **separate css files**.
- Brief **documentation** on the project and project architecture.
- Demonstrate use of programming concepts - React Hooks, Context API.

## Bonuses:

- Use a **State Management** solition (React Redux) instead of Context API
- Write **Unit tests** for your code.
- Good UI and UX.
- Use a file storage cloud API, e.g. dropbox, Google drive or other for storing the files.
- Connect to an external API, like Google Maps, AccuWeather, etc.
- Deploy your application in a cloud (Heroku, Firebase)
- **Bonuses depend on the complexity of the implementation**
- Additional functionality or libraries outside the general requirements, with motivated usage.
