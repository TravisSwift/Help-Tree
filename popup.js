// Toggle slider visibility
document.querySelector('.trigger').addEventListener('click', () => {
  console.log('Trigger clicked');
  const slider = document.getElementById('helpSlider');
  slider.classList.toggle('open');
});

// Toggle category content
function toggleCategory(element) {
  const content = element.nextElementSibling;
  content.classList.toggle('open');
}

// Toggle subcategory content
function toggleSubcategory(element) {
  const content = element.nextElementSibling;
  content.classList.toggle('open');
}

// Handle macro selection
function selectMacro(element) {
  // Remove selected class from all macros
  document.querySelectorAll('p').forEach(p => p.classList.remove('selected'));
  // Add selected class to clicked macro
  element.classList.add('selected');
  // Optionally, copy macro text to clipboard or perform another action
  const macroText = element.textContent;
  navigator.clipboard.writeText(macroText).then(() => {
    console.log('Macro copied to clipboard:', macroText);
  });
}