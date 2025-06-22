<template>
  <div class="w-64 bg-gray-50 flex flex-col min-h-screen">
    <!-- Klaboard Header -->
    <div class="p-4 border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Star class="w-5 h-5 text-white fill-white" />
        </div>
        <div class="flex-1">
          <h1 class="font-semibold text-gray-900 text-lg">Klaboard</h1>
          <div class="flex items-center space-x-1">
            <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <p class="text-xs text-gray-500">free-trial</p>
          </div>
        </div>
        <div class="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
          <ChevronLeft class="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </div>

    

    <!-- Navigation -->
    <div class="flex-1 px-4 space-y-4 mt-2">
      <!-- Menu Items -->
      <nav class="space-y-1">

        <div class="sidebar-item">
          <Search class="w-5 h-5 text-gray-500"/>
          <span class="text-sm text-gray-700 font-medium">Search</span>
        </div>

        <div class="sidebar-item">
          <Bot class="w-5 h-5 text-gray-500" />
          <span class="text-sm text-gray-700 font-medium">Kla AI</span>
        </div>
        
        <div class="sidebar-item">
          <Mail class="w-5 h-5 text-gray-500" />
          <span class="text-sm text-gray-700 font-medium">Inbox</span>
          <span class="ml-auto bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-semibold">New</span>
        </div>
        
        <div class="sidebar-item">
          <Calendar class="w-5 h-5 text-gray-500" />
          <span class="text-sm text-gray-700 font-medium">Calendar</span>
        </div>
        
        <div class="sidebar-item">
          <Settings class="w-5 h-5 text-gray-500" />
          <span class="text-sm text-gray-700 font-medium">Settings & Preferences</span>
        </div>
      </nav>

      <!-- Shared Pages -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm font-medium text-gray-900">Shared Pages</h3>
          <ChevronDown class="w-4 h-4 text-gray-400" />
        </div>
        <div class="space-y-1">
          <div class="sidebar-item group bg-white rounded-lg border border-gray-100">
            <GripVertical class="w-4 h-4 text-gray-300 group-hover:text-gray-400" />
            <div class="w-4 h-4 bg-pink-500 rounded flex items-center justify-center">
              <div class="w-2 h-2 bg-white rounded-sm"></div>
            </div>
            <span class="text-sm text-gray-700 font-medium">HR Tasks Hub</span>
          </div>
          
          <div class="sidebar-item group bg-white rounded-lg border border-gray-100">
            <GripVertical class="w-4 h-4 text-gray-300 group-hover:text-gray-400" />
            <Wind class="w-4 h-4 text-green-500" />
            <span class="text-sm text-gray-700 font-medium">Windah Comp</span>
          </div>
          
          <div class="sidebar-item group bg-white rounded-lg border border-gray-100">
            <GripVertical class="w-4 h-4 text-gray-300 group-hover:text-gray-400" />
            <div class="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
              <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span class="text-sm text-gray-700 font-medium">NoSpace Dev</span>
          </div>
        </div>
      </div>

      <!-- Private Pages -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm font-medium text-gray-900">Private Pages</h3>
          <ChevronDown class="w-4 h-4 text-gray-400" />
        </div>
        <div class="space-y-1">
          <div class="sidebar-item group bg-white rounded-lg border border-gray-100">
            <GripVertical class="w-4 h-4 text-gray-300 group-hover:text-gray-400" />
            <div class="w-4 h-4 bg-purple-500 rounded flex items-center justify-center">
              <div class="w-2 h-2 border border-white rounded-full"></div>
            </div>
            <span class="text-sm text-gray-700 font-medium">Dribbble Portofolio</span>
          </div>
        </div>
      </div>

      <!-- Accounts -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm font-medium text-gray-900">Accounts</h3>
          <Plus class="w-4 h-4 text-gray-400" />
        </div>
        <div class="sidebar-item bg-white rounded-lg border border-gray-100">
          <div class="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-semibold">T</span>
          </div>
          <span class="text-sm text-gray-700 font-medium">Teheran</span>
          <MoreHorizontal class="w-4 h-4 text-gray-400 ml-auto" />
        </div>
      </div>
    </div>

    <!-- Upgrade Section -->
    <div class="m-3 bg-white rounded-2xl shadow-sm overflow-hidden relative">
      <!-- Gradient top section -->
      <div class="h-20 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 relative"></div>
      
      <!-- Content section -->
      <div class="px-4 pb-4 pt-6 text-center relative">
        <!-- Icon positioned to overlap gradient -->
        <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <Star class="w-6 h-6 fill-white text-white" />
          </div>
        </div>
        
        <h3 class="font-bold text-lg mb-2 leading-tight text-gray-900 mt-2">
          Maximize your<br>productivity
        </h3>
        
        <p class="text-sm text-gray-500 mb-4 leading-relaxed">
          Boost your task management<br>with advanced tools & features.
        </p>
        
        <button class="w-full bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
          Upgrade
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  Star, ChevronLeft, Search, Bot, Mail, Calendar, Settings, 
  ChevronDown, Plus, MoreHorizontal, Wind, GripVertical 
} from 'lucide-vue-next'
</script>

<style scoped>
.sidebar-item {
  @apply flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-200;
}
</style>