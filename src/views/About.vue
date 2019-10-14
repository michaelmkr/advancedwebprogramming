<template>
  <div class="about">
    <h1>This is not the best About page ever, no.</h1>
    <h1>This is just a <span style="font-weight: bold">TRIBUTE</span></h1>
    <br><br><br><br><br>
    <h3>It will show some information about our team later on!</h3>
    <h3>Our team name is:</h3>
    <h1 class="blink">WASTED POTENTIAL</h1>
    <br><br><br><br><br>
    <h3>Find out more here:</h3>
    <a href="https://git.nwt.fhstp.ac.at/wasted-potential/awp/" target="_blank">https://git.nwt.fhstp.ac.at/wasted-potential/awp/</a>
    <iframe src="https://www.youtube.com/embed/_lK4cX5xGiQ?autoplay=1"></iframe>
  </div>
</template>

<style>
  .blink {
    animation: blink 1s linear infinite;
    font-weight: bold;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: .5;
      color: blue;
    }
    100% {
      opacity: 1;
      color: red;
    }
  }
</style>
