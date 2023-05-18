console.log("initializing")
PGPTConversation.onMessage((msg) => {
	console.log("Message received")
  if (msg.isGPT) {
    msg.contentChanged(null, () => {
      const ms = msg.container.getElementsByTagName("mgpt")
      console.log(ms)
      for (let m = 0; m < ms.length; m++) {
	let mus = ms[m].innerHTML
	ms[m].innerHTML = '<div class="t"></div>'
	      console.log(ms[m])
        MusicGPTLoadMusic(ms[m].getElementsByClassName("t")[0], mus)
      }
    })
  }
}, window.parent.document)
