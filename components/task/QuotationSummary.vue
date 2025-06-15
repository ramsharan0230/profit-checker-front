<script lang="ts" setup>
defineProps<{
  result: any;
  items: any[];
  laborHours: number;
  laborCost: number;
  fixedOverheads: number;
  ai_suggestions: string;
}>();

const emit = defineEmits(['export:pdf', 'export:csv']);

function exportPdf() {
  emit('export:pdf');
}

function exportCsv() {
  emit('export:csv');
}
</script>

<template>
  <div class="mt-6 p-4 bg-gray-100 rounded-md shadow space-y-4">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h3 class="text-lg font-semibold">Summary</h3>
      <div class="flex gap-2">
        <button
          type="button"
          class="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1.5 rounded"
          @click="exportPdf"
        >
          Export PDF
        </button>
        <button
          type="button"
          class="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1.5 rounded"
          @click="exportCsv"
        >
          Export CSV
        </button>
      </div>
    </div>

    <hr />

    <div>
      <h4 class="font-semibold mb-2">Product Breakdown</h4>
      <ul class="text-sm list-disc pl-5 space-y-1">
        <li v-for="(item, idx) in items" :key="idx">
          <strong>{{ item.selectedProduct }}</strong> — Qty: {{ item.quantity }},
          Cost: £{{ item.cost }}, Sell: £{{ item.sell }}
        </li>
      </ul>
    </div>

    <div class="text-sm">
      <p><strong>Labor Hours:</strong> {{ laborHours }}</p>
      <p><strong>Labor Cost per Hour:</strong> £{{ laborCost }}</p>
      <p><strong>Total Labor Cost:</strong> £{{ (laborHours * laborCost).toFixed(2) }}</p>
      <p><strong>Fixed Overheads:</strong> £{{ fixedOverheads }}</p>
    </div>

    <div class="text-sm">
      <p><strong>Total Gross Profit:</strong> £{{ result.grossProfit.toFixed(2) }}</p>
      <p><strong>Margin:</strong> {{ result.margin.toFixed(2) }}%</p>
      <p>
        <strong>Health:</strong>
        <span :class="result.healthClass">&nbsp;{{ result.health }}</span>
      </p>
    </div>

    <div class="mt-4">
      <h4 class="font-semibold">AI Suggestion</h4>
      <p class="italic text-gray-700 whitespace-pre-line">{{ ai_suggestions }}</p>
    </div>
  </div>
</template>
