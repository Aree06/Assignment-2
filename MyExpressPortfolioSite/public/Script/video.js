var myVideo=document.getElementById("video"); // Get the video element by its ID
    function playPause() // Function to toggle play and pause
    {
        if (myVideo.paused) myVideo.play(); // If the video is paused, play it
        else myVideo.pause(); // Otherwise, pause it
    }