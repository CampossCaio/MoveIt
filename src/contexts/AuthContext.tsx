import { createContext, ReactNode, useState } from "react";
import githubApi from "../services/githubApi";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface IUser {
  name: string;
  avatar_url: string;
}

interface AuthContextData {
  user: IUser;
  signIn: (username: string) => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as IUser);

  const route = useRouter();

  async function signIn(username: string): Promise<void> {
    try {
      const response = await githubApi.get(`/users/${username}`);
      setUser(response.data);
      route.push("/home");
    } catch (err) {
      toast.error("Usuário não encontrado!", {
        autoClose: 3000,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
