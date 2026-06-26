# Testing With Sample Values

```python
# Test with few values: [country_encoded, life_exp, mys, gni, eys]
y_pred = reg.predict([[13, 72.0, 5.2, 3341.0, 14.4]])
print(y_pred)
# Output: [[0.48]]  → Medium HDI
```

## Tier Classification
| HDI Range     | Tier      |
|---------------|-----------|
| 0.800 – 1.000 | Very High |
| 0.700 – 0.799 | High      |
| 0.550 – 0.699 | Medium    |
| 0.300 – 0.549 | Low       |
