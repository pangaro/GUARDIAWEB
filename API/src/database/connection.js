import sql from 'mssql';
import config from '../config'

const sqlConfig = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
      encrypt: false, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed certs
    },
};

export async function getConnection(){
  try {
    const pool = await sql.connect(sqlConfig);
    return pool;
  } catch (error) {
    console.log(error);
  }
}