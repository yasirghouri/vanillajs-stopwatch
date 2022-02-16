let counter = 0;
const array = [];

const updateArray = () => {
  if (array.length === 0) {
    array.push("0");
  } else {
    array.push(`${array[counter - 1]}${counter}`);
  }
  counter = counter + 1;
};

const clickHandler = () => {
  updateArray();
  const display = document.getElementById("display");
  display.innerHTML = "";
  console.log("ARRAY", counter);
  array.forEach((num, index) => {
    const paragraph = document.createElement("p");

    if (index === 0) {
      paragraph.innerHTML = num;
    } else if (index < 10) {
      paragraph.innerHTML = `${num.substring(
        0,
        num.length - 1
      )}:${num.substring(num.length - 1, num.length)}`;
    } else if (index < 100) {
      paragraph.innerHTML = `${num.substring(
        0,
        num.length - 2
      )}:${num.substring(num.length - 2, num.length)}`;
    } else {
      paragraph.innerHTML = `${num.substring(
        0,
        num.length - 3
      )}:${num.substring(num.length - 3, num.length)}`;
    }

    display.appendChild(paragraph);
  });
};
