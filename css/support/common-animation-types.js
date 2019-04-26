'use strict';

//
// Test data for some common animation types.
//
// These are shared between tests for CSS transitions, CSS animations, and
// Web Animations.
//
// Each type is defined by an object with the following format:
//
// {
//    compare: (a, b, message), // Optional assertion function used to compare
//                              // the two values.
//                              // Defaults to assert_equals.
//    interpolation: [{  // Array of interpolation intervals to test
//      from: <value>,   // Value to use for start of interval
//      to: <value>,     // Value to use for end of interval
//      '25%': <value>,  // Value to expect 25% of the way through the interval
//      '125%': <value>, // Value to expect 125% of the way through the interval
//      '-25%': <value>, // Value to expect -25% of the way through the interval
//    }],
//    addition: [{ // Optional array...
//                 // If not specified, the type will be treated as non-additive
//       ...
//    }],
// }
//

(function() {
  const commonAnimationTypes = new Map();

  // Type: discrete
  //
  // https://drafts.csswg.org/web-animations-1/#discrete
  //
  // Takes an array of pairs of values which should use discrete interpolation.
  commonAnimationTypes.set('discrete', options => ({
    interpolation: options.map(pair => ({
      from: pair[0],
      to: pair[1],
      '25%': pair[0],
      '125%': pair[1],
      '-25%': pair[0],
    })),
  }));

  // Type: color
  // TODO

  // Type: length
  // TODO

  // Type: number
  // TODO

  if (window.animationTypes) {
    window.animationTypes = new Map([
      ...window.animationTypes.entries(),
      ...commonAnimationTypes.entries(),
    ]);
  } else {
    window.animationTypes = commonAnimationTypes;
  }
})();
