var divElement = document.querySelector('div.exam-content__question');

// Check if the element exists
if (divElement) {
    // Create a temporary textarea element
    var textarea = document.createElement('textarea');

    // Set its value to the plaintext content of the div
    textarea.value = divElement.innerText;

    // Append the textarea to the document body
    document.body.appendChild(textarea);

    // Select the content of the textarea
    textarea.select();

    // Copy the selected content to the clipboard
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Optionally, provide feedback to the user
    console.log('You have 1 question and 4 answers. Please give answer by abcd. first line is qustion. ans others line is answers. please select correct answer.. ', textarea.value);
}
