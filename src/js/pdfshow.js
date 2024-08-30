document.getElementById("openPDFBtn").addEventListener("click", function () {
  var pdfIframe = document.getElementById("pdfIframe");
  var pdfContainer = document.getElementById("pdfContainer");

  // Set the PDF file URL
  var pdfUrl = document.getElementById("cause_pdf_file").value;

  // Set the iframe src to the PDF file URL
  pdfIframe.src = pdfUrl;

  // Show the iframe container
  pdfContainer.classList.remove("hidden");
});

// Zoom functionality
var zoomLevel = 1;
const zoomStep = 0.1;

document.getElementById("zoomInBtn").addEventListener("click", function () {
  zoomLevel += zoomStep;
  setZoom();
});

document.getElementById("zoomOutBtn").addEventListener("click", function () {
  zoomLevel = Math.max(0.5, zoomLevel - zoomStep); // Prevent zooming out too much
  setZoom();
});

function setZoom() {
  var pdfIframe = document.getElementById("pdfIframe");
  pdfIframe.style.transform = `scale(${zoomLevel})`;
  pdfIframe.style.transformOrigin = "0 0"; // Zoom from the top-left corner
}
