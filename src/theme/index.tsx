import { CustomThemeInterface } from "../models/theme.model";
import { Colors, Fonts, Gradients, Shadows } from '../constants';

export const KoiBankTheme: CustomThemeInterface = {
  body: Colors.white,
  bgMain: Colors.gray10,
  textColor: Colors.gray100,
  fontFamilyPrimary: Fonts.roboto,
  fontFamilySecondary: Fonts.quicksand,
  bgSidebar: Gradients.sidebar,
  shadow: Shadows.generalShadow,
  primaryColor: Colors.orange,
  shadowRight: Colors.shadowRight
};