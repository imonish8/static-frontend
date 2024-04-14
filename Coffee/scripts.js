function generateQR() {
    var amount = document.getElementById("amount").value;
    if (!amount || amount <= 0) {
        document.getElementById("status").innerText = "Please enter a valid amount";
        return;
    }

    // Clear any previous QR code
    document.getElementById("qr-code").innerHTML = "";

    // Generate QR code
    var qr = new QRCode(document.getElementById("qr-code"), {
        text: "Your payment QR code data here", // Replace with your QR code data
        width: 200,
        height: 200,
    });

    document.getElementById("status").innerText = "Scan the QR code to make payment";
}
