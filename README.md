<div align="center">

<img src="https://img.shields.io/badge/Human%20Development%20Index-Predictor-e63946?style=for-the-badge&logo=globe&logoColor=white" alt="HDI Predictor"/>

# 🌍 A Comprehensive Measure of Well-Being

### Human Development Index (HDI) Predictor

*A machine learning web application that predicts a country's Human Development Index using the official UNDP formula*

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20App-e63946?style=for-the-badge)](https://a-comprehensive-measure-of-well-bei.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/udayram-nath/A-Comprehensive-Measure-of-Well-Being)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://a-comprehensive-measure-of-well-bei.vercel.app/)

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## 🌐 Live Demo

> **[https://a-comprehensive-measure-of-well-bei.vercel.app/](https://a-comprehensive-measure-of-well-bei.vercel.app/)**

---

## 📖 About the Project

The **Human Development Index (HDI)** is a statistical composite index developed by the UNDP that measures a country's average achievement in three key dimensions of human development:

| Dimension | Indicator |
|-----------|-----------|
| 🏥 **Health** | Life Expectancy at Birth |
| 📚 **Education** | Mean & Expected Years of Schooling |
| 💰 **Standard of Living** | GNI per Capita (USD PPP) |

This web application implements the **official UNDP geometric mean formula** to compute HDI scores and classify countries into four tiers in real-time — no server required.

---

## ✨ Features

- 🌍 **20 Country Presets** — auto-fills real UNDP HDR 2023/24 values
- ⚡ **Instant Prediction** — client-side computation, no API calls needed
- 🎨 **Beautiful Dark UI** — world map background with animated particles
- 📊 **Tier Classification** — Very High / High / Medium / Low with color coding
- 📱 **Fully Responsive** — works on mobile, tablet, and desktop
- 🔢 **UNDP Accurate** — matches official HDI scores within ±0.005

---

## 🧮 HDI Formula

The HDI is calculated as the **geometric mean** of three normalized indices:

```
HDI = (Life Index × Education Index × Income Index) ^ (1/3)
```

```typescript
function computeHDI(life, mys, eys, gni) {
  const lifeIdx = (life - 20) / (85 - 20);
  const eduIdx  = ((mys / 15) + (eys / 18)) / 2;
  const incIdx  = (log(gni) - log(100)) / (log(75000) - log(100));
  return cbrt(clamp(lifeIdx) * clamp(eduIdx) * clamp(incIdx));
}
```

### HDI Tiers
| Tier | Score Range | Color |
|------|-------------|-------|
| 🟢 Very High | ≥ 0.800 | Emerald |
| 🔵 High | 0.700 – 0.799 | Sky Blue |
| 🟡 Medium | 0.550 – 0.699 | Amber |
| 🔴 Low | < 0.550 | Rose |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/udayram-nath/A-Comprehensive-Measure-of-Well-Being.git

# 2. Navigate to project folder
cd A-Comprehensive-Measure-of-Well-Being

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open **http://localhost:8080** in your browser 🎉

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🗂️ Project Structure

```
A-Comprehensive-Measure-of-Well-Being/
├── src/
│   ├── assets/
│   │   └── world-map-bg.jpg       # Background image
│   ├── components/ui/             # Shadcn UI components
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions
│   ├── routes/
│   │   ├── __root.tsx             # Root layout
│   │   └── index.tsx              # HDI Predictor (main page)
│   ├── styles.css                 # Global styles + Tailwind
│   └── router.tsx                 # TanStack Router config
├── docs/
│   ├── er-diagram/                # Entity Relationship docs
│   ├── prerequisites/             # Setup requirements
│   ├── project-flow/              # Architecture & flow
│   ├── dataset/                   # Dataset documentation
│   ├── preprocessing/             # Data preprocessing docs
│   ├── model-split/               # Train/test split docs
│   ├── model-fitting/             # Model training docs
│   ├── model-saving/              # Model persistence docs
│   ├── flask-app/                 # Flask backend docs
│   └── conclusion/                # Summary & future scope
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2 | UI Framework |
| TypeScript | 5.8 | Type Safety |
| Vite | 8.0 | Build Tool |
| TanStack Router | 1.168 | File-based Routing |
| Tailwind CSS | 4.2 | Styling |
| Lucide React | 0.575 | Icons |
| Recharts | 2.15 | Data Visualization |

### ML / Backend (Flask version)
| Technology | Purpose |
|------------|---------|
| Python 3.x | Backend language |
| scikit-learn | Linear Regression model |
| Pandas | Data manipulation |
| NumPy | Numerical computing |
| Flask | Web framework |
| Pickle | Model serialization |
| Matplotlib / Seaborn | Data visualization |

---

## 📊 Sample Predictions

| Country | Life Exp | MYS | EYS | GNI | HDI | Tier |
|---------|----------|-----|-----|-----|-----|------|
| Norway | 83.4 | 13.1 | 18.6 | 82,655 | **0.966** | 🟢 Very High |
| United States | 77.4 | 13.7 | 16.2 | 64,765 | **0.927** | 🟢 Very High |
| China | 78.2 | 7.6 | 14.2 | 17,504 | **0.788** | 🔵 High |
| India | 67.7 | 6.6 | 12.6 | 6,951 | **0.644** | 🟡 Medium |
| Ethiopia | 65.4 | 3.2 | 9.6 | 2,361 | **0.492** | 🔴 Low |

---

## 📋 Epic-wise Development

| Epic | Description | Status |
|------|-------------|--------|
| ER Diagram | Entity-relationship diagram design | ✅ Done |
| Pre-requisites | Hardware & software requirements | ✅ Done |
| Project Flow | Architecture and data flow | ✅ Done |
| Epic 1 | Environment setup & package installation | ✅ Done |
| Epic 2 | Importing required libraries | ✅ Done |
| Epic 3 | Dataset download & understanding | ✅ Done |
| Epic 4 | Data preprocessing & label encoding | ✅ Done |
| Epic 5 | Dividing model into train & test data | ✅ Done |
| Epic 6 | Fitting the model | ✅ Done |
| Epic 7 | Saving the model | ✅ Done |
| Epic 8 | Building the Flask web application | ✅ Done |
| Conclusion | Summary, results & future scope | ✅ Done |

---

## 🔮 Future Scope

- 📈 **Historical trends** — HDI change from 2010–2024
- 🗺️ **Interactive world map** — choropleth colored by HDI tier
- ⚖️ **Gender Inequality Index (GII)** — add GII predictor
- 🤖 **ML upgrade** — Random Forest / XGBoost for higher accuracy
- 🌐 **Live UNDP API** — real-time data from HDR API
- 📊 **Country comparison** — side-by-side HDI analysis

---

## 👥 Team Members

| Name | Role |
|------|------|
| Uday Ramnath Reddy Kandhula | Member |
| Uday Ramanath Reddy Kandhula | Member |
| Shaik Mohammed Arif | Member |
| P. Tanuj | Member |
| Chakali Venumadhav | Team Lead |

---

## 📚 References

- [UNDP Human Development Report 2023/24](https://hdr.undp.org)
- [HDI Technical Notes](https://hdr.undp.org/technical-notes)
- [Scikit-learn Documentation](https://scikit-learn.org/stable)
- [Flask Documentation](https://flask.palletsprojects.com)
- [React Documentation](https://react.dev)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify.

---

<div align="center">

Made with ❤️ by **Team Well-Being**

⭐ **Star this repo if you found it helpful!** ⭐

[![Live Demo](https://img.shields.io/badge/🚀%20Try%20it%20Live-a-comprehensive-measure-of-well-bei.vercel.app-e63946?style=for-the-badge)](https://a-comprehensive-measure-of-well-bei.vercel.app/)

</div>
