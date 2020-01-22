---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<!--TNEW content here-->

<!-- BEGIN INJECTED HEADER -->

  <div id="tn-whitelabel-container">


  <!-- END INJECTED HEADER -->



<nav class="tn-subnav-component">
          <div class="tn-login-link">
              <a href="https://my.fitzmuseum.cam.ac.uk/account/login?returnurl=%2fevents" class="tn-link">
                  <span class="tn-icon"></span>
                  <span class="tn-text">Login</span>
              </a>
          </div>

  <div class="tn-cart-link tn-active">
      <a href="https://my.fitzmuseum.cam.ac.uk/cart/details" class="tn-link">
          <span class="tn-text">View Cart</span>
          <span class="tn-icon"></span>
      </a>

      <span class="tn-timer" style="display:none;">
          <span class="tn-timer-description">
              Time remaining:
          </span>
          <span class="tn-count-down-timer" id="tn-count-down-timer" data-tn-milliseconds-remaining="0">
              00:00
          </span>
      </span>
  </div>


      <div class="tn-promo-box">
          <form id="tn-apply-promo">
              <input type="text" id="tn-subnav-promo-code" placeholder="Promo Code" class="tn-subnav-promo-code" alt="You can enter a promotion code here for additional discounts.  You may also enter a promotion code at login.  Logging in early will offer you the best prices.">
              <button type="submit" id="tn-subnav-promo-button" class="tn-subnav-promo-button">
                  submit
              </button>
          </form>
      </div>
  <div style="clear: both;"></div>
</nav>

<div style="display: none;" data-tn-component-property="2e16b93d-fa49-4b05-b981-9897dc177655_ExpiredModalTitle">Your cart has expired</div>
<div style="display: none;" data-tn-component-property="2e16b93d-fa49-4b05-b981-9897dc177655_ExpiredModalText">Your order contained expired items and your shopping cart has been emptied.</div>
<div style="display: none;" data-tn-component-property="2e16b93d-fa49-4b05-b981-9897dc177655_ExpiredModalButton">Close</div>
  <main class="tn-events-listing-page" data-tn-page-type="5ce35f65-3dbd-4cd8-af95-53a5b8fe6859">





<section class="tn-header-component">
      <h1 class="tn-heading" id="tn-page-heading">
          Calendar
      </h1>

  <div id="tn-error-message-template"></div>


<div id="tn-alert-message-template"></div>



      <div class="tn-heading-sub-text">
          View our upcoming events listed on the calendar below:
      </div>
</section>





<link href="https://production.tnew-assets.com/tnew/tnew-event-listing.0626d3c532f7bdce298e13dd35f9db7f.css" rel="stylesheet" type="text/css">





