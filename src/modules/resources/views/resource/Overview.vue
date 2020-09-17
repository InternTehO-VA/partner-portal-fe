<template>
  <div class="overview md-scrollbar">
    <div class="overview-content">
      <h1 style="text-align: left">Overview</h1>
      <div class="md-layout md-gutter">
        <div v-for="resource in resources" :key="resource.resourceId" 
          class="md-layout-item md-size-40">
          <OverviewCard :resource="resource"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OverviewCard from '../../components/OverviewCard'

export default {
  name: 'Overview',
  components: {
    OverviewCard
  },
  data: () => ({
    resources: [
      { resourceId: 1,
        resourceName: 'Sales Enablement', 
        modules: [
          { moduleNumber: 1, moduleName: 'Product Introduction', completion: 100 },
          { moduleNumber: 2, moduleName: 'Browsing', completion: 100 },
          { moduleNumber: 3, moduleName: 'Adding Records', completion: 60 },
          { moduleNumber: 4, moduleName: 'Query Writing', completion: 0 },
          { moduleNumber: 5, moduleName: 'Home Page Customisation', completion: 0 },
          { moduleNumber: 6, moduleName: 'v1.3 Release Notes', completion: 0 }
        ] 
      },
      { resourceId: 2, 
        resourceName: 'Technical Enablement', 
        modules: [
          { moduleNumber: 1, moduleName: 'Insight Deployment', completion: 100 },
          { moduleNumber: 2, moduleName: 'Insight Wizard Setup', completion: 80 },
          { moduleNumber: 3, moduleName: 'Insight Database Mapping', completion: 0 },
          { moduleNumber: 4, moduleName: 'Admin User Access Management', completion: 0 }
        ] 
      }
    ]
  })
}
</script>

<style>
.overview-content {
  color: #FFFFFF;
  padding: 2em 3em;
  width: 100%;
}

.overview-cards {

}
</style>