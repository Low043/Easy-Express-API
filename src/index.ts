import express, { Application } from 'express';
import https, { Server } from 'https';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

class API {
    private app: Application;
    private server: Server;

    constructor() {
        this.app = express();

        this.server = https.createServer({
            cert: fs.readFileSync(path.join(__dirname, 'server', 'certificate.crt')),
            key: fs.readFileSync(path.join(__dirname, 'server', 'private.key'))
        }, this.app);

        this.server.listen(process.env.PORT || 80, () => {
            console.log(`Server running on port ${process.env.PORT || 80}`);
        });
    }
}

new API();