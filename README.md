# React Js Modal Component

## Installation


### NPM
```shell
npm install --save @axelr/react-js-modal
```
## Optional props

| Name            | Type              | Description                                                                                         |
| --------------- | ----------------- | --------------------------------------------------------------------------------------------------- |
| modalBackgroundColor | string (optional) | A string representing the background color of the modal.           |
| modalTextColor  | string (optional) | A string representing the text color of the modal.            |
| modalMinWidth       | string (optional) | A string representing the max width. By default  the max width is not set.                 |
| modalMaxWidth     | string (optional) | A string representing the max width. By default  the max width is 600px.               |
| closeButton        | boolean (optional) | By default the close button is true.                 |
| children   | React.ReactNode (optional) | String or JSX that will be rendered in the modal. |

## Usage

```jsx
import React, { useState } from 'react';
import { Modal } from '@axelr/react-js-modal';

const myComponent = () => {
  return (
    <>
        <Modal
            modalBackgroundColor={"#97ba16"}
            modalTextColor={"#fff"}
            modalMaxWidth={"600px"}
            children={
                <div>
                    <h3>Succes!</h3>
                </div>
            }
        />
    </>
  );
}

export default myComponent;
```