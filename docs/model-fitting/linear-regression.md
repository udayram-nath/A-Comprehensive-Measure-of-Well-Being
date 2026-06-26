# Fitting the Linear Regression Model

```python
from sklearn.linear_model import LinearRegression

# Instantiate model
reg = LinearRegression()

# Train on training data
reg.fit(X_train, y_train)

print("Model coefficients:", reg.coef_)
print("Model intercept:", reg.intercept_)
```
