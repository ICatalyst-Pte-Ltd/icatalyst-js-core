/**
 * Generates a random uuid.
 *
 * This should not be used for stored uuids as it is
 * intentionally fast over collision resistant.
 *
 * Generally this should be used to generate a temporary state
 */
export default function generateUUID(): string;
