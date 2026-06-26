# Project Summary

## What We Built
A Human Development Index (HDI) Predictor web application that:
- Uses the official UNDP geometric mean formula
- Takes 4 inputs: Life Expectancy, MYS, EYS, GNI per capita
- Outputs HDI score and tier classification
- Provides 20 country presets from UNDP HDR 2023/24

## Technologies Used
- **Frontend**: React 19, TypeScript, Vite, TanStack Router, Tailwind CSS
- **ML Formula**: UNDP HDI geometric mean (health × education × income)^(1/3)
- **Backend**: Flask (Python), scikit-learn, pickle
