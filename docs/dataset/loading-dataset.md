# Loading the Dataset

```python
import pandas as pd

# Load the dataset
Development = pd.read_csv("HDI.csv")

# Display first 5 rows
Development.head()

# Dataset shape
print(Development.shape)  # (195, 82)

# Column names
print(Development.columns.tolist())
```
