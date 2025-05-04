export default {
	async fetch(request, env, ctx) {
		return new Response('ts proj');
	},
} satisfies ExportedHandler<Env>;