# UNDP Index Normalization

The UNDP HDI uses min-max normalization for each dimension:

```python
# Life Index
life_idx = (life_expectancy - 20) / (85 - 20)

# Education Index (mean of MYS and EYS)
mys_idx = mean_years_schooling / 15
eys_idx = expected_years_schooling / 18
edu_idx = (mys_idx + eys_idx) / 2

# Income Index (log scale)
import math
inc_idx = (math.log(gni) - math.log(100)) / (math.log(75000) - math.log(100))

# Clamp to [0, 1]
def clamp(n): return min(1, max(0, n))
```
