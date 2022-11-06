function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
}

classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KQirb6Nea/model.json',modelReady)

function moddelReady() {
    classifier.classify(results)
}

cat = 0;
dog = 0;

if (error) {
    console.error(error);
} {
    console.log(results);

    random_number_r = Math.floor(Math.random * 255) + 1
    random_number_g = Math.floor(Math.random * 255) + 1
    random_number_b = Math.floor(Math.random * 255) + 1


    document.getElementById("animal_name").innerHTML ="It was a" + results[0].label;
    document.getElementById("animal_times").innerHTML = "the computer is " + (results[0].confidence * 100).toFixed(2) + "% confident";

    document.getElementById("animal_name").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    document.getElementById("animal_times").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

    img = document.getElementById("image");

    if (results[0].label == "cat") {
        img.src = "giphy.gif"
    } else if (results[0].label == "dog") {
        img.src = "200w.gif"
    } else {
        img,src = "speaker.gif"
    };
}