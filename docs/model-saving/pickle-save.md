# Saving the Model with Pickle

```python
import pickle

# Save the trained model
with open('Flask/model.pkl', 'wb') as f:
    pickle.dump(reg, f)

# Save the label encoder
with open('Flask/encoder.pkl', 'wb') as f:
    pickle.dump(le, f)

print("Model saved as model.pkl")
print("Encoder saved as encoder.pkl")
```
