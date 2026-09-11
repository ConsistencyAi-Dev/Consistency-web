import { httpClient } from "@/lib/httpClient";
import { siteConfig } from "@/config/site";
import { load } from "@cashfreepayments/cashfree-js";

export interface CreateOrderParams {
  cohortId: string;
  country: 'IN' | 'OTHER';
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  userId?: string;
}

export interface CreateOrderResponse {
  orderId: string;
  paymentSessionId: string;
  amount: number;
  originalAmount: number;
  currency: string;
  cohortTitle: string;
  cohortDuration: string;
  isSimulation?: boolean;
}

export interface VerifyOrderResponse {
  orderId: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  paymentDetails?: any;
}

let cashfreePromise: Promise<any> | null = null;

const getCashfreeInstance = async () => {
  if (!cashfreePromise) {
    const isProd = process.env.NEXT_PUBLIC_CASHFREE_ENV === "PRODUCTION";
    cashfreePromise = load({
      mode: isProd ? "production" : "sandbox",
    });
  }
  return cashfreePromise;
};

export const paymentService = {
  /**
   * Create Cashfree payment order on backend
   */
  async createOrder(params: CreateOrderParams): Promise<CreateOrderResponse> {
    const res = await httpClient<CreateOrderResponse>(siteConfig.endpoints.payments.createOrder, {
      method: "POST",
      body: JSON.stringify(params),
    });
    return res.data;
  },

  /**
   * Check / verify order payment status
   */
  async verifyOrder(orderId: string): Promise<VerifyOrderResponse> {
    const res = await httpClient<VerifyOrderResponse>(
      `${siteConfig.endpoints.payments.verifyOrder}/${orderId}`,
      { method: "GET" }
    );
    return res.data;
  },

  /**
   * Launch Cashfree checkout modal or redirect
   */
  async launchCheckout(
    paymentSessionId: string,
    options: {
      redirectTarget?: "_modal" | "_self" | "_blank";
      onSuccess?: () => void;
      onFailure?: (err: any) => void;
    } = {}
  ) {
    try {
      const cashfree = await getCashfreeInstance();
      if (!cashfree) {
        throw new Error("Cashfree SDK could not be loaded");
      }

      const checkoutOptions = {
        paymentSessionId,
        redirectTarget: options.redirectTarget || "_modal",
      };

      return cashfree.checkout(checkoutOptions);
    } catch (err) {
      console.error("Cashfree checkout error:", err);
      throw err;
    }
  },
};
