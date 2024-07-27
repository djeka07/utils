export const http = () => (typeof (<Window>window) === 'undefined' ? { fetch } : <Window>window);
