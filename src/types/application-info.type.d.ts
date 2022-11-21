export interface ApplicationInfo {
    name: string;
    version: string;
    description?: string;
    author: {
        name: string;
        logo?: string;
        url?: string;
    };
    logo?: string;
    featureImage?: string;
    keywords?: string;
}
