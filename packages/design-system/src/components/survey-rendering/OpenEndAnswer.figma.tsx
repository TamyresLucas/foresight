import figma from '@figma/code-connect';
import { OpenEndAnswer } from './OpenEndAnswer';

const FIGMA_URL =
  'https://www.figma.com/design/2JOucEtocJMAUytbgt0tGK/Project-X---Rebranded-Unified-Components-Library?node-id=9121-2519';

figma.connect(OpenEndAnswer, FIGMA_URL, {
  props: {
    label: figma.string('Label'),
    required: figma.boolean('Required'),
    selected: figma.enum('Selected', {
      Yes: true,
      No: false,
    }),
    focused: figma.enum('Focused', {
      Yes: true,
      No: false,
    }),
  },
  example: ({ label, required, selected, focused }) => (
    <OpenEndAnswer
      label={label}
      required={required}
      selected={selected}
      focused={focused}
      placeholder="Type your answer here..."
    />
  ),
});
