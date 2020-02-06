export const upgradeElement = function (element) {
  if (window.componentHandler) {
    window.componentHandler.upgradeElement(element);
  } else {
    window.setTimeout(upgradeElement, 100, element);
  }
};
