<script>
  import * as Card from "$lib/components/ui/card";
  import Dots from "./icons/dots.svelte";
  import Button from "./ui/button/button.svelte";
</script>

<Card.Root
  class="border-slate-300 dark:border-slate-900 rounded-md dark:bg-[#33363D]"
>
  <Card.Header class="border-b p-0">
    <a href="/ss">
      <img
        src="/poBgypW-800.jpg"
        alt=""
        class="w-80 aspect-video rounded-t-sm"
      />
    </a>
  </Card.Header>
  <Card.Content class="flex justify-between items-center py-2 px-4">
    <div class="flex gap-2 items-center">
      <img src="/default.webp" alt="" class="w-12 h-12 rounded-md" />

      <div>
        <h5 class="font-bold">Restaurant website</h5>
        <p class="text-slate-700 font-medium dark:text-slate-300">John Doe</p>
      </div>
    </div>
    <Button
      class="px-2 bg-transparent border-slate-200 dark:border-slate-200"
      variant="outline"
    >
      <Dots />
    </Button>
  </Card.Content>
</Card.Root>
