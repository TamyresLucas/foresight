/**
 * Raw JavaScript snippet to be inlined in <head> to prevent FOUC.
 * It reads the theme from localStorage and applies it before React hydrates.
 */
export const THEME_BOOTSTRAP_SCRIPT = `
(function() {
  try {
    var STORAGE_KEY = 'foresight-survey-theme';
    var stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    
    var theme = JSON.parse(stored);
    if (!theme || !theme.primary) return;
    
    var root = document.documentElement;
    
    // Helper to convert hex to HSL channels (simplified for bootstrap)
    function hexToHsl(hex) {
      var r = parseInt(hex.slice(1, 3), 16) / 255;
      var g = parseInt(hex.slice(3, 5), 16) / 255;
      var b = parseInt(hex.slice(5, 7), 16) / 255;
      
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      
      if (max === min) {
        h = s = 0;
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
      
      return Math.round(h * 360) + ' ' + Math.round(s * 100) + '% ' + Math.round(l * 100) + '%';
    }

    // Apply branding
    if (theme.primary) root.style.setProperty('--brand-primary', hexToHsl(theme.primary));
    if (theme.secondary) root.style.setProperty('--brand-secondary', hexToHsl(theme.secondary));
    if (theme.destructive) root.style.setProperty('--brand-destructive', hexToHsl(theme.destructive));
    
    if (theme.radius) root.style.setProperty('--brand-radius', theme.radius);
    if (theme.fontSize) root.style.setProperty('--brand-font-size', theme.fontSize);
    if (theme.fontWeight) root.style.setProperty('--brand-font-weight', theme.fontWeight);
    
    if (theme.fonts) {
      if (theme.fonts.body) {
        var fontBody = '"' + theme.fonts.body + '", system-ui, sans-serif';
        root.style.setProperty('--brand-font-body', fontBody);
        root.style.setProperty('--brand-font-sans', fontBody);
      }
      if (theme.fonts.heading) root.style.setProperty('--brand-font-heading', '"' + theme.fonts.heading + '", system-ui, sans-serif');
      if (theme.fonts.survey) root.style.setProperty('--brand-font-survey', '"' + theme.fonts.survey + '", system-ui, sans-serif');
    }
  } catch (e) {
    console.error('Theme bootstrap failed', e);
  }
})();
`.trim();
