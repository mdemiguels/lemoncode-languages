console.log("************** DELIVERABLE 05 *********************");

class SlothMachine {
  private slothCount: number;
  private roulette1: boolean;
  private roulette2: boolean;
  private roulette3: boolean;

  constructor() {
    this.slothCount = 0;
    this.roulette1 = false;
    this.roulette2 = false;
    this.roulette3 = false;
  }

  public play(): void {
    this.slothCount++;
    this.roulette1 = Math.random() < 0.5;
    this.roulette2 = Math.random() < 0.5;
    this.roulette3 = Math.random() < 0.5;

    console.log(`Total sloths collected: ${this.slothCount}`);

    console.log(`Roulette 1: ${this.roulette1 ? "Sloth" : "No Sloth"}`);
    console.log(`Roulette 2: ${this.roulette2 ? "Sloth" : "No Sloth"}`);
    console.log(`Roulette 3: ${this.roulette3 ? "Sloth" : "No Sloth"}`);

    if (this.roulette1 && this.roulette2 && this.roulette3) {
      console.log(`Congratulations! You won ${this.slothCount} coins!`);
    } else {
      console.log("Good luck next time!");
    }
  }
}

const slothMachine = new SlothMachine();
slothMachine.play();
slothMachine.play();
slothMachine.play();
slothMachine.play();
slothMachine.play();
