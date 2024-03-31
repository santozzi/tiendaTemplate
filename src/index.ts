import app from './app';
import { AppDataSource } from './models/db';

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('Database connected');
    
    app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });
  } catch (error) {
    console.log(error);
    
  }
}
main();
