<template>
    <div style="border: 1px solid #ccc">
        <!-- 工具栏 -->
        <Toolbar
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            style="border-bottom: 1px solid #ccc"
        />
        <!-- 编辑器 -->
        <Editor
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            style="height: 500px; overflow-y: hidden;"
            @onCreated="handleCreated"
            @onChange="handleChange"
        />
    </div>
</template>

<script setup>
// https://juejin.cn/post/7027977252331585544
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'


// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    }, 1500)
})

// 编辑器配置
const editorConfig = {
    placeholder: '请输入内容...',
    MENU_CONF: { /* 菜单配置，下文解释 */ }
}

const toolbarConfig = {
    
}

const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}

const handleChange = () => {
    console.log("eidtor发生改变的值: ")
    console.log(valueHtml.value)
    // props.getEditorContent(valueHtml.value)
    // console.log(props.getEditorContent)
}

// 组件销毁时，及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

// 加入这个才可以暴露变量。这里使用的setup的语法糖，总感觉比较麻烦，可以考虑自己重新写一下。
// eslint-disable-next-line
defineExpose({
    valueHtml
})
</script>



<!-- 别忘了引入样式 -->
<style src="@wangeditor/editor/dist/css/style.css"></style>
