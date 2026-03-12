import { createNotionClient } from "./src/index";

const notion = createNotionClient(process.env.NOTION_API_KEY!);

async function exemplo() {
  const page = await notion.getPage("page-id-aqui");
  console.log(page);

  const db = await notion.queryDatabase({
    databaseId: "database-id-aqui",
    pageSize: 10,
  });
  console.log(db);
}