<section class="tn-event-listing__primary-views-container">
  <h2 class="sr-only">Change the way events are displayed</h2>
  <ul id="tn-event-listing-mode-tab-nav" class="tn-event-listing-mode-tab-nav__list" style="" role="tablist">
      <li id="tn-event-listing-mode-nav-calendar-view" class="tn-event-listing-mode-tab-nav__list-item active" data-tn-tab-content-id="tn-events-calendar-view" data-tn-tab-mode="calendar" aria-controls="tn-events-calendar-view" role="tab" aria-selected="true" tabindex="0">
          View as Calendar
      </li>
      <li id="tn-event-listing-mode-nav-list-view" class="tn-event-listing-mode-tab-nav__list-item" data-tn-tab-content-id="tn-events-list-view" data-tn-tab-mode="list" aria-controls="tn-events-list-view" role="tab" aria-selected="false" tabindex="-1">
          View as List
      </li>
  </ul>

  <div id="tn-events-calendar-view" class="tn-event-listing__primary-view tn-events-calendar-view" style="" aria-labelledby="tn-event-listing-mode-nav-calendar-view" role="tabpanel" aria-hidden="false">
      <h2 class="sr-only">Calendar View</h2>
      <h3 class="sr-only">Display calendar by:</h3>
      <ul id="tn-events-calendar-mode-tab-nav" class="tn-event-listing-mode-tab-nav__list tn-event-listing-mode-tab-nav__list--secondary" role="tablist">
          <li data-tn-tab-content-id="tn-events-calendar-view-day" data-tn-tab-mode="day" class="tn-event-listing-mode-tab-nav__list-item tn-event-listing-mode-tab-nav__list-item--secondary" aria-controls="tn-events-calendar-view-day" role="tab" aria-selected="false" tabindex="-1">Day</li>
          <li data-tn-tab-content-id="tn-events-calendar-view-week" data-tn-tab-mode="week" class="tn-event-listing-mode-tab-nav__list-item tn-event-listing-mode-tab-nav__list-item--secondary" aria-controls="tn-events-calendar-view-week" role="tab" aria-selected="false" tabindex="-1">Week</li>
          <li data-tn-tab-content-id="tn-events-calendar-view-month" data-tn-tab-mode="month" class="tn-event-listing-mode-tab-nav__list-item tn-event-listing-mode-tab-nav__list-item--secondary active" aria-controls="tn-events-calendar-view-month" role="tab" aria-selected="true" tabindex="0">Month</li>
      </ul>

      <div id="tn-events-calendar-view-day" class="tn-event-listing-view tn-events-calendar-view tn-events-calendar-view--day" style="display: none;" role="tabpanel" aria-hidden="true">
<div class="tn-event-listing-view__controls-container"><div class="tn-btn-datepicker tn-btn-datepicker--with-range-btns" style="display: block;">
    <p class="sr-only">Select Day</p>
    <div class="tn-btn-datepicker__btn-container">

    <button type="button" class="btn btn-default btn-lg tn-btn-datepicker__btn" aria-expanded="false">
      <span class="tn-btn-datepicker__date-display">January 22, 2020</span>
      <span class="tn-btn-datepicker__icon-container" aria-hidden="true">
        <span class="glyphicon glyphicon-calendar"></span>
      </span>
    </button>


      <button type="button" class="btn btn-lg btn-primary tn-btn-datepicker__btn-period-prev-next tn-btn-datepicker__btn-period-prev-next--btn-prev" disabled="disabled">
        <i class="glyphicon glyphicon-chevron-left" aria-hidden="true"></i>
        <span class="sr-only">Previous day</span>
      </button>

      <button type="button" class="btn btn-lg btn-primary tn-btn-datepicker__btn-period-prev-next tn-btn-datepicker__btn-period-prev-next--btn-next">
        <i class="glyphicon glyphicon-chevron-right" aria-hidden="true"></i>
        <span class="sr-only">Next day</span>
      </button>

    </div>
    <input type="text" id="tn-event-calendar-input-day" name="tn-event-calendar-input-day" class="tn-btn-datepicker__input sr-only" aria-hidden="true" tabindex="-1">
  </div></div>
<div class="tn-event-listing-view__results-container"><div class="tn-events-calendar__list-container"></div></div>

  <div class="tn-event-listing-busy-indicator">
    <div class="tn-event-listing-busy-indicator__content">Please wait while we retrieve your events.</div>
  </div>
</div>
      <div id="tn-events-calendar-view-week" class="tn-event-listing-view tn-events-calendar-view tn-events-calendar-view--week" style="display: none;" role="tabpanel" aria-hidden="true">
