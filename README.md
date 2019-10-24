# tiny-skeleton-loader-react

zero dependency, ultra lightweight (1KB gzipped) skeleton loader component for react ✨

![Example](preview.gif)

![GitHub Actions Status](https://github.com/harshzalavadiya/tiny-skeleton-loader-react/workflows/NodeJS/badge.svg)
![NPM](https://img.shields.io/npm/v/tiny-skeleton-loader-react.svg)
![gzip](https://badgen.net/bundlephobia/minzip/tiny-skeleton-loader-react)

## 🔧 Installation

```bash
npm install --save tiny-skeleton-loader-react
```

## 📦 Usage

```tsx
import React from "react";

import SkeletonLoader from "tiny-skeleton-loader-react";

class Example extends React.Component {
  render() {
    return <SkeletonLoader />;
  }
}
```

## 👀 Properties

| Property       | Attribute       | Description             | Type      | Default     |
| -------------- | --------------- | ----------------------- | --------- | ----------- |
| `width`        | `width`         | Loader Width            | `string`  | `"100%"`    |
| `height`       | `height`        | Loader Height           | `string`  | `"1em"`     |
| `background`   | `background`    | Loader background color | `string`  | `"#eff1f6"` |
| `circle`       | `circle`        | Make Skeleton Circle    | `boolean` | `false`     |
| `borderRadius` | `border-radius` | Loader radius           | `string`  | `"4px"`     |
| `block`        | `block`         | Weather to start new    | `boolean` | `true`     |
| `style`        | `style`         | Extra Styles            | `object`  | `{}`        |

## License

MIT © [harshzalavadiya](https://github.com/harshzalavadiya)
