import { describe, expect, test } from 'vitest';
import { Prisma } from '@prisma/client';

// All of these run in a node env in vitest, but fail in wrangler dev and when deployed to cloudflare
describe('Prisma.Decimal', () => {
	test('basic', () => {
		let res = new Prisma.Decimal(1.7).add(1).mul(1).div(1).sub(0.01).abs();
		expect(res.toNumber()).toEqual(2.69);
	});

	test('round method', () => {
		let res = new Prisma.Decimal(1.7).round();
		expect(res.toNumber()).toEqual(2);
	});

	test('sin method', () => {
		let res = new Prisma.Decimal(1.7).sin();
		expect(res.toNumber()).toEqual(0.9916648104524686);
	});

	test('add static', () => {
		let res = Prisma.Decimal.add(1, 1);
		expect(res.toNumber()).toEqual(2);
	});

	test('sub static', () => {
		let res = Prisma.Decimal.sub(1, 1);
		expect(res.toNumber()).toEqual(0);
	});

	test('mul static', () => {
		let res = Prisma.Decimal.mul(1, 1);
		expect(res.toNumber()).toEqual(1);
	});

	test('round static', () => {
		let res = Prisma.Decimal.round(1);
		expect(res.toNumber()).toEqual(1);
	});
});
