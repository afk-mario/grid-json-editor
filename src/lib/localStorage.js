export const loadState = () => {
  try {
    const elementsJson = localStorage.getItem('elements');
    const elementTypesJson = localStorage.getItem('elementTypes');
    if (elementsJson === null || elementTypesJson === null) {
      return undefined;
    }

    const elements = JSON.parse(elementsJson);
    const elementTypes = JSON.parse(elementTypesJson);
    return {elements, elementTypes};
  } catch (err) {
    return undefined;
  }
};

export const saveState = ({elements, elementTypes}) => {
  try {
    const serializedElements = JSON.stringify(elements);
    const serializedElementTypes = JSON.stringify(elementTypes);
    localStorage.setItem('elements', serializedElements);
    localStorage.setItem('elementTypes', serializedElementTypes);
  } catch (err) {}
};
