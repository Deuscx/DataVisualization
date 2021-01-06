<template>
  <div class="home">
    <h3>共有{{ lists.length }}个任务，其中{{ finish.length }} 以完成</h3>
    <div class="todoList">
      <label
        v-for="(item, index) in lists"
        :key="index"
        class="tl-item"
        :for="index"
      >
        <input type="checkbox" :id="index" v-model="item.checked" />
        <i class="check"></i>
        <span v-if="!item.isEdited">
          {{ item.name }}
        </span>
        <div v-else><input type="text" /></div>
      </label>
    </div>

    <form>
      <fieldset disabled="disabled">添加</fieldset>
      <input type="text" v-model="newTodo" @keydown.enter="add" />
      <button @click="add">添加</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref, computed, toRefs, reactive } from "vue";

export default defineComponent({
  name: "Home",
  setup(props, { attrs }) {
    //1.加入checkbox->checked

    const state = reactive({
      lists: [
        { name: "1", checked: false, isEdited: false },
        { name: "2", checked: false, isEdited: false },
        { name: "3", checked: false, isEdited: false }
      ],
      finish: computed(() => state.lists.filter(i => i.checked) || [])
    });
    const newTodo = ref("");
    const add = e => {
      e.preventDefault();

      state.lists.push({
        name: newTodo.value,
        checked: false,
        isEdited: false
      });
      newTodo.value = "";
    };
    return { ...toRefs(state), newTodo, add };
  }
});
</script>
<style lang="scss">
.todoList {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 75px 10px 30px;
  background: #162740;
  border: transparent;
  .tl-item {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;

    input[type="checkbox"] {
      opacity: 0;
      appearance: none;

      & + .check {
        position: absolute;
        width: 25px;
        height: 25px;
        border: 2px solid #f1faee;
        transition: 0.2s;
      }

      &:checked + .check {
        width: 25px;
        height: 15px;
        border-top: transparent;
        border-right: transparent;
        transform: rotate(-45deg);
      }

      & ~ span {
        position: relative;
        left: 40px;
        white-space: nowrap;
        transition: 0.5s;
        color: #f1faee;
        &::before {
          position: absolute;
          content: "";
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: #f1faee;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s;
        }
      }

      &:checked ~ span {
        color: #585b57;

        &::before {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
}
</style>
