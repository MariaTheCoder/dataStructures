const myArray = [0, 1, 2, 3, 4, 5];

function makeMyArrayOfObjects(array) {
  const myArrayOfObjects = [];

  for (let i = 0; i < array.length; i++) {
    myArrayOfObjects.push({
      index: i,
      value: array[i],
    });
  }

  return myArrayOfObjects;
}

function reverseArray(array) {
  const arrayReversed = [];

  array.forEach((element) => {
    arrayReversed.unshift(element);
  });

  return arrayReversed;
}

function sliceArrayEvenly(givenArray, givenNumberOfEvenSlices) {
  // Check if first argument is given and if it is indeed an array
  if (!givenArray || Array.isArray(givenArray) === false)
    return `Please give a valid array`;

  // Check if second argument is given and if it is indeed a number
  if (
    !givenNumberOfEvenSlices ||
    Number.isInteger(givenNumberOfEvenSlices) === false
  )
    return `Please give a valid number of slices`;

  // Ensure that second argument is smaller than the length of the given array
  if (givenNumberOfEvenSlices > givenArray.length)
    return `Please give an larger array or choose a smaller number of slices`;

  // Check if array.length is divisible by the desired number of even slices
  if (givenArray.length % givenNumberOfEvenSlices !== 0)
    return `array.length is not divisible by the desired number of slices`;

  // Determine number of elements per slice
  const elementsPerSlice = givenArray.length / givenNumberOfEvenSlices;

  const result = [];

  for (let i = 0; i < givenNumberOfEvenSlices; i++) {
    result.push(givenArray.splice(0, elementsPerSlice));
  }
  return result;
}

console.log(sliceArrayEvenly([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
