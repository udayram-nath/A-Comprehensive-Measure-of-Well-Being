# Flask Web Application Imports

```python
from flask import Flask, render_template, request
import numpy as np
import pandas as pd
import pickle

app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))
```
