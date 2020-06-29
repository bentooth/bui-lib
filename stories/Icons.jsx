import React from "react";
import icons from '../src/icons';

function Icons() {

  let template = []

    Object.keys(icons).forEach((name) => {
    if (icons[name]) {
      template.push(
        <tr key={name}>
          <td>
            {icons[name].call()}
          </td>
          <td>
            <span style={{ userSelect: "none", lineHeight: '48px' }}>{name}</span>
          </td>
        </tr>
      );
    }
  });

  return (
    <div>
      <h1>Icons {icons.AddUser}</h1>
      <table style={{width: '100%'}}>
        <tbody>
        {template}
        </tbody>
      </table>
    </div>
  );
}

export default Icons;