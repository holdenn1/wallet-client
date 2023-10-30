<template>
  <div class="custom-select select" :tabindex="tabindex" @blur="state.open = false">
    <div class="selected" :class="{ open: state.open }" @click="state.open = !state.open">
      {{ selectTitle }}
    </div>
    <div class="items" :class="{ selectHide: !state.open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          () => {
            state.selected = option
            state.open = false
            $emit('input', option)
          }
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    options: string[]
    default?: string | null
    tabindex?: number
    isSubmitForm: boolean
  }>(),
  {
    default: null,
    tabindex: 0
  }
)

defineEmits<{
  (e: 'input', data: string | boolean | null): void
}>()

const {isSubmitForm} = toRefs(props)
const state = reactive({
  selected: props.default ? props.default : props.options.length > 0 ? props.options[0] : null,
  open: false
})

const selectTitle = computed(() => {
  if(!isSubmitForm.value){
    return state.selected
  }
  return props.default
})
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  border-radius: 6px;
  border: 1px solid hsl(199, 60%, 49%);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid hsl(199, 60%, 49%);
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid hsl(199, 60%, 49%);
  border-left: 1px solid hsl(199, 60%, 49%);
  border-bottom: 1px solid hsl(199, 60%, 49%);
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  background-color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: hsl(199, 72%, 57%);
  color: white;
}

.selectHide {
  display: none;
}
</style>
