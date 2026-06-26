# Model Versioning Strategy

| Version | Algorithm          | R² Score | Date       |
|---------|--------------------|----------|------------|
| v1.0    | Linear Regression  | 0.94     | 2024-01-01 |
| v1.1    | Linear Regression  | 0.96     | 2024-06-01 |

## File Naming Convention
- `model_v1.pkl` → version 1
- `model_latest.pkl` → symlink to latest
- `encoder.pkl` → LabelEncoder for Country
