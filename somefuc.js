export default function box(cl, v = document.body, i = "div") {
  var bx = document.createElement(i);
  bx.classList.add(cl);
  v.appendChild(bx);
  return bx;
}
export default function rob(v, z = 0) {
  var sv = (-1) ** Math.floor(Math.random() * z);
  var s = Math.floor(Math.random() * v * sv);

  return s;
}
export default function thrott(func, delay) {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    console.log(now - prev, delay);

    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
}
export default function color(b = "body", hj = "background-color") {
  const randomnumber = Math.floor(Math.random() * 16777215);
  const randomcode = "#" + randomnumber.toString(16);
  document.querySelector().style = `${hj}: ${randomcode};`;

  console.log(randomnumber);
  console.log(randomcode);
}
