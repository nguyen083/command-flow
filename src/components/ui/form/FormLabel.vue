<script lang="ts" setup>
import type { LabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Label } from '@/components/ui/label'
import { useFormField } from './useFormField'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { formItemId } = useFormField()
</script>

<template>
  <Label
    :class="props.class"
    :for="formItemId"
  >
    <slot />
  </Label>
</template>
