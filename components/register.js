import { registerComponent } from 'https://unpkg.com/amazed-web-components@0.0.3/dist/amazed-web-components.esm.js';
import { MyComponent, MyChild } from './component2.js';

// global registration
export default function register() {
  registerComponent('my-child', MyChild);
  registerComponent('my-component', MyComponent);
}
