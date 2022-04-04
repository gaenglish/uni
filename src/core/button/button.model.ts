import { ShadowElevation } from '../shadow';
import { ColorToken } from '../color';
import { SizeMap } from '../core.types';
import { Border } from '../border';

export interface Button {
  color: ColorToken;
  elevation?: ShadowElevation;
  borderWidth?: number;
  borderColor?: ColorToken;
  borderRadius?: number;
  borderRadii?: SizeMap;
  horizontalPadding: SizeMap;
  verticalPadding: SizeMap;
  border?: Border;
  shadowElevation?: ShadowElevation;
}
