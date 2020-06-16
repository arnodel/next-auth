// Minimum TypeScript Version: 3.8
/// <reference types="node" />
import type { ConnectionOptions } from "typeorm";

// TODO: `dtslint` throws when parsing Next types, @see https://github.com/microsoft/dtslint/issues/297
// import type { NextApiRequest, NextApiResponse } from 'next';

export interface InitOptions {
  site: string;
  // TODO: type providers
  providers: unknown[];
  databse: ConnectionOptions;
  secret?: string;
  jwt?: boolean;
  jwtSecret?: string;
  sessionMaxAge?: number;
  sessionUpdateAge?: number;
  verificationMaxAge?: number;
  pages?: PageOptions;
  debug?: boolean;
  basePath?: string;
  // TODO: type options
  callbackUrlHandler?: (url: string, options: unknown) => Promise<void>;
  // TODO: type adapters
  adapter?: unknown[];
  useSecureCookies?: boolean;
  cookies?: Cookies;
}

export interface PageOptions {
  signin?: string;
  signout?: string;
  error?: string;
  verifyRequest?: string;
  newUsers?: string | null;
}

export interface Cookies {
  [cookieKey: string]: Cookie;
}

export interface Cookie {
  name: string;
  options: CookieOptions;
}

export interface CookieOptions {
  httpOnly?: boolean;
  // TODO: type available `sameSite` identifiers
  sameSite: "lax";
  path: string;
  secure: boolean;
}

export default function NextAuth(
  req: any,
  res: any,
  options?: InitOptions
): Promise<void>;
