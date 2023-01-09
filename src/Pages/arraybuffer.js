
 function GetData() {
    const audioCtx = new AudioContext();
  
    return fetch('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.arrayBuffer();
      })
      .then((buffer) => audioCtx.decodeAudioData(buffer))
      .then((decodedData) => {
        const source = new AudioBufferSourceNode();
        source.buffer = decodedData;
        source.connect(audioCtx.destination);
        return source;
      });
  };
  
  // wire up buttons to stop and play audio
  
//   play.onclick = () => {
//     GetData().then((source) => {
//       source.start(0);
//       play.setAttribute('disabled', 'disabled');
//     });
//   }
  