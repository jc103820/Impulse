import { app } from "./app";

const port = app.get("port");
const server = app.listen(port, listening);

function listening(){
    console.log(`server live at: localhost::${port}`);
}

export default server;
