// src/theme/index.js
// Exact colors extracted from the Insights screen screenshot

export const colors = {
  // Backgrounds
  pageBg: '#F0EEF2',          // Light gray-lavender page background
  cardBg: '#FFFFFF',           // Pure white cards
  headerGradientTop: '#F5E6EB', // Soft pink at top of header
  headerGradientBottom: '#EDE8F5', // Soft lavender fading down

  // Text
  textPrimary: '#1A1A2E',      // Near-black for headings
  textSecondary: '#6B6B7B',    // Medium gray for body text
  textMuted: '#A0A0B0',        // Light gray for axis labels

  // Brand / Accent
  purple: '#8B85C1',           // Main purple (cycle bars, chart line)
  purpleDark: '#5C5899',       // Darker purple for active states
  purpleLight: '#C4BDEE',      // Light lavender fill
  purplePale: '#E8E5F8',       // Very pale lavender

  // Chart colors
  chartLine: '#9B8FC8',        // Purple line for stability chart
  chartFill: '#C4BDEE',        // Lavender fill under chart

  // Cycle bar segment colors (exact from screenshot)
  segPurple: '#9B8FC8',        // Top segment - luteal (darkest purple)
  segLavender: '#B8B3D8',      // Second - light purple
  segGreen: '#8BAF8B',         // Third - muted sage green
  segCoral: '#D4857A',         // Bottom - coral/salmon red

  // Body signals donut colors
  donutMood: '#C4BDEE',        // Light purple
  donutBloating: '#9B8FC8',    // Medium purple
  donutAcne: '#7EC8A0',        // Teal green
  donutFatigue: '#E8877A',     // Coral salmon

  // Weight chart
  weightLine: '#E8877A',       // Coral/salmon pink
  weightFill: '#F5C5BC',       // Light coral fill

  // Lifestyle heatmap
  heatPurple1: '#9B8FC8',
  heatPurple2: '#B8B3D8',
  heatPurple3: '#CCC9E8',
  heatPurple4: '#DDDAF2',
  heatPurple5: '#EDEAF8',
  heatPurple6: '#F5F3FC',

  heatCoral1: '#D4857A',
  heatCoral2: '#E0A09A',
  heatCoral3: '#E8B8B4',
  heatCoral4: '#F0CECC',
  heatCoral5: '#F6E4E2',
  heatCoral6: '#FBF2F1',

  heatGreen1: '#8BAF8B',
  heatGreen2: '#A4C2A4',
  heatGreen3: '#BBD1BB',
  heatGreen4: '#D0E0D0',
  heatGreen5: '#E3EEE3',
  heatGreen6: '#F1F8F1',

  heatPink1: '#D48FA0',
  heatPink2: '#DFA8B6',
  heatPink3: '#E8BFC9',
  heatPink4: '#F0D2DA',
  heatPink5: '#F6E5EA',
  heatPink6: '#FBF2F4',

  // Tab bar
  tabActive: '#5C5899',
  tabInactive: '#B0AEC0',

  // White
  white: '#FFFFFF',
  tooltipBg: '#3A3A4A',
};

export const fonts = {
  // DM Sans weights
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  pill: 50,
};

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
};
