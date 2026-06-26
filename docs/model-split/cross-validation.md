# Cross Validation (Optional)

```python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(reg, X, y, cv=5, scoring='r2')
print("CV R² Scores:", scores)
print("Mean R²:", scores.mean())
print("Std Dev:", scores.std())
```

Cross-validation gives a more reliable estimate of model performance across multiple splits.
