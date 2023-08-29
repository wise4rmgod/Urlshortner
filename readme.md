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

Access the API documentation by opening your web browser and navigating to `http://localhost:3000/api-docs/`. Here, you can interact with the API using Swagger UI.

To shorten a URL, make a POST request to `/shorten` with a JSON body containing the url you want to shorten. You will receive a JSON response with the `originalUrl` and the `shortUrl` that you can use for redirection.

To access the original URL using the short URL, copy the shortUrl value from the response of the `/shorten` endpoint and append it to `http://localhost:3000/`. This will redirect you to the original URL.

### Base URL

The base URL for the URL shortener API is:

http://localhost:3000

### Example

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

## Access the original URL:

Open your web browser and navigate to http://localhost:3000/jQnCBJAIh.
