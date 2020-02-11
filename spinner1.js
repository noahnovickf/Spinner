const spinner1 = `|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|`;
const spinning = spinner => {
  let time = 250;
  spinner += "\n";
  for (let char of spinner) {
    setTimeout(() => {
      process.stdout.write("\r" + char);
    }, time);
    time += 250;
  }
};

spinning(spinner1);