<div class="tn-event-listing-view__controls-container"><div class="tn-btn-datepicker tn-btn-datepicker--with-range-btns" style="display: block;">
    <p class="sr-only">Select Week</p>
    <div class="tn-btn-datepicker__btn-container">

    <button type="button" class="btn btn-default btn-lg tn-btn-datepicker__btn" aria-expanded="false">
      <span class="tn-btn-datepicker__date-display">Jan 19 – 25, 2020</span>
      <span class="tn-btn-datepicker__icon-container" aria-hidden="true">
        <span class="glyphicon glyphicon-calendar"></span>
      </span>
    </button>


      <button type="button" class="btn btn-lg btn-primary tn-btn-datepicker__btn-period-prev-next tn-btn-datepicker__btn-period-prev-next--btn-prev" disabled="disabled">
        <i class="glyphicon glyphicon-chevron-left" aria-hidden="true"></i>
        <span class="sr-only">Previous week</span>
      </button>

      <button type="button" class="btn btn-lg btn-primary tn-btn-datepicker__btn-period-prev-next tn-btn-datepicker__btn-period-prev-next--btn-next">
        <i class="glyphicon glyphicon-chevron-right" aria-hidden="true"></i>
        <span class="sr-only">Next week</span>
      </button>

    </div>
    <input type="text" id="tn-event-calendar-input-week" name="tn-event-calendar-input-week" class="tn-btn-datepicker__input sr-only" aria-hidden="true" tabindex="-1">
  </div></div>
<div class="tn-event-listing-view__results-container"><div class="tn-events-calendar__table-container"></div><div class="tn-events-calendar__list-container"></div></div>

  <div class="tn-event-listing-busy-indicator">
    <div class="tn-event-listing-busy-indicator__content">Please wait while we retrieve your events.</div>
  </div>
</div>
      <div id="tn-events-calendar-view-month" class="tn-event-listing-view tn-events-calendar-view tn-events-calendar-view--month" style="" role="tabpanel" aria-hidden="false">
<div class="tn-event-listing-view__controls-container"><div class="tn-btn-datepicker tn-btn-datepicker--with-range-btns" style="display: block;">
    <p class="sr-only">Select Month</p>
    <div class="tn-btn-datepicker__btn-container">

    <button type="button" class="btn btn-default btn-lg tn-btn-datepicker__btn" aria-expanded="false">
      <span class="tn-btn-datepicker__date-display">January 2020</span>
      <span class="tn-btn-datepicker__icon-container" aria-hidden="true">
        <span class="glyphicon glyphicon-calendar"></span>
      </span>
    </button>


      <button type="button" class="btn btn-lg btn-primary tn-btn-datepicker__btn-period-prev-next tn-btn-datepicker__btn-period-prev-next--btn-prev" disabled="disabled">
        <i class="glyphicon glyphicon-chevron-left" aria-hidden="true"></i>
        <span class="sr-only">Previous month</span>
      </button>

      <button type="button" class="btn btn-lg btn-primary tn-btn-datepicker__btn-period-prev-next tn-btn-datepicker__btn-period-prev-next--btn-next">
        <i class="glyphicon glyphicon-chevron-right" aria-hidden="true"></i>
        <span class="sr-only">Next month</span>
      </button>

    </div>
    <input type="text" id="tn-event-calendar-input-month" name="tn-event-calendar-input-month" class="tn-btn-datepicker__input sr-only" aria-hidden="true" tabindex="-1">
  </div></div>
<div class="tn-event-listing-view__results-container"><div class="tn-events-calendar__table-container">
  <h3 tabindex="0" class="tn-event-listing-view__results-heading">January 2020</h3>
  <div class="tn-event-listing-view__no-results-container">
    <div class="tn-event-listing-view__no-results-content">
      Your search did not return any results.
    </div>
  </div>
</div><div class="tn-events-calendar__list-container">
  <h3 tabindex="0" class="tn-event-listing-view__results-heading">January 2020</h3>
  <div class="tn-event-listing-view__no-results-container">
    <div class="tn-event-listing-view__no-results-content">
      Your search did not return any results.
    </div>
  </div>
</div></div>

  <div class="tn-event-listing-busy-indicator">
    <div class="tn-event-listing-busy-indicator__content">Please wait while we retrieve your events.</div>
  </div>
</div>
  </div>

  <div id="tn-events-list-view" class="tn-event-listing__primary-view tn-events-list-view" style="display: none;" aria-labelledby="tn-event-listing-mode-nav-list-view" role="tabpanel" aria-hidden="true">
  <div class="tn-event-listing-busy-indicator">
    <div class="tn-event-listing-busy-indicator__content">Please wait while we retrieve your events.</div>
  </div>

