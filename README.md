# Hiremyidea-assignment
# Insights Dashboard (React Native)

A modern **health insights dashboard mobile app** built using **React Native (Expo)**.
This project visualizes user health trends such as cycle patterns, body metrics, symptoms, and lifestyle impact using **custom-built charts and gradients**.

---

## Features

* **Custom Line & Area Charts** 
* **Donut Chart with Gradient Segments**
* **Cycle Trends Bar Graph with Icons**
* **Lifestyle Heatmap Visualization**
* **Stability Score Graph with Tooltip**
* **Gradient UI & Modern Design**
* **Toggle Views (Monthly / Weekly)**
* **Responsive Layout with Safe Area Handling**

---

## Tech Stack

***React Native (Expo)**
***react-native-svg** → for custom charts & graphics
***expo-linear-gradient** → for gradient backgrounds & UI
**react-native-safe-area-context** → for notch-safe layouts
***@expo/vector-icons (Feather)** → for icons

---

## Project Structure

```
├── components/
│   ├── BodyTrends.js
│   ├── CycleTrends.js
│   ├── SymptomsChart.js
│   ├── LifestyleHeatmap.js
│   ├── StabilityCard.js
│   └── BottomNav.js
│
├── screens/
│   └── InsightsScreen.js
│
├── theme/
│   └── index.js
│
├── App.js
```

---

## Screens Included

*Stability Summary
*Cycle Trends
*Body & Metabolic Trends
*Symptom Trends (Donut Chart)
*Lifestyle Impact (Heatmap)

---

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/insights-dashboard.git
cd insights-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start the app:

```bash
npx expo start
```

---

## Key Highlights

* Built **custom charts using SVG** instead of relying on chart libraries
* Implemented **gradient fills and radial gradients** for better UI
* Designed **modular reusable components**
* Used **Flexbox + absolute positioning** for complex layouts
* Ensured **cross-device compatibility** using Safe Area APIs

---

