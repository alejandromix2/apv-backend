import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import veterinarioRoutes from "./routes/veterinarioRoutes.js"
import pacienteRoutes from "./routes/pacienteRoutes.js"


const app = express();

app.use(express.json())
dotenv.config();

conectarDB();

 const dominiosPermitidos = [process.env.FRONTEND_URL];

 // Enable cors
app.use(
    cors({
      origin: '*',
    }),
  );

 app.use(cors(corsOptions))
 



// console.log(proccess.env.MONGO_URI)


app.use('/api/veterinarios', veterinarioRoutes)
app.use('/api/pacientes', pacienteRoutes)

const port = process.env.PORT || 4000

app.listen(port, () =>{
    console.log(`servidor funcionando en el puerto ${port}`)
});