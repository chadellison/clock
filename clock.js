class Clock {
  constructor(hour, min = 0) {
    this.hour = hour;
    this.min = min;
    this.setClock();
  }

  setClock() {
    this.calculateMinute();
    this.calculateHour();
  }

  formatValue(time) {
    if(time < 10) {
      return "0" + time;
    } else {
      return time.toString()
    }
  }

  calculateHour() {
    if(this.hour < 0) {
      while(this.hour < 0) {
        this.hour += 24;
      }
    } else {
      this.hour %= 24;
    }
  }

  calculateMinute() {
    if(this.min < 0) {
      while(this.min < 0) {
        this.min += 60;
        this.hour -= 1;
      }
    } else {
      while(this.min >= 60) {
        this.min -= 60;
        this.hour += 1;
      }
    }
  }

  plus(min) {
    this.min += min;
    this.setClock();
    return this;
  }

  minus(min) {
    this.min -= min;
    this.setClock();
    return this;
  }

  equals(clock) {
    return this.hour === clock.hour && this.min === clock.min;
  }

  toString() {
    return this.formatValue(this.hour) + ":" + this.formatValue(this.min);
  }
}

function at(hour, min = 0) {
  return new Clock(hour, min);
}

module.exports.at = at;
