const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the number of seconds to count down: ", (input) => {
  let timeLeft = parseInt(input);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(`Countdown starting from ${timeLeft} seconds...`);
  

  const intervalId = setInterval(() => {
    console.log(`Time remaining: ${timeLeft} seconds`);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      process.exit(); 
    }
  }, 1000);


  function checkStopKey() {
    setTimeout(() => {
      process.stdin.on("data", (key) => {
        if (key.toString().trim().toLowerCase() === "s") {
          clearInterval(intervalId);
          console.log("Countdown stopped by user!");
          process.exit();
        }
      });
    }, 100); 
  }

  checkStopKey();

  rl.close();
});
