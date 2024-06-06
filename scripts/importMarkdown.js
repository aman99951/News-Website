import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { connectToDatabase } from '../src/lib/mongodb.js';

async function importMarkdown() {
  const db = await connectToDatabase();
  const articlesCollection = db.collection('articles');

  const contentDir = path.join(process.cwd(), 'src/content/news');
  const files = fs.readdirSync(contentDir);

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    await articlesCollection.insertOne({
      title: data.title,
      date: data.date,
      author: data.author,
      content: content
    });
  }

  console.log('Markdown files imported successfully');
}

importMarkdown().catch((error) => console.error(error));
