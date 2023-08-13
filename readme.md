# URL Shortener using Node.js and MongoDB

A simple URL shortener application built using Node.js and MongoDB.

## Features

- Shorten long URLs to easily share them.
- Redirect shortened URLs to their original destinations.
- Create custom short URLs.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Express
- Shortid

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/url-shortener.git

```

2. Navigate to the project folder:

```

cd url-shortener

```

3. Install dependencies:

```
npm install
```

4. Configure MongoDB:

Open index.js and update the MongoDB connection string.

5. Usage
   Start the server:

```

node index.js

```

Access the application in your browser or through tools like Postman.

## API Documentation (API_DOCS.md)

### Base URL

The base URL for the URL shortener API is:

http://localhost:3000

### Endpoints

Shorten a URL

- URL: /shorten
- Method: POST
- Request Body

```
{
"url": "original_url_here"
}
```

- Response:

```
{
"originalUrl": "https://github.com/OAI/OpenAPI-Specification/discussions/3113",
"shortUrl": "jQnCBJAIh",
"_id": "64d8d65d8f84b318e3e35ebd",
"__v": 0
}

```
