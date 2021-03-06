import "reflect-metadata";
import dotenv from 'dotenv';
import {createConnection} from "typeorm";
import Kernel from "src/discordBot/Kernel";

dotenv.config();

createConnection().then(connection => {
    const dicordBot: Kernel = Kernel.getInstance();
    dicordBot.listen();
}).catch(error => console.log(error));
