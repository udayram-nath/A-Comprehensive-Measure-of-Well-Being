# UNDP HDI Formula (Frontend Implementation)

```typescript
function computeHDI(life: number, mys: number, eys: number, gni: number) {
  const lifeIdx = (life - 20) / (85 - 20);
  const mysIdx = mys / 15;
  const eysIdx = eys / 18;
  const eduIdx = (mysIdx + eysIdx) / 2;
  const incIdx =
    (Math.log(Math.max(gni, 100)) - Math.log(100)) /
    (Math.log(75000) - Math.log(100));

  const clamp = (n: number) => Math.min(1, Math.max(0, n));
  const hdi = Math.cbrt(clamp(lifeIdx) * clamp(eduIdx) * clamp(incIdx));
  return Math.min(1, Math.max(0, hdi));
}
```

This is the geometric mean of health, education, and income indices.
