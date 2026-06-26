# Loading the Saved Model

```python
import pickle

# Load the model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# Load the encoder
with open('encoder.pkl', 'rb') as f:
    le = pickle.load(f)

print("Model loaded successfully")
```
