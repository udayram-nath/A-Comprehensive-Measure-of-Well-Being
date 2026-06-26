# Entity Relationships

## Cardinality

- **User** → **Session**: One-to-Many (a user can have many sessions)
- **Session** → **HDI Input Data**: One-to-One (each session has one input)
- **HDI Input Data** → **Country**: Many-to-One (many inputs reference one country)
- **Country** → **Dataset**: Many-to-One (countries sourced from dataset)
- **HDI Input Data** → **ML Model**: Many-to-One (inputs are processed by one model)
- **ML Model** → **HDI Prediction**: One-to-Many (model produces many predictions)
- **HDI Prediction** → **Visualization Report**: One-to-One
