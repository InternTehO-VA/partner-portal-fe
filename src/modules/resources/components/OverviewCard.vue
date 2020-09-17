<template>
  <md-card class="overview-card" md-with-hover md-theme="va-theme">
    <md-ripple>
      <md-card-header>
        <h1 class="resource-name" style="margin: 0.5em 0 0 0;">
            {{ resource.resourceName }}
            <md-icon>info</md-icon>
        </h1>
      </md-card-header>

      <md-card-content>
        <table class="module-list">
          <tr
            style="text-align: left"
            v-for="module in resource.modules"
            :key="module.moduleNumber"
          >
            <td style="width: 10%; height: 25px;">
              <md-icon
                style="color: #6FCF97;"
                v-if="isModuleCompleted(module.completion)"
              >done</md-icon>
              <md-icon
                style="color: #F2C94C;"
                v-if="isModuleInProgress(module.completion)"
              >remove</md-icon>
            </td>
            <td>
              <strong>Module {{module.moduleNumber}}:</strong>
              {{ module.moduleName }}
            </td>
          </tr>
        </table>
      </md-card-content>
    </md-ripple>
  </md-card>
</template>

<script>
export default {
  name: "OverviewCard",
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isModuleCompleted(completion) {
      return completion === 100;
    },
    isModuleInProgress(completion) {
      return completion !== 0 && completion !== 100;
    },
  },
};
</script>

<style>
.overview-card {
  background: rgba(255, 255, 255, 0.5) !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  border-radius: 10px;
  height: 100%;
}

.md-card-header {
    padding: 1em 2em;
}

.md-card-content {
    padding: 1em 2em;
}

.module-list {
  list-style-type: none;
}

.resource-name {
  text-align: left;
  color: #f2994a;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>