# prisma-hyperdrive

Reproduces a bug where Prisma.Decimal is missing crucial methods

```
npm i
```

```
npm start
```

Navigate to http://localhost:8787/

Example of code breaking

```ts
import { Prisma } from '@prisma/client';

export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		let num = new Prisma.Decimal(1.7).add(1).mul(1).div(1).sub(0.01).abs(); // this works

		// All of the rows below throw a type error
		num.round(); // not a function
		num.sin(); // not a function
		num.cos(); // not a function

		// Static methods also broken
		Prisma.Decimal.round(5); // not a function
		Prisma.Decimal.add(5, 3); // not a function
		Prisma.Decimal.mul(5, 3); // not a function
		Prisma.Decimal.sub(5, 3); // not a function

		// This list is not exhaustive, I haven't checked all the methods

		return new Response(num.toString());
	},
};
```
