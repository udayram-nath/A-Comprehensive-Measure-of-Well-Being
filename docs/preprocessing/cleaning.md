# Data Cleaning

```python
# Drop unnecessary columns
df = Development.drop(['id', 'HDI Rank'], axis=1)

# Handle missing values
df = df.dropna(subset=['HDI', 'Life expectancy',
                        'Mean years of schooling',
                        'Expected years of schooling',
                        'Gross national income (GNI) per capita'])

# Fill remaining nulls with column mean
df.fillna(df.mean(numeric_only=True), inplace=True)

print("Shape after cleaning:", df.shape)
```
