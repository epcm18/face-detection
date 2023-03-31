# Real Time Face Detection with AI

This project demonstrates how to set up real-time face detection using AI in a web application. By using the Face API JS library built on Tensor Flow, we are able to quickly and accurately detect faces and draw facial landmarks in real-time, even while streaming video from a webcam.

## Concepts You will learn:

- Streaming a webcam through HTML
- Using Face API to detect faces in real-time
- Drawing facial landmarks in real-time
- Determining emotion through facial expressions in real-time

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Open the project folder in a code editor of your choice.
3. Start a local development server by running `npm start` or `yarn start` in the terminal.
4. Open your web browser and navigate to your server. - You won't be able to run this on your local computer network. You should have a already setuped web-server to run this. You may follow the following procedure.

The error you are seeing is due to the Cross-Origin Resource Sharing (CORS) policy. The policy is designed to protect web browsers from malicious scripts that could attempt to access sensitive data.

In this case, you are trying to load local files using the file:// protocol which is not allowed by the CORS policy. To fix the issue, you need to serve the files through a web server.

One way to do that is to use a local web server. There are several ways to set up a local web server on your computer. Here are a few options:

Python: You can use the built-in http.server module to serve the files. Open a command prompt and navigate to the directory containing the files, then run the following command:

```python -m http.server```

This will start a web server on port 8000. You can access the files by navigating to http://localhost:8000 in your web browser.

Node.js: You can use the http-server module to serve the files. Install the module by running the following command:

```npm install http-server -g```

Then navigate to the directory containing the files and run the following command:

```http-server```

This will start a web server on port 8080. You can access the files by navigating to http://localhost:8080 in your web browser.

Once you have a web server running, update the URLs in your code to use the `http://localhost:<port>` format instead of `file://` format.

For example, if you are currently using the following URL:

```file:///C:/models/tiny_face_detector_model-weights_manifest.json```

Update it to:

```http://localhost:<port>/models/tiny_face_detector_model-weights_manifest.json```

Replace `<port>` with the port number of your web server (e.g. 8000 or 8080). Repeat the same process for all other URLs that are giving the CORS error.

## Dependencies

This project uses the following dependencies:

- face-api.js
- React
- react-webcam

## References

- [face-api.js](https://github.com/justadudewhohacks/face-api.js)
- [Face recognition in the browser with TensorFlow.js and face-api.js](https://itnext.io/face-api-js-javascript-api-for-face-recognition-in-the-browser-with-tensorflow-js-bcc2a6c4cf07)
