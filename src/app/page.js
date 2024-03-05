import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href="/register">Register</Link>
      <Link href="/login">login</Link>
      <Link href="/sign-up">Sign Up</Link>
      <Link href="/forgot-password">Forgot Password</Link>
      <Link href="/setnewpassword">setNew password</Link>
      <Link href="/verifycode">verification</Link>
    </div>
  );
}
