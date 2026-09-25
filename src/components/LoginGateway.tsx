import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Cloud, Database, Award, ArrowRight, Lock, AlertCircle, Sparkles } from 'lucide-react';

export const LoginGateway: React.FC = () => {
  const { signInWithGoogle, signInWithGoogleAccount, loading } = useAuth();
  const [emailInput, setEmailInput] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGoogleSSO = async () => {
    setErrorMessage(null);
    setIsSubmitting(true);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      console.error('Google Sign-in error:', err);
      setErrorMessage(
        err?.message || 'No se pudo completar el inicio de sesión con Google. Inténtalo de nuevo o introduce tu correo de Google.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes('@')) {
      setErrorMessage('Por favor introduce un correo válido de Google o Google Workspace (@google.com).');
      return;
    }
    setErrorMessage(null);
    setIsSubmitting(true);
    try {
      await signInWithGoogleAccount(emailInput.trim());
    } catch (err: any) {
      setErrorMessage(err?.message || 'Error al verificar la credencial de Google.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
      {/* Background radial glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md px-6 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-white text-sm tracking-tight block">Google Cloud Project Elevate</span>
            <span className="text-[11px] text-slate-400 font-mono">Capstone Accreditation Engine</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
          <Lock className="w-3.5 h-3.5 text-blue-400" />
          <span>Acceso Restringido • Single Sign-On</span>
        </div>
      </header>

      {/* Main Hero & Auth Card */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10">
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Accreditation Value & Features */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/25">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Simulador Oficial para Customer Engineers</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Acredita tu maestría en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Agentic AI & ADK
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Portal exclusivo de preparación para el examen final HackerRank de Project Elevate. Para acceder al banco de 150 preguntas, realizar simulaciones cronometradas y registrar tu historial en Cloud Firestore, inicia sesión con tu credencial de Google.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center space-x-2 text-blue-400">
                  <Database className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Firestore Real</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Persistencia inmutable de intentos y progreso real sin datos simulados.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Benchmark 90%</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Simulaciones de 30 preguntas y 45 minutos conforme al estándar oficial.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center space-x-2 text-indigo-400">
                  <Cloud className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">150 Preguntas</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Cobertura completa de M0 (Foundations), M1, M2 y M3.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Single Sign-On Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="text-center space-y-2 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">Portal de Entrada</h2>
                <p className="text-xs text-slate-400">
                  Identifícate con tu cuenta de Google para desbloquear el simulador y tus dashboards.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Primary Action: Official Google Sign-in Button */}
              <button
                type="button"
                onClick={handleGoogleSSO}
                disabled={loading || isSubmitting}
                className="w-full flex items-center justify-center space-x-3 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-100 text-slate-900 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer"
              >
                {/* Official Google 4-color "G" SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.39 7.35 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.61 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                  />
                </svg>
                <span>{isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión con Google'}</span>
              </button>

              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800" />
                </div>
                <span className="relative px-3 bg-slate-900 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  o accede con tu correo Google
                </span>
              </div>

              {/* Secondary Direct Form: Google Corporate / Workspace Identity */}
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Cuenta de Google / Workspace
                  </label>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="ej. ce.architect@google.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || isSubmitting}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <span>Verificar y Entrar al Simulador</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
                <span className="text-[11px] text-slate-500">
                  Tus resultados se almacenarán vinculados a tu identidad en Firestore.
                </span>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-4 px-6 text-xs text-slate-500 text-center">
        Google Cloud Project Elevate • HackerRank Benchmark 90% • Región europe-southwest1 (Madrid)
      </footer>

    </div>
  );
};
