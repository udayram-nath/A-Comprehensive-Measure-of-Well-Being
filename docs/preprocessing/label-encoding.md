# Label Encoding

```python
from sklearn.preprocessing import LabelEncoder

le = LabelEncoder()

# Encode Country column
df['Country_encoded'] = le.fit_transform(df['Country'])

# Save encoder for prediction use
import pickle
with open('encoder.pkl', 'wb') as f:
    pickle.dump(le, f)

print("Unique countries encoded:", len(le.classes_))
```
