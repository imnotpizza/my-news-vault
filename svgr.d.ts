declare module '*.svg' {
 import React from 'react';
 const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
 export default SVG;
}

declare module '*.svg?url' {
  const content: any;
  export default content;
}
