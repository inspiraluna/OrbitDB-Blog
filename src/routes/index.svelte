<script context="module">
  ///src/routes/index.svelte
export async function load({fetch}) {
    const posts = await fetch("/api").then((r) => r.json())
    // const posts = []
    return {
        props: {posts}
    }
}
</script>

<script>
  import PostCard from "/src/components/post-card.svelte";
  export let posts;
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
</main>

