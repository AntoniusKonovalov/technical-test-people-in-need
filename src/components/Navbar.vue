<template>
    <nav class="sticky top-0 bg-[#14428B] border-b border-green-500 z-10 h-16 w-full">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full">
        <div class="flex items-center justify-between h-full">
          <a class="flex items-center mr-4" href="/">
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Tech Test</span>
          </a>
  
          <div class="md:ml-auto">
            <div class="flex items-center space-x-4">
              <!-- Task 1 -->
              <router-link
                to="/"
                class="relative text-white px-3 py-2 hover:text-white group"
                active-class="active-link"
              >
                Task 1
                <span
                  class="absolute left-0 bottom-0 w-full h-[4px] bg-transparent transition-all duration-300 ease-in-out group-hover:bg-white"></span>
              </router-link>
  
              <!-- Task 2 -->
              <router-link
                to="/task2"
                class="relative text-white px-3 py-2 hover:text-white group"
                active-class="active-link"
              >
                Task 2
                <span
                  class="absolute left-0 bottom-0 w-full h-[4px] bg-transparent transition-all duration-300 ease-in-out group-hover:bg-white"></span>
              </router-link>
  
              <!-- Task 3 -->
              <router-link
                to="/task3"
                class="relative text-white px-3 py-2 hover:text-white group"
                active-class="active-link"
              >
                Task 3
                <span
                  class="absolute left-0 bottom-0 w-full h-[4px] bg-transparent transition-all duration-300 ease-in-out group-hover:bg-white"></span>
              </router-link>
  
              <!-- Task 4 -->
              <router-link
                to="/task4"
                class="relative text-white px-3 py-2 hover:text-white group"
                active-class="active-link"
              >
                Task 4
                <span
                  class="absolute left-0 bottom-0 w-full h-[4px] bg-transparent transition-all duration-300 ease-in-out group-hover:bg-white"></span>
              </router-link>
  
              <!-- Task 5 -->
              <router-link
                to="/task5"
                class="relative text-white px-3 py-2 hover:text-white group"
                active-class="active-link"
              >
                Task 5
                <span
                  class="absolute left-0 bottom-0 w-full h-[4px] bg-transparent transition-all duration-300 ease-in-out group-hover:bg-white"></span>
              </router-link>
  
              <!-- Task 6 -->
              <router-link
                to="/task6"
                class="relative text-white px-3 py-2 hover:text-white group"
                active-class="active-link"
              >
                Task 6
                <span
                  class="absolute left-0 bottom-0 w-full h-[4px] bg-transparent transition-all duration-300 ease-in-out group-hover:bg-white"></span>
              </router-link>
  
              <!-- Task 7 -->
              <router-link
                to="/task7"
                class="relative text-white px-3 py-2 hover:text-white group"
                active-class="active-link"
              >
                Task 7
                <span
                  class="absolute left-0 bottom-0 w-full h-[4px] bg-transparent transition-all duration-300 ease-in-out group-hover:bg-white"></span>
              </router-link>
  
              <!-- Task 8 -->
              <router-link
                to="/task8"
                class="relative text-white px-3 py-2 hover:text-white group"
                active-class="active-link"
              >
                Task 8
                <span
                  class="absolute left-0 bottom-0 w-full h-[4px] bg-transparent transition-all duration-300 ease-in-out group-hover:bg-white"></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  /* Style for the active link to show the white bottom line */
  .active-link {
    position: relative;
  }
  
  .active-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: white;
  }
  </style>
  