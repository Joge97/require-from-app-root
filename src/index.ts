import {get} from 'app-root-dir';
import {join} from 'path';


export function requireFromAppRoot(path: string): any {
    return require(join(get(), path));
}
