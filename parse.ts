const { DenoError, ErrorKind } = Deno;

export async function parse(content: string): Promise<any> {
    throw new DenoError(ErrorKind.Other, 'Not yet implemented.');
}

export function parseSync(content: string): any {
    throw new DenoError(ErrorKind.Other, 'Not yet implemented.');
}