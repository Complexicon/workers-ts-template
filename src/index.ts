export default {
	async fetch(request, env, ctx) {
		return new Response('Typescript Time!');
	},
} satisfies ExportedHandler<Env>;