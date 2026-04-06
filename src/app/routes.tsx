import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { SplashScreen } from "./pages/mobile/SplashScreen";
import { LoginScreen } from "./pages/mobile/LoginScreen";
import { OtpScreen } from "./pages/mobile/OtpScreen";
import { Dashboard } from "./pages/mobile/Dashboard";
import { CropSelection } from "./pages/mobile/CropSelection";
import { PackageScreen } from "./pages/mobile/PackageScreen";
import { CreditApproval } from "./pages/mobile/CreditApproval";
import { OrderConfirmation } from "./pages/mobile/OrderConfirmation";
import { MyOrders } from "./pages/mobile/MyOrders";
import { RepaymentScreen } from "./pages/mobile/RepaymentScreen";
import { SuccessScreen } from "./pages/mobile/SuccessScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/mobile",
    Component: SplashScreen,
  },
  {
    path: "/mobile/login",
    Component: LoginScreen,
  },
  {
    path: "/mobile/otp",
    Component: OtpScreen,
  },
  {
    path: "/mobile/dashboard",
    Component: Dashboard,
  },
  {
    path: "/mobile/crop-selection",
    Component: CropSelection,
  },
  {
    path: "/mobile/package",
    Component: PackageScreen,
  },
  {
    path: "/mobile/credit-approval",
    Component: CreditApproval,
  },
  {
    path: "/mobile/order-confirmation",
    Component: OrderConfirmation,
  },
  {
    path: "/mobile/orders",
    Component: MyOrders,
  },
  {
    path: "/mobile/repayment",
    Component: RepaymentScreen,
  },
  {
    path: "/mobile/success",
    Component: SuccessScreen,
  },
]);
