import "./index.scss";
import { mountComponent } from "../Utils/mount";
import { CalendarWidgetMain } from "./Views/MainIndex";

mountComponent({
  dataName: "expapp-calendar-booking-form",
  formatData(data) {
    if (!data.calendarBookingFormShopUrl) {
      throw new Error("You must specify the [data-expapp-shop-url] attribute for this widget to load");
    }

    if (!data.calendarBookingFormBaseUrl) {
      throw new Error("You must specify the [data-expapp-shop-url] attribute for this widget to load");
    }

    if (!data.calendarBookingFormProductId) {
      throw new Error("You must specify a product id for this widget to work");
    }

    return { ...data, shopUrl: data.calendarBookingFormShopUrl, baseUrl: data.calendarBookingFormBaseUrl, shopifyProductId: parseInt(data.calendarBookingFormProductId) };
  },
  component: CalendarWidgetMain,
});