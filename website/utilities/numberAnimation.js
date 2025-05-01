export const animateNumbers = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    const endValue = Number(element.innerHTML);
    let currentValue = 0;
    const animationSpeed = 10;

    const incrementNumber = () => {
      if (currentValue <= endValue) {
        element.innerHTML = currentValue;
        setTimeout(() => {
          incrementNumber();
          currentValue++;
        }, animationSpeed);
      }
    };

    incrementNumber();
  });
};
