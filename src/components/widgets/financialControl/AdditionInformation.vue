<template>
  <div class="operation-settings">
    <WidgetPanelHeader header-title-text="Operation settings">
      <template #return>
        <button type="button" @click="$emit('close-setting-operation-menu')">
          <font-awesome-icon icon="circle-arrow-left" size="2xl" style="color: white" />
        </button>
      </template>
    </WidgetPanelHeader>
    <div class="operation-setting-inputs">
      
      <CustomFormInput
      :value="descriptionValue"
      name="description"
      type="text"
      label="Description"
      placeholder="Description"
    />
    <CustomFormInput
      :value="recipientValue"
      name="recipient"
      type="text"
      label="Recipient"
      placeholder="Recipient"
    />
    </div>
  </div>
</template>

<script setup lang="ts">
import WidgetPanelHeader from 'components/headers/WidgetPanelHeader.vue'
import { toRefs } from 'vue';

defineEmits<{
  (e: 'close-setting-operation-menu'): void

}>()

const props = defineProps<{
  descriptionValue: string
  recipientValue: string
}>()

const {descriptionValue, recipientValue} = toRefs(props)
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/input.scss';

.operation-settings {
  width: 100%;
  height: 100%;
  .operation-setting-inputs {
    padding: 10px;
  
  }
}
</style>
