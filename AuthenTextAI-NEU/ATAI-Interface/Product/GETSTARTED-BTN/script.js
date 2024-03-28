
function insertText(text) {
    document.getElementById('text-input').value = text;
  }

document.addEventListener("DOMContentLoaded", function() {
    const agreeCheckbox = document.getElementById("agree");
    const submitButton = document.getElementById("submitButton");
    const textInput = document.querySelector('.text-input');
    const charCount = document.querySelector('.char-count');
  
    textInput.addEventListener('input', function() {
      charCount.textContent = `${this.value.length} / 5000`;
    });
  
    
    agreeCheckbox.addEventListener("change", function() {
      submitButton.disabled = !this.checked;
    });
  
    const termsForm = document.getElementById("termsForm");
    termsForm.addEventListener("submit", function(event) {
      if (!agreeCheckbox.checked) {
        event.preventDefault();
        alert("Please agree to the terms to proceed.");
      }
    });
  
    // Functionality for "Detect Text" button
    const detectTextButton = document.getElementById("detectTextButton");
    detectTextButton.addEventListener("click", detectText);
  
    // Functionality for "Upload File" button
    const uploadFileButton = document.getElementById("uploadFileButton");
    uploadFileButton.addEventListener("click", uploadFile);
  
    // Functionality for "Batch Files Upload" button
    const batchUploadButton = document.getElementById("batchUploadButton");
    batchUploadButton.addEventListener("click", batchUpload);
  
    function detectText() {
      // Add your functionality for "Detect Text" button here
      console.log("Detect Text button clicked");
    }
  
    function uploadFile() {
      // Add your functionality for "Upload File" button here
      console.log("Upload File button clicked");
    }
  
    function batchUpload() {
      // Add your functionality for "Batch Files Upload" button here
      console.log("Batch Files Upload button clicked");
    }

    
  
  });
  