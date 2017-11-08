export const loadState = () => {
  try {
    const elementsJson = localStorage.getItem('elements');
    const elementTypesJson = localStorage.getItem('elementTypes');
    const settings = localStorage.getItem('settings');
    if (
      elementsJson === null ||
      elementTypesJson === null ||
      settings === null
    ) {
      return undefined;
    }

    const elements = JSON.parse(elementsJson);
    const elementTypes = JSON.parse(elementTypesJson);
    return {elements, elementTypes};
  } catch (err) {
    return undefined;
  }
};

export const saveState = ({elements, elementTypes, settings}) => {
  try {
    const serializedElements = JSON.stringify(elements);
    const serializedElementTypes = JSON.stringify(elementTypes);
    const serializedSettings = JSON.stringify(settings);
    localStorage.setItem('elements', serializedElements);
    localStorage.setItem('elementTypes', serializedElementTypes);
    localStorage.setItem('settings', serializedSettings);
  } catch (err) {}
};
