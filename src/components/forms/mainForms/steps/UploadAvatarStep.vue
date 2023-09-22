<template>
  <div class="upload-avatar-wrapper">
    <input class="avatar-input" type="file" @change="handleFileInputChange($event)" />
    <img class="avatar" :src="avatarPreview ?? userAvatar" alt="" />
    <h4 class="avatar-title">Upload a profile photo</h4>
    <p class="avatar-text">
      Choose an image that best represents you and matches your style. We recommend uploading a
      photo of your face or an image that best characterizes you.
    </p>
  </div>
</template>

<script setup lang="ts">
import userAvatar from 'icons/user-avatar.png'

import { ref, onMounted, toRefs } from 'vue'

const emit = defineEmits<{
  (e: 'uploadAvatar', value: File): void
}>()

const props = defineProps<{
  uploadedAvatar: {
    photo: File | null
  }
}>()

const { uploadedAvatar } = toRefs(props)

const avatarPreview = ref()
const reader = new FileReader()

onMounted(() => {
  if (uploadedAvatar.value.photo) {
    reader.readAsDataURL(uploadedAvatar.value.photo)
    reader.onload = () => {
      avatarPreview.value = reader.result
    
    }
  }
})

const handleFileInputChange = async (event: Event) => {
  try {
    const fileInput = event.target as HTMLInputElement
    const file = fileInput.files && fileInput.files[0]
    if (file) {
      emit('uploadAvatar', file)
      reader.readAsDataURL(file)
      reader.onload = () => {
        avatarPreview.value = reader.result
      
      }
    }
  } catch (e) {
    console.error(e)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/d-flex-col-al.scss';
.upload-avatar-wrapper {
  height: 100%;
  @include contentFlexColumnAl;
  position: relative;

  .avatar-input {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100%;
    opacity: 0;
    width: 96px;
    height: 96px;
    background-color: red;
    cursor: pointer;
  }
  .avatar {
    border-radius: 100%;
    width: 96px;
    height: 96px;
    margin-bottom: 10px;
    object-fit: cover;
  }
  .avatar-title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .avatar-text {
    font-size: 18px;
    text-align: center;
  }
}
</style>
