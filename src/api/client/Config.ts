export interface ApextabConfig {
    APEXTAB_HOST_URL: string,
    APEXTAB_API: string,
    ENDPOINTS: KeyValue
} 

interface KeyValue {
    [key: string] : string
}