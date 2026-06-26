# Exploratory Data Analysis

```python
# Basic statistics
Development.describe()

# Check for missing values
Development.isnull().sum()

# Data types
Development.dtypes

# HDI distribution
import matplotlib.pyplot as plt
Development['HDI'].hist(bins=20)
plt.title("HDI Score Distribution")
plt.xlabel("HDI Score")
plt.ylabel("Frequency")
plt.show()
```
