"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const libs_1 = require("../../libs");
/**
 * Resolves the roles into a key value pair where the value
 * is the resolved list of roles that is meant when referred to by key
 *
 * i.e.
 * ```
 *  roles = {
 *      administrators : [
 *          '<the api admin role guid>' ,
 *          'platformAdmin'
 *      ],
 *      platformAdmin : [
 *          '<the api platform admin role guid>'
 *      ]
 * }
 * ```
 * means that any of the roles in the value array will be mapped to the role 'administrators'.
 *
 * essentially resolving to :
 * ```
 *  roles = {
 *      administrators : [
 *          '<the api admin role guid>',
 *          '<the api platform admin role guid>'
 *      ],
 *      platformAdmin : [
 *          '<the api platform admin role guid>'
 *      ]
 *  }
 * ```
 *
 * A guard can then be written to allow any/all/none of the roles depending on what is required
 *
 * The keys in the value array should either refer to a key on roles, or the id
 * of the role to compare against.
 *
 * @param roles the referred role and intended roles
 * @returns the flattened and resolved roles
 */
function flattenRoles(roles) {
    const resolvedRoles = libs_1._.cloneDeep(roles);
    // Everyone is everyone
    resolvedRoles['everyone'] = Object.keys(roles);
    Object.entries(resolvedRoles).forEach(([key, value]) => {
        value.forEach((role, i) => {
            if (typeof role === 'string' && roles[role] && role !== key) {
                value[i] = roles[role];
            }
        });
    });
    return Object.entries(resolvedRoles).reduce((acc, [key, value]) => {
        const roleMapKey = key;
        acc[roleMapKey] = Array.from(new Set(value.flatMap((i) => i)));
        return acc;
    }, {});
}
exports.default = flattenRoles;
//# sourceMappingURL=flattenRoles.js.map