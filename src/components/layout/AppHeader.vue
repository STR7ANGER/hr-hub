<template>
  <header class="bg-white border-b border-gray-200 px-4 py-3">
    <div class="flex items-center justify-between">
      <!-- Left side with plus and breadcrumb -->
      <div class="flex items-center space-x-3">
        <!-- Plus button -->
        <button class="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
          <Plus class="w-4 h-4 text-gray-600" />
        </button>
        
        <!-- Divider -->
        <div class="w-px h-4 bg-gray-300"></div>
        
        <!-- Breadcrumb -->
        <div class="flex items-center space-x-2 text-sm">
          <div class="flex items-center space-x-2 text-gray-600">
            <Settings2 class="w-4 h-4" />
            <span>Shared Pages</span>
          </div>
          <ChevronRight class="w-4 h-4 text-gray-400" />
          <span class="text-gray-900 font-medium">HR Tasks Hub</span>
        </div>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center space-x-1">
        <!-- Star -->
        <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
          <Star class="w-5 h-5 text-gray-500" />
        </button>

        <!-- Comments -->
        <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
          <MessageCircle class="w-5 h-5 text-gray-500" />
        </button>

        <!-- Divider -->
        <div class="w-px h-6 bg-gray-300 mx-2"></div>

        <!-- Notifications/Bell -->
        <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
          <Bell class="w-5 h-5 text-gray-500" />
        </button>

        <!-- Share -->
        <button class="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
          <Filter class="w-4 h-4 text-gray-600" />
          <span class="text-sm font-medium text-gray-700">Share</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { 
  Plus, Settings2, ChevronRight, Star, MessageCircle, 
  Bell, Filter 
} from 'lucide-vue-next'
</script>