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
export default function flattenRoles<T extends Record<string, string[]>, R = T & {
    everyone: string[];
}>(roles: T): R;
