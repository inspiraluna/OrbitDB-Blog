---
title: Creating a decentralized blog with OrbitDB and Svelte 
description: Getting Svelte ready to show a standard blog
---
The idea is to create a decentralized OrbitDB-blog which is loaded via IPFS. Meaning without app server at all.

The blog web app will spin-up an IPFS node and posts will magically be loaded from ("some") ipfs node. If a user comments on a post those comments will be first stored on the local ipfs node (in the browser) and then replicated to other connected nodes (e.g. mobile phones, pin services, etc)

In order to do this we first need a simple blog. Here I found a blog svelte howto from Maximilian Kürschner, Germany. 


# Resources
- How to create a blog with svelte step by step https://www.programonaut.com/how-to-create-a-blog-with-svelte-step-by-step/
- SvelteKit https://kit.svelte.dev/
- Svelte Examples Snippets https://svelte.dev/examples/reactive-declarations