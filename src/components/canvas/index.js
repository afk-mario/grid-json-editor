import React from 'react';
import {Layer, Rect, Stage, Line} from 'react-konva';

export default ({columns, rows, items, onClick, margin}) => {
  const columnLines = [];
  const rowLines = [];
  const width = 750;
  const height = 200;
  const lineWidth = 1;

  const tileWidth = width / columns - margin;
  const tileHeight = height / rows - margin;

  for (var i = 0; i <= columns + 1; i++) {
    const x = tileWidth * i;

    columnLines.push(
      <Line
        key={i}
        points={[x, 0, x, height]}
        stroke="#96d1cf"
        strokeWidth={lineWidth}
        lineCap="round"
        lineJoin="round"
      />,
    );
  }

  for ( i = 0; i <= rows; i++) {
    const y = tileHeight * i;

    rowLines.push(
      <Line
        key={i}
        points={[0, y, width, y]}
        stroke="#96d1cf"
        strokeWidth={lineWidth}
        lineCap="round"
        lineJoin="round"
      />,
    );
  }

  return (
    <Stage width={width} height={height}>
      <Layer>{columnLines}</Layer>
      <Layer>{rowLines}</Layer>
      <Layer>
        {items.map(item => {
          const color = window.Konva.Util.getRandomColor();
          return (
            <Rect
              key={item.pk}
              x={tileWidth * item.x}
              y={tileHeight * item.y}
              width={tileWidth * item.w}
              height={tileHeight * item.h}
              fill={color}
              onClick={onClick}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};
