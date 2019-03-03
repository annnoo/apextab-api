



export interface ApextabConfig {
    APEXTAB_HOST_URL: string,
    APEXTAB_API: string,
    ENDPOINTS: KeyValue
} 

interface KeyValue {
    [key: string] : string
}

export const DEFAULT_CONFIG: ApextabConfig = {
    APEXTAB_HOST_URL: 'apextab.com',
    APEXTAB_API: '/api/',
    ENDPOINTS: {
        'SEARCH': 'search.php',
        'PLAYER': 'player.php'
    }
};