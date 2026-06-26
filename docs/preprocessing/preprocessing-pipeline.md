# Complete Preprocessing Pipeline

```python
def preprocess(df):
    # 1. Drop unnecessary columns
    df = df.drop(['id', 'HDI Rank'], axis=1, errors='ignore')
    # 2. Handle missing values
    df = df.dropna(subset=['HDI'])
    df.fillna(df.mean(numeric_only=True), inplace=True)
    # 3. Label encode country
    le = LabelEncoder()
    df['Country_encoded'] = le.fit_transform(df['Country'])
    # 4. Select features
    X = df[['Country_encoded','Life expectancy',
             'Mean years of schooling',
             'Gross national income (GNI) per capita',
             'Expected years of schooling']]
    y = df['HDI']
    return X, y, le
```
