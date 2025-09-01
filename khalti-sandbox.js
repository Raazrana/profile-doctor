// LIVE KHATI CONFIGURATION FOR NEPAL
document.write(`
  <script src="https://khalti.com/static/js/khalti-checkout.iframe.js"><\/script>
  <script>
    var config = {
      "publicKey": "live_public_key_your_actual_key_here",
      "productIdentity": "nepalifreelancer_profile_doctor",
      "productName": "Profile Doctor Premium",
      "productUrl": "https://raazrana.github.io/profile-doctor/",
      "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
      "eventHandler": {
        onSuccess: function (payload) {
          alert("धन्यवाद! भुक्तानी सफल भयो। तपाईंको प्रीमियम सुविधा सक्रिय छ।");
          console.log("Payment Success:", payload);
        },
        onError: function (error) {
          alert("भुक्तानी असफल भयो: " + error.message);
        },
        onClose: function () {
          console.log("Widget closed");
        }
      }
    };
    var checkout = new KhaltiCheckout(config);
  <\/script>
`);
