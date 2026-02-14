function startVoiceInput() {

    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        let speech = event.results[0][0].transcript;
        alert("You said: " + speech);
    };

    recognition.start();
}

function speakText(text) {

    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}
