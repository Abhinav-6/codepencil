<script>
  import Sun from "./icons/sun.svelte";
  import Moon from "./icons/moon.svelte";
  import Github from "./icons/github.svelte";
  import { Button } from "$lib/components/ui/button";

  import { toggleMode, mode } from "mode-watcher";
</script>

<nav
  class="max-w-screen-xl mx-auto flex px-8 items-center justify-between py-2 border-b border-slate-300 dark:border-slate-700"
>
  <h3 class="font-bold text-lg tracking-wider">
    Code<span
      class="bg-gradient-to-r from-purple-700 via-cyan-700 to-violet-700 text-transparent bg-clip-text dark:from-purple-500 dark:via-cyan-500 dark:to-violet-500"
      >Pencil</span
    >
  </h3>
  <div class="flex gap-4 px-4">
    <Button class="px-6 hidden md:block">New</Button>
    <Button
      class="dark:bg-transparent dark:border-slate-700 dark:hover:bg-slate-800"
      variant="outline"
      size="icon"
      href="https://github.com/Abhinav-6/codepencil"><Github /></Button
    >
    <Button on:click={toggleMode} variant="outline" size="icon">
      {#if $mode === "light"}
        <Moon />
      {:else}
        <Sun />
      {/if}
      <span class="sr-only">Toggle theme</span>
    </Button>
  </div>
</nav>
