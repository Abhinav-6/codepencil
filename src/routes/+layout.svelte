<script>
  import "../app.pcss";
  import { ModeWatcher } from "mode-watcher";
  import Nav from "$lib/components/nav.svelte";
</script>

<ModeWatcher />
<Nav />
<slot />
