import { describe, it, expect, beforeEach, vi } from 'vitest';
import { 
  saveActiveTheme, 
  loadActiveTheme, 
  saveCustomTheme, 
  getCustomThemes, 
  deleteCustomTheme 
} from '../storage';
import { FORESIGHT_DEFAULT } from '../presets';
import { Theme } from '../schema';

describe('Theme Storage', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should save and load the active theme', () => {
    const testTheme: Theme = {
      ...FORESIGHT_DEFAULT,
      name: 'Test Theme',
      primary: '#FF0000',
    };
    
    saveActiveTheme(testTheme);
    const loaded = loadActiveTheme();
    
    expect(loaded.name).toBe('Test Theme');
    expect(loaded.primary).toBe('#FF0000');
  });

  it('should return default theme if nothing is stored', () => {
    const loaded = loadActiveTheme();
    expect(loaded.name).toBe(FORESIGHT_DEFAULT.name);
  });

  it('should save and retrieve custom themes', () => {
    const customTheme: Theme = {
      ...FORESIGHT_DEFAULT,
      id: 'custom-1',
      name: 'Custom Theme 1',
    };
    
    saveCustomTheme(customTheme);
    const customThemes = getCustomThemes();
    
    expect(customThemes).toHaveLength(1);
    expect(customThemes[0].name).toBe('Custom Theme 1');
  });

  it('should delete custom themes', () => {
    const customTheme: Theme = {
      ...FORESIGHT_DEFAULT,
      id: 'custom-1',
      name: 'Custom Theme 1',
    };
    
    saveCustomTheme(customTheme);
    expect(getCustomThemes()).toHaveLength(1);
    
    deleteCustomTheme('custom-1');
    expect(getCustomThemes()).toHaveLength(0);
  });

  it('should handle invalid JSON gracefully', () => {
    localStorage.setItem('foresight-survey-theme', 'invalid-json');
    const loaded = loadActiveTheme();
    expect(loaded.name).toBe(FORESIGHT_DEFAULT.name);
  });
});
