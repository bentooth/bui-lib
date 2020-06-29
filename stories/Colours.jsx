import React from "react";
import theme from '../src/theme';

const colors = theme.palette.common;

function Colors() {
  let template = [];

  Object.keys(colors).forEach((name) => {
    if (colors[name]) {
      template.push(
        <tr key={name}>
          <td style={{borderColor: '#CFCFCF', borderWidth: '0 0 1px'}}>
            <span style={{
              backgroundColor: colors[name],
              borderRadius: "2px",
              display: "inline-block",
              height: "48px",
              width: "48px",
            }}/>
          </td>
          <td>
						<span style={{ userSelect: "none", lineHeight: '48px' }}>{name}</span>
          </td>
          <td>
            <code style={{ userSelect: "none", lineHeight: '48px' }}>{colors[name]}</code>
          </td>
        </tr>
      );
    }
  });

  console.log(template)

  return (
    <div>
      <h1>Colours</h1>
      <table style={{width: '100%'}}>
        <tbody>
          {template}
        </tbody>
      </table>
    </div>
  );
}

export default Colors;