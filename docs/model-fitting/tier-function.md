# Tier Classification Function

```typescript
function tierOf(hdi: number) {
  if (hdi >= 0.8) return { label: "Very High", color: "text-emerald-400" };
  if (hdi >= 0.7) return { label: "High",      color: "text-sky-400" };
  if (hdi >= 0.55) return { label: "Medium",   color: "text-amber-400" };
  return              { label: "Low",           color: "text-rose-400" };
}
```

Color-coded result displayed to the user in the web UI.
