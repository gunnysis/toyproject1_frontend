<template>
  <div class="bg-gray-100">
    <section class="py-10 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <nav class="flex items-center justify-between mb-40">
          <img src="../assets/image/navbar-logo.png" alt="Logo">
          <button class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get my CV</button>
        </nav>
        <div class="text-center">
          <div class="flex justify-center mb-16">
            <img src="../assets/image/home-img.png" alt="Image">
          </div>
          <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Kate Wolff</h6>
          <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Senior Backend Developer</h1>
          <p class="font-normal text-gray-600 text-md md:text-xl mb-16">I have a passion for software. I enjoy creating tools that make life easier for people.</p>
          <a href="#" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Hire me</a>
        </div>
      </div>
    </section>
    <section class="py-10 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <i data-feather="activity"></i>
            </div>
            <h4 class="font-medium text-gray-700 text-lg mb-4">High experience</h4>
            <p class="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <i data-feather="codesandbox"></i>
            </div>
            <h4 class="font-medium text-gray-700 text-lg mb-4">Useful sandboxes</h4>
            <p class="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <i data-feather="coffee"></i>
            </div>
            <h4 class="font-medium text-gray-700 text-lg mb-4">Success side projects</h4>
            <p class="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- 다른 섹션들 생략 -->
    <footer class="py-10 md:py-16 lg::mb-52">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="text-center">
          <h1 class="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Testimonial</h1>
          <p class="font-normal text-gray-400 text-md md:text-lg mb-20">I’m not currently taking on new client work but feel free to contact me for any <br> other inquiries.</p>
          <div class="flex items-center justify-center space-x-8">
            <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <i data-feather="twitter" class="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"></i>
            </a>
            <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <i data-feather="dribbble" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
            </a>
            <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <i data-feather="facebook" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
            </a>
            <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <i data-feather="codepen" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
            </a>
            <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <i data-feather="at-sign" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
            </a>
            <a href="#" class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <i data-feather="instagram" class="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import feather from 'feather-icons'

export default {
  name: 'MainPage',
  mounted() {
    // DOM이 렌더링된 후 feather.replace()를 호출
    feather.replace();
  },
}
</script>
