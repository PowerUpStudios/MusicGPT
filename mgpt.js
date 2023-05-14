console.log("initializing")
PGPTConversation.onMessage((msg) => {
	console.log("Message received")
  if (msg.isGPT) {
    msg.contentChanged(null, () => {
      const ms = msg.getElementsByTagName("mgpt")
      console.log(ms)
      for (let m = 0; m < ms.length; m++) {
        ms[m].outerHTML = `<div id="t"></div>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/abcjs/6.2.2/abcjs-basic-min.min.js" integrity="sha512-REXLcx385NL3ZWosam5LzLJoA0AkfeVdW94IQURSM/Gl6EyrS0hS3LtqR094d00lsicEVAprWA5SUTD5oljapg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
		<script>
			var myContext = new AudioContext();
			var synth = new ABCJS.synth.CreateSynth();
			var visualObj = ABCJS.renderAbc(document.getElementById("t"), "${ms[m].innerHTML}");
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
		</script>`
      }
    })
  }
}, window.parent.document)
