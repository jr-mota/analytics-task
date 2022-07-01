<template>
  <form class="w-full flex flex-col">
    <input
      v-model="siteId"
      class="h-10 pt-4 pb-4 pl-4 shadow-lg shadow-gray-500/10"
      type="text"
      placeholder="Введите id сайта"
    />
    <div class="w-full flex justify-between mt-6">
      <span
        class="flex items-center text-xs ml-4 text-red-500"
        :class="{ invisible: siteIdValid }"
      >
        ID сайта должен содержать {{ SITE_ID_LENGTH }} символа
      </span>
      <button
        @click="enter"
        class="p-4 pt-2 pb-2 shadow-lg shadow-gray-500/10 outline-offset-2 outline-2 active:outline"
      >
        Войти
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    siteId: "",
    siteIdValid: true,

    SITE_ID_LENGTH: 24,
  }),

  methods: {
    enter(e) {
      e.preventDefault();

      if (this.siteId.length < this.SITE_ID_LENGTH) {
        this.siteIdValid = false;

        return;
      }

      this.$emit("enter", this.siteId);
    },
  },

  watch: {
    siteId() {
      this.siteIdValid = true;
    },
  },
};
</script>
