export class CounterService {
  countSetToInactive = 0;
  countSetToActive = 0;

  onCountSetToInactive() {
    this.countSetToInactive++;
    console.log('Quantity of Set To Inactive: ' + this.countSetToInactive);
  }

  onCountSetToActive() {
    this.countSetToActive++;
    console.log('Quantity of Set To Active: ' + this.countSetToActive);
  }
}
