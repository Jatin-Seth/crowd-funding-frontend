const stripQuotes = (value) => String(value || '').trim().replace(/^['"]+|['"]+$/g, '');
const requireEnv = (name, value) => {
    const cleaned = stripQuotes(value);
    if (!cleaned) {
        throw new Error(`Missing or invalid env variable: ${name}. Check .env in client/`);
    }
    return cleaned;
};

export const config = {
    appwriteUrl: requireEnv('VITE_APPWRITE_PROJECT_URL', import.meta.env.VITE_APPWRITE_PROJECT_URL),
    appwriteProjectId: requireEnv('VITE_APPWRITE_PROJECT_ID', import.meta.env.VITE_APPWRITE_PROJECT_ID),
};