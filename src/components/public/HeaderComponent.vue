<template>
  <header class="site-header header-transparent mo-left">
    <div class="sticky-header main-bar-wraper navbar-expand-lg">
      <div class="main-bar clearfix ">
        <div class="container-fluid clearfix">
          <!-- website logo -->
          <div class="logo-header mostion">
            <a class="header-logo1" href="index.html"><img src="/static/images/logo-black-1.png" alt=""></a>
            <a class="header-logo2" href="index.html"><img src="/static/images/logo-black-1.png" alt=""></a>
          </div>
          <div class="extra-nav">
            <div class="extra-cell">
              <a href="#" class="btn gradient openbtn"><span>Your Wedding Manager</span><i class="fa fa-bars"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mySidenav" class="sidenav right-nav">
      <a href="javascript:void(0)" class="closebtn menu-close"><i class="ti-close"></i></a>
      <ul class="">
        <li><a href="/"><i class="la la-home"></i>Home</a></li>
        <li><a href="/business"><i class="la la-user"></i>Business</a></li>
        <li><a href="/offers"><i class="la la-money"></i>Promotion</a></li>
        <li><a href="/venues"><i class="la la-check-square"></i>Wedding Venues</a></li>
        <li><a href="/listing_details"><i class="la la-file-text-o"></i>Listing Details</a></li>
        <li><a href="planner-shortlist.html"><i class="la la-user-plus"></i>Booked Suppliers</a></li>
        <li><a href="planner-advice.html"><i class="la la-lightbulb-o"></i>Advice</a></li>
        <li><a href="scrapbook.html"><i class="la la-laptop"></i>Scrapbook</a></li>
        <li><a href="settings.html"><i class="la la-cog"></i>Settings</a></li>
        <li><a href="index.html"><i class="la la-sign-out"></i>Log out</a></li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent'
}
</script>
