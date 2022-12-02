<script lang="ts" setup>
import { isNumber } from '@antfu/utils'
import type { Log } from './functions/types'

const sampleLogs: Log[] = [
  {
    content: 'hello world',
    type: 'string',
    file: 'TestController.php',
    expanded: false,
    color: 'indigo',
    time: '09:20:35',
  },
  {
    content: [1, 2, 3],
    type: 'array',
    file: 'Model.php',
    expanded: false,
    color: 'green',
    time: '10:15:20',
  },

  {
    content: [{ name: 'John', age: 20 }],
    type: 'array',
    file: 'Model.php',
    expanded: false,
    color: 'gray',
    time: '10:19:13',
  },

  {
    content: 69420,
    type: 'integer',
    file: 'TestEvent.php',
    expanded: false,
    color: 'blue',
    time: '10:21:38',
  },

  {
    content: 'select * from `users` where email = \'gtorregosa@gmail.com\'',
    type: 'code',
    file: 'TestEvent.php',
    expanded: false,
    color: 'red',
    time: '10:33:15',
  },
]

function isArray(log: Log) {
  return log.type === 'array' || log.type === 'object'
}

function stringifyContent(obj: object) {
  return JSON.stringify(obj, null, 2)
}

function isCode(log: Log) {
  return log.type === 'code'
}

function getCircleColor(color: string) {
  if (color === 'green')
    return 'text-green-400'

  if (color === 'gray')
    return 'text-gray-400'

  if (color === 'red')
    return 'text-red-400'

  if (color === 'gray')
    return 'text-gray-400'

  if (color === 'blue')
    return 'text-blue-400'

  if (color === 'indigo')
    return 'text-indigo-400'

  return 'text-gray-400'
}

function getBadgeBg(color: string) {
  if (color === 'green')
    return 'bg-green-100'

  if (color === 'gray')
    return 'bg-gray-100'

  if (color === 'red')
    return 'bg-red-100'

  if (color === 'gray')
    return 'bg-gray-100'

  if (color === 'blue')
    return 'bg-blue-100'

  if (color === 'indigo')
    return 'bg-indigo-100'

  return 'bg-gray-100'
}
function getBadgeColor(color: string) {
  if (color === 'green')
    return 'text-green-700'

  if (color === 'gray')
    return 'text-gray-700'

  if (color === 'red')
    return 'text-red-700'

  if (color === 'gray')
    return 'text-gray-700'

  if (color === 'blue')
    return 'text-blue-700'

  if (color === 'indigo')
    return 'text-indigo-700'

  return 'text-gray-700'
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <nav class="py-6 shadow bg-gray-50">
      <div class="flex h-10 justify-between">
        <div class="flex px-2 lg:px-0">
          <div class="hidden lg:ml-6 lg:flex">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a
              href="#"
              class="inline-flex bg-white group items-center px-3 rounded-bl-lg border rounded-tl-lg pt-1 text-sm font-medium text-gray-900"
            >
              <svg
                class="w-5 h-5 text-gray-700 group-hover:text-gray-500 transition ease-in-out duration-150"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M15 19l-7-7 7-7"
              /></svg>
            </a>
            <a
              href="#"
              class="inline-flex bg-white group items-center px-3 rounded-tr-lg rounded-br-lg border pt-1 text-sm font-medium text-gray-900"
            >
              <svg
                class="w-5 h-5 text-gray-700 group-hover:text-gray-500 transition ease-in-out duration-150"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              /></svg>
            </a>
            <a
              href="#"
              class="inline-flex ml-8 group bg-white items-center px-3.5 rounded-bl-lg border rounded-tl-lg  pt-1 text-sm font-medium text-gray-900"
            >
              <svg
                class="w-5 h-5 text-gray-700 group-hover:text-gray-500 transition ease-in-out duration-150"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              /></svg>
            </a>
            <a
              href="#"
              class="inline-flex bg-white group items-center px-3 rounded-tr-lg rounded-br-lg border pt-1 text-sm font-medium text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-5 h-5 text-gray-700 group-hover:text-gray-500 transition ease-in-out duration-150"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>

            </a>
          </div>
        </div>

        <div class="flex items-center space-x-6">
          <button>
            <div class="h-5 w-5 border-gray-600 border-1.5 rounded-full" />
          </button>

          <button>
            <div class="h-5 w-5 border-indigo-600 border-1.5 rounded-full" />
          </button>

          <button>
            <div class="h-5 w-5 border-red-600 border-1.5 rounded-full" />
          </button>

          <button>
            <div class="h-5 w-5 border-green-600 border-1.5 rounded-full" />
          </button>

          <button>
            <div class="h-5 w-5 border-blue-600 border-1.5 rounded-full" />
          </button>
        </div>

        <div class="flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="w-full max-w-lg lg:max-w-xs">
            <label
              for="search"
              class="sr-only"
            >Search</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <!-- Heroicon name: mini/magnifying-glass -->
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                placeholder="Search"
                type="search"
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="border-b bg-white shadow">
      <h1 class="font-semibold px-4 py-8 text-gray-700">
        Debug Session 1
      </h1>
    </div>

    <div class="overflow-hidden bg-white shadow sm:rounded-bl-md sm:rounded-br-md ">
      <ul
        role="list"
        class="divide-y divide-gray-200"
      >
        <li
          v-for="(log, index) in sampleLogs"
          :key="index"
        >
          <a
            href="#"
            class="block hover:bg-gray-50"
          >
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="flex min-w-0 flex-1 items-center">
                <div class="min-w-0 flex-1 items-center px-4 md:grid md:grid-cols-2  md:gap-4">
                  <div class="flex">
                    <button v-if="log.expanded">
                      <svg
                        class="w-6 h-6 text-gray-600 mr-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      /></svg>
                    </button>

                    <button v-else>
                      <svg
                        class="mr-1.5 h-3.5 w-3.5"
                        :class="getCircleColor(log.color)"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle
                          cx="4"
                          cy="4"
                          r="3"
                        />
                      </svg>
                    </button>

                    <span
                      class="inline-flex items-center rounded-md px-2 py-0.5 text-sm font-medium"
                      :class="[getBadgeBg(log.color), getBadgeColor(log.color)]"
                    >
                      {{ log.time }}
                    </span>
                  </div>
                  <div class="hidden md:block">

                    <div
                      v-if="(isArray(log) || isNumber(log.content) || isCode(log))"
                    >
                      <highlightjs
                        v-if="isCode(log)"
                        autodetect
                        :code="log.content"
                      />

                      <highlightjs
                        v-else
                        autodetect
                        :code="stringifyContent(log.content)"
                      />
                    </div>

                    <div
                      v-else
                      class="text-indigo-800 font-semibold"
                    >

                      {{ log.content }}

                    </div>

                    <div
                      class="mt-2 flex items-center text-sm underline text-gray-400"
                    >
                      {{ log.file }}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

