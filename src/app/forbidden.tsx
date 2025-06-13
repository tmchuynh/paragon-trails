import Link from "next/link";

export default function Forbidden() {
  return (
    <div>
      <h1>Forbidden</h1>
      <p>You are not authorized to access this resource.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
