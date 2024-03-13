import { PrismaClient, Prisma } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	HYPERDRIVE: Hyperdrive;
	DATABASE_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// const pool = new pg.Pool({
		// 	connectionString: env.DATABASE_URL,
		// 	max: 1,
		// });
		// const adapter = new PrismaPg(pool);
		// const prisma = new PrismaClient({ adapter } as any);

		// const res = await prisma.$queryRaw`select 1+1`;

		const num = new Prisma.Decimal(1.7).round();

		return new Response(num.toString());
	},
};
