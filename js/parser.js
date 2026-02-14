function parseDocument() {

    let file = document.getElementById("docUpload").files[0];

    if (!file) {
        alert("Please upload a document");
        return;
    }

    alert("Document uploaded: " + file.name);

    // Backend OCR or AI parser will connect here later
}
