import { HSLA, UniColor } from './color.model';
import { CategoryLightness, CategorySaturation, RoleHues } from './color.types';
import { randomRangeValue } from './color.utils';

export function hslaToString({ hue, saturation, lightness, alpha }: HSLA): string {
  return `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`;
}

export function uniColor({ role, category, scheme, alpha = 1 }: UniColor): string {
  const hue = randomRangeValue(RoleHues[role]);
  const saturation = randomRangeValue(CategorySaturation[category]);
  const lightness = randomRangeValue(CategoryLightness[category]);

  return hslaToString({ hue, saturation, lightness, alpha });
}
