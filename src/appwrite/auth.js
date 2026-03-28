import { Client, Account, ID , OAuthProvider} from "appwrite";
import { config } from '../config/config';


export class Auth {
    client;
    account;
    
    constructor() {
        this.client = new Client()
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async register({ email, password, username }) {
        try {
            const user = await this.account.create(
                ID.unique(), 
                email,
                password,
                username
            );

            if (user) {
                // Automatically log in the user after registration
                return await this.login({ email, password });
            }

            return null;
        } catch (err) {
            console.log("Registration error:", err);
            throw err;
        }
    }

    async login({ email, password }) {
        try {
            // Check if a session already exists
            const existingSession = await this.getSession();
            if (existingSession) {
                console.log("Session already active. Returning existing session.");
                return existingSession;
            }

            // Create a new session only if there isn't an active session
            const session = await this.account.createEmailPasswordSession(email, password);
            return session || null;
        } catch (err) {
            console.log("Login error:", err);
            throw err;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (err) {
            console.log("Get current user error:", err);
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (err) {
            console.log("Logout error:", err);
            throw err;
        }
    }

    async getSession() {
        try {
            return await this.account.getSession('current');
        } catch (err) {
            console.log("No active session found.");
            return null;
        }
    }

    async googleAuth() {
        try {
            const origin = window.location.origin || `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
            const successRedirect = `${origin}/`;
            const failureRedirect = `${origin}/login`;

            // sanity-check redirect URLs before calling Appwrite
            new URL(successRedirect);
            new URL(failureRedirect);

            await this.account.createOAuth2Session(
                OAuthProvider.Google,
                successRedirect,
                failureRedirect
            );
        } catch (err) {
            console.log("Google Authentication error:", err);
            console.log("Google auth url check:", {
                appwriteUrl: this.client ? this.client.config?.endpoint : undefined,
                successRedirect: window.location.origin,
            });
            throw err;
        }
    }

    async createSession(){
        try{
            const result = await account.createAnonymousSession();
            return result;
        }catch(err){
            throw err;
        }
    }
    
}

export const auth = new Auth();
