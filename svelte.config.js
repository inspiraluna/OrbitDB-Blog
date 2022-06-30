// svelte.config.js
import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build'
		})
	},
	vite: {
		build: {
			target: 'esnext',
			minify: false
		  },
		  define: {
			'process.env.NODE_DEBUG': 'false',
			'global': 'globalThis'
		  }
	}
};