export class ApiEndpoints{

    async loginEndpoint(){
        return "/api/v1/login";
    }

    async allUsersEndpoint(){
        return "/api/v1/users/management";
    }

    async fetchRolesDepartmentAuthoritiesEndpoint(){
        return "/api/v1/authority/all";
    }

    async demoteUserRoleEndpoint(){
        return "/api/v1/users/management/downgrade";
    }

    async getAllTicketsEndpoint (){
        return "/api/v1/tickets/report";
    }

    async registrationOfUsersEndpoint(){
        return "/api/v1/users/registration/register";
    }

    async verificationOfUsersEndpoint(){
        return "/api/v1/users/registration/verify";
    }

    async logoutEndpoint(){
        return "/api/v1/logout";
    }

    async elevateUserRoleEndpoint(){
        return "/api/v1/users/management/upgrade";
    }
}