import React from 'react';
import {Layer, Rect, Stage, Line} from 'react-konva';
import './style.css';

function flatten(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? flatten(flat) : flat;
}

const colors = {
  blue: '#0080ff',
  lightBlue: '#98d1cf',
  darkBlue: '#185869',
  red: '#c33126',
  green: '#2ab38d',
  magenta: '#7a7e9d',
};

export default ({columns, rows, items, onClick, margin}) => {
  const columnLines = [];
  const rowLines = [];
  const width = 750;
  const height = 200;
  const lineWidth = 1;

  const lineColor = colors.darkBlue;
  const fillColor = colors.lightBlue;

  const tileWidth = width / columns - margin;
  const tileHeight = height / rows - margin;

  for (var i = 0; i <= columns + 1; i++) {
    const x = tileWidth * i;

    columnLines.push(
      <Line
        key={i}
        points={[x, 0, x, height]}
        stroke={lineColor}
        strokeWidth={lineWidth}
      />,
    );
  }

  for (i = 0; i <= rows; i++) {
    const y = tileHeight * i;

    rowLines.push(
      <Line
        key={i}
        points={[0, y, width, y]}
        stroke={lineColor}
        strokeWidth={lineWidth}
        lineCap="round"
        lineJoin="round"
      />,
    );
  }

  return (
    <div className="canvas-wrapper">
      <Stage width={width} height={height}>
        <Layer>{columnLines}</Layer>
        <Layer>{rowLines}</Layer>
        <Layer>
          {items.map(item => {
            return (
              <Rect
                key={item.pk}
                x={tileWidth * item.x}
                y={tileHeight * item.y}
                width={tileWidth * item.w}
                height={tileHeight * item.h}
                fill={fillColor}
                opacity={item.hidden ? 0.5 : 0.8}
                strokeWidth={lineWidth * 2}
                stroke={colors.green}
                onClick={() => {
                  onClick(item.pk);
                }}
              />
            );
          })}
        </Layer>
        <Layer>
          {items.map(item => {
            const itemArr = item.linePoints || [];
            const nArr = itemArr.map((item, i) => [
              item[0] * tileWidth,
              item[1] * tileHeight,
            ]);
            const arr = flatten(nArr);
            return (
              <Line
                key={item.pk}
                points={arr}
                stroke={colors.red}
                strokeWidth={lineWidth}
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
};
