export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-bg">
      <div className="text-center space-y-4">
        <p className="font-mono text-sm text-accent tracking-widest uppercase">
          design system
        </p>
        <h1 className="text-4xl font-bold text-text">
          Rodrigo Baião
        </h1>
        <p className="text-text-muted">
          Testando paleta e tipografia
        </p>
        <button className="mt-4 px-6 py-3 rounded-lg bg-accent text-bg font-semibold">
          Botão de teste
        </button>
      </div>
    </main>
  );
}