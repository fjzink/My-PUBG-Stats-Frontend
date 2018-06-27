export const SET_PLATFORM = 'set_platform';
export const SET_REGION = 'set_region';

export function setPlatform(platform) {
    return {
        type: SET_PLATFORM,
        payload: platform,
    };
}

export function setRegion(region) {
    return {
        type: SET_REGION,
        payload: region,
    };
}
