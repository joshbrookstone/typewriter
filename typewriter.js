const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(`${sentence[i]}`);
      if (i === sentence.length - 1) {
        console.log("");
      }
    }, 50 * (i + 1));
  }

 
};

typewriter(sentence);
