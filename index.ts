import { getPositions, placeOrder } from "./trade";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { canHaveDecorators } from "typescript";
import {z} from "zod";

// Create an MCP server
const server = new McpServer({
    name: "Demo",
    version: "1.0.0"
});

// Add an addition tool
server.tool("add-two-numbers",
    {a: z.number(), b: z.number() },
    async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
    })
);

server.tool("Buy-a-stock", "Buys the stock on zerodha exchange",
    { stock: z.string(), qty: z.number() },
        async ({stock, qty }) => {
        placeOrder(stock, qty, "BUY");
        return {
            content: [{ type: "text", text: "Stock has been bought" }]
    }
}
);

server.tool("Sell-a-stock", "Sells the stock on zerodha exchange",
    { stock: z.string(), qty: z.number() },
        async ({stock, qty }) => {
        placeOrder(stock, qty, "SELL");
        return {
            content: [{ type: "text", text: "Stock has been bought" }]
    }
}
);

server.tool("show-portfolio", "Shows my complete portfolio in zerodha",
    async () => {
    return {
        content: [{ type: "text", text: await getPositions () }]
        }
    }
);

const transport = new StdioServerTransport();
await server.connect(transport);