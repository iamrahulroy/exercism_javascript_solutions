var Leap = function(year) {
  this.year = year;
};

Leap.prototype.isLeap = function(){
  if(this.year % 100 === 0 && this.year % 400 !== 0) {
    return false;
  } else if(this.year % 4 === 0 || this.year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = Leap;
