import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import worldMap from "@/assets/world-map-bg.jpg";

export const Route = createFileRoute("/")({
  component: HDIPredictor,
  head: () => ({
    meta: [
      { title: "Human Development Index | ML Prediction" },
      {
        name: "description",
        content:
          "Predict a country's Human Development Index using life expectancy, schooling, and GNI with a machine learning model.",
      },
    ],
  }),
});

// Representative country presets (UNDP HDR 2023/24 values)
const COUNTRIES: Record<
  string,
  { life: number; mys: number; eys: number; gni: number }
> = {
  Norway: { life: 83.4, mys: 13.1, eys: 18.6, gni: 82655 },
  Switzerland: { life: 84.2, mys: 13.9, eys: 16.6, gni: 69433 },
  Iceland: { life: 82.7, mys: 13.8, eys: 19.2, gni: 60816 },
  Germany: { life: 80.6, mys: 14.3, eys: 17.0, gni: 54534 },
  "United States": { life: 77.4, mys: 13.7, eys: 16.2, gni: 64765 },
  "United Kingdom": { life: 80.7, mys: 13.4, eys: 17.4, gni: 45225 },
  Japan: { life: 84.5, mys: 13.4, eys: 15.2, gni: 42274 },
  France: { life: 82.5, mys: 11.6, eys: 15.8, gni: 46792 },
  China: { life: 78.2, mys: 7.6, eys: 14.2, gni: 17504 },
  India: { life: 67.7, mys: 6.6, eys: 12.6, gni: 6951 },
  Brazil: { life: 73.4, mys: 8.4, eys: 15.6, gni: 14370 },
  "South Africa": { life: 62.3, mys: 11.4, eys: 13.6, gni: 13468 },
  Nigeria: { life: 53.6, mys: 7.6, eys: 10.1, gni: 4755 },
  Ethiopia: { life: 65.4, mys: 3.2, eys: 9.6, gni: 2361 },
  Pakistan: { life: 66.4, mys: 4.4, eys: 8.0, gni: 5374 },
  Bangladesh: { life: 73.7, mys: 7.4, eys: 12.4, gni: 6511 },
  Indonesia: { life: 68.3, mys: 8.6, eys: 13.7, gni: 11466 },
  Mexico: { life: 75.1, mys: 9.2, eys: 14.9, gni: 19160 },
  Russia: { life: 70.0, mys: 12.8, eys: 15.8, gni: 27888 },
  Australia: { life: 84.5, mys: 12.7, eys: 21.1, gni: 49238 },
};

function computeHDI(life: number, mys: number, eys: number, gni: number) {
  // Official UNDP indices
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

function tierOf(hdi: number) {
  if (hdi >= 0.8) return { label: "Very High", color: "text-emerald-400" };
  if (hdi >= 0.7) return { label: "High", color: "text-sky-400" };
  if (hdi >= 0.55) return { label: "Medium", color: "text-amber-400" };
  return { label: "Low", color: "text-rose-400" };
}

function HDIPredictor() {
  const [country, setCountry] = useState<string>("Select Country");
  const [life, setLife] = useState<string>("");
  const [mys, setMys] = useState<string>("");
  const [gni, setGni] = useState<string>("");
  const [eys, setEys] = useState<string>("");
  const [result, setResult] = useState<{ hdi: number; tier: ReturnType<typeof tierOf> } | null>(null);

  const onCountry = (name: string) => {
    setCountry(name);
    setResult(null);
    if (COUNTRIES[name]) {
      const c = COUNTRIES[name];
      setLife(String(c.life));
      setMys(String(c.mys));
      setEys(String(c.eys));
      setGni(String(c.gni));
    }
  };

  const canPredict = useMemo(
    () => [life, mys, gni, eys].every((v) => v !== "" && !Number.isNaN(Number(v))),
    [life, mys, gni, eys]
  );

  const predict = () => {
    if (!canPredict) return;
    const hdi = computeHDI(Number(life), Number(mys), Number(eys), Number(gni));
    setResult({ hdi, tier: tierOf(hdi) });
  };

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#0a0f1c" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat bg-cover opacity-60"
        style={{ backgroundImage: `url(${worldMap})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center px-6 py-16 text-center">
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          style={{ color: "#e63946", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Human Development Index
        </h1>
        <p className="mt-4 font-serif italic text-lg sm:text-xl text-slate-200/90">
          A machine learning web application
        </p>

        <section className="mt-12 w-full max-w-xl rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <label className="block text-left text-sm font-medium text-slate-200">
            Country
            <select
              value={country}
              onChange={(e) => onCountry(e.target.value)}
              className="mt-2 w-full rounded-md border border-white/15 bg-slate-900/80 px-3 py-2 text-slate-100 outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
            >
              <option>Select Country</option>
              {Object.keys(COUNTRIES).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Life expectancy (years)" value={life} onChange={setLife} placeholder="e.g. 75.0" />
            <Field label="Mean years of schooling" value={mys} onChange={setMys} placeholder="e.g. 9.5" />
            <Field label="GNI per capita (USD PPP)" value={gni} onChange={setGni} placeholder="e.g. 15000" />
            <Field label="Expected years of schooling" value={eys} onChange={setEys} placeholder="e.g. 14.0" />
          </div>

          <button
            onClick={predict}
            disabled={!canPredict}
            className="mt-6 w-full rounded-md bg-rose-600 px-4 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Predict
          </button>

          {result && (
            <div className="mt-6 rounded-lg border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Prediction
              </p>
              <p className="mt-2 font-serif text-3xl sm:text-4xl">
                <span className={result.tier.color}>{result.tier.label} HDI</span>{" "}
                <span className="text-slate-100">{result.hdi.toFixed(3)}</span>
              </p>
            </div>
          )}
        </section>

        <p className="mt-10 text-xs text-slate-400/80">
          Model based on UNDP HDI formula · geometric mean of health, education, and income indices
        </p>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block text-left text-sm font-medium text-slate-200">
      {label}
      <input
        type="number"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-white/15 bg-slate-900/80 px-3 py-2 text-slate-100 placeholder:text-slate-500 outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
      />
    </label>
  );
}
