# Feature Selection

```python
# Selected input features
features = [
    'Country_encoded',
    'Life expectancy',
    'Mean years of schooling',
    'Gross national income (GNI) per capita',
    'Expected years of schooling'
]

X = df[features]
y = df['HDI']

print("Feature matrix shape:", X.shape)
print("Target shape:", y.shape)
```
