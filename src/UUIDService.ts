import crypto from 'crypto';

export class UUIDService {

    constructor() {}
    
    public generateUUID(): string {
        return crypto.randomBytes(16).toString("hex");
    }

}