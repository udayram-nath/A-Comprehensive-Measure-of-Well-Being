# Flask Routes

```python
@app.route('/')                          # Home page
@app.route('/Prediction', methods=['GET','POST'])  # Input form
@app.route('/Home', methods=['GET','POST'])        # Back to home
@app.route('/predict', methods=['POST'])           # Run prediction
```

The `/predict` route:
1. Reads form values
2. Encodes country name
3. Passes features to model
4. Classifies HDI score into tier
5. Renders result template
