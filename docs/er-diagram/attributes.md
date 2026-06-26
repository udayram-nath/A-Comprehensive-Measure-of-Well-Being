# Entity Attributes

## Country
- country_id (PK), name, iso_code, region

## HDI Input Data
- input_id (PK), country_id (FK), life_expectancy, mean_years_schooling,
  expected_years_schooling, gni_per_capita, created_at

## HDI Prediction
- prediction_id (PK), input_id (FK), model_id (FK), hdi_score, tier,
  predicted_at

## ML Model
- model_id (PK), algorithm, version, accuracy, trained_at
