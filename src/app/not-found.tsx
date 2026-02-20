import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-xl">Página no encontrada.</p>
      <Link
        href="/"
        className="px-4 py-2 text-sm rounded-md bg-primary-500 text-white hover:bg-primary-600 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
