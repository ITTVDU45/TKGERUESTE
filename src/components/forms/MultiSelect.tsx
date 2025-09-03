"use client"
import { useState } from "react";

const options = [
  { value: "rundherum", label: "Rundherum" },
  { value: "vordere-seite", label: "Vordere Seite" },
  { value: "linke-seite", label: "Linke Seite" },
  { value: "rechte-seite", label: "Rechte Seite" },
];

const MultiSelect = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = () => setOpen((v) => !v);
  const onToggleOption = (value: string) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]));
  };

  return (
    <div className="custom-multiselect" style={{ position: "relative" }}>
      <button type="button" onClick={toggle} className="primary-btn-4 btn-hover" style={{ width: "100%", textAlign: "left" }}>
        {selected.length === 0 ? "Wähle Maßnahmen" : selected.map((s) => options.find((o) => o.value === s)?.label).join(', ')}
      </button>

      {open && (
        <div className="custom-multiselect-dropdown" style={{ position: "absolute", zIndex: 40, width: "100%", background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8, marginTop: 8, boxShadow: "0 8px 24px rgba(16,32,57,0.08)" }}>
          {options.map((opt) => (
            <label key={opt.value} style={{ display: "flex", alignItems: "center", padding: "6px 10px", cursor: "pointer" }}>
              <input type="checkbox" checked={selected.includes(opt.value)} onChange={() => onToggleOption(opt.value)} style={{ marginRight: 12, width: 16, height: 16 }} />
              <span style={{ fontSize: 15, color: '#1f2937' }}>{opt.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;


