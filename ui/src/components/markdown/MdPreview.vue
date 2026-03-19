<template>
  <MdPreview :language="language" noIconfont noPrettier :codeFoldable="false" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MdPreview, config } from 'md-editor-v3'
import { getBrowserLang } from '@/locales/index'
import useStore from '@/stores'
// 引入公共库中的语言配置
defineOptions({ name: 'MdPreview' })

const emit = defineEmits(['clickPreview'])

const { user } = useStore()
const language = computed(() => user.getLanguage() || getBrowserLang() || '')
config({
  editorConfig: {},
})
</script>

<style lang="scss" scoped>
:deep(audio) {
  width: 300px;
  height: 43px;
}
</style>
