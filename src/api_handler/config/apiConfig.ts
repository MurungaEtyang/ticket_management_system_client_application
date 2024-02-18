export class ApiConfig {
    private apiUrl='http://localhost:';
    private apiPort = 8080;

    /*authorization come from Login.ts*/
    private authorizationCode = sessionStorage.getItem("email_password_credentials")

    getApiUrl(): string {
        return this.apiUrl;
    }

    getApiPort(): number {
        return this.apiPort;
    }

    getAuthorizationCode(): string {
        if (this.authorizationCode !== null) {
            return this.authorizationCode;
        } else {
            throw new Error("Authorization code is null");
        }
    }
}