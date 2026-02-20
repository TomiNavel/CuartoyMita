"use client";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="container flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-xl">Vaya, un error inesperado.</p>
      <p className="text-red-500">
        <b>Error: </b>{error.message}
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 text-sm rounded-md bg-primary-500 text-white hover:bg-primary-600 transition"
      >
        Reintentar
      </button>
    </div>
  );
}
