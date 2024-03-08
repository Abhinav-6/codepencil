<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import Pencilcard from "$lib/components/pencilcard.svelte";
</script>

<main
  class=" w-full max-w-screen-xl mx-auto min-h-screen flex flex-col items-center py-8"
>
  <div class="text-2xl font-bold text-center">
    <span>Welcome to </span>
    <h3 class="text-6xl mb-4">
      Code<span
        class="bg-gradient-to-r from-purple-700 via-cyan-700 to-violet-700 text-transparent bg-clip-text"
        >Pencil</span
      >
    </h3>
  </div>
  <!-- <h2 class="text-2xl font-bold text-slate-900">Click, Code, Run</h2> -->
  <p
    class="font-medium w-1/2 text-base text-center text-slate-800 text-wrap dark:text-slate-200"
  >
    CodePencil is a social development environment for front-end designers and
    developers. Build a website, show off your work, and find inspiration.
  </p>
  <div class="my-8 flex gap-4 items-center">
    <Button
      variant="outline"
      class="border-slate-900 w-32 dark:bg-transparent dark:border-slate-200 dark:hover:bg-slate-900"
      >Examples</Button
    >
    <Button class="w-32 ">New Pencil</Button>
  </div>
  <div class="flex gap-4 flex-wrap items-center justify-center my-4">
    {#each Array(6) as _}
      <Pencilcard />
    {/each}
  </div>
</main>
<footer class="flex justify-center gap-2 py-2">
  &#169; <p>CodePencil</p>
  <a
    href="https://github.com/Abhinav-6/Codepencil"
    class="text-purple-700 hover:underline hover:text-purple-900 cursor-pointer font-medium">Github</a
  >
</footer>
