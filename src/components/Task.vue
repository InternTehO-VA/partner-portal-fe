<template>
  <md-card md-with-hover md-theme="va-theme" class="task-card">
    <md-ripple>
      <md-card-header>
        <div class="md-subheading">
          Complete
          <strong>
            {{task.classification}}:
            <i>{{task.item}} - {{descriptor}} {{task.itemNumber}}</i>
          </strong>
        </div>
      </md-card-header>

      <md-card-content>
        <md-progress-bar class="md-accent" md-mode="determinate" :md-value="task.completion" />
        <md-tooltip md-direction="bottom" class="tooltip-custom">{{task.completion}}% Completeness</md-tooltip>
      </md-card-content>
    </md-ripple>
  </md-card>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    descriptor() {
      return this.task.classification == "Resource" ? "Module" : "Item";
    },
  },
};
</script>

<style scoped>
.task-card {
  border-radius: 10px;
}
.tooltip-custom {
  background: #f2994a;
  font-size: 14px;
}
</style>