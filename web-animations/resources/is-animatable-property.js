// Requires property-to-idl.js

(function() {
  function TestKeyframe(testProp) {
    let _propAccessCount = 0;

    Object.defineProperty(this, testProp, {
      get: function() {
        _propAccessCount++;
      },
      enumerable: true,
    });

    Object.defineProperty(this, 'propAccessCount', {
      get: function() {
        return _propAccessCount;
      },
    });
  }

  function isAnimatableProperty(property) {
    const testKeyframe = new TestKeyframe(propertyToIDL(property));
    if (!'KeyframeEffect' in window) {
      return false;
    }

    try {
      // Since TestKeyframe returns 'undefined' for |property|, the
      // KeyframeEffect constructor will throw if the string 'undefined' is not
      // a valid value for the property.
      new KeyframeEffect(null, testKeyframe);
    } catch (e) {}

    return testKeyframe.propAccessCount !== 0;
  }

  window.isAnimatableProperty = isAnimatableProperty;
})();
