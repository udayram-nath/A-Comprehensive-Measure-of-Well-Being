# Predict Function

```python
@app.route('/predict', methods=['POST'])
def predict():
    input_features = [float(x) for x in request.form.values()]
    features_value = np.array(input_features)
    df = pd.DataFrame([features_value], columns=features_name)
    output = model.predict(df)
    y_pred = round(output[0], 2)

    if y_pred >= 0.3 and y_pred <= 0.4:
        prediction_text = 'Low HDI ' + str(y_pred)
    elif y_pred > 0.4 and y_pred <= 0.7:
        prediction_text = 'Medium HDI ' + str(y_pred)
    elif y_pred > 0.7 and y_pred <= 0.8:
        prediction_text = 'High HDI ' + str(y_pred)
    elif y_pred > 0.8 and y_pred <= 0.94:
        prediction_text = 'Very High HDI ' + str(y_pred)

    return render_template('resultnew.html', prediction_text=prediction_text)
```
