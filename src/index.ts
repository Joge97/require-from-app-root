import {get} from 'app-root-dir';
import {join} from 'path';


export function requireFromAppRoot(path: string): any {
    return require(join(getAppRoot(), path));
}

export function getAppRoot(): string {
    return get();
}

export function joinToAppRoot(path: string): string {
    return join(getAppRoot(), path);
}
