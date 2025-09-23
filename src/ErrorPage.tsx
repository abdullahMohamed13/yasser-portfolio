import { Link } from "react-router-dom";

export default function ErrorPage() {
  return <div className="w-full flex justify-center flex-col items-center">
    <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-4 rounded-lg bg-destructive px-4 py-2 hover:bg-destructive/60 transition"
        >
        Go Home
      </Link>
    </div>
}
