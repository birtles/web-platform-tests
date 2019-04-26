// https://drafts.csswg.org/web-animations/#animation-property-name-to-idl-attribute-name
window.propertyToIDL = property => {
  if (property.startsWith('--') && property.length > 2) {
    return property;
  }
  if (property === 'float') {
    return 'cssFloat';
  }
  if (property === 'offset') {
    return 'cssOffset';
  }
  return property.replace(/-[a-z]/gi, str => {
    return str.substr(1).toUpperCase();
  });
};
