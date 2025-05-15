// confirmation-store.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ConfirmationData {
  title: string
  description: string
  cancelLabel: string
  actionLabel: string
  onAction: () => void
  onCancel: () => void
  to?: HTMLElement
}

export const useConfirmationStore = defineStore('confirmation', () => {
  const open = ref(false)
  const title = ref<string | null>(null)
  const description = ref<string | null>(null)
  const cancelLabel = ref<string | null>(null)
  const actionLabel = ref<string | null>(null)
  const onAction = ref<() => void>(() => {})
  const onCancel = ref<() => void>(() => {})
  const to = ref<HTMLElement | undefined>(undefined)

  function openConfirmation(data: ConfirmationData) {
    open.value = true
    title.value = data.title
    description.value = data.description
    cancelLabel.value = data.cancelLabel
    actionLabel.value = data.actionLabel
    onAction.value = data.onAction
    onCancel.value = data.onCancel
    to.value = data.to
  }

  function closeConfirmation() {
    open.value = false
    title.value = null
    description.value = null
    cancelLabel.value = null
    actionLabel.value = null
    onAction.value = () => {}
    onCancel.value = () => {}
    to.value = undefined
  }

  return {
    open,
    title,
    description,
    cancelLabel,
    actionLabel,
    onAction,
    onCancel,
    openConfirmation,
    closeConfirmation,
    to,
  }
})
