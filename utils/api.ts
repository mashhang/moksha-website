const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function signup({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
  });
  return res.json();
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}
