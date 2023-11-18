filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//
//
///
//
///
//
//
//
//
//
//add
// Import the Firebase SDK and initialize the app
const firebase = require("firebase/app");
require("firebase/storage");

// Replace with your own Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-...",
  authDomain: "my-project.firebaseapp.com",
  projectId: "my-project",
  storageBucket: "my-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg",
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = firebase.storage();

// Get a reference to the PDF file on the local file system
const pdfFile = "./my-document.pdf";

// Create a storage reference from the storage service
const pdfRef = storage.ref("pdfs/my-document.pdf");

// Upload the PDF file to Firebase storage
pdfRef
  .put(pdfFile)
  .then((snapshot) => {
    // The file is successfully uploaded
    console.log("PDF file uploaded:", snapshot);
  })
  .catch((error) => {
    // There was an error uploading the file
    console.error("Error uploading PDF file:", error);
  });
//
///
///
///
////
/////
////
//retrive
// Import the Firebase SDK and initialize the app
const firebase = require("firebase/app");
require("firebase/storage");

// Replace with your own Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-...",
  authDomain: "my-project.firebaseapp.com",
  projectId: "my-project",
  storageBucket: "my-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg",
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = firebase.storage();

// Get a reference to the div container where you want to append the PDF files
const container = document.querySelector(".container");

// Get a reference to the PDFs folder in the storage
const pdfsRef = storage.ref("pdfs");

// List all the PDF files in the folder
pdfsRef
  .listAll()
  .then((res) => {
    // Loop through each file
    res.items.forEach((fileRef) => {
      // Get the file name
      const fileName = fileRef.name;
      // Split the file name by "-"
      const parts = fileName.split("-");
      // Get the type, subject and std from the file name
      const type = parts[0];
      const subject = parts[1];
      const std = parts[2].replace(".pdf", "");
      // Get the download URL of the file
      fileRef
        .getDownloadURL()
        .then((url) => {
          // Create a card element for the file
          const card = document.createElement("div");
          card.className = "card test";
          // Create a text element for the file details
          const text = document.createElement("div");
          text.className = "text";
          text.innerHTML = `
        <span>Test paper</span><br>
        <span>Type : ${type}</span><br>
        <span>Std:${std}<sup>th</sup></span>
        <span>Subject : ${subject}</span>
      `;
          // Create a button element for the download link
          const button = document.createElement("div");
          button.className = "button";
          button.innerHTML = `
        <button><a href="${url}" class="download-button" download>
          <i class="fas fa-download"></i> Download
        </a></button>
      `;
          // Append the text and button elements to the card element
          card.appendChild(text);
          card.appendChild(button);
          // Append the card element to the container element
          container.appendChild(card);
        })
        .catch((error) => {
          // There was an error getting the download URL of the file
          console.error("Error getting download URL:", error);
        });
    });
  })
  .catch((error) => {
    // There was an error listing the files in the folder
    console.error("Error listing files:", error);
  });
