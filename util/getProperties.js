


export default function getStyles(element) {
    const currentTransform = getComputedStyle(element).transform;

    let translateX = 0, translateY = 0, rotate = 0;

    if (currentTransform !== "none") {
        // Parse the matrix values from the current transform
        const values = currentTransform.match(/matrix\((.+)\)/)[1].split(", ");
        translateX = parseFloat(values[4]);
        translateY = parseFloat(values[5]);

        // Optional: Adjust if you're using a rotation. Here, assuming 2D transform matrix
        const a = parseFloat(values[0]);
        const b = parseFloat(values[1]);
        rotate = Math.atan2(b, a) * (180 / Math.PI); // Convert to degrees
  }

  return [translateX,translateY,rotate];
}