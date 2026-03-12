import { Client } from "@notionhq/client";

export interface NotionConfig {
  apiKey: string;
}

export interface PageProperties {
  [key: string]: any;
}

export interface DatabaseQuery {
  databaseId: string;
  filter?: any;
  sorts?: any[];
  pageSize?: number;
  startCursor?: string;
}

export class NotionClient {
  private client: Client;

  constructor(config: NotionConfig) {
    if (!config.apiKey) {
      throw new Error("NOTION_API_KEY é obrigatória");
    }
    this.client = new Client({ auth: config.apiKey });
  }

  async getPage(pageId: string) {
    return this.client.pages.retrieve({ page_id: pageId });
  }

  async getPageContent(pageId: string) {
    const blocks = await this.client.blocks.children.list({ block_id: pageId });
    return blocks;
  }

  async createPage(
    parent: { page_id?: string; database_id?: string },
    properties?: PageProperties,
    children?: any[],
  ) {
    const params: any = { parent };
    if (properties) {
      params.properties = properties;
    }
    if (children) {
      params.children = children;
    }
    return this.client.pages.create(params);
  }

  async createDatabase(parentPageId: string, title: string, properties: any) {
    return this.client.databases.create({
      parent: { page_id: parentPageId },
      title: [{ type: "text", text: { content: title } }],
      properties,
    });
  }

  async queryDatabase(query: DatabaseQuery) {
    return this.client.databases.query({
      database_id: query.databaseId,
      filter: query.filter,
      sorts: query.sorts,
      page_size: query.pageSize,
      start_cursor: query.startCursor,
    });
  }

  async updatePage(pageId: string, properties: PageProperties) {
    return this.client.pages.update({
      page_id: pageId,
      properties,
    });
  }

  async updateDatabase(databaseId: string, title?: string, properties?: any) {
    return this.client.databases.update({
      database_id: databaseId,
      title: title ? [{ type: "text", text: { content: title } }] : undefined,
      properties,
    });
  }

  async deletePage(pageId: string) {
    return this.client.pages.update({
      page_id: pageId,
      archived: true,
    });
  }

  async search(query: string) {
    return this.client.search({
      query,
      filter: { value: "page", property: "object" },
    });
  }

  async getDatabase(databaseId: string) {
    return this.client.databases.retrieve({ database_id: databaseId });
  }

  async appendBlockChildren(blockId: string, children: any[]) {
    return this.client.blocks.children.append({
      block_id: blockId,
      children,
    });
  }
}

export function createNotionClient(apiKey: string): NotionClient {
  return new NotionClient({ apiKey });
}
