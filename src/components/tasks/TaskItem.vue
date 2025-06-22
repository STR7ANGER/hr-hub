<template>
  <div class="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-gray-50 transition-colors">
    <!-- Task Name -->
    <div class="col-span-4 flex items-center space-x-3">
      <input 
        type="checkbox" 
        class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
      />
      <span class="text-sm font-medium text-gray-900">{{ task.name }}</span>
    </div>

    <!-- Dates -->
    <div class="col-span-2 flex items-center">
      <span class="text-sm text-gray-600">
        {{ formatDateRange(task.startDate, task.endDate) }}
      </span>
    </div>

    <!-- Status -->
    <div class="col-span-1 flex items-center">
      <span :class="[
        'px-2 py-1 text-xs font-medium rounded-full',
        getStatusColor(task.status)
      ]">
        {{ task.status }}
      </span>
    </div>

    <!-- Attachment -->
    <div class="col-span-2 flex items-center space-x-2">
      <Paperclip class="w-4 h-4 text-gray-400" />
      <span class="text-sm text-gray-600 truncate">{{ task.attachment }}</span>
      <MoreHorizontal class="w-4 h-4 text-gray-400" />
    </div>

    <!-- People -->
    <div class="col-span-2 flex items-center">
      <div class="flex -space-x-2">
        <div 
          v-for="person in task.people" 
          :key="person.id"
          :class="[
            'w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold',
            person.color
          ]"
          :title="person.name"
        >
          {{ person.avatar }}
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="col-span-1 flex items-center justify-end">
      <button class="p-1 hover:bg-gray-200 rounded transition-colors">
        <MoreHorizontal class="w-4 h-4 text-gray-400" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { Paperclip, MoreHorizontal } from 'lucide-vue-next'
import { format, parseISO } from 'date-fns'

// Props
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

// Helper functions
const formatDateRange = (startDate, endDate) => {
  const start = format(parseISO(startDate), 'MMM d, yyyy')
  const end = format(parseISO(endDate), 'MMM d, yyyy')
  return `${start} - ${end}`
}

const getStatusColor = (status) => {
  const colors = {
    'High': 'bg-red-100 text-red-700',
    'Medium': 'bg-yellow-100 text-yellow-700',
    'Low': 'bg-blue-100 text-blue-700'
  }
  return colors[status] || 'bg-gray-100 text-gray-700'
}
</script>