<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center space-x-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <Briefcase class="w-6 h-6 text-gray-600" />
      </div>
      <div>
        <h1 class="text-2xl font-bold text-gray-900">HR Tasks Hub</h1>
        <p class="text-gray-600">Welcome to the Human Resources hub</p>
      </div>
    </div>

    <!-- View Controls -->
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <!-- View Toggle -->
        <div class="flex items-center bg-gray-100 rounded-lg p-1">
          <button 
            @click="currentView = 'kanban'"
            :class="[
              'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              currentView === 'kanban' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            <MoreHorizontal class="w-4 h-4" />
            <span>Kanban</span>
          </button>
          <button 
            @click="currentView = 'list'"
            :class="[
              'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              currentView === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            <List class="w-4 h-4" />
            <span>List</span>
          </button>
          <button class="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <Calendar class="w-4 h-4" />
            <span>Calendar</span>
          </button>
        </div>
      </div>

      <!-- Filters and Actions -->
      <div class="flex items-center space-x-3">
        <!-- Search -->
        <div class="relative">
          <Search class="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search here" 
            class="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <kbd class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">⌘F</kbd>
        </div>

        <!-- Filter -->
        <button class="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter class="w-4 h-4 text-gray-500" />
          <span class="text-sm text-gray-700">Filter</span>
        </button>

        <!-- Sort -->
        <button class="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <ArrowUpDown class="w-4 h-4 text-gray-500" />
          <span class="text-sm text-gray-700">Sort</span>
        </button>

        <!-- User Avatars -->
        <div class="flex -space-x-2">
          <div class="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
            J
          </div>
          <div class="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
            S
          </div>
          <div class="w-8 h-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
            M
          </div>
        </div>
      </div>
    </div>

    <!-- Task Lists -->
    <div class="space-y-6">
      <!-- To-do Section -->
      <div class="bg-white rounded-xl border border-gray-200">
        <div class="flex items-center justify-between p-4 border-b border-gray-100">
          <div class="flex items-center space-x-3">
            <Plus class="w-5 h-5 text-gray-400" />
            <h2 class="font-semibold text-gray-900">To-do</h2>
            <span class="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">8</span>
          </div>
          <ChevronDown class="w-5 h-5 text-gray-400" />
        </div>

        <!-- Task List Header -->
        <div class="grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div class="col-span-4">Name</div>
          <div class="col-span-2">Dates</div>
          <div class="col-span-1">Status</div>
          <div class="col-span-2">Attachment</div>
          <div class="col-span-2">People</div>
          <div class="col-span-1"></div>
        </div>

        <!-- Task Items -->
        <div class="divide-y divide-gray-100">
          <TaskItem 
            v-for="task in todoTasks" 
            :key="task.id" 
            :task="task" 
          />
        </div>
      </div>

      <!-- On Progress Section -->
      <div class="bg-white rounded-xl border border-gray-200">
        <div class="flex items-center justify-between p-4 border-b border-gray-100">
          <div class="flex items-center space-x-3">
            <BarChart3 class="w-5 h-5 text-blue-500" />
            <h2 class="font-semibold text-gray-900">On Progress</h2>
            <span class="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">2</span>
          </div>
          <ChevronDown class="w-5 h-5 text-gray-400" />
        </div>

        <!-- Task List Header -->
        <div class="grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div class="col-span-4">Name</div>
          <div class="col-span-2">Dates</div>
          <div class="col-span-1">Status</div>
          <div class="col-span-2">Attachment</div>
          <div class="col-span-2">People</div>
          <div class="col-span-1"></div>
        </div>

        <!-- Task Items -->
        <div class="divide-y divide-gray-100">
          <TaskItem 
            v-for="task in progressTasks" 
            :key="task.id" 
            :task="task" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Briefcase, MoreHorizontal, List, Calendar, Search, Filter, 
  ArrowUpDown, Plus, ChevronDown, BarChart3
} from 'lucide-vue-next'
import TaskItem from '../components/tasks/TaskItem.vue'
import { mockTasks } from '../data/mockData.js'

// Reactive data
const currentView = ref('kanban')
const searchQuery = ref('')

// Computed properties
const todoTasks = computed(() => 
  mockTasks.filter(task => task.category === 'todo')
)

const progressTasks = computed(() => 
  mockTasks.filter(task => task.category === 'progress')
)
</script>