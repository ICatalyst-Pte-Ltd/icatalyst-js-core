"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDomainFromHost(host) {
    const parts = host.split('.'); // Split the host by "." to get the parts
    // Remove all subdomains (if present)
    while (parts.length > 2) {
        parts.shift();
    }
    // Remove the port (if present)
    parts[parts.length - 1] = parts[parts.length - 1].split(':').shift() || '';
    // Rejoin the parts to get the modified host
    return parts.join('.');
}
exports.default = getDomainFromHost;
//# sourceMappingURL=getDomainFromHost.js.map