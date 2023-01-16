<template>
    <EditorCpe ref="child"></EditorCpe>
    <router-link to="#">
        <el-button @click="onEditorChange" class="sendText" style="background: orange; border: 0px">发出</el-button>
    </router-link>
</template>


<script>
import EditorCpe from '@/components/EditorCpe.vue';
import { ref } from 'vue';

export default {
    name: 'PostView',
    components: {
        EditorCpe,
    },
    setup() {
        const child = ref(null)
        let onEditorChange = () => {
            console.log("父组件收到的内容: ")
            console.log(child.value.valueHtml)
        }
        return {
            child, 
            onEditorChange, 
        }
    }
}
</script> 
