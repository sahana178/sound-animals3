function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1TnKmfoo6/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
    console.error(error);
    }
    else{
        console.log(results);

    random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;
        document.getElementById("sound").innerHTML = "I can hear : " + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy : " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("sound").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        alien1 = document.getElementById("alien_1");
        alien2 = document.getElementById("alien_2");
        alien3 = document.getElementById("alien_3");
        alien4 = document.getElementById("alien_4");

        if(results[0].label == "Bell"){
            alien1.src = "aliens-01.gif";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.png";
        }
        else if(results[0].label == "Clap"){
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.gif";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.png";
        }
        else if(results[0].label == "Snap"){
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.gif";
            alien4.src = "aliens-04.png";
        }
        else {
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.gif";
        }

          }
    
}
