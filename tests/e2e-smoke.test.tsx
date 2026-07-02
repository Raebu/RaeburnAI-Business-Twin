import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import Home from '../src/app/page';

describe('ui smoke test', () => {
  it('renders the business twin landing page', () => {
    const html = renderToString(<Home />);
    expect(html).toContain('Business Twin');
    expect(html).toContain('Most expensive workflows');
  });
});
