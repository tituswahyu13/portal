import React from 'react';
import { apps } from './data';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden font-sans text-white selection:bg-cyan-500 selection:text-white">

      {/* Dynamic Water Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-blue-900 to-cyan-900">
        {/* Animated Orbs/Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse-gentle mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>

        {/* Mesh Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMTQwIDBIODBsNDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-30"></div>

        {/* Waves Container */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="relative w-full h-[15vh] min-h-[100px] max-h-[150px]" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" className="fill-blue-500/30 animate-[move-forever_25s_cubic-bezier(.55,.5,.45,.5)_infinite]" style={{ animationDelay: '-2s', animationDuration: '7s' }} />
              <use xlinkHref="#gentle-wave" x="48" y="3" className="fill-cyan-500/30 animate-[move-forever_25s_cubic-bezier(.55,.5,.45,.5)_infinite]" style={{ animationDelay: '-3s', animationDuration: '10s' }} />
              <use xlinkHref="#gentle-wave" x="48" y="5" className="fill-teal-500/30 animate-[move-forever_25s_cubic-bezier(.55,.5,.45,.5)_infinite]" style={{ animationDelay: '-4s', animationDuration: '13s' }} />
              <use xlinkHref="#gentle-wave" x="48" y="7" className="fill-blue-900/50 animate-[move-forever_25s_cubic-bezier(.55,.5,.45,.5)_infinite]" style={{ animationDelay: '-5s', animationDuration: '20s' }} />
            </g>
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <header className="mb-16 text-center animate-fade-in relative">
          <div className="flex justify-center mb-8 relative">
            <div className="relative">
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full animate-float"></div>
              <img
                src="./logo.png"
                alt="Logo Perumda"
                className="relative h-28 w-auto object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 animate-flow bg-[length:200%_auto]">
              Perumda Air Minum
            </span>
            <br />
            <span className="text-2xl md:text-4xl text-slate-300 font-light mt-2 block tracking-widest uppercase">
              Kota Magelang
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-8 rounded-full opacity-50"></div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {apps.map((app, index) => (
            <a
              key={app.id}
              href={app.url}
              className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(8,145,178,0.3)] overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glass Shine Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex items-start space-x-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${app.color.replace('bg-', 'from-').replace('500', '400')} to-transparent bg-opacity-10 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <app.icon className="w-8 h-8 text-white drop-shadow-md" />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300 mb-2">
                    {app.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {app.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 ${app.color} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full`}></div>

              {/* Arrow Indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-24 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Perumda Air Minum Kota Magelang. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
