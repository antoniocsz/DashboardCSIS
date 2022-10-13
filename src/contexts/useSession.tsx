import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";

type UserProps = {};

type CredentialProps = {
  email: string;
  password: string;
  checked: boolean;
};

type SessionContextData = {
  user: UserProps | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
  signIn(crenditals: CredentialProps): Promise<void>;
  signOut(): Promise<void>;
};

const SessionContext = createContext<SessionContextData>(
  {} as SessionContextData
);

type IProviderProps = {
  children: ReactNode;
};

export function SessionProvider({ children }: IProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(true);
  let isAuthenticated = !!user;

  useEffect(() => {
    async function loadStoragedData() {
      try {
      } catch (error) {
      } finally {
        setTimeout(() => setIsInitialized(false), 1000);
      }
    }
    loadStoragedData();
  }, []);

  const signIn = async ({ email, password, checked }: CredentialProps) => {
    try {
    } catch (error) {}
  };

  const signOut = async () => {
    try {
    } catch (error) {}
  };

  return (
    <SessionContext.Provider
      value={{
        user,
        isAuthenticated,
        isInitialized,
        signIn,
        signOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