<div class="tn-event-listing-view__controls-container"><h2 class="sr-only">List View</h2>
  <div class="tn-events-list-view__controls">
      <h3 class="tn-event-listing__controls-heading">
          Filter by Date Range
      </h3>
      <div class="tn-events-list-view__date-range">
          <div class="tn-events-list-view__datepicker-container tn-events-list-view__datepicker-container--from"><div class="tn-btn-datepicker " style="">
    <p class="sr-only">Select start date</p>
    <div class="tn-btn-datepicker__btn-container">

    <button type="button" class="btn btn-default btn-lg tn-btn-datepicker__btn" aria-expanded="false">
      <span class="tn-btn-datepicker__date-display">January 22, 2020</span>
      <span class="tn-btn-datepicker__icon-container" aria-hidden="true">
        <span class="glyphicon glyphicon-calendar"></span>
      </span>
    </button>



    </div>
    <input type="text" id="tn-event-list-input-date-from" name="tn-event-list-input-date-from" class="tn-btn-datepicker__input sr-only" aria-hidden="true" tabindex="-1">
  </div></div>
          <div class="tn-events-list-view__datepicker-divider">
              <div class="tn-events-list-view__datepicker-divider-label">
                  to
              </div>
          </div>
          <div class="tn-events-list-view__datepicker-container tn-events-list-view__datepicker-container--to"><div class="tn-btn-datepicker " style="">
    <p class="sr-only">Select end date</p>
    <div class="tn-btn-datepicker__btn-container">

    <button type="button" class="btn btn-default btn-lg tn-btn-datepicker__btn" aria-expanded="false">
      <span class="tn-btn-datepicker__date-display">April 22, 2020</span>
      <span class="tn-btn-datepicker__icon-container" aria-hidden="true">
        <span class="glyphicon glyphicon-calendar"></span>
      </span>
    </button>



    </div>
    <input type="text" id="tn-event-list-input-date-to" name="tn-event-list-input-date-to" class="tn-btn-datepicker__input sr-only" aria-hidden="true" tabindex="-1">
  </div></div>
          <div class="tn-events-list-view__btn-reset-dates-container">
              <button class="tn-events-list-view__btn-reset-dates btn btn-default btn-sm" disabled="">
                  Reset Date Range
              </button>
          </div>
      </div>
  </div></div>
<div class="tn-event-listing-view__results-container"><h3 tabindex="0" class="tn-event-listing-view__results-heading">Jan 22 – Apr 22, 2020</h3></div>
</div>
</section>

<script type="text/html" id="tn-events-list-view-controls-template"><h2 class="sr-only">List View</h2>
  <div class="tn-events-list-view__controls">
      <h3 class="tn-event-listing__controls-heading">
          Filter by Date Range
      </h3>
      <div class="tn-events-list-view__date-range">
          <div class="tn-events-list-view__datepicker-container tn-events-list-view__datepicker-container--from"></div>
          <div class="tn-events-list-view__datepicker-divider">
              <div class="tn-events-list-view__datepicker-divider-label">
                  to
              </div>
          </div>
          <div class="tn-events-list-view__datepicker-container tn-events-list-view__datepicker-container--to"></div>
          <div class="tn-events-list-view__btn-reset-dates-container">
              <button class="tn-events-list-view__btn-reset-dates btn btn-default btn-sm" disabled>
                  Reset Date Range
              </button>
          </div>
      </div>
  </div>
</script>

<div style="display: none;" data-tn-component-property="a349395d-5724-4fba-8bc7-904f10f1e2ed_NoResultsMessage">Your search did not return any results.</div>
<div style="display: none;" data-tn-component-property="d6aea9cb-dd4e-473e-8bf7-59f66d231113_LoadingMessage">Please wait while we retrieve your events.</div>
