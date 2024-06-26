import { VisuallyHidden } from '@breatheHR/react-visually-hidden';

export default { title: 'Utilities/VisuallyHidden' };

export const Basic = () => (
  <button>
    <VisuallyHidden>Save the file</VisuallyHidden>
    <span aria-hidden>💾</span>
  </button>
);
