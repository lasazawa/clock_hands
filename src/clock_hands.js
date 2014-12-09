function hourHandAngle(h,m) {
  return (h + (m/60)) * 30;
}

function minuteHandAngle(m) {
  return (m/60)*360;
}

function angleBetweenHands(time) {
  var arr = time.split(":");
  hourHand = (arr[0] * 30) + ((arr[1]/60)*30);
  minuteHand = (arr[1]/60) * 360;
  console.log("hourHand: " + hourHand + "   minuteHand: " + minuteHand);
  if (Math.abs(hourHand - minuteHand) === 360) {
    return 0;
  }
  if (Math.abs(hourHand - minuteHand) > 180)  {
    return 360 - (Math.abs(hourHand - minuteHand));
  }
  else {
    return Math.abs(hourHand - minuteHand);
  }
}
