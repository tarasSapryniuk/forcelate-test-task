<template src='../templates/dashboard.html'></template>
<style scoped src='../css/dashboard.css'></style>

<script>
import FilterTrades from './FilterTrades'
import TableTrades from './TableTrades'
import CurrencyPanel from './CurrencyPanel'
import InstancesPanel from './InstancesPanel'

export default {
    components: { FilterTrades, TableTrades, CurrencyPanel, InstancesPanel }
}
</script>