"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('cookie_consent_dismissed');
      if (!dismissed) setVisible(true);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try { localStorage.setItem('cookie_consent_dismissed', '1'); } catch {}
    setVisible(false);
  };

  return (
    <div className="fixed left-4 right-4 bottom-6 z-50">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur rounded-xl shadow-md p-4 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 text-sm text-slate-800">
          Wir verwenden Cookies, um das Angebot zu verbessern und das Nutzererlebnis zu optimieren. Weitere Informationen findest du in unserer <Link href="/legal/datenschutz" className="underline">Datenschutzerklärung</Link>.
        </div>
        <div className="flex gap-2">
          <button onClick={accept} className="btn btn-primary px-4 py-2 rounded-md">Akzeptieren</button>
          <button onClick={() => setVisible(false)} className="px-4 py-2 rounded-md border">Schließen</button>
        </div>
      </div>
    </div>
  );
}


