import { Prisma } from '@prisma/client';

export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		let num = new Prisma.Decimal(1.7).add(1).mul(1).div(1).sub(0.01).abs(); // this works

		// All errors below
		num.round(); // round is not a function
		num.sin();
		num.cos();

		// Static methods also broken
		Prisma.Decimal.round(5); //  is not a function
		Prisma.Decimal.add(5, 3); // is not a function
		Prisma.Decimal.mul(5, 3); // is not a function
		Prisma.Decimal.sub(5, 3); // is not a function

		// This list is not exhaustive, I haven't checked all the methods

		return new Response(num.toString());
	},
};
