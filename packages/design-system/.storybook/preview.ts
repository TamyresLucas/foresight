import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: { disabled: true },
    options: {
      storySort: {
        order: ['foresight', 'Branding', 'Design Tokens', 'Components', 'Patterns', 'Survey Builder', 'Blocks', 'Survey Rendering', '*'],
        method: 'alphabetical',
      },
    },
    darkMode: {
      // NOTE: Do NOT set `current` here — the addon re-reads it on every
      // story navigation, causing a visible light→dark flash before the
      // persisted state is restored from localStorage.
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
      // Let CSS tokens (--background) control the preview background.
      // `stylePreview: true` applies an inline background that can desync
      // from the token-driven background during the class toggle, causing
      // a second flash.
      stylePreview: false,
      dark: {
        appBg: '#1a1a2e',
        appContentBg: '#16162a',
        barBg: '#1a1a2e',
      },
      light: {
        appBg: '#ffffff',
        appContentBg: '#f8fafc',
        barBg: '#ffffff',
      },
    },
  },

  globalTypes: {
    surveyMode: {
      name: 'Survey Mode',
      description: 'Toggle survey-specific tokens [data-survey-theme]',
      defaultValue: 'off',
      toolbar: {
        icon: 'book',
        items: [
          { value: 'off', title: 'Survey Mode: Off' },
          { value: 'on', title: 'Survey Mode: On' },
        ],
        showName: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const isDark = useDarkMode();
      const surveyMode = context.globals.surveyMode === 'on';

      // Sync color scheme
      useEffect(() => {
        document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
      }, [isDark]);

      // Apply saved font from localStorage on mount
      useEffect(() => {
        const html = document.documentElement;
        const savedFont = localStorage.getItem('global-font') || 'Inter';
        const fontValue = `"${savedFont}", system-ui, sans-serif`;
        html.style.setProperty('--font-family-sans', fontValue);
        html.style.setProperty('--font-family-heading', fontValue);
        html.style.setProperty('--font-family-body', fontValue);

        const linkId = `font-global-${savedFont}`;
        if (!document.getElementById(linkId)) {
          const link = document.createElement('link');
          link.id = linkId;
          link.href = `https://fonts.googleapis.com/css2?family=${savedFont.replace(/ /g, '+')}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap`;
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }
      }, []);

      return React.createElement(
        'div',
        { 
          'data-survey-theme': surveyMode ? 'true' : undefined,
          style: { width: '100%', height: '100%' }
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;

// NOTE: The `globalTypes.theme` toolbar was removed because it was a
// duplicate theme toggle that competed with `storybook-dark-mode`.
// The addon already provides its own toggle in the toolbar (moon/sun icon).
// Having both created two independent buttons where only one actually
// worked, and the `defaultValue: 'light'` could interfere with the
// addon's persisted state on navigation.
