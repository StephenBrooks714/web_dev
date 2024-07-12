import DescopeClient from '@descope/node-sdk';

try {
    const descopeClient = DescopeClient({ projectId: 'P2hwIdyL38KIgwdClKN9PiPfzF9g' });
    return descopeClient;
} catch (error) {
    console.log("failed to initialize: " + error)
}

// Fetch session token from HTTP Authorization Header
const sessionToken="xxxx"

try {
    const authInfo = await descopeClient.validateSession(sessionToken);
    console.log("Successfully validated user session:");
    console.log(authInfo);
} catch (error) {
    console.log ("Could not validate user session " + error);
}