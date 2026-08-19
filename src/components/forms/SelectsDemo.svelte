<script lang="ts">
  import SelectField from './SelectField.svelte';
  import TagInput from './TagInput.svelte';
</script>

<div class="grid gap-5 sm:grid-cols-2">
  <SelectField
    id="office"
    label="Office"
    options={['Bangkok headquarters', 'Chiang Mai', 'Phuket']}
    hint="Arrow keys move; Enter selects; Escape closes."
  />
  <TagInput />
</div>
