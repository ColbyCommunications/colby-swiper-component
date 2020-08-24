# colby-swiper-component

An extensible carousel and slider component

## Props

| Name           | Description                                                                        | Type    | Default Value                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| slides         | Array of slide components. Can be any type of markup                               | array   | \*Required                                                                                                             |
| params         | Swiper parameters. For full list look [here](https://swiperjs.com/api/#parameters) | object  | See [here](https://github.com/ColbyCommunications/colby-swiper-component/blob/master/src/index.js#L28)                 |
| template       | A custom or pre-existing template                                                  | node    | See [here](https://github.com/ColbyCommunications/colby-swiper-component/blob/master/src/templates/Default/Default.js) |
| autoHeight     | Whether to enable the Swiper autoHeight feature                                    | boolean | false                                                                                                                  |
| dynamicBullets | Whether to enable the Swiper dynamicBullets feature                                | boolean | false                                                                                                                  |

## Usage

### Simple

```javascript
import React from 'react';
import Some from '@colbycommunications/colby-swiper-component';

export default () => {
    const slides = [
        { content: <div>some content</div>, type: 'node' },
        {
            content: (
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
                        scelerisque, congue leo in, placerat mi. Nullam vitae enim purus. Sed
                        hendrerit turpis eget tellus hendrerit, ac facilisis turpis lacinia. Nunc
                        neque justo, ornare at accumsan vulputate, suscipit vitae ante. Quisque non
                        dolor sed quam convallis sodales. Integer vehicula nulla sit amet accumsan
                        sagittis.
                    </p>
                </div>
            ),
            type: 'node',
        },
        {
            content: (
                <img src="https://www.colby.edu/celebrate2020/images/hats-and-miller-Comm2016-162_optimized.jpg" />
            ),
            type: 'image',
        },
    ];
    return <Swiper slides={slides} />;
};
```
