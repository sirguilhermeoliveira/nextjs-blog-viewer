import { User } from "@/types/user";

export async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 60 } });
  return res.json();
}

export async function getUser(userId: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { next: { revalidate: 60 } });
  return res.json();
}