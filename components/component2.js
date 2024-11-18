import { html } from 'https://cdn.jsdelivr.net/npm/mettle/dist/mettle.full-esm.js';
import {
  ref,
  defineComponent,
  reactive,
  onMounted,
  onUnmounted,
} from 'https://unpkg.com/mettle-web-components@0.1.1/dist/mettle-web-components.esm.js';

export const MyComponent = defineComponent(() => {
  const items = reactive([
    {
      id: 1,
      tit: 'A',
    },
    {
      id: 2,
      tit: 'B',
    },
  ]);
  const count = ref(4);
  const increase = () => {
    items.unshift({
      id: count.value++,
      tit: 'C',
    });
  };

  return () => html`
    <fragment>
      <button onclick=${increase}>increase</button>
      <ul>
        ${items.map(
          (item) =>
            html`<li key=${item.id}>
              <span>${item.id}</span><span>-</span><span>${item.tit}</span>
            </li>`
        )}
      </ul>
      <my-child></my-child>
    </fragment>
  `;
});

export const MyChild = defineComponent(() => {
  const state = reactive({ count: 0, msg: '' });
  const increase = () => {
    state.count++;
  };

  onMounted(() => {
    console.log('child mounted');
  });

  onUnmounted(() => {
    console.log('child unmounted');
  });

  return () => html`
    <fragment>
      <p>${state.msg}</p>
      <p>${state.count}</p>
      <button onClick=${increase}>increase</button>
    </fragment>
  `;
});
