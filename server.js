const video = document.getElementById("video");

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
]).then(startVideo);

function startVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: {} })
    .then((stream) => (video.srcObject = stream))
    .catch((err) => console.error(err));
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);

  // Dynamically set the display size based on the actual video size
  const displaySize = {
    width: video.offsetWidth,
    height: video.offsetHeight,
  };
  faceapi.matchDimensions(canvas, displaySize);

  // Handle resizing when the window size changes (for responsiveness)
  window.addEventListener("resize", () => {
    const newDisplaySize = {
      width: video.offsetWidth,
      height: video.offsetHeight,
    };
    faceapi.matchDimensions(canvas, newDisplaySize);
  });

  setInterval(async () => {
    // Detect faces, landmarks, and expressions
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    // Resize detections to match the display size
    const resizedDetections = faceapi.resizeResults(detections, {
      width: video.offsetWidth,
      height: video.offsetHeight,
    });

    // Clear the previous drawings from the canvas
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

    // Draw the new detections on the canvas
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  }, 100);
});
