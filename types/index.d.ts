declare module "@ping-identity/pf-authn-js-widget"

export interface IRedirectlessConfig {
  client_id?: string,
  response_type?: string,
  onAuthorizationSuccess: (response: Response) => void,
  onAuthorizationRequest?: () => Promise<Response>,
  scopes?: string[],
  state?: string
}

export interface IOptions {
  divId: string,
  flowId?: string,
  logo?: string,
  invokeReCaptcha?: () => void,
  checkRecaptcha?: string,
  grecaptcha?: any,
  useActionParam?: boolean,
  deviceProfileScript?: string
}

export interface IAuthnWidget {
  init(): void;
  initRedirectless(redirectlessConfig: RedirectlessConfig): void;
  dispatchPendingState(token: string): void;
  clearPendingState(): void;
}

export default class AuthnWidget implements IAuthnWidget {
  constructor(baseUrl: string, options: IOptions);
  init(): void;
  initRedirectless(redirectlessConfig: RedirectlessConfig): void;
  dispatchPendingState(token: string): void;
  clearPendingState(): void;
}