import supabase from "../utils/supabase";

export async function signUp(email, password) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) throw new Error(error);

  return data;
}

export async function login(email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error);

  return data;
}

export async function getCurrentUser() {
  const session = await supabase.auth.getSession();

  if (!session) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
