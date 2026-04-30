import app from "./app.ts";
import { sequelize } from "./db/sequelize.ts";

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() =>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})