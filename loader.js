function MusicGptLoadMusic(el) {
var myContext = new AudioContext();
var synth = new ABCJS.synth.CreateSynth();
var visualObj = ABCJS.renderAbc(el, "${ms[m].innerHTML}");
synth.init({
  audioContext: myContext,
  visualObj: visualObj[0],
  millisecondsPerMeasure: 500,
  options: {
    soundFontUrl: "https://paulrosen.github.io/midi-js-soundfonts/abcjs/",
    pan: [ -0.3, 0.3 ] 
  }
}).then(function (results) {
  synth.prime().then((res) => {
    synth.start()
  })
}).catch(function (reason) {
  console.log(reason)
});
}
