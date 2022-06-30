

<script context="module">

  ///src/routes/index.svelte
// import { createIPFS } from "$lib/ipfs"

export async function load({fetch}) {
  // await createIPFS()
    const posts = await fetch("/api").then((r) => r.json())
    // const posts = []
    return {
        props: {posts}
    }
}
</script>

<script>
  import PostCard from "/src/components/post-card.svelte";
  // import {Create} from "/src/modules/ipfs-core/ipfs-core.js"
  export let posts;
  export let id;
  import { onMount } from 'svelte';

  onMount(async () => {
  //from https://github.com/DougAnderson444/ipfs-vite-svelte-kit
  // 	// In Svelte, a hot module refresh can cause lockfile problems
  // 	// so we assign the ipfs node to globalThis to avoid lock file issues
  let ipfsNode
  if (!globalThis.ipfsNode) {
      const IPFSmodule = await import('../modules/ipfs-core/ipfs-core.js');
      const IPFS = IPFSmodule.default;
      ipfsNode = await IPFS.create();
      globalThis.ipfsNode = ipfsNode;
    } else {
      ipfsNode = globalThis.ipfsNode;
    } 
    id = await ipfsNode.id()

    console.log(id)
  });

</script> 
<style>
    main {
      padding: 4vw;
    }
  </style>
<svelte:head>
  <title>My Blog</title>
  <meta name="description" content="This is my personal blog created with SvelteKit!">
</svelte:head>
<main>
  <h1>Posts</h1>
  <p>Here we will place all the different blog posts</p>
  {#each posts as post}
    <PostCard {...post}/>
  {/each}
  {id?`Node Id   ${id.id}`:'Initializing...'}
</main>

