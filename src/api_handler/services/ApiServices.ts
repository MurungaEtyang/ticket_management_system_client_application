import HandleApi from '../backend/HandleApi';
import {ApiConfig} from "../config/apiConfig";
import {ApiEndpoints} from "../config/apiEndpoints";

export class ApiServices {

    private apiConfig = new ApiConfig();
    private apiEndpoints = new ApiEndpoints();
    private handleApi: HandleApi;

    private apiUrl: string = this.apiConfig.getApiUrl();
    private port: number = this.apiConfig.getApiPort()

    constructor() {
        this.handleApi = new HandleApi(this.apiUrl + this.port, this.getAuthorization());
    }

    private getAuthorization(): string {
        const authorization = sessionStorage.getItem("email_password_credentials");
        return authorization !== null ? authorization : "";
    }

    /* start get api*/
    /*login users*/

    async login() {
        const apiEndpoint = await this.apiEndpoints.loginEndpoint();
        await this.handleApi.get(apiEndpoint).then(response => {
            if(response.success){
                console.log(response.data)
            }
        })
        try {
            return await this.handleApi.get(apiEndpoint);
            alert('success')
        } catch (error) {
            console.error('Error during user registration:', error);
            return { success: false, error };
        }
    }
    async allUsers() {
        const apiEndpoint = await this.apiEndpoints.allUsersEndpoint()
        try {
            return await this.handleApi.get(apiEndpoint);
        } catch (error) {
            console.error('Error fetching roles department:', error);
            return { success: false, error };
        }
    }

    /* Fetch all department */
    async fetchRolesDepartmentAuthorities() {
        const apiEndpoint = await this.apiEndpoints.fetchRolesDepartmentAuthoritiesEndpoint()
        try {
            return await this.handleApi.get(apiEndpoint);
        } catch (error) {
            console.error('Error fetching roles department:', error);
            return { success: false, error };
        }
    }

    /*Downgrade user role*/
    async demoteUserRole (email: any, role: any){
        const apiEndpoint =
            '/api/v1/users/management/downgrade?username='+ email + '&role_to_remove=' + role;

        try {
            return await this.handleApi.get(apiEndpoint);
        }catch (error) {
            console.error('Error during user registration:', error);
            return { success: false, error };
        }

    }

    async getAllTickets (){
        const apiEndpoint = await this.apiEndpoints.getAllTicketsEndpoint()

        try {
            return await this.handleApi.get(apiEndpoint);
        }catch (error) {
            console.error('Error during user registration:', error);
            return { success: false, error };
        }

    }

    /*end of get api*/

    /*start of post api*/
    /* Registration of users */
    async registrationOfUsers(department: string, email: string, password: string) {
        const apiEndpoint = await this.apiEndpoints.registrationOfUsersEndpoint();
        const data = {
            username: email,
            password,
            role: department,
        };

        try {
            return await this.handleApi.post(apiEndpoint, data);
        } catch (error) {
            console.error('Error during user registration:', error);
            return { success: false, error };
        }
    }

    /*verification of users*/
    async verificationOfUsers(email: string, token: string){
        const apiEndpoint =
            '/api/v1/users/registration/activate?username='+ email +'&activation_token='+ token
        const data = {
            activation_token: token,
            username: email,
        }
        try {
            return await this.handleApi.post(apiEndpoint, data);
        }catch (error) {
            console.error('Error during user registration:', error);
            return { success: false, error };
        }
    }

    /*end of post api*/

    /*START PUT API*/

    async elevateUserRole (email: string, role: string){
        const apiEndpoint = '/api/v1/users/management/elevate?authority='+ role +
            '&username=' + email;

        const data = {
            username: email,
            role_to_remove: role
        }
        try {
            return await this.handleApi.put(apiEndpoint, data);
        }catch (error) {
            console.error('Error during user registration:', error);
            return { success: false, error };
        }

    }

    /*END OF PUT API*/
}
