import '../src/auds.tokens';
import '../src/auds';

import { addDecorator } from "@storybook/html";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story => {
  document.body.classList.add('au-body', 'au-grid');
  return story();
})
