import { ApiConfig} from "../config/apiConfig";
import  { ApiEndpoints } from "../config/apiEndpoints";
export class Login {
    private apiConfig = new ApiConfig();
    private apiEndpoints = new ApiEndpoints();
    private readonly email: string;
    private readonly password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    private getAuthorization(): string {
        const authorization = sessionStorage.getItem("email_password_credentials");
        return authorization !== null ? authorization : "";
    }

    async login() {
        const credentials: string = this.getAuthorization();

        sessionStorage.setItem("email_password_credentials", credentials);

        const response = await fetch(this.apiConfig.getApiUrl() + this.apiConfig.getApiPort() + await this.apiEndpoints.loginEndpoint(), {
            method: "GET",
            headers: {
                // 'Content-Type': 'application/json',
                Authorization: 'Basic ' + credentials,
            }
        });

        if (response.ok) {
            const data = await response.json();

            console.log(data);
        }
    }


}