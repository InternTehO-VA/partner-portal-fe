<template>
    <md-card md-with-hover md-theme="va-theme" class="task-card">
      <md-ripple>
        <md-card-header>
          <div class="md-subheading">Complete {{task.classification}}: {{task.item}} - {{descriptor}} {{task.itemNumber}}</div>
        </md-card-header>

        <md-card-content>
          <md-progress-bar class="md-accent" md-mode="determinate" :md-value="task.progress">
          </md-progress-bar>
          <md-tooltip md-direction="bottom" class="tooltip-custom">{{task.progress}}% Completeness</md-tooltip>
        </md-card-content>
      </md-ripple>
    </md-card>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        descriptor () {
            return this.task.classification == 'Resource' ? 'Module' : 'Item'
        }
    }
}
</script>

<style scoped>
.task-card {
    border-radius: 10px;
}
.tooltip-custom {
    background: #F2994A;
    font-size: 14px;
}
</style>