window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const colors = [
        "#8dcf4e",
        "#79d5d8",
        "#d87981",
        "#b579d8",
        "#c7d879",
        "#8282d4"
    ];

    //Lets get the sound here
    pads.forEach((pad, index) => {
            pad.addEventListener("click", function(){
                sounds[index].currentTime = 0;
                sounds[index].play();
                
                createBubbles(index);
            });
       });

       //Create function that makes bubbles
       const createBubbles = (index) => {
           const bubble = document.createElement("div");
           visual.appendChild(bubble);
           bubble.style.backgroundColor = colors[index];
           bubble.style.animation = "jump is ease";
       }
    });

