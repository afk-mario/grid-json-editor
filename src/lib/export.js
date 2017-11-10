import FileSaver from 'file-saver';

export const exportState = ({items, name}) => {
  console.table(items);
  const obj = {
    [name]: items,
  };
  const content = JSON.stringify(obj);
  const blob = new Blob([content], {type: 'application/json;charset=utf-8'});
  FileSaver.saveAs(blob, `${name}.json`);
};
