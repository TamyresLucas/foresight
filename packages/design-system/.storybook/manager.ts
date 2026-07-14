import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import { mountVercelToolbar } from '@vercel/toolbar';

const theme = create({
    base: 'light',
    brandTitle: 'foresight',
    fontBase: '"Figtree", sans-serif',
});

addons.setConfig({
    theme,
});

// Vercel Toolbar (comments) on the production URL is opt-in: mounting it
// unconditionally would prompt every visitor to log in to Vercel. Preview
// deployments don't need this — Vercel injects the toolbar there itself.
// `?feedback=1` opts in (persisted across SPA navigation), `?feedback=0` opts out.
const FEEDBACK_OPT_IN_KEY = 'vercel-toolbar-opt-in';
try {
    const feedback = new URLSearchParams(window.location.search).get('feedback');
    if (feedback === '1') localStorage.setItem(FEEDBACK_OPT_IN_KEY, 'true');
    if (feedback === '0') localStorage.removeItem(FEEDBACK_OPT_IN_KEY);
    if (localStorage.getItem(FEEDBACK_OPT_IN_KEY) === 'true') {
        // Owner/project ids are public identifiers (mirrors .vercel/project.json);
        // without them the toolbar script can't resolve which project to attach to.
        mountVercelToolbar({
            ownerId: 'team_YWoMmOzCBmbYVdNO1MhWtdez',
            projectId: 'prj_hR1RWzCTx0qF8TrvG93wSCMVOu8b',
            branch: 'main',
        });
    }
} catch {
    // localStorage unavailable (e.g. blocked storage) — skip the toolbar.
}
