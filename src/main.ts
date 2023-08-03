import dotenv from 'dotenv';
import path from 'path';

export default function init() {
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: path.join(__dirname, '../.env') });
  }
}
