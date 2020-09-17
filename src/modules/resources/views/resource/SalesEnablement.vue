<template>
  <div class="sales-enablement md-scrollbar">
    <div class="sales-enablement-content">
      <h1 style="text-align: left;">Sales Enablement</h1>
      <div class="tab-bar">
        <md-card class="tab-card">
          <md-tabs md-theme="va-theme" class="md-transparent">
            <md-tab
              v-for="module in modules"
              :key="module.moduleNumber"
              :id="`tab-${module.moduleNumber}`"
              :md-label="module.moduleName"
            />
          </md-tabs>
        </md-card>
      </div>

      <br>

      <div class="content">
        <md-card class="content-card"></md-card>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesEnablement",
  data: () => ({
    modules: [
      { moduleNumber: 0, moduleName: "Overview", completion: -1 },
      { moduleNumber: 1, moduleName: "Product Introduction", completion: 100 },
      { moduleNumber: 2, moduleName: "Browsing", completion: 100 },
      { moduleNumber: 3, moduleName: "Adding Records", completion: 60 },
      { moduleNumber: 4, moduleName: "Query Writing", completion: 0 },
      { moduleNumber: 5, moduleName: "Home Page Customisation", completion: 0 },
      { moduleNumber: 6, moduleName: "v1.3 Release Notes", completion: 0 },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.sales-enablement {
  width: 100%;
}

.sales-enablement-content {
  color: #ffffff;
  padding: 2em 3em;
  width: 100%;
}

.tab-card,
.content-card {
  background: rgba(255, 255, 255, 0.5) !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  border-radius: 10px;
  padding: 0.5em;
}

.md-tabs {
  justify-content: stretch;
}

.md-tabs,
.md-tab-nav-button,
.md-button {
  border-radius: 10px !important;
}
</style>
