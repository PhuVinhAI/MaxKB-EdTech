<template>
  <MdEditor :language="language" noIconfont noPrettier v-bind="$attrs">
    <template #defFooters>
      <slot name="defFooters"> </slot>
    </template>
  </MdEditor>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MdEditor, config } from 'md-editor-v3'
import { getBrowserLang } from '@/locales/index'
import './assets/markdown-iconfont.js'
// 引入公共库中的语言配置
defineOptions({ name: 'MdEditor' })
const language = computed(() => localStorage.getItem('MaxKB-locale') || getBrowserLang() || '')
config({
  editorConfig: {},
})
</script>
