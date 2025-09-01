// Simple analysis function
function analyzeProfile() {
  const text = document.getElementById('profile-input').value;
  const results = document.getElementById('results');
  const fixesList = document.getElementById('fixes-list');
  
  if (!text.trim()) {
    alert("Please paste your Upwork profile first!");
    return;
  }

  // Show results section
  results.style.display = "block";

  // Clear previous results
  fixesList.innerHTML = "";

  // Nepal-specific checks
  let hasFixes = false;

  // Check 1: Address format
  if (text.includes("Kathmandu") && !text.includes("GMT+5:45")) {
    const item = document.createElement('div');
    item.className = 'fix-item critical';
    item.innerHTML = '❌ <b>Fix Address Format:</b> Replace "Kathmandu" with "Kathmandu, Nepal (GMT+5:45)"';
    fixesList.appendChild(item);
    hasFixes = true;
  }

  // Check 2: PayPal mention
  if (text.toLowerCase().includes("paypal")) {
    const item = document.createElement('div');
    item.className = 'fix-item high';
    item.innerHTML = '❌ <b>Remove PayPal:</b> Upwork flags profiles mentioning PayPal (use "Wise" or "Bank Transfer")';
    fixesList.appendChild(item);
    hasFixes = true;
  }

  // Check 3: No contact info warning
  if (!text.match(/@|\d{10}|viber|whatsapp/i)) {
    const item = document.createElement('div');
    item.className = 'fix-item';
    item.innerHTML = '⚠️ <b>Add Contact Info:</b> Include email or phone for client trust';
    fixesList.appendChild(item);
    hasFixes = true;
  }

  // If no issues found
  if (!hasFixes) {
    const item = document.createElement('div');
    item.className = 'fix-item success';
    item.innerHTML = '✅ <b>No critical issues found!</b> Your profile looks good to go.';
    fixesList.appendChild(item);
  }
}

// Khalti payment placeholder
function openKhalti() {
  alert("Thank you for your interest! Payment integration is being set up. Contact: yourphone@viber.com for premium access.");
}

// Language toggle (basic)
function toggleLang() {
  alert("Nepali language version coming soon! Stay tuned.");
}
