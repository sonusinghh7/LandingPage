

const names = ["SONU", "BHUMI", "SACHIN", "AMAN"]; 
const typingSpeed = 200; 
const backspaceSpeed = 350; 

const namesElement = document.getElementById("names");

let currentNameIndex = 0;
let currentName = names[currentNameIndex];
let i = 0;
let isDeleting = false;

function typeText() {
  const currentText = currentName.substring(0, i);

  namesElement.textContent = currentText;

  if (!isDeleting && i <= currentName.length) {
    i++;
    setTimeout(typeText, typingSpeed);
  } else if (isDeleting && i >= 0) {
    i--;
    setTimeout(typeText, backspaceSpeed);
  }

  if (i === currentName.length) {
    isDeleting = true;
  }

  if (i === 0 && isDeleting) {
    isDeleting = false;
    currentNameIndex = (currentNameIndex + 1) % names.length;
    currentName = names[currentNameIndex];
  }
}

typeText();
