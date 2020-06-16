// Minimum TypeScript Version: 3.8
// declare module "next-auth/client" {
export function useSession(): [SessionData, boolean];
export function getSession({ req }?: { req: any }): Promise<SessionData | null>;

export interface SessionData {
  user: User;
  accessToken?: string;
  expires: string;
}

export interface User {
  name: string | null;
  email: string | null;
  image: string | null;
}
// }
